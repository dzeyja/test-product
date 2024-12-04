import { classNames } from 'shared/lib/classNames/classNames'
import cls from './Navbar.module.scss'
import { memo } from 'react'

interface NavbarProps {
    className?: string
}

export const Navbar = memo(({ className }: NavbarProps) => {

    return (
        <header className={classNames(cls.Navbar, {}, [className])}>
            <div className="container">
                <nav className={cls.nav}>
                    <div className={cls.logo}>
                        Список проуктов
                    </div>
                    <div className={cls.links}>
                        Создать продукт
                    </div>
                </nav> 
            </div>
        </header>
    )
})
