import { Button } from "../ui/Button"

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
