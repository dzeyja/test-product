import { classNames } from "shared/lib/classNames/classNames"
import cls from './PostPage.module.scss'

interface PostPageProps {
    className?: string
}

export const PostPage = ({ className }: PostPageProps) => {

    return (
        <div className={classNames(cls.PostPage, {}, [className])}>
        </div>
    )
}
