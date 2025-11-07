// google/ai_studio/types.ts
// The Language of Thought. Defines the structure of a conversation with the AI.

export type ModelType = 'gemini-2.5-flash' | 'imagen-4.0-generate-001' | 'veo-2.0-generate-001';

export interface PromptRequest {
    prompt: string;
    model: ModelType;
    parameters?: Record<string, any>;
}

export interface PromptResponse {
    text?: string;
    imageUrl?: string;
    error?: string;
}
