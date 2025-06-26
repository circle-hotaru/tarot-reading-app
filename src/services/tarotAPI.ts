const defaultAPI = 'https://api.openai.com'
const proxyAPI = process.env.REACT_APP_CHAT_API_PROXY
const apiUrl = proxyAPI ?? defaultAPI

export interface TarotReading {
  question: string
  overallReading: string
}

export const requestTarotReading = async (
  question: string,
  cards: Array<{ name: string; position?: string }>
): Promise<TarotReading> => {
  const messages = [
    {
      role: 'system',
      content:
        "You are a professional tarot reader. Provide insightful and meaningful interpretations for tarot card readings. Focus on guidance, self-reflection, and positive outcomes. IMPORTANT: Always respond in the same language as the user's question.",
    },
    {
      role: 'user',
      content: `Please provide a tarot reading for the following question: "${question}"

The cards drawn are:
${cards
  .map(
    (card, index) =>
      `${index + 1}. ${card.name} (Position: ${
        card.position || 'Past/Present/Future'
      })`
  )
  .join('\n')}

Please provide a comprehensive tarot reading that combines all three cards and their positions to give insightful guidance related to the question. Focus on practical advice and positive outcomes.

IMPORTANT: Respond in the same language as the question above. If the question is in Chinese, respond in Chinese. If the question is in English, respond in English.

Format your response as JSON with this structure:
{
  "question": "${question}",
  "overallReading": "comprehensive reading that incorporates all three cards and their positions, providing meaningful guidance and insights"
}`,
    },
  ]

  const requestOptions = {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      Authorization: `Bearer ${process.env.REACT_APP_CHAT_API_KEY}`,
    },
    body: JSON.stringify({
      model: 'gpt-4.1-mini',
      messages: messages,
    }),
  }

  try {
    const response = await fetch(
      `${apiUrl}/v1/chat/completions`,
      requestOptions
    )
    if (!response.ok) {
      throw new Error(
        `API request failed: ${response.status} ${response.statusText}`
      )
    }

    const data = await response.json()
    const content = data.choices[0].message.content

    // Clean the content to remove markdown code blocks
    const cleanedContent = content
      .replace(/```json\s*/g, '')
      .replace(/```\s*$/g, '')
      .trim()

    // Parse the JSON response
    const reading = JSON.parse(cleanedContent) as TarotReading
    return reading
  } catch (error) {
    console.error('Error getting tarot reading:', error)
    throw new Error('Failed to get tarot reading')
  }
}
