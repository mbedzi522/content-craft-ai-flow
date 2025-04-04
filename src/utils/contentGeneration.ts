
import { toast } from "@/hooks/use-toast";

const GEMINI_API_KEY = "AIzaSyCjK1kHLuo-XolKxeErHnnfsPFultB5ExY";
const BRAVE_SEARCH_API_KEY = "BSAM9sw4QvXThEnjc_40xHd8f8YJ_TC";

// Text generation using Gemini API
export async function generateText(prompt: string): Promise<string> {
  try {
    const response = await fetch("https://generativelanguage.googleapis.com/v1beta/models/gemini-1.5-pro:generateContent?key=" + GEMINI_API_KEY, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        contents: [
          {
            parts: [
              { text: prompt }
            ]
          }
        ],
        generationConfig: {
          temperature: 1,
          topP: 0.95,
          topK: 40,
          maxOutputTokens: 8192,
        }
      })
    });

    if (!response.ok) {
      throw new Error(`API error: ${response.status}`);
    }

    const data = await response.json();
    return data.candidates[0].content.parts[0].text;
  } catch (error) {
    console.error("Error generating text:", error);
    toast({
      title: "Error",
      description: "Failed to generate text content. Please try again.",
      variant: "destructive",
    });
    return "";
  }
}

// Image generation using Gemini API
export async function generateImage(prompt: string): Promise<string> {
  try {
    // Updated API endpoint and request parameters based on Gemini docs
    const response = await fetch("https://generativelanguage.googleapis.com/v1beta/models/gemini-2.0-flash-exp-image-generation:generateContent?key=" + GEMINI_API_KEY, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        contents: [
          {
            parts: [
              { text: prompt }
            ]
          }
        ],
        generationConfig: {
          temperature: 0.9,
          maxOutputTokens: 2048,
          responseMimeType: "image/png"
        }
      })
    });

    if (!response.ok) {
      const errorData = await response.json();
      console.error("API error details:", errorData);
      throw new Error(`API error: ${response.status}`);
    }

    const data = await response.json();
    // Extract the image data from the response
    if (data.candidates && 
        data.candidates[0].content && 
        data.candidates[0].content.parts && 
        data.candidates[0].content.parts[0].inlineData) {
      const imageData = data.candidates[0].content.parts[0].inlineData.data;
      return `data:${data.candidates[0].content.parts[0].inlineData.mimeType};base64,${imageData}`;
    }
    throw new Error("No image data found in response");
  } catch (error) {
    console.error("Error generating image:", error);
    toast({
      title: "Error",
      description: "Failed to generate image. The image generation API may be temporarily unavailable.",
      variant: "destructive",
    });
    return "";
  }
}

// Get trending topics using Brave Search API
export async function getTrendingTopics(query: string): Promise<any[]> {
  try {
    const response = await fetch("https://api.search.brave.com/res/v1/web/search?q=" + encodeURIComponent(query), {
      method: "GET",
      headers: {
        "Accept": "application/json",
        "Accept-Encoding": "gzip",
        "X-Subscription-Token": BRAVE_SEARCH_API_KEY
      }
    });

    if (!response.ok) {
      throw new Error(`API error: ${response.status}`);
    }

    const data = await response.json();
    return data.web?.results || [];
  } catch (error) {
    console.error("Error fetching trending topics:", error);
    toast({
      title: "Error",
      description: "Failed to fetch trending data. Please try again.",
      variant: "destructive",
    });
    return [];
  }
}

// Analyze content for SEO using Brave Search API
export async function analyzeContentSEO(content: string): Promise<any> {
  try {
    // This is a simplified approach. For a real implementation, you might 
    // want to use more specific endpoints or extract keywords first
    const keywords = extractKeywords(content);
    const results = await Promise.all(
      keywords.map(keyword => getTrendingTopics(keyword))
    );
    
    // Combine and process results
    return processSearchResults(results.flat());
  } catch (error) {
    console.error("Error analyzing content for SEO:", error);
    toast({
      title: "Error",
      description: "Failed to analyze content for SEO. Please try again.",
      variant: "destructive",
    });
    return { score: 0, suggestions: [] };
  }
}

// Helper function to extract keywords from content
function extractKeywords(content: string): string[] {
  // Very simplified keyword extraction
  // In a real implementation, you would use NLP or a dedicated API
  const words = content.toLowerCase().split(/\W+/);
  const stopWords = new Set(['the', 'and', 'a', 'an', 'in', 'on', 'at', 'to', 'for', 'of', 'with']);
  
  // Filter out stop words and count word frequencies
  const wordCount: Record<string, number> = {};
  words.forEach(word => {
    if (word.length > 3 && !stopWords.has(word)) {
      wordCount[word] = (wordCount[word] || 0) + 1;
    }
  });
  
  // Sort by frequency and take top 5
  return Object.entries(wordCount)
    .sort((a, b) => b[1] - a[1])
    .slice(0, 5)
    .map(([word]) => word);
}

// Helper function to process search results
function processSearchResults(results: any[]): any {
  // Analyze results to extract SEO insights
  // This is simplified - you would likely want a more sophisticated algorithm
  const suggestions = results.slice(0, 5).map(result => ({
    title: result.title || "",
    description: result.description || "",
    url: result.url || ""
  }));
  
  return {
    score: results.length > 0 ? 75 : 50, // Simple scoring logic
    suggestions
  };
}
