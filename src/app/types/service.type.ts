import { FAQTYPE } from "./faq.type";

export interface SERVICETYPE {
    id: string;
    title: string;
    description: string;
    call_to_action: string;
    subServices: string[];
    service_faqs: FAQTYPE[];
    service_has_faq: boolean;
}


export interface SERVICEACTIONSTATE {
    state: boolean;
    id: string;
    action: 'del' | 'add' | '' | 'update'
}