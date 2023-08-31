export interface BlogPost {
    post_title: string;
    post_content: string;
    post_cover_image: string;
    post_status: 'draft' | 'valid';
}