
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";
import { Input } from "@/components/ui/input";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Loader, Image as ImageIcon, Type, Search, TrendingUp } from "lucide-react";
import { generateText, generateImage, getTrendingTopics, analyzeContentSEO } from "@/utils/contentGeneration";
import { toast } from "@/hooks/use-toast";

type ContentType = "text" | "image" | "seo";

const ContentGenerator = () => {
  const [prompt, setPrompt] = useState("");
  const [contentType, setContentType] = useState<ContentType>("text");
  const [generatedText, setGeneratedText] = useState("");
  const [generatedImage, setGeneratedImage] = useState("");
  const [seoResults, setSeoResults] = useState<any>(null);
  const [isLoading, setIsLoading] = useState(false);
  const [contentPlatform, setContentPlatform] = useState("tiktok");

  const handleGenerate = async () => {
    if (!prompt.trim()) {
      toast({
        title: "Error",
        description: "Please enter a prompt before generating content.",
        variant: "destructive",
      });
      return;
    }

    setIsLoading(true);
    setGeneratedText("");
    setGeneratedImage("");
    setSeoResults(null);

    try {
      if (contentType === "text") {
        // Include the platform in the prompt for better context
        const enhancedPrompt = `Generate a ${contentPlatform} content about: ${prompt}`;
        const text = await generateText(enhancedPrompt);
        if (text) {
          setGeneratedText(text);
          toast({
            title: "Success",
            description: "Content generated successfully!",
          });
        }
      } else if (contentType === "image") {
        // The image generation API is currently having issues, show a message
        toast({
          title: "Notice",
          description: "Image generation is being processed. This may take a moment.",
        });
        
        const imageUrl = await generateImage(prompt);
        if (imageUrl) {
          setGeneratedImage(imageUrl);
          toast({
            title: "Success",
            description: "Image generated successfully!",
          });
        }
      } else if (contentType === "seo") {
        // For SEO analysis, we need to have some content first
        if (!generatedText.trim()) {
          const text = await generateText(prompt);
          if (text) {
            setGeneratedText(text);
            
            // Now analyze the generated text
            const seoData = await analyzeContentSEO(text);
            setSeoResults(seoData);
          }
        } else {
          const seoData = await analyzeContentSEO(generatedText);
          setSeoResults(seoData);
        }
        
        if (seoResults) {
          toast({
            title: "Success",
            description: "SEO analysis completed!",
          });
        }
      }
    } catch (error) {
      console.error("Error in content generation:", error);
      toast({
        title: "Error",
        description: "Failed to generate content. Please try again later.",
        variant: "destructive",
      });
    } finally {
      setIsLoading(false);
    }
  };

  const getPlatformExamples = () => {
    switch (contentPlatform) {
      case "tiktok":
        return "E.g., 'Create a viral hook for a fitness product targeting women 25-35'";
      case "instagram":
        return "E.g., 'Write a carousel post about productivity tips for entrepreneurs'";
      case "blog":
        return "E.g., 'Create an in-depth article about sustainable fashion trends in 2023'";
      default:
        return "Enter your content idea here...";
    }
  };

  return (
    <Card className="border-border bg-card/30 w-full max-w-4xl mx-auto">
      <CardHeader>
        <CardTitle className="text-2xl font-bold">AI Content Generator</CardTitle>
        <CardDescription>
          Create professional content optimized for your platform
        </CardDescription>
      </CardHeader>
      <CardContent>
        <div className="space-y-4">
          <div className="grid grid-cols-2 gap-4">
            <div className="space-y-2">
              <label className="text-sm font-medium">Content Platform</label>
              <Select 
                value={contentPlatform} 
                onValueChange={setContentPlatform}
              >
                <SelectTrigger>
                  <SelectValue placeholder="Select Platform" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="tiktok">TikTok</SelectItem>
                  <SelectItem value="instagram">Instagram</SelectItem>
                  <SelectItem value="blog">Blog</SelectItem>
                  <SelectItem value="email">Email</SelectItem>
                  <SelectItem value="twitter">Twitter</SelectItem>
                </SelectContent>
              </Select>
            </div>
            <div className="space-y-2">
              <label className="text-sm font-medium">Generation Type</label>
              <Tabs 
                value={contentType} 
                onValueChange={(value) => setContentType(value as ContentType)}
                className="w-full"
              >
                <TabsList className="grid grid-cols-3 w-full">
                  <TabsTrigger value="text" className="flex items-center">
                    <Type className="w-4 h-4 mr-2" />Text
                  </TabsTrigger>
                  <TabsTrigger value="image" className="flex items-center">
                    <ImageIcon className="w-4 h-4 mr-2" />Image
                  </TabsTrigger>
                  <TabsTrigger value="seo" className="flex items-center">
                    <Search className="w-4 h-4 mr-2" />SEO
                  </TabsTrigger>
                </TabsList>
              </Tabs>
            </div>
          </div>

          <div className="space-y-2">
            <label className="text-sm font-medium">Content Prompt</label>
            <Textarea
              placeholder={getPlatformExamples()}
              value={prompt}
              onChange={(e) => setPrompt(e.target.value)}
              className="min-h-32"
            />
          </div>

          <Button 
            onClick={handleGenerate} 
            className="w-full bg-gradient-to-r from-brand-purple to-brand-cyan text-white hover:opacity-90"
            disabled={isLoading}
          >
            {isLoading ? (
              <>
                <Loader className="mr-2 h-4 w-4 animate-spin" />
                Generating...
              </>
            ) : (
              "Generate Content"
            )}
          </Button>
        </div>

        {/* Results Display */}
        {(generatedText || generatedImage || seoResults) && (
          <div className="mt-8 space-y-4">
            <h3 className="text-lg font-medium">Generated Content</h3>
            
            {generatedText && (
              <div className="bg-black/50 p-4 rounded-md border border-border">
                <pre className="whitespace-pre-wrap text-sm">{generatedText}</pre>
              </div>
            )}
            
            {generatedImage && (
              <div className="flex justify-center border border-border rounded-md p-2 bg-black/50">
                <img 
                  src={generatedImage} 
                  alt="Generated content" 
                  className="max-h-80 object-contain rounded" 
                />
              </div>
            )}
            
            {seoResults && (
              <div className="bg-black/50 p-4 rounded-md border border-border space-y-3">
                <div className="flex items-center space-x-2">
                  <TrendingUp className="text-brand-cyan h-5 w-5" />
                  <span className="font-medium">SEO Score: {seoResults.score}%</span>
                </div>
                
                {seoResults.suggestions?.length > 0 && (
                  <div>
                    <h4 className="text-sm font-medium mb-2">Trending Topics to Include:</h4>
                    <ul className="space-y-2">
                      {seoResults.suggestions.map((item: any, index: number) => (
                        <li key={index} className="text-sm">
                          <a 
                            href={item.url} 
                            target="_blank" 
                            rel="noopener noreferrer"
                            className="text-brand-cyan hover:underline"
                          >
                            {item.title}
                          </a>
                          <p className="text-gray-400 text-xs">{item.description}</p>
                        </li>
                      ))}
                    </ul>
                  </div>
                )}
              </div>
            )}
          </div>
        )}
      </CardContent>
      <CardFooter className="text-xs text-gray-400 flex justify-between">
        <span>Powered by Gemini AI</span>
        <span>Results may vary. Review before publishing.</span>
      </CardFooter>
    </Card>
  );
};

export default ContentGenerator;
