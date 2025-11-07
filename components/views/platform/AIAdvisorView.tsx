// components/views/platform/AIAdvisorView.tsx
import React, { useState, useEffect, useRef, useContext } from 'react';
import { View } from '../../../types';
import Card from '../../Card';
import { GoogleGenAI, Chat } from "@google/genai";
import { DataContext } from '../../../context/DataContext';

type Message = {
    role: 'user' | 'model';
    parts: { text: string }[];
};

const examplePrompts = {
    [View.Dashboard]: ["Summarize my financial health.", "Are there any anomalies I should be aware of?", "Project my balance for the next 6 months."],
    [View.Transactions]: ["Find all my transactions over $100.", "What was my biggest expense last month?", "Categorize my recent spending."],
    [View.Budgets]: ["How am I doing on my budgets?", "Suggest a new budget for 'Entertainment'.", "Where can I cut back on spending?"],
    [View.Investments]: ["What's the performance of my stock portfolio?", "Explain ESG investing to me.", "Simulate my portfolio growth with an extra $200/month."],
    DEFAULT: ["What's my total balance?", "Help me create a savings goal.", "Explain how my credit score is calculated."]
};

const AIAdvisorView: React.FC<{ previousView: View | null }> = ({ previousView }) => {
    const chatRef = useRef<Chat | null>(null);
    const [messages, setMessages] = useState<Message[]>([]);
    const [input, setInput] = useState('');
    const [isLoading, setIsLoading] = useState(false);
    const messagesEndRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        if (!chatRef.current) {
            const ai = new GoogleGenAI({ apiKey: process.env.API_KEY as string });
            chatRef.current = ai.chats.create({
                model: 'gemini-2.5-flash',
                config: {
                    systemInstruction: "You are Quantum, an advanced AI financial advisor for Demo Bank. Your persona is helpful, professional, and slightly futuristic. Be concise. You have access to tools to get data or perform actions. Always inform the user when you are using a tool."
                }
            });
        }
    }, []);

    useEffect(() => {
        messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
    }, [messages]);

    const handleSendMessage = async (messageText: string) => {
        if (!messageText.trim() || !chatRef.current) return;

        setIsLoading(true);
        const userMessage: Message = { role: 'user', parts: [{ text: messageText }] };
        setMessages(prev => [...prev, userMessage]);
        setInput('');

        try {
            const result = await chatRef.current.sendMessage({ message: messageText });
            const modelMessage: Message = { role: 'model', parts: [{ text: result.text }] };
            setMessages(prev => [...prev, modelMessage]);
        } catch (error) {
            console.error("AI Advisor Error:", error);
            const errorMessage: Message = { role: 'model', parts: [{ text: "I apologize, but I've encountered a system error. Please try your request again." }] };
            setMessages(prev => [...prev, errorMessage]);
        } finally {
            setIsLoading(false);
        }
    };

    const prompts = examplePrompts[previousView || 'DEFAULT'] || examplePrompts.DEFAULT;

    return (
        <div className="h-full flex flex-col">
            <h2 className="text-3xl font-bold text-white tracking-wider mb-6">AI Advisor (Quantum)</h2>
            <Card className="flex-grow flex flex-col" padding="none">
                <div className="flex-grow p-6 space-y-4 overflow-y-auto">
                    {messages.map((msg, index) => (
                        <div key={index} className={`flex ${msg.role === 'user' ? 'justify-end' : 'justify-start'}`}>
                            <div className={`max-w-lg p-3 rounded-lg shadow-md ${msg.role === 'user' ? 'bg-cyan-600 text-white' : 'bg-gray-700 text-gray-200'}`}>
                                {msg.parts[0].text}
                            </div>
                        </div>
                    ))}
                    <div ref={messagesEndRef} />
                </div>

                {messages.length === 0 && (
                    <div className="text-center p-6 text-gray-400 border-t border-gray-700/60">
                        <p className="mb-4">As your financial co-pilot, I can answer questions or perform tasks. Since you just came from the <strong className="text-cyan-300">{previousView || 'Dashboard'}</strong>, you could ask:</p>
                        <div className="grid grid-cols-1 md:grid-cols-3 gap-2">
                            {prompts.map(p => (
                                <button
                                    key={p}
                                    onClick={() => handleSendMessage(p)}
                                    className="p-3 bg-gray-700/50 hover:bg-gray-700 rounded-lg text-sm text-cyan-200 transition-colors text-left"
                                >
                                    "{p}"
                                </button>
                            ))}
                        </div>
                    </div>
                )}

                <div className="p-4 border-t border-gray-700/60 bg-gray-800/50 rounded-b-xl">
                    <form onSubmit={(e) => { e.preventDefault(); handleSendMessage(input); }} className="flex items-center gap-2">
                        <input
                            type="text"
                            value={input}
                            onChange={(e) => setInput(e.target.value)}
                            placeholder="Ask Quantum anything..."
                            className="flex-grow bg-gray-700/50 border border-gray-600 rounded-lg px-4 py-2 text-white focus:outline-none focus:ring-2 focus:ring-cyan-500"
                            disabled={isLoading}
                            aria-label="Chat input for AI Advisor"
                        />
                        <button
                            type="submit"
                            className="px-4 py-2 bg-cyan-600 hover:bg-cyan-700 text-white font-semibold rounded-lg disabled:opacity-50 flex items-center justify-center w-24"
                            disabled={isLoading || !input.trim()}
                            aria-label="Send message"
                        >
                            {isLoading ? (
                                <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
                            ) : (
                                'Send'
                            )}
                        </button>
                    </form>
                </div>
            </Card>
        </div>
    );
};

export default AIAdvisorView;