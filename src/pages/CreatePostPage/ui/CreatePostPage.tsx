import { classNames } from "shared/lib/classNames/classNames"
import cls from './CreatePostPage.module.scss'
import { AddPostForm } from "features/AddPost"
import { memo } from "react"

interface CreatePostPageProps {
    className?: string
}

export const CreatePostPage = memo(({ className }: CreatePostPageProps) => {


    return (
        <div className={classNames(cls.CreatePostPage, {}, [className])}>
            <AddPostForm />
        </div>
    )
})
