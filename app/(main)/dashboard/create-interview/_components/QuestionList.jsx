import { Button } from '@/components/ui/button';
import axios from 'axios';
import { Loader } from 'lucide-react';
import React, { useEffect, useState } from 'react'
import { toast } from 'sonner';
import QuestionContainer from './QuestionContainer';
import { supabase } from '@/services/supabaseClient';
import { UserContext } from '@/app/provider';
import { v4 as uuidv4 } from 'uuid';

function QuestionList({ formdata, onCreateLink }) {

    const [loading, setLoading] = useState(true);
    const [saveLoading, setSaveLoading] = useState(false);
    const [questions, setQuestions] = useState([]);
    const { user } = UserContext();

    useEffect(() => {
        if (formdata) {
            generateQuestions();
        }
    }, [formdata])

    const generateQuestions = async () => {
        setLoading(true);

        try {
            const result = await axios.post('/api/ai-model', {
                jobPosition: formdata.JobPosition,
                jobDescription: formdata.JobDescription,
                duration: formdata.Duration,
                type: formdata.type
            });

            const content = result.data.content;
            const Final_Content = content.replace(/```json\s*/i, '')  // remove starting ```json (case-insensitive)
                .replace(/```$/, '')         // remove trailing ```
                .trim();

            setQuestions(JSON.parse(Final_Content)?.interviewQuestions || []);
            setLoading(false);
        } catch (e) {
            toast.error("Server Error. Please try again later!");
            setLoading(false);
            console.log(e);
        }
    }

    const onFinish = async () => {
        setSaveLoading(true);
        const interview_id = uuidv4();
        const { data, error } = await supabase
            .from('interviews')
            .insert([
                {
                    jobDescription: formdata.JobDescription,
                    jobPosition: formdata.JobPosition,
                    duration: formdata.Duration,
                    type: formdata.type,
                    questionList: questions,
                    userEmail: user?.email,
                    interview_id: interview_id
                },
            ])
            .select()
        setSaveLoading(false);

        onCreateLink(interview_id);
    }

    return (
        <div>
            {loading &&
                <div className='p-5 bg-blue-50 rounded-xl border border-primary flex items-center gap-5'>
                    <Loader className='animate-spin' />
                    <div>
                        <h2 className='font-bold'>Generating Interview Questions...</h2>
                        <p className='text-primary'>Our AI is crafting personalized questions</p>
                    </div>

                </div>
            }

            {questions.length > 0 &&
                <div>
                    <QuestionContainer questions={questions} />
                </div>
            }

            <div className='flex justify-end mt-5'>
                <Button onClick={() => onFinish()} disabled={loading || saveLoading}>
                    {saveLoading && <Loader className='animate-spin mr-2' />}
                    Finsih
                </Button>
            </div>
        </div>
    )
}

export default QuestionList