import { classNames } from "shared/lib/classNames/classNames"
import cls from './PostPage.module.scss'
import { memo, useEffect } from "react"
import { useAppDispatch } from "shared/lib/hooks/useAppDispatch/useAppDispatch"
import { fetchPostById, getPostById, getPostIsLoading, LikeButton } from "entities/Post"
import { useParams } from "react-router-dom"
import { useSelector } from "react-redux"
import { StateSchema } from "app/providers/StoreProvider"
import { Loader } from "shared/ui/Loader/Loader"

interface PostPageProps {
    className?: string
}

const PostPage = memo(({ className }: PostPageProps) => {
    const dispatch = useAppDispatch()
    const isLoading = useSelector(getPostIsLoading)
    const params = useParams()
    const id = Number(params.id)
    const post = useSelector((state: StateSchema) => getPostById(state,id))

    useEffect(() => {
        if(id) {
            dispatch(fetchPostById(id))
        }
    }, [dispatch, id])

    return (
        <>
            {isLoading ? 
                <Loader /> :
                <div className="container">
                    <div className={classNames(cls.PostPage, {}, [className])}>
                        <div className={cls.imgWrapper}></div>
                        <div className={cls.textContent}>
                            <div className={cls.title}>
                                {post?.title}
                            </div>
                            <div className={cls.body}>
                                {post?.body}
                            </div>
                            <LikeButton id={id} isLiked={post?.liked}/>
                        </div>
                    </div>
                </div>
            }
        </>
    )
})

export default PostPage
