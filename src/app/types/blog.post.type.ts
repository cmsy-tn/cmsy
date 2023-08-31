export enum STATUS_ENUM {
    'DRAFT',
    'VALID'
}

export interface BlogPostType {
    post_title: string;
    post_content: string;
    post_cover_image: string;
    post_status: STATUS_ENUM;
}