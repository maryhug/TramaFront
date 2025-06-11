import { Toggle } from "../ui/toggle"

export function NotificationsSection() {
    return (
        <div className="space-y-6">
            <h2 className="text-xl font-semibold text-white">Notifications</h2>

            <div className="space-y-6">
                <div className="flex items-center justify-between">
                    <div>
                        <h3 className="text-white font-medium">Activity Notifications</h3>
                        <p className="text-gray-400 text-sm">Receive notifications for new followers, likes, and comments.</p>
                    </div>
                    <Toggle checked={true} />
                </div>

                <div className="flex items-center justify-between">
                    <div>
                        <h3 className="text-white font-medium">Mentions</h3>
                        <p className="text-gray-400 text-sm">Get notified when someone mentions you in a review or comment.</p>
                    </div>
                    <Toggle checked={true} />
                </div>

                <div className="flex items-center justify-between">
                    <div>
                        <h3 className="text-white font-medium">Movie Updates</h3>
                        <p className="text-gray-400 text-sm">Receive updates about new movies, trailers, and events.</p>
                    </div>
                    <Toggle checked={true} />
                </div>
            </div>
        </div>
    )
}
