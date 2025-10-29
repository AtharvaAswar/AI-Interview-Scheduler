import { Questions_Prompt } from "@/services/Constants";
import { NextResponse } from "next/server";
import { OpenAI } from "openai";

export async function POST(req) {
    console.log("API Route Hit");
    const google_Models = "openai/gpt-oss-20b:free";
    const openai_Models = "openai/gpt-oss-20b:free";
    try {
        const { jobPosition, jobDescription, duration, type } = await req.json();

        const FINAL_PROMPT = Questions_Prompt
            .replace("{{jobTitle}}", jobPosition)
            .replace("{{jobDescription}}", jobDescription)
            .replace("{{duration}}", duration)
            .replace("{{type}}", type);

        const openai = new OpenAI({
            baseURL: "https://openrouter.ai/api/v1",
            apiKey: process.env.OPENROUTER_API_KEY
        });

        const completion = await openai.chat.completions.create({
            model: google_Models,
            messages: [
                { role: "user", content: FINAL_PROMPT }
            ],
        });
        console.log("Completion:", completion.choices[0].message);
        return NextResponse.json(completion.choices[0].message);

    } catch (e) {

        console.log(e);
        return NextResponse.json(e);

    }
}