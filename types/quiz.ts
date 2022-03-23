export interface QuizThumbnail {
  id: number;
  width: number;
  height: number;
  type: string;
  credit: string;
  filePath: string;
  duration: number;
  license?: any;
  description: string;
  mediaType: string;
  altText: string;
  mediaId: number;
}

export interface QuizImage {
  id: number;
  width: number;
  height: number;
  type: string;
  credit: string;
  filePath: string;
  duration: number;
  license?: any;
  description: string;
  mediaType: string;
  altText: string;
  mediaId: number;
}

export interface Quiz {
  id: number;
  type: string;
  title: string;
  description: string;
  url: string;
  thumbnail: QuizThumbnail;
  image: QuizImage;
  browserTitle: string;
  introduction: string;
  level: number;
  keywords: string[];
  editorIds?: any;
  newQuiz: boolean;
  numOfQuestions: number;
  timer: boolean;
  seconds: number;
  sortTitle: string;
  quizType: string;
  date: number;
  questions?: any;
  identifier: string;
}
