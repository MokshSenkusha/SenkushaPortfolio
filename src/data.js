import DatagptImage from "./assets/Datagpt.png";
import NutrigenImage from "./assets/Nutrigen.png";
import ResumeImage from "./assets/Resume.png";
import UserImage from "./assets/user.jpg";
import Mentor1 from "./assets/mentor1.jpg";
import Mentor2 from "./assets/mentor2.jpg";
import Mentor3 from "./assets/mentor3.jpg";
import Mentor4 from "./assets/mentor4.jpg";
import Mentor5 from "./assets/mentor5.jpg";
import DemoImage from "./assets/demo.jpg";
import PhoneMockup from "./assets/phone.png";
import OneImg from "./assets/1.png";
import TwoImg from "./assets/2.png";
import ThreeImg from "./assets/3.png";
import demoImage from "./assets/demo.jpg";

export const products = [
  {
    id: 1,
    name: "DataGPT",
    description:
      "Advanced AI-powered data analysis and visualization tool that helps businesses make data-driven decisions.",
    features: [
      "Natural language data queries",
      "Automated data visualization",
      "Real-time analytics dashboard",
      "Predictive modeling capabilities",
    ],
    image: DatagptImage,
    category: "AI & Analytics",
    price: "$299/month",
  },
  {
    id: 2,
    name: "Nutrigen",
    description:
      "Personalized nutrition planning platform that creates custom meal plans based on genetic profile and health goals.",
    features: [
      "DNA-based nutrition recommendations",
      "Personalized meal planning",
      "Health goal tracking",
      "Expert nutritionist consultation",
    ],
    image: NutrigenImage,
    category: "Health & Wellness",
    price: "$199/month",
  },
  {
    id: 3,
    name: "Resume Analyzer",
    description:
      "Professional resume creation tool with AI-powered suggestions and industry-specific templates.",
    features: [
      "AI-powered content suggestions",
      "Industry-specific templates",
      "ATS-friendly formatting",
      "Real-time collaboration",
    ],
    image: ResumeImage,
    category: "Career Tools",
    price: "$49/month",
  },
];

export const services = [
  {
    id: 1,
    name: "Industrial Training",
    description:
      "Comprehensive training programs designed to bridge the gap between academic knowledge .",
    features: [
      "Hands-on practical training",
      "Industry expert mentorship",
      "Project-based learning",
      "Certification upon completion",
    ],
    duration: "3-6 months",
    price: "Starting from $2,500",
    image: DemoImage,
    category: "Training & Education",
  },
  {
    id: 2,
    name: "App Development",
    description:
      "Custom mobile application development for iOS and Android platforms with modern UI/UX design.",
    features: [
      "Native iOS & Android development",
      "Cross-platform solutions",
      "UI/UX design",
      "App store optimization",
    ],
    duration: "8-16 weeks",
    price: "Starting from $15,000",
    image: DemoImage,
    category: "Mobile Development",
  },
  {
    id: 3,
    name: "Web Development",
    description:
      "Full-stack web development services including frontend, backend, and database design.",
    features: [
      "Responsive web design",
      "E-commerce solutions",
      "Content management systems",
      "SEO optimization",
    ],
    duration: "6-12 weeks",
    price: "Starting from $8,000",
    image: DemoImage,
    category: "Web Development",
  },
  {
    id: 4,
    name: "AI Processed Solutions",
    description:
      "Custom AI and machine learning solutions to automate business processes and improve efficiency.",
    features: [
      "Machine learning model development",
      "Process automation",
      "Data analysis & insights",
      "Integration with existing systems",
    ],
    duration: "4-8 weeks",
    price: "Starting from $12,000",
    image: DemoImage,
    category: "Artificial Intelligence",
  },
  {
    id: 5,
    name: "Digital Marketing",
    description:
      "Comprehensive digital marketing services to boost your online presence and drive business growth.",
    features: [
      "SEO & SEM optimization",
      "Social media marketing",
      "Content marketing",
      "Analytics & reporting",
    ],
    duration: "Ongoing",
    price: "Starting from $1,500",
    image: DemoImage,
    category: "Marketing",
  },
  {
    id: 6,
    name: "Cloud Solutions",
    description:
      "Enterprise cloud infrastructure and migration services for scalable and secure business operations.",
    features: [
      "AWS/Azure/GCP migration",
      "Cloud architecture design",
      "DevOps implementation",
      "24/7 monitoring & support",
    ],
    duration: "4-12 weeks",
    price: "Starting from $20,000",
    image: DemoImage,
    category: "Cloud Services",
  },
  {
    id: 7,
    name: "Cybersecurity",
    description:
      "Comprehensive security solutions to protect your business from cyber threats and data breaches.",
    features: [
      "Security audits & assessments",
      "Penetration testing",
      "Security infrastructure setup",
      "Incident response planning",
    ],
    duration: "2-8 weeks",
    price: "Starting from $8,500",
    image: DemoImage,
    category: "Security",
  },
  {
    id: 8,
    name: "Data Analytics",
    description:
      "Advanced data analytics and business intelligence solutions to drive informed decision-making.",
    features: [
      "Data warehouse design",
      "BI dashboard development",
      "Predictive analytics",
      "Data visualization",
    ],
    duration: "6-10 weeks",
    price: "Starting from $10,000",
    image: DemoImage,
    category: "Analytics",
  },
  {
    id: 9,
    name: "UI/UX Design",
    description:
      "User-centered design services to create intuitive and engaging digital experiences.",
    features: [
      "User research & personas",
      "Wireframing & prototyping",
      "Visual design & branding",
      "Usability testing",
    ],
    duration: "4-8 weeks",
    price: "Starting from $6,000",
    image: DemoImage,
    category: "Design",
  },
  {
    id: 10,
    name: "Consulting Services",
    description:
      "Strategic technology consulting to help businesses optimize their digital transformation journey.",
    features: [
      "Technology strategy planning",
      "Digital transformation roadmap",
      "Process optimization",
      "Change management",
    ],
    duration: "Ongoing",
    price: "Starting from $200",
    image: DemoImage,
    category: "Consulting",
  },
];

export const mentors = [
  {
    name: "Mentor 1",
    tagline: "Heart of Senkusha",
    post: undefined,
    image: Mentor1,
  },
  {
    name: "Mentor 2",
    tagline: "Brain of Senkusha",
    post: undefined,
    image: Mentor4,
  },
  {
    name: "Mentor 3",
    tagline: "Spine of Senkusha",
    post: undefined,
    image: Mentor5,
  },
  {
    name: "Mentor 4",
    tagline: "Eyes of Senkusha",
    post: undefined,
    image: Mentor3,
  },
  {
    name: "Mentor 5",
    tagline: "Soul of Senkusha",
    post: undefined,
    image: Mentor2,
  },
];

export const individualProduct = [
  {
    id: 1,
    name: "NutriGen",
    tagline: "Your personal nutrition guide",
    description:
      "Get your personalized program and start your journey to a healthier, happier you.",
    heroImage: NutrigenImage,
    phoneMockup: PhoneMockup,
    category: "Health & Wellness",
    price: "$199/month",

    // How it works section
    howItWorks: {
      title: "A revolutionary way to log your meals with a single photo",
      description:
        "From a simple photo of your plate, the NutriGen app is able to recognize the food items, estimate the quantity, and provide nutritional information within seconds.",
      steps: [
        {
          title: "Select a meal",
          image: "1.png",
        },
        {
          title: "Take a photo",
          image: "2.png",
        },
        {
          title: "Get the nutrition facts",
          image: "3.png",
        },
      ],
    },

    // Features section
    features: [
      {
        title: "📷 QR Code Scanning",
        description: "Instantly fetch food data by scanning QR codes.",
      },
      {
        title: "🕢 Calorie & Nutrient Info",
        description: "See calories, macros, vitamins, and ingredients.",
      },
      {
        title: "📊 Personalized Dashboard",
        description: "Track your intake with charts and smart goals.",
      },
      {
        title: "🔄 API Integration",
        description: "Built on OpenFoodFacts & AI-powered recognition.",
      },
      {
        title: "🌐 Works Anywhere",
        description: "Supports global food standards and mobile use.",
      },
      {
        title: "🔐 Secure & Private",
        description: "Data is protected with end-to-end encryption.",
      },
    ],

    // Use cases section
    useCases: [
      {
        title: "👤 For Individuals",
        description:
          "Ideal for fitness tracking, weight management, and health-conscious eating.",
      },
      {
        title: "🏢 For Companies",
        description:
          "Perfect for employee wellness programs and smart cafeterias.",
      },
      {
        title: "💻 For Developers",
        description:
          "Use our API to build nutrition-based tools and apps easily.",
      },
    ],

    // Tech section
    techFeatures: [
      "Real-time API integration with OpenFoodFacts.",
      "AI-based food recognition and QR processing.",
      "Secure cloud data handling and storage.",
      "Nutrition analytics and dietary trend tracking.",
    ],

    // Testimonials
    testimonials: [
      {
        name: "Vidhi Shah",
        text: "NutriGen makes calorie tracking effortless! I just scan and go.",
      },
      {
        name: "Vrusha Morakhiya",
        text: "This app helped me manage my diet during my fitness journey. Love the dashboard!",
      },
    ],

    // FAQ section
    faqs: [
      {
        question: "What is NutriGen?",
        answer:
          "NutriGen is a smart food scanning app that helps track nutrition by scanning QR codes.",
      },
      {
        question: "Is NutriGen free?",
        answer:
          "Yes, NutriGen is free to use for individual users. API integrations may have usage limits.",
      },
      {
        question: "What data sources does it use?",
        answer:
          "It uses OpenFoodFacts and AI-powered recognition to fetch and analyze food data.",
      },
    ],

    // CTA section
    cta: {
      title: "Ready to Transform Your Nutrition?",
      subtitle:
        "Start using NutriGen or contact us for integration into your platform.",
      primaryButton: "Start Using NutriGen",
      secondaryButton: "Contact Us",
    },
  },
];
