import { GoogleGenAI } from "@google/genai";

const ai = new GoogleGenAI({ apiKey: process.env.API_KEY });

export const sendMessageToGemini = async (
  message: string,
  history: { role: 'user' | 'model'; parts: { text: string }[] }[]
): Promise<string> => {
  try {
    const chat = ai.chats.create({
      model: 'gemini-2.5-flash',
      config: {
        systemInstruction: `You are 'SiuneX AI', a premium virtual consultant for the company SiuneX. 
        SiuneX is an integrated solutions company founded by Joseph G. Dukuly. 
        
        Our brand is elegant, modern, and high-end. Use a professional, sophisticated tone.
        
        We specialize in:
        1. General Construction Project Management (Commercial & Residential).
        2. Interior & Exterior Design (Luxury modern aesthetics).
        3. Software & IT Services (Custom development, Enterprise solutions).
        4. Renewable Energy Solutions (Solar, Wind, Sustainability).
        5. Electrical Equipment (Supply, Installation, Industrial).

        Your goal is to politely answer questions about our services. 
        If a user seems interested in a project, suggest they contact us for a consultation.
        Keep responses concise (under 80 words) and refined.`,
      },
      history: history.map(h => ({
        role: h.role,
        parts: h.parts
      }))
    });

    const result = await chat.sendMessage({ message });
    return result.text || "I have received your query but cannot respond at this moment.";
    
  } catch (error) {
    console.error("Gemini Error:", error);
    return "I apologize, but I am currently unable to connect to the server. Please try again later.";
  }
};