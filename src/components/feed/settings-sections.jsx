import { Button } from "../ui/Button"
import { Toggle } from "../ui/toggle"
import { ChevronRightIcon } from "../icons/Icons"

export function AccountSection() {
    return (
        <div className="space-y-6">
            <h2 className="text-xl font-semibold text-white">Account</h2>

            <div className="space-y-4">
                <div className="flex items-center justify-between">
                    <div>
                        <h3 className="text-white font-medium">Email</h3>
                        <p className="text-gray-400 text-sm">sophia.carter@email.com</p>
                    </div>
                    <Button variant="outline" size="sm">
                        Change
                    </Button>
                </div>

                <div className="flex items-center justify-between">
                    <div>
                        <h3 className="text-white font-medium">Password</h3>
                        <p className="text-gray-400 text-sm">••••••••</p>
                    </div>
                    <Button variant="outline" size="sm">
                        Change
                    </Button>
                </div>
            </div>
        </div>
    )
}

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

export function PrivacySection() {
    return (
        <div className="space-y-6">
            <h2 className="text-xl font-semibold text-white">Privacy</h2>

            <div className="space-y-4">
                <div className="flex items-center justify-between">
                    <div>
                        <h3 className="text-white font-medium">Profile Visibility</h3>
                        <p className="text-gray-400 text-sm">Control who can view your profile and reviews.</p>
                    </div>
                    <Button variant="outline" size="sm">
                        Edit
                    </Button>
                </div>

                <div className="flex items-center justify-between">
                    <div>
                        <h3 className="text-white font-medium">Blocked Users</h3>
                        <p className="text-gray-400 text-sm">Manage users you've blocked from interacting with you.</p>
                    </div>
                    <Button variant="outline" size="sm">
                        Manage
                    </Button>
                </div>
            </div>
        </div>
    )
}

export function PreferencesSection() {
    return (
        <div className="space-y-6">
            <h2 className="text-xl font-semibold text-white">Preferences</h2>

            <div className="space-y-4">
                <div className="flex items-center justify-between">
                    <div>
                        <h3 className="text-white font-medium">Language</h3>
                        <p className="text-gray-400 text-sm">Choose your preferred language for the app interface.</p>
                    </div>
                    <Button variant="outline" size="sm">
                        English
                    </Button>
                </div>

                <div className="flex items-center justify-between">
                    <div>
                        <h3 className="text-white font-medium">Theme</h3>
                        <p className="text-gray-400 text-sm">Select your preferred theme for the app interface.</p>
                    </div>
                    <Button variant="outline" size="sm">
                        Light
                    </Button>
                </div>
            </div>
        </div>
    )
}

export function LegalSection() {
    const legalItems = [
        { id: "terms", label: "Terms of Service", href: "/terms" },
        { id: "privacy", label: "Privacy Policy", href: "/privacy" },
        { id: "cookies", label: "Cookie Policy", href: "/cookies" },
    ]

    return (
        <div className="space-y-6">
            <h2 className="text-xl font-semibold text-white">Legal</h2>

            <div className="space-y-2">
                {legalItems.map((item) => (
                    <a
                        key={item.id}
                        href={item.href}
                        className="flex items-center justify-between p-3 rounded-lg hover:bg-gray-800 transition-colors group"
                    >
                        <span className="text-white font-medium">{item.label}</span>
                        <ChevronRightIcon className="w-5 h-5 text-gray-400 group-hover:text-white" />
                    </a>
                ))}
            </div>
        </div>
    )
}
