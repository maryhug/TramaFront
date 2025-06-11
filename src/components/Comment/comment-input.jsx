"use client"

import { useState } from "react"
import { Avatar } from "../ui/Avatar"
import { Button } from "../ui/Button"

export function CommentInput({ onSubmit, currentUser }) {
    const [comment, setComment] = useState("")

    const handleSubmit = (e) => {
        e.preventDefault()
        if (comment.trim()) {
            onSubmit(comment.trim())
            setComment("")
        }
    }

    return (
        <div className="flex space-x-3 py-4 border-t border-gray-700">
            <Avatar src={currentUser?.avatar} alt={currentUser?.name || "You"} />

            <form onSubmit={handleSubmit} className="flex-1 flex space-x-3">
                <input
                    type="text"
                    value={comment}
                    onChange={(e) => setComment(e.target.value)}
                    placeholder="Add a comment..."
                    className="flex-1 bg-gray-800 border border-gray-600 rounded-lg px-4 py-2 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                />
                <Button type="submit" disabled={!comment.trim()}>
                    Post
                </Button>
            </form>
        </div>
    )
}
