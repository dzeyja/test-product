import { classNames } from 'shared/lib/classNames/classNames'
import cls from './HomePage.module.scss'
import { PostsList } from 'entities/Post/ui/PostsList/PostsList'
import { memo } from 'react'
import { useSelector } from 'react-redux'
import { getPostIsLoading } from 'entities/Post'
import { Loader } from 'shared/ui/Loader/Loader'

const HomePage = memo(() => {
    const isLoading = useSelector(getPostIsLoading)

    return (
        <>
            {isLoading ? 
                <Loader /> :
                <div className={classNames(cls.HomePage, {}, [])}>
                    <PostsList />
                </div>
            }
        </>
    )
})

export default HomePage
