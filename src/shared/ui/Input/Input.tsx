import { classNames } from "shared/lib/classNames/classNames"
import cls from './Input.module.scss'

interface InputProps {
    className?: string
}

export const Input = (props: InputProps) => {
    const {
        className,
    } = props

    return (
        <input className={classNames(cls.Input, {}, [className])}/>
    )
}
