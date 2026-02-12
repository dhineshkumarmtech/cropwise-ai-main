import { useState, useCallback } from 'react';
import { Header } from '@/components/Header';
import { Footer } from '@/components/Footer';
import { ImageUploader } from '@/components/ImageUploader';
import { DetectionResult } from '@/components/DetectionResult';
import leafImage from '@/assets/leaf-healthy.jpg';

// Mock disease data for demo
const mockDiseases = [
  {
    disease: 'Tomato Leaf Blight',
    confidence: 94.6,
    treatment: {
      chemical: 'Apply Mancozeb 75% WP @ 2.5g/L or Copper Oxychloride 50% WP @ 3g/L as foliar spray at 7-10 day intervals.',
      organic: 'Spray neem oil (5ml/L) mixed with baking soda (3g/L). Apply Trichoderma viride based bio-fungicide.',
      preventive: 'Use disease-free seeds, maintain proper spacing, avoid overhead irrigation, remove infected plant debris.',
    },
  },
  {
    disease: 'Potato Early Blight',
    confidence: 89.2,
    treatment: {
      chemical: 'Apply Chlorothalonil 75% WP @ 2g/L or Azoxystrobin 23% SC @ 1ml/L at first sign of disease.',
      organic: 'Use compost tea spray, apply copper-based organic fungicides, spray garlic extract solution.',
      preventive: 'Rotate crops every 2-3 years, ensure good air circulation, water at soil level, remove volunteer plants.',
    },
  },
  {
    disease: 'Healthy Plant',
    confidence: 97.8,
    treatment: {
      chemical: 'No treatment needed - plant is healthy!',
      organic: 'Continue regular organic fertilization for optimal growth.',
      preventive: 'Maintain current practices, regular monitoring recommended.',
    },
  },
];

const DetectDisease = () => {
  const [selectedFile, setSelectedFile] = useState<File | null>(null);
  const [isAnalyzing, setIsAnalyzing] = useState(false);
  const [result, setResult] = useState<typeof mockDiseases[0] | null>(null);
  const [imageUrl, setImageUrl] = useState<string>('');

  const handleImageSelect = useCallback((file: File | null) => {
    setSelectedFile(file);
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setImageUrl(reader.result as string);
      };
      reader.readAsDataURL(file);
    } else {
      setImageUrl('');
    }
    setResult(null);
  }, []);

  const handleAnalyze = useCallback(() => {
    if (!selectedFile) return;
    
    setIsAnalyzing(true);
    
    // Simulate API call with mock data
    setTimeout(() => {
      const randomResult = mockDiseases[Math.floor(Math.random() * mockDiseases.length)];
      setResult(randomResult);
      setIsAnalyzing(false);
    }, 2500);
  }, [selectedFile]);

  const handleNewScan = useCallback(() => {
    setSelectedFile(null);
    setResult(null);
    setImageUrl('');
  }, []);

  return (
    <div className="min-h-screen flex flex-col bg-background">
      <Header />
      <main className="flex-1 py-12 md:py-20">
        <div className="container">
          {result ? (
            <DetectionResult
              disease={result.disease}
              confidence={result.confidence}
              treatment={result.treatment}
              imageUrl={imageUrl || leafImage}
              onNewScan={handleNewScan}
            />
          ) : (
            <ImageUploader
              onImageSelect={handleImageSelect}
              onAnalyze={handleAnalyze}
              isAnalyzing={isAnalyzing}
            />
          )}
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default DetectDisease;