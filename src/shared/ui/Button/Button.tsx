import { classNames } from "shared/lib/classNames/classNames"
import cls from './Button.module.scss'
import { ButtonHTMLAttributes, ReactNode } from "react"

export enum ButtonTheme {
    PRIMARY = 'primary',
    RED = 'red'
}

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
    className?: string
    theme?: ButtonTheme
    children: ReactNode
}

export const Button = (props: ButtonProps) => {
    const {
        theme = ButtonTheme.PRIMARY,
        className,
        children,
        ...otherProps
    } = props

    return (
        <button 
            {...otherProps} 
            className={classNames(cls.Button, {}, [className, cls[theme]])}
        >
            {children}
        </button>
    )
}
