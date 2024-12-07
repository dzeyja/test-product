import { classNames } from "shared/lib/classNames/classNames"
import cls from './Text.module.scss'

interface TextProps {
    className?: string
    title?: string
    text?: string
}

export const Text = (props: TextProps) => {
    const {
        title,
        text,
        className
    } = props

    return (
        <div className={classNames(cls.Text, {}, [className])}>
            {title && <div className={cls.title}>{title}</div>}
            {text && <div className={cls.title}>{text}</div>}
        </div>
    )
}
