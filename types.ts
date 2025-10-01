
export enum RiaSecCode {
  Realistic = 'Realistic',
  Investigative = 'Investigative',
  Artistic = 'Artistic',
  Social = 'Social',
  Enterprising = 'Enterprising',
  Conventional = 'Conventional',
}

export interface Question {
  text: string;
  code: RiaSecCode;
}

export type Scores = {
  [key in RiaSecCode]: number;
};

export interface QuizResult {
  topCodes: { code: RiaSecCode; score: number }[];
  scores: Scores;
}

export interface CareerSuggestion {
  career: string;
  description: string;
  skills: string[];
}

export interface Resource {
    title: string;
    description: string;
    url: string;
    category: string;
}

export enum View {
    Home = 'home',
    Quiz = 'quiz',
    Results = 'results',
    Explorer = 'explorer',
    Resources = 'resources'
}
