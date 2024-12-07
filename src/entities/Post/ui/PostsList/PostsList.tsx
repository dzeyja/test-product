import { classNames } from "shared/lib/classNames/classNames"
import cls from './PostsList.module.scss'
import { memo, useEffect } from "react"
import { useSelector } from "react-redux"
import { fetchPosts } from "../../model/services/fetchPosts"
import { getPostData } from "../../model/selectors/getPostData/getPostData"
import { PostCard } from "../PostCard/PostCard"
import { useAppDispatch } from "shared/lib/hooks/useAppDispatch/useAppDispatch"
import { getPostIsLoading } from "entities/Post/model/selectors/getPostIsLoading/getPostIsloading"
import { Loader } from "shared/ui/Loader/Loader"

interface PostsListProps {
    className?: string
}

export const PostsList = memo(({ className }: PostsListProps) => {
    const dispatch = useAppDispatch()
    const data = useSelector(getPostData)
    const isLoading = useSelector(getPostIsLoading)

    useEffect(() => {
        dispatch(fetchPosts())
    }, [])

    return (
        <>
            {isLoading ? 
                <Loader /> :
                <div className="container">
                    <div className={classNames(cls.PostsList, {}, [className])}>
                        {data.map((post) => (
                            <PostCard key={post.id} post={post}/>
                        ))}
                    </div>
                </div>
            }
        </>
    )
})
