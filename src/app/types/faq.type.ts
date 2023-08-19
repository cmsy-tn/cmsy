export interface FAQTYPE {
    id: string;
    question: string;
    answer: string;
    hasCategory: boolean;
    category: string;
    date: Date;
}

export interface FAQACTIONSTATE {
    state: boolean;
    id: string;
    action: 'del' | 'add' | ''
}