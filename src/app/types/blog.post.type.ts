export enum STATUS_ENUM {
    'DRAFT',
    'VALID'
}

export interface BlogPostType {
    id: string;
    post_title: string;
    post_content: string;
    post_cover_image: string;
    post_status: STATUS_ENUM;
}

export interface BLOGPOSTACTIONSTATE {
    state: boolean;
    id: string;
    action: 'del' | 'add' | '' | 'update'
}