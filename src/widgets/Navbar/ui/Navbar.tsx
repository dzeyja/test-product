import { classNames } from 'shared/lib/classNames/classNames'
import cls from './Navbar.module.scss'
import { memo } from 'react'
import { Link } from 'react-router-dom'
import { AppPaths } from 'shared/config/routeConfig/routeConfig'
import { useAppDispatch } from 'shared/lib/hooks/useAppDispatch/useAppDispatch'
import { getLikedFilter, postActions } from 'entities/Post'
import { useSelector } from 'react-redux'


export const Navbar = memo(() => {
    const dispatch = useAppDispatch()
    const likedFilter = useSelector(getLikedFilter)

    const handleFilter = () => {
        dispatch(postActions.toogleLikeFilter())
    }

    return (
        <header className={classNames(cls.Navbar, {}, [])}>
            <div className="container">
                <nav className={cls.nav}>
                    <Link to={AppPaths.main} className={cls.logo}>
                        Список постов
                    </Link>
                    <div className={cls.likedFilter} onClick={handleFilter}>
                        {likedFilter ? 'Показать все посты' : 'Показать только лайкнутые'}
                    </div>
                    <Link to={AppPaths.create_post} className={cls.links}>
                        Создать пост
                    </Link>
                </nav> 
            </div>
        </header>
    )
})
