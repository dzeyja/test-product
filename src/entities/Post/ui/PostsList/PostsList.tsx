import { classNames } from "shared/lib/classNames/classNames"
import cls from './PostsList.module.scss'
import { memo, useEffect } from "react"
import { useSelector } from "react-redux"
import { fetchPosts } from "../../model/services/fetchPosts"
import { PostCard } from "../PostCard/PostCard"
import { useAppDispatch } from "shared/lib/hooks/useAppDispatch/useAppDispatch"
import { getPostIsLoading } from "entities/Post/model/selectors/getPostIsLoading/getPostIsloading"
import { Loader } from "shared/ui/Loader/Loader"
import { Text } from "shared/ui/Text/Text"
import { getFilteredPosts } from "entities/Post/model/selectors/getFilteredPosts/getFilteredPosts"

interface PostsListProps {
    className?: string
}

export const PostsList = memo(({ className }: PostsListProps) => {
    const dispatch = useAppDispatch()
    const data = useSelector(getFilteredPosts)
    const isLoading = useSelector(getPostIsLoading)

    useEffect(() => {
        dispatch(fetchPosts())
    }, [])

    return (
        <>
            {isLoading ? 
                <>  
                    <Text className={cls.loaderTitle} title="Пожалуйста подождите запускается сервер"/>
                    <Loader /> 
                </>
                :
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
