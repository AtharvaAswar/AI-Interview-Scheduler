import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input'
import { ArrowLeft, Camera, Clock, Copy, List, Mail, MessageCircleMore, Plus } from 'lucide-react';
import Image from 'next/image'
import Link from 'next/link';
import React from 'react'
import { toast } from 'sonner';

function InterviewLink({ formdata, interviewId }) {

    const url = process.env.NEXT_PUBLIC_HOST_URL + '/' + interviewId;

    const getInterviewURL = () => {
        return url;
    }

    const copyLink = async () => {
        await navigator.clipboard.writeText(url);
        toast.success("Link Copied");
    }

    return (
        <div className='flex flex-col justify-center items-center mt-10'>
            <Image src={'/check.png'} alt='check' width={200} height={200} className='w-[50px] h-[50px]' />
            <h2 className='font-bold text-lg mt-4'>Your AI Interview is ready..!</h2>
            <p className='mt-3'>Share this link with you candidates to start the interview process</p>

            <div className='w-full p-7 mt-6 rounded-lg bg-white'>

                <div className='flex justify-between items-center'>
                    <h2 className='font-bold'>Interview Link</h2>
                    <h2 className='p-1 px-2 text-primary bg-blue-50 rounded'>Valid for 30 Days</h2>
                </div>

                <div className='mt-3 flex gap-3 items-center'>
                    <Input defaultValue={getInterviewURL()} disabled={true} />
                    <Button onClick={() => copyLink()}> <Copy className='mr-2' /> Copy Link</Button>
                </div>

                <hr className='my-7' />

                <div className='flex gap-5'>
                    <h2 className='text-sm text-gray-500 flex gap-2 items-center'> <Clock className='h-4 w-4' /> {formdata?.Duration}</h2>
                    <h2 className='text-sm text-gray-500 flex gap-2 items-center'> <List className='h-4 w-4' /> 10 Questions </h2>
                </div>
            </div>

            <div className='mt-7 bg-white p-7 rounded-lg w-full'>
                <h2 className='font-bold'>Share Via</h2>
                <div className='flex mt-2 gap-7'>
                    <Button variant={'outline'} className=''> <Mail /> Email </Button>
                    <Button variant={'outline'} className=''> <Camera /> Slack </Button>
                    <Button variant={'outline'} className=''> <MessageCircleMore /> WhatsApp </Button>
                </div>
            </div>

            <div className='flex justify-between w-full gap-5 mt-6'>
                <Link href={'/dashboard'}>
                    <Button variant={'outline'} > <ArrowLeft /> Back </Button>
                </Link>
                <Link href={'/create-interview'}>
                    <Button > <Plus /> Create new Interview </Button>
                </Link>
            </div>
        </div>
    )
}

export default InterviewLink