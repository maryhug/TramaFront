import { Button } from "../ui/Button"

export function ProfileHeader({ user }) {
    return (
        <div className="bg-gray-900">
            <div className="max-w-4xl mx-auto px-6 py-12">
                <div className="text-center">
                    {/* Profile Image */}
                    <div className="relative inline-block mb-6">
                        <div className="w-32 h-32 bg-gradient-to-br from-pink-200 to-orange-200 rounded-full overflow-hidden">
                            <img src={user.avatar || "/placeholder.svg"} alt={user.name} className="w-full h-full object-cover" />
                        </div>
                    </div>

                    {/* User Info */}
                    <h1 className="text-3xl font-bold text-white mb-2">{user.name}</h1>
                    <p className="text-white max-w-2xl mx-auto mb-2 leading-relaxed">{user.bio}</p>
                    <p className="text-sm text-white mb-6">Joined in {user.joinYear}</p>

                    {/* Action Buttons */}
                    <div className="flex justify-center space-x-3">
                        <Button variant="secondary">Edit profile</Button>
                        <Button variant="primary">Share profile</Button>
                    </div>
                </div>
            </div>
        </div>
    )
}
