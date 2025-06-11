import { Avatar } from "../ui/Avatar"
import { CommentActions } from "./comment-actions"

export function CommentItem({ comment }) {
    const { id, user, content, timestamp, likes, replies, shares } = comment

    const formatTimestamp = (timestamp) => {
        const now = new Date()
        const commentDate = new Date(timestamp)
        const diffInHours = Math.floor((now - commentDate) / (1000 * 60 * 60))

        if (diffInHours < 24) {
            return `${diffInHours}h`
        } else {
            const diffInDays = Math.floor(diffInHours / 24)
            return `${diffInDays}d`
        }
    }

    return (
        <div className="flex space-x-3 py-4">
            <Avatar src={user.avatar} alt={user.name} />

            <div className="flex-1 min-w-0">
                <div className="flex items-center space-x-2 mb-1">
                    <h4 className="text-white font-medium text-sm">{user.name}</h4>
                    <span className="text-gray-400 text-sm">{formatTimestamp(timestamp)}</span>
                </div>

                <p className="text-gray-300 text-sm leading-relaxed mb-2">{content}</p>

                <CommentActions
                    likes={likes}
                    replies={replies}
                    shares={shares}
                    onLike={(liked) => console.log(`Comment ${id} ${liked ? "liked" : "unliked"}`)}
                    onReply={() => console.log(`Reply to comment ${id}`)}
                    onShare={() => console.log(`Share comment ${id}`)}
                />
            </div>
        </div>
    )
}
