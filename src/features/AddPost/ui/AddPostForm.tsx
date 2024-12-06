import { classNames } from "shared/lib/classNames/classNames"
import cls from './AddPostForm.module.scss'
import { Button } from "shared/ui/Button/Button"
import { FormEvent, useState } from "react"
import { Post, postActions } from "entities/Post"
import { useDispatch } from "react-redux"

interface AddPostFormProps {
    className?: string
}

export const AddPostForm = ({ className }: AddPostFormProps) => {
    const [post, setPost] = useState<Post>({
        id: 0,
        title: '',
        body: ''
    })
    const dispatch = useDispatch()

    const addPost = (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault()


        dispatch(postActions.addPost({...post, id: 101}))
    }

    return (
        <div className={cls.AddPost}>
            <div className={cls.title}>Создать пост</div>
            <form onSubmit={addPost} className={classNames(cls.AddPostForm, {}, [className])}>
                <input 
                    className={cls.input}
                    onChange={(e) => setPost({...post, title: e.target.value})} 
                    placeholder="Заголовок" 
                    type="text" 
                />
                <input 
                    className={cls.input}
                    onChange={(e) => setPost({...post, body: e.target.value})}
                    placeholder="Описание" 
                    type="text" 
                />
                <Button 
                    type="submit"
                >
                    Создать
                </Button>
            </form>
        </div>
    )
}
