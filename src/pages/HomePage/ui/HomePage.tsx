import { classNames } from 'shared/lib/classNames/classNames'
import cls from './HomePage.module.scss'
import { PostsList } from 'entities/Post/ui/PostsList/PostsList'

export const HomePage = () => {

    return (
        <div className={classNames(cls.HomePage, {}, [])}>
            <PostsList />
        </div>
    )
}
