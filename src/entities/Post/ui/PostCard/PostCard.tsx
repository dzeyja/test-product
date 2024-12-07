import { classNames } from "shared/lib/classNames/classNames"
import cls from './PostCard.module.scss'
import { Post } from "../../model/types/PostSchema"
import { Button, ButtonTheme } from "shared/ui/Button/Button"
import { useDispatch } from "react-redux"
import { deletePost } from "../../model/services/deletePost"
import { LikeButton } from "../LikeButton/LikeButton"
import { memo } from "react"
import { useNavigate } from "react-router-dom"

interface PostCardProps {
    post: Post
}

export const PostCard = memo(({ post }: PostCardProps) => {
    const dispatch = useDispatch()
    const navigate = useNavigate()

    const handleDelete = (e: any, id: number) => {
        e.stopPropagation()

        dispatch(deletePost(id))
    }

    return (
        <div 
            onClick={() => navigate(`/posts/${post?.id}`)} 
            key={post?.id} 
            className={cls.PostCard}
        >
            <div className={cls.imgWrapper}></div>
            <div className={cls.textContent}>
                <div className={cls.postTitle}>
                    {post?.title}
                </div>
                <div className={cls.postBody}>
                    {post?.body}
                </div>
                <div className={cls.postActions}>
                    <Button 
                        theme={ButtonTheme.RED}
                        onClick={(e) => handleDelete(e, post.id)}
                    >
                        Удалить
                    </Button>
                    <LikeButton id={post.id} isLiked={post?.liked} />
                </div>
            </div>
        </div>
    )
})
