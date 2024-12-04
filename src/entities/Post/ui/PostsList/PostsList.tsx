import { classNames } from "shared/lib/classNames/classNames"
import cls from './PostsList.module.scss'
import { useEffect } from "react"
import { useDispatch, useSelector } from "react-redux"
import { fetchPosts } from "entities/Post/model/services/fetchPosts"
import { getPostData } from "entities/Post/model/selectors/getPostData/getPostData"

interface PostsListProps {
    className?: string
}

export const PostsList = ({ className }: PostsListProps) => {
    const dispatch = useDispatch()
    const data = useSelector(getPostData)

    useEffect(() => {
        dispatch(fetchPosts())
    }, [dispatch])

    
    return (
        <div className="container">
            <div className={classNames(cls.PostsList, {}, [className])}>
                {data.map((post) => (
                    <div className={cls.postCard}>
                        <div className={cls.textContent}>
                            <div className={cls.postTitle}>
                                {post.title}
                            </div>
                            <div className={cls.postBody}>
                                {post.body}
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    )
}
