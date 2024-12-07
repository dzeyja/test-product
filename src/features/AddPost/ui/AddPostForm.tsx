import { classNames } from "shared/lib/classNames/classNames"
import cls from './AddPostForm.module.scss'
import { Button } from "shared/ui/Button/Button"
import { useSelector } from "react-redux"
import { getAddPostData } from "../model/selcetors/getAddPostData/getAddPostData"
import { getAddPostIsLoading } from "../model/selcetors/getAddPostILoading/getAddPostIsLoading"
import { ChangeEvent, FormEvent, memo, useState } from "react"
import { addPostActions } from "../model/slice/addPostSlice"
import { addPost } from "../model/services/addPost"
import { useAppDispatch } from "shared/lib/hooks/useAppDispatch/useAppDispatch"
import { Text } from "shared/ui/Text/Text"

interface AddPostFormProps {
    className?: string
}

export const AddPostForm = memo(({ className }: AddPostFormProps) => {
    const post = useSelector(getAddPostData)
    const isLoading = useSelector(getAddPostIsLoading)
    const dispatch = useAppDispatch()

    const titleChange = (e: ChangeEvent<HTMLInputElement>) => {
        dispatch(addPostActions.setTitle(e.target.value))
    }

    const bodyChange = (e: ChangeEvent<HTMLInputElement>) => {
        dispatch(addPostActions.setBody(e.target.value))
    }

    const onSubmit = async (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault()

        if(!post.title.trim() || !post.body.trim()) {
            alert('Пожалуйста, заполните все поля.')
            return
        }

        const result = await dispatch(addPost({...post, id: Date.now()}))
        
        if(result.meta.requestStatus === 'fulfilled') {
            alert('Пост был успешно создан, вернитесь в ленту.')
        }
    }

    return (
        <div className={cls.AddPost}>
            <Text title="Создать пост"/>
            <form onSubmit={onSubmit} className={classNames(cls.AddPostForm, {}, [className])}>
                <input 
                    value={post.title}
                    className={cls.input}
                    onChange={titleChange} 
                    placeholder="Заголовок" 
                    type="text" 
                />
                <input 
                    value={post.body}
                    className={cls.input}
                    onChange={bodyChange}
                    placeholder="Описание" 
                    type="text" 
                />
                <Button 
                    type="submit"
                >
                    {isLoading ? 'Создается...' : 'Создать'}
                </Button>
            </form>
        </div>
    )
})
