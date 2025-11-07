// components/views/platform/AIAdStudioView.tsx
import React, { useState, useEffect } from 'react';
import { GoogleGenAI } from "@google/genai";
import Card from '../../Card';

const pollingMessages = [ "Initializing Veo 2.0 model...", "Analyzing prompt semantics...", "Generating initial keyframes...", "Rendering motion vectors...", "Upscaling to high resolution...", "Adding audio layer...", "Finalizing video file..." ];

const AIAdStudioView: React.FC = () => {
    type GenerationState = 'idle' | 'generating' | 'polling' | 'done' | 'error';

    const [prompt, setPrompt] = useState('A neon hologram of a cat driving a futuristic car at top speed through a cyberpunk city.');
    const [generationState, setGenerationState] = useState<GenerationState>('idle');
    const [videoUrl, setVideoUrl] = useState<string | null>(null);
    const [error, setError] = useState('');
    const [pollingMessageIndex, setPollingMessageIndex] = useState(0);
    // FIX: Changed type from NodeJS.Timeout to number, as setInterval in the browser returns a number.
    const [pollingIntervalId, setPollingIntervalId] = useState<number | null>(null);

    useEffect(() => {
        // Cleanup interval on component unmount or when polling stops
        return () => {
            if (pollingIntervalId) {
                clearInterval(pollingIntervalId);
            }
        };
    }, [pollingIntervalId]);
    
    useEffect(() => { 
        // Cleanup blob URL on component unmount or when videoUrl changes
        return () => { 
            if (videoUrl && videoUrl.startsWith('blob:')) {
                URL.revokeObjectURL(videoUrl);
            }
        }; 
    }, [videoUrl]);

    const handleGenerate = async () => {
        setGenerationState('generating');
        setError('');
        if (videoUrl && videoUrl.startsWith('blob:')) {
            URL.revokeObjectURL(videoUrl);
        }
        setVideoUrl(null);
        setPollingMessageIndex(0);
        if (pollingIntervalId) {
            clearInterval(pollingIntervalId);
        }

        try {
            const ai = new GoogleGenAI({ apiKey: process.env.API_KEY as string });
            
            let operation = await ai.models.generateVideos({
                model: 'veo-2.0-generate-001',
                prompt: prompt,
                config: {
                    numberOfVideos: 1,
                },
            });

            setGenerationState('polling');
            
            // FIX: window.setInterval returns a number in browsers
            const intervalId: number = window.setInterval(() => {
                setPollingMessageIndex(prev => (prev + 1) % pollingMessages.length);
            }, 2500);
            setPollingIntervalId(intervalId);

            while (!operation.done) {
                await new Promise(resolve => setTimeout(resolve, 10000)); // Poll every 10 seconds
                operation = await ai.operations.getVideosOperation({ operation: operation });
            }
            
            clearInterval(intervalId);
            setPollingIntervalId(null);

            if (operation.error) {
                 throw new Error(String(operation.error.message) || 'Video generation failed after polling.');
            }

            const downloadLink = operation.response?.generatedVideos?.[0]?.video?.uri;

            if (downloadLink) {
                setPollingMessageIndex(pollingMessages.length - 1); // "Finalizing video file..."
                const videoResponse = await fetch(`${downloadLink}&key=${process.env.API_KEY as string}`);
                if (!videoResponse.ok) {
                    throw new Error(`Failed to download the generated video. Status: ${videoResponse.statusText}`);
                }
                const videoBlob = await videoResponse.blob();
                const objectURL = URL.createObjectURL(videoBlob);
                setVideoUrl(objectURL);
                setGenerationState('done');
            } else {
                throw new Error('Video generation completed, but no download link was found in the response.');
            }

        } catch (err: any) {
            console.error("Video generation failed:", err);
            // FIX: The type of `err` in a catch block can be `any` or `unknown`. 
            // To safely set an error message string, the caught error is explicitly 
            // converted to a string to prevent potential runtime errors if `err.message` is not a string.
            setError(String(err?.message || 'An error occurred during video generation.'));
            setGenerationState('error');
            if (pollingIntervalId) {
                clearInterval(pollingIntervalId);
                setPollingIntervalId(null);
            }
        }
    };
    
    return (
        <div className="space-y-6">
            <h2 className="text-3xl font-bold text-white tracking-wider">AI Ad Studio</h2>
            <Card title="Generate a Custom Video Ad with Veo 2.0">
                <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
                    <div className="lg:col-span-1 space-y-4">
                        <textarea value={prompt} onChange={e => setPrompt(e.target.value)} placeholder="Describe your ad..." className="w-full h-32 bg-gray-700/50 border border-gray-600 rounded-lg p-2 text-white" />
                        <button onClick={handleGenerate} disabled={generationState === 'generating' || generationState === 'polling'} className="w-full py-2 bg-cyan-600 hover:bg-cyan-700 text-white rounded-lg disabled:opacity-50">
                            {generationState === 'generating' || generationState === 'polling' ? 'Generating...' : 'Generate Ad'}
                        </button>
                    </div>
                    <div className="lg:col-span-2 aspect-video bg-gray-900/50 rounded-lg flex items-center justify-center border border-gray-700">
                        {generationState === 'done' && videoUrl ? (
                            <video src={videoUrl} controls autoPlay muted loop className="w-full h-full rounded-lg" />
                        ) : generationState === 'generating' || generationState === 'polling' ? (
                            <div className="text-center">
                                <div className="relative w-16 h-16 mx-auto">
                                    <div className="absolute inset-0 border-4 border-cyan-500/30 rounded-full"></div>
                                    <div className="absolute inset-2 border-4 border-t-cyan-500 border-transparent rounded-full animate-spin"></div>
                                </div>
                                <p className="text-white mt-4">{pollingMessages[pollingMessageIndex]}</p>
                            </div>
                        ) : error ? (
                             <p className="text-red-400 p-4 text-center">{error}</p>
                        ) : (
                             <p className="text-gray-500">Your generated video will appear here.</p>
                        )}
                    </div>
                </div>
            </Card>
        </div>
    );
};

export default AIAdStudioView;