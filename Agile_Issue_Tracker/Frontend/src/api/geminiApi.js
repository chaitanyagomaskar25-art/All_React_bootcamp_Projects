import axios from "axios";

export const askGemini = async (message) => {
  try {
    const prompt = `
You are an AI assistant for an Agile Issue Tracker application.

Answer the user's question in a clear and structured way.

Rules:
- Keep answers short and simple.
- Put each point on a new line.
- Do not use markdown symbols like *, #, -, >.
- Do not add unnecessary explanations.
- Give maximum 5 points.
- Use simple language.

User question:
${message}
`;

    const response = await axios.post(
      `https://generativelanguage.googleapis.com/v1beta/models/gemini-2.5-flash:generateContent?key=${import.meta.env.VITE_GEMINI_API_KEY}`,
      {
        contents: [
          {
            parts: [
              {
                text: prompt,
              },
            ],
          },
        ],
      }
    );

    return response.data.candidates[0].content.parts[0].text;
  } catch (error) {
    console.log(error.response?.data);
    throw error;
  }
};