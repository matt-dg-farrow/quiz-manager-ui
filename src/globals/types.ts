export type Answer = { id: number; text: string; isCorrect: boolean };
export type Question = { id: number; title: string; answers: Answer[] };
export type Quiz = { id: number; title: string; questions: Question[] };
