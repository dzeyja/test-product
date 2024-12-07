import { useDispatch } from "react-redux"
import cls from './LikeButton.module.scss'
import { toggleLike } from "entities/Post/model/services/toggleLike"
import { memo } from "react"
import { FcLikePlaceholder } from "react-icons/fc"
import { FcLike } from "react-icons/fc"

interface LikeButtonProps {
    id: number
    isLiked: boolean
}

export const LikeButton = memo(({ id, isLiked }: LikeButtonProps) => {

    const dispatch = useDispatch()

    const handleLike = (e: any) => {
        e.stopPropagation()
        dispatch(toggleLike({id, isLiked}))
    }

    return (
        <div onClick={handleLike}>
            {isLiked ? <FcLike className={cls.icon}/> : <FcLikePlaceholder className={cls.icon}/>}
        </div>
    )
})
