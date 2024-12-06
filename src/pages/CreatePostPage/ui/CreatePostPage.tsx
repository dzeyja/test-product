import { classNames } from "shared/lib/classNames/classNames"
import cls from './CreatePostPage.module.scss'
import { AddPostForm } from "features/AddPost"

interface CreatePostPageProps {
    className?: string
}

export const CreatePostPage = ({ className }: CreatePostPageProps) => {


    return (
        <div className={classNames(cls.CreatePostPage, {}, [className])}>
            <AddPostForm />
        </div>
    )
}
