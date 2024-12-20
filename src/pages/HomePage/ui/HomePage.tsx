import { classNames } from 'shared/lib/classNames/classNames'
import cls from './HomePage.module.scss'
import { PostsList } from 'entities/Post/ui/PostsList/PostsList'
import { memo } from 'react'

const HomePage = memo(() => {

    return (
        <div className={classNames(cls.HomePage, {}, [])}>
            <PostsList />
        </div>
    )
})

export default HomePage
