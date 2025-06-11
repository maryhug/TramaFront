import { Button } from "../ui/Button"

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
