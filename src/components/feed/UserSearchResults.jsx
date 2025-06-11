import { useNavigate } from "react-router-dom"

export function UserSearchResults({ users, onClose }) {
    const navigate = useNavigate()

    if (!users.length) return null

    return (
        <ul className="bg-gray-800 rounded-lg mt-2 shadow-lg divide-y divide-gray-700">
            {users.map(user => (
                <li
                    key={user.id}
                    className="flex items-center px-4 py-3 cursor-pointer hover:bg-gray-700"
                    onClick={() => {
                        navigate(`/profile/${user.id}`)
                        if (onClose) onClose()
                    }}
                >
                    <img
                        src={user.profilePicture || "/placeholder.svg"}
                        alt={user.name}
                        className="w-8 h-8 rounded-full mr-3"
                    />
                    <span className="text-white">{user.name}</span>
                </li>
            ))}
        </ul>
    )
}