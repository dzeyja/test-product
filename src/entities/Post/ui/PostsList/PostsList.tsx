import { classNames } from "shared/lib/classNames/classNames"
import cls from './PostsList.module.scss'
import { useEffect } from "react"
import { useDispatch, useSelector } from "react-redux"
import { fetchPosts } from "../../model/services/fetchPosts"
import { getPostData } from "../../model/selectors/getPostData/getPostData"
import { Button, ButtonTheme } from "shared/ui/Button/Button"
import { postActions } from "../../model/slice/postSlice"

interface PostsListProps {
    className?: string
}

export const PostsList = ({ className }: PostsListProps) => {
    const dispatch = useDispatch()
    const data = useSelector(getPostData)

    useEffect(() => {
        dispatch(fetchPosts())
    }, [dispatch])

    const handleDelete = (id: number) => {
        dispatch(postActions.removePost(id))
    }

    return (
        <div className="container">
            <div className={classNames(cls.PostsList, {}, [className])}>
                {data.map((post) => (
                    <div key={post.id} className={cls.postCard}>
                        <div className={cls.imgWrapper}></div>
                        <div className={cls.textContent}>
                            <div className={cls.postTitle}>
                                {post.title}
                            </div>
                            <div className={cls.postBody}>
                                {post.body}
                            </div>
                            <div className={cls.postActions}>
                                <Button 
                                    theme={ButtonTheme.RED}
                                    onClick={() => handleDelete(post.id)}
                                >
                                    Удалить
                                </Button>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    )
}
