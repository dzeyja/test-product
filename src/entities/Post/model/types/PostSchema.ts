export interface Post {
    id: number
    title: string
    body: string
    liked: boolean
} 

export interface PostSchema {
    data: Post[]
    isLoading: boolean
    error?: string
}