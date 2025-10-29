import { BriefcaseBusiness, Calendar, Code2, LayoutDashboard, List, Puzzle, Settings, User2, Users2, WalletCards } from "lucide-react";

export const SideBarOptions = [
    {
        name: "Dashboard",
        icon: LayoutDashboard,
        path: '/dashboard'
    },
    {
        name: "Schendule Interview",
        icon: Calendar,
        path: '/schedule-interview'
    },
    {
        name: "All Interviews",
        icon: List,
        path: '/all-interviews'
    },
    {
        name: "Billing",
        icon: WalletCards,
        path: '/billing'
    },
    {
        name: "Settings",
        icon: Settings,
        path: '/settings'
    }
];

export const InterviewTypes = [
    {
        title: "Technical",
        icon: Code2,
    },
    {
        title: "Behavioral",
        icon: User2,
    },
    {
        title: "Experience",
        icon: BriefcaseBusiness,
    },
    {
        title: "Problem Solving",
        icon: Puzzle,
    },
    {
        title: "Leadership",
        icon: Users2
    }
];

export const Questions_Prompt = `You are an expert technical interviewer.
Based on the following inputs, generate a well-structured list of high-quality interview questions:
Job Title: {{jobTitle}}
Job Description:{{jobDescription}}
Interview Duration: {{duration}}
Interview Type: {{type}}

Your task:
Analyze the job description to identify key responsibilities, required skills, and expected experience.
Generate a list of interview questions depends on interview duration
Adjust the number and depth of questions to match the interview duration.
Ensure the questions match the tone and structure of a real-life {{type)) interview.

Format your response in JSON format with array list of questions.
format: interview Questions=[
{ question:",
    type: Technical/Behavioral/Experince/Problem Solving/Leaseship' ).{
}]
    
The goal is to create a structured, relevant, and time-optimized interview plan for a {{job Title}} role.`  