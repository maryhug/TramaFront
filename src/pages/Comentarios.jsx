"use client"

import { CommentsList } from "../components/Comment/comments-list"
import { CommentInput } from "../components/Comment/comment-input"
import { BackButton } from "../components/Comment/back-button"
import { useComments } from "../hooks/use-comments"

export default function CommentsPage() {
    const { comments, currentUser, addComment } = useComments()

    return (
        <div className="min-h-screen bg-gray-900">
            <div className="max-w-2xl mx-auto px-6 py-8">
                <BackButton className="mb-6" />

                <div className="bg-gray-800 rounded-lg p-6">
                    <h1 className="text-2xl font-semibold text-white mb-6">Comments</h1>

                    <CommentsList comments={comments} />

                    <CommentInput onSubmit={addComment} currentUser={currentUser} />
                </div>
            </div>
        </div>
    )
}
