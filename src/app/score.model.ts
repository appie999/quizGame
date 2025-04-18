export interface Score {
  username: string;
  category: string;
  difficulty: string;
  score: number;
  maxScore: number;
  date: Date;
  timeSpent?: number; // Pour le mode chronométré
}
