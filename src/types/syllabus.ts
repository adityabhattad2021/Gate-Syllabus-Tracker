export type Topic = string;

export type Chapter = {
  name: string;
  description: string;
  topics: Topic[];
};

export type Subject = {
  name: string;
  description: string;
  chapters: Chapter[];
};

export type Branch = {
  name: string;
  description: string;
  subjects: Subject[];
};

export type SyllabusData = {
  [key: string]: Branch;
};