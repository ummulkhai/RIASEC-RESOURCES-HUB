
import type { Question, Resource } from './types';
import { RiaSecCode } from './types';

export const QUIZ_QUESTIONS: Question[] = [
  { text: 'Build kitchen cabinets', code: RiaSecCode.Realistic },
  { text: 'Develop a new medical treatment', code: RiaSecCode.Investigative },
  { text: 'Write a novel or a play', code: RiaSecCode.Artistic },
  { text: 'Help people with personal problems', code: RiaSecCode.Social },
  { text: 'Start your own business', code: RiaSecCode.Enterprising },
  { text: 'Organize a company\'s financial records', code: RiaSecCode.Conventional },
  { text: 'Repair a car or a bicycle', code: RiaSecCode.Realistic },
  { text: 'Study the causes of climate change', code: RiaSecCode.Investigative },
  { text: 'Compose or arrange music', code: RiaSecCode.Artistic },
  { text: 'Teach a class at a high school', code: RiaSecCode.Social },
  { text: 'Manage a retail store', code: RiaSecCode.Enterprising },
  { text: 'Develop a spreadsheet for budgeting', code: RiaSecCode.Conventional },
  { text: 'Work outdoors with plants and animals', code: RiaSecCode.Realistic },
  { text: 'Conduct a scientific experiment', code: RiaSecCode.Investigative },
  { text: 'Design a building or a piece of furniture', code: RiaSecCode.Artistic },
  { text: 'Work as a volunteer for a charity', code: RiaSecCode.Social },
  { text: 'Negotiate a business deal', code: RiaSecCode.Enterprising },
  { text: 'Keep detailed and accurate records', code: RiaSecCode.Conventional },
];

export const RIASEC_DESCRIPTIONS: Record<RiaSecCode, { title: string, description: string, keywords: string[], careers: string[] }> = {
  [RiaSecCode.Realistic]: {
    title: "Realistic (The Doers)",
    description: "People who are Realistic are often practical, hands-on, and action-oriented. They enjoy working with tools, machinery, and physical objects, and prefer to work with things rather than ideas or people. They are often good at solving concrete problems.",
    keywords: ["Practical", "Hands-on", "Mechanical", "Athletic", "Nature"],
    careers: ["Engineer", "Carpenter", "Pilot", "Veterinarian", "Mechanic"]
  },
  [RiaSecCode.Investigative]: {
    title: "Investigative (The Thinkers)",
    description: "Investigative types are analytical, curious, and observant. They enjoy solving complex problems, working with ideas and theories, and conducting research. They are driven by a desire to understand the world around them.",
    keywords: ["Analytical", "Curious", "Scientific", "Logical", "Precise"],
    careers: ["Scientist", "Doctor", "Data Analyst", "Professor", "Software Developer"]
  },
  [RiaSecCode.Artistic]: {
    title: "Artistic (The Creators)",
    description: "Artistic individuals are imaginative, creative, and expressive. They thrive in unstructured environments where they can use their creativity and originality. They enjoy working with forms, designs, and patterns, often in visual arts, music, or writing.",
    keywords: ["Creative", "Imaginative", "Expressive", "Original", "Independent"],
    careers: ["Graphic Designer", "Musician", "Writer", "Actor", "Architect"]
  },
  [RiaSecCode.Social]: {
    title: "Social (The Helpers)",
    description: "Social types are compassionate, cooperative, and enjoy helping, teaching, and working with others. They are skilled at communicating and understanding people. They are drawn to roles that allow them to make a positive impact on others.",
    keywords: ["Helpful", "Cooperative", "Friendly", "Empathetic", "Patient"],
    careers: ["Teacher", "Counselor", "Nurse", "Social Worker", "Coach"]
  },
  [RiaSecCode.Enterprising]: {
    title: "Enterprising (The Persuaders)",
    description: "Enterprising people are ambitious, assertive, and persuasive. They enjoy leading, influencing, and motivating others to achieve goals. They are often drawn to business, sales, and leadership roles and are comfortable with taking risks.",
    keywords: ["Ambitious", "Persuasive", "Energetic", "Confident", "Leader"],
    careers: ["Sales Manager", "Entrepreneur", "Lawyer", "Politician", "Marketing Director"]
  },
  [RiaSecCode.Conventional]: {
    title: "Conventional (The Organizers)",
    description: "Conventional individuals are organized, detail-oriented, and efficient. They thrive in structured environments and enjoy working with data and following established procedures. They are reliable and good at managing information.",
    keywords: ["Organized", "Efficient", "Detail-oriented", "Practical", "Systematic"],
    careers: ["Accountant", "Librarian", "Financial Analyst", "Office Manager", "Data Entry Clerk"]
  }
};


export const RESOURCES: Resource[] = [
    {
        title: "MySkillsFuture Student Portal",
        description: "Explore different education and career pathways, and find resources to help you make informed decisions about your future.",
        url: "https://www.myskillsfuture.gov.sg/content/student/en/primary.html",
        category: "Career Planning"
    },
    {
        title: "Khan Academy - College, careers, and more",
        description: "Free resources on career exploration, college admissions, and personal finance to prepare for life after school.",
        url: "https://www.khanacademy.org/college-careers-more",
        category: "Education"
    },
    {
        title: "Coursera for High School Students",
        description: "Explore university-level courses and popular subjects like computer science, business, and art to discover new interests.",
        url: "https://www.coursera.org/collections/popular-for-high-school-students",
        category: "Online Learning"
    },
     {
        title: "LinkedIn for Students",
        description: "Start building your professional network, explore career paths, and find internship opportunities.",
        url: "https://students.linkedin.com/",
        category: "Networking"
    },
];
