export interface FAQTYPE {
    id: string;
    question: string;
    answer: string;
    hasCategory: boolean;
    category: string;
    date: Date;
}

export type UPDATED_FAQ = {
    question: string;
    answer: string;
}

export interface FAQACTIONSTATE {
    state: boolean;
    id: string;
    action: 'del' | 'add' | '' | 'update'
}