// google/ai_studio/services/GeminiService.ts
// The Voice of the Oracle. The actual incantations used to speak to the great mind.

import { GoogleGenAI } from "@google/genai";

// Ensure API_KEY is handled securely in a real app, never hardcoded.
const apiKey = process.env.API_KEY;
if (!apiKey) {
    throw new Error("API_KEY environment variable not set");
}

const ai = new GoogleGenAI({ apiKey });

export const GeminiService = {
    generateText: async (prompt: string): Promise<string> => {
        try {
            const response = await ai.models.generateContent({
                model: 'gemini-2.5-flash',
                contents: prompt,
            });
            return response.text;
        } catch (error) {
            console.error("Error generating text:", error);
            return "An error occurred while communicating with the AI.";
        }
    },
};
