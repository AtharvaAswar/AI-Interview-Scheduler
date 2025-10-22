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