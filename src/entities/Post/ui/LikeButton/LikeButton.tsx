import { classNames } from "shared/lib/classNames/classNames"
import cls from './LikeButton.module.scss'
import { useDispatch } from "react-redux"
import { toggleLike } from "entities/Post/model/services/toggleLike"
import { memo } from "react"

interface LikeButtonProps {
    id: number
    isLiked: boolean
}

export const LikeButton = memo(({ id, isLiked }: LikeButtonProps) => {

    const dispatch = useDispatch()

    const handleLike = () => {
        dispatch(toggleLike({id, isLiked}))
    }

    return (
        <div onClick={handleLike}>
            {isLiked ? 'Лайк' : 'Не лайк'}
        </div>
    )
})
