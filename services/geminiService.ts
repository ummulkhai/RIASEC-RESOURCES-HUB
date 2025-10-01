
import { GoogleGenAI, Type } from "@google/genai";
import type { CareerSuggestion } from '../types';

if (!process.env.API_KEY) {
  throw new Error("API_KEY environment variable not set");
}

const ai = new GoogleGenAI({ apiKey: process.env.API_KEY });

const careerSchema = {
  type: Type.ARRAY,
  items: {
    type: Type.OBJECT,
    properties: {
      career: {
        type: Type.STRING,
        description: "The name of the career path.",
      },
      description: {
        type: Type.STRING,
        description: "A concise one-sentence description of the career.",
      },
      skills: {
        type: Type.ARRAY,
        items: {
          type: Type.STRING,
        },
        description: "A list of 3-5 key skills required for this career.",
      },
    },
    required: ["career", "description", "skills"],
  },
};

export const getCareerSuggestions = async (riasecCodes: string[]): Promise<CareerSuggestion[]> => {
  try {
    const prompt = `Based on the top RIASEC personality types: ${riasecCodes.join(", ")}. Generate a list of 8 diverse career paths suitable for a secondary school student to explore. For each career, provide a concise one-sentence description and list 3-5 key skills required.`;
    
    const response = await ai.models.generateContent({
      model: "gemini-2.5-flash",
      contents: prompt,
      config: {
        responseMimeType: "application/json",
        responseSchema: careerSchema,
      },
    });
    
    const jsonText = response.text.trim();
    const suggestions: CareerSuggestion[] = JSON.parse(jsonText);
    return suggestions;
  } catch (error) {
    console.error("Error fetching career suggestions from Gemini API:", error);
    // Return an empty array or throw the error, depending on desired error handling
    return [];
  }
};
