import { Input } from '@/components/ui/input'
import { Textarea } from '@/components/ui/textarea'
import { Button } from '@/components/ui/button'
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { InterviewTypes } from '@/services/Constants'
import { ArrowRight } from 'lucide-react'
import React, { useEffect, useState } from 'react'


function FormContainer({ onHandleInputChange }) {

    const [InterviewType, setInterviewType] = useState([]);

    useEffect(() => {
        if (InterviewType) {
            onHandleInputChange('type', InterviewType);
        }
    }, [InterviewType])

    const AddInterviewType = (type) => {
        const data = InterviewType.includes(type);
        if (data) {
            const result = InterviewType.filter(item => item != type);
            setInterviewType(result);
        } else {
            setInterviewType(prev => [...prev, type]);
        }
    }

    return (
        <div className='p-5 bg-white rounded-xl'>
            <div>
                <h2 className='text-sm font-medium'>Job Position</h2>
                <Input placeholder='e.g. Software Engineer' className='mt-2' onChange={(event) => onHandleInputChange('JobPosition', event.target.value)} />
            </div>

            <div className='mt-5'>
                <h2 className='text-sm font-medium'>Job Description</h2>
                <Textarea placeholder='Describe the job position...' className='mt-2 h-[200px]' onChange={(event) => onHandleInputChange('JobDescription', event.target.value)} />
            </div>

            <div className='mt-5'>
                <h2 className='text-sm font-medium'>Interview Duration</h2>
                <Select onValueChange={(value) => onHandleInputChange('Duration', value)}>
                    <SelectTrigger className="w-full mt-2">
                        <SelectValue placeholder="Duration" />
                    </SelectTrigger>
                    <SelectContent>
                        <SelectItem value="15 Min">15 Min</SelectItem>
                        <SelectItem value="30 Min">30 Min</SelectItem>
                        <SelectItem value="45 Min">45 Min</SelectItem>
                        <SelectItem value="60 Min">60 Min</SelectItem>
                    </SelectContent>
                </Select>
            </div>

            <div className='mt-5'>
                <h2 className='text-sm font-medium'>Interview Type</h2>
                <div className='flex flex-wrap gap-3 mt-2'>
                    {InterviewTypes.map((type, index) => (
                        <div key={index} className={`flex gap-2 p-1 px-4 items-center cursor-pointer hover:bg-secondary
                             bg-white border border-gray-300 rounded-2xl ${InterviewType.includes(type.title) &&
                            'bg-blue-200 text-primary border-primary'}`}
                            onClick={() => AddInterviewType(type.title)}>
                            <type.icon className='h-4 w-4' />
                            <span>{type.title}</span>
                        </div>
                    ))}
                </div>
            </div>
            <div className='mt-5 flex justify-end'>
                <Button className='cursor-pointer'>Generate Questions <ArrowRight /></Button>
            </div>
        </div>
    )
}

export default FormContainer