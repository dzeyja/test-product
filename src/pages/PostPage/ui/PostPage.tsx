import { classNames } from "shared/lib/classNames/classNames"
import cls from './PostPage.module.scss'
import { memo } from "react"

interface PostPageProps {
    className?: string
}

export const PostPage = memo(({ className }: PostPageProps) => {

    return (
        <div className={classNames(cls.PostPage, {}, [className])}>
        </div>
    )
})
