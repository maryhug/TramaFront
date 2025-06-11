import { CommentItem } from "./comment-item"

export function CommentsList({ comments }) {
    if (!comments || comments.length === 0) {
        return (
            <div className="text-center py-8 text-gray-400">
                <p>No comments yet. Be the first to comment!</p>
            </div>
        )
    }

    return (
        <div className="divide-y divide-gray-700">
            {comments.map((comment) => (
                <CommentItem key={comment.id} comment={comment} />
            ))}
        </div>
    )
}
