export type Language = 'en' | 'ta' | 'hi';

export interface Translations {
  nav: {
    home: string;
    detect: string;
    history: string;
    about: string;
    login: string;
    logout: string;
  };
  hero: {
    title: string;
    subtitle: string;
    cta: string;
    ctaSecondary: string;
  };
  features: {
    title: string;
    ai: { title: string; desc: string };
    multilingual: { title: string; desc: string };
    treatment: { title: string; desc: string };
    history: { title: string; desc: string };
  };
  upload: {
    title: string;
    subtitle: string;
    dropzone: string;
    or: string;
    browse: string;
    formats: string;
    analyzing: string;
    analyze: string;
  };
  result: {
    title: string;
    confidence: string;
    treatments: string;
    chemical: string;
    organic: string;
    preventive: string;
    newScan: string;
  };
  common: {
    loading: string;
    error: string;
    success: string;
  };
}

export const translations: Record<Language, Translations> = {
  en: {
    nav: {
      home: 'Home',
      detect: 'Detect Disease',
      history: 'History',
      about: 'About',
      login: 'Login',
      logout: 'Logout',
    },
    hero: {
      title: 'AI-Powered Crop Disease Detection',
      subtitle: 'Protect your harvest with instant disease identification and treatment recommendations in your language',
      cta: 'Scan Your Crop',
      ctaSecondary: 'Learn More',
    },
    features: {
      title: 'How It Works',
      ai: { title: 'AI Detection', desc: 'Advanced CNN model identifies 38+ crop diseases with 95% accuracy' },
      multilingual: { title: 'Your Language', desc: 'Get advice in English, Tamil, Hindi and more' },
      treatment: { title: 'Treatment Guide', desc: 'Chemical, organic & preventive solutions tailored to your crop' },
      history: { title: 'Track Progress', desc: 'Monitor your crop health over time with detailed history' },
    },
    upload: {
      title: 'Upload Leaf Image',
      subtitle: 'Take a clear photo of the affected leaf',
      dropzone: 'Drag & drop your image here',
      or: 'or',
      browse: 'Browse Files',
      formats: 'Supports JPG, PNG up to 10MB',
      analyzing: 'Analyzing...',
      analyze: 'Analyze Image',
    },
    result: {
      title: 'Disease Detected',
      confidence: 'Confidence',
      treatments: 'Treatment Recommendations',
      chemical: 'Chemical Treatment',
      organic: 'Organic Treatment',
      preventive: 'Preventive Measures',
      newScan: 'New Scan',
    },
    common: {
      loading: 'Loading...',
      error: 'Something went wrong',
      success: 'Success!',
    },
  },
  ta: {
    nav: {
      home: 'முகப்பு',
      detect: 'நோயைக் கண்டறி',
      history: 'வரலாறு',
      about: 'எங்களை பற்றி',
      login: 'உள்நுழை',
      logout: 'வெளியேறு',
    },
    hero: {
      title: 'AI பயிர் நோய் கண்டறிதல்',
      subtitle: 'உங்கள் மொழியில் உடனடி நோய் அடையாளம் மற்றும் சிகிச்சை பரிந்துரைகளுடன் உங்கள் அறுவடையை பாதுகாக்கவும்',
      cta: 'பயிரை ஸ்கேன் செய்',
      ctaSecondary: 'மேலும் அறிக',
    },
    features: {
      title: 'எப்படி வேலை செய்கிறது',
      ai: { title: 'AI கண்டறிதல்', desc: 'மேம்பட்ட CNN மாடல் 38+ பயிர் நோய்களை 95% துல்லியத்துடன் கண்டறியும்' },
      multilingual: { title: 'உங்கள் மொழி', desc: 'ஆங்கிலம், தமிழ், இந்தி மற்றும் பலவற்றில் ஆலோசனை பெறுங்கள்' },
      treatment: { title: 'சிகிச்சை வழிகாட்டி', desc: 'உங்கள் பயிருக்கு ஏற்ற இரசாயன, இயற்கை & தடுப்பு தீர்வுகள்' },
      history: { title: 'முன்னேற்றத்தை கண்காணி', desc: 'விரிவான வரலாற்றுடன் உங்கள் பயிர் ஆரோக்கியத்தை கண்காணிக்கவும்' },
    },
    upload: {
      title: 'இலை படத்தை பதிவேற்று',
      subtitle: 'பாதிக்கப்பட்ட இலையின் தெளிவான புகைப்படம் எடுக்கவும்',
      dropzone: 'உங்கள் படத்தை இங்கே இழுத்து விடுங்கள்',
      or: 'அல்லது',
      browse: 'கோப்புகளை உலாவு',
      formats: 'JPG, PNG 10MB வரை ஆதரிக்கிறது',
      analyzing: 'பகுப்பாய்வு செய்கிறது...',
      analyze: 'படத்தை பகுப்பாய்வு செய்',
    },
    result: {
      title: 'நோய் கண்டறியப்பட்டது',
      confidence: 'நம்பகத்தன்மை',
      treatments: 'சிகிச்சை பரிந்துரைகள்',
      chemical: 'இரசாயன சிகிச்சை',
      organic: 'இயற்கை சிகிச்சை',
      preventive: 'தடுப்பு நடவடிக்கைகள்',
      newScan: 'புதிய ஸ்கேன்',
    },
    common: {
      loading: 'ஏற்றுகிறது...',
      error: 'ஏதோ தவறு நடந்தது',
      success: 'வெற்றி!',
    },
  },
  hi: {
    nav: {
      home: 'होम',
      detect: 'रोग पहचानें',
      history: 'इतिहास',
      about: 'हमारे बारे में',
      login: 'लॉगिन',
      logout: 'लॉगआउट',
    },
    hero: {
      title: 'AI फसल रोग पहचान',
      subtitle: 'अपनी भाषा में तत्काल रोग पहचान और उपचार सिफारिशों के साथ अपनी फसल की रक्षा करें',
      cta: 'फसल स्कैन करें',
      ctaSecondary: 'अधिक जानें',
    },
    features: {
      title: 'यह कैसे काम करता है',
      ai: { title: 'AI पहचान', desc: 'उन्नत CNN मॉडल 95% सटीकता के साथ 38+ फसल रोगों की पहचान करता है' },
      multilingual: { title: 'आपकी भाषा', desc: 'अंग्रेजी, तमिल, हिंदी और अधिक में सलाह प्राप्त करें' },
      treatment: { title: 'उपचार गाइड', desc: 'आपकी फसल के लिए रासायनिक, जैविक और निवारक समाधान' },
      history: { title: 'प्रगति ट्रैक करें', desc: 'विस्तृत इतिहास के साथ अपनी फसल स्वास्थ्य की निगरानी करें' },
    },
    upload: {
      title: 'पत्ती की छवि अपलोड करें',
      subtitle: 'प्रभावित पत्ती की स्पष्ट तस्वीर लें',
      dropzone: 'अपनी छवि यहां खींचें और छोड़ें',
      or: 'या',
      browse: 'फ़ाइलें ब्राउज़ करें',
      formats: 'JPG, PNG 10MB तक समर्थित',
      analyzing: 'विश्लेषण हो रहा है...',
      analyze: 'छवि का विश्लेषण करें',
    },
    result: {
      title: 'रोग पहचाना गया',
      confidence: 'विश्वास',
      treatments: 'उपचार सिफारिशें',
      chemical: 'रासायनिक उपचार',
      organic: 'जैविक उपचार',
      preventive: 'निवारक उपाय',
      newScan: 'नया स्कैन',
    },
    common: {
      loading: 'लोड हो रहा है...',
      error: 'कुछ गलत हुआ',
      success: 'सफलता!',
    },
  },
};

export const languageNames: Record<Language, string> = {
  en: 'English',
  ta: 'தமிழ்',
  hi: 'हिंदी',
};