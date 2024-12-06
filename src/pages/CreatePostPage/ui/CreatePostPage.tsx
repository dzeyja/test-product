import { classNames } from "shared/lib/classNames/classNames"
import cls from './CreatePostPage.module.scss'
import { AddPostForm } from "features/AddPost"
import { memo } from "react"

interface CreatePostPageProps {
    className?: string
}

const CreatePostPage = memo(({ className }: CreatePostPageProps) => {


    return (
        <div className={classNames(cls.CreatePostPage, {}, [className])}>
            <AddPostForm />
        </div>
    )
})

export default CreatePostPage
