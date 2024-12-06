import { classNames } from 'shared/lib/classNames/classNames'
import cls from './Navbar.module.scss'
import { memo } from 'react'
import { Link } from 'react-router-dom'
import { AppPaths } from 'shared/config/routeConfig/routeConfig'

interface NavbarProps {
    className?: string
}

export const Navbar = memo(({ className }: NavbarProps) => {

    return (
        <header className={classNames(cls.Navbar, {}, [className])}>
            <div className="container">
                <nav className={cls.nav}>
                    <Link to={AppPaths.main} className={cls.logo}>
                        Список постов
                    </Link>
                    <Link to={AppPaths.create_post} className={cls.links}>
                        Создать пост
                    </Link>
                </nav> 
            </div>
        </header>
    )
})
