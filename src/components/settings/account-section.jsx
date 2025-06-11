import { Button } from "../ui/Button"

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
