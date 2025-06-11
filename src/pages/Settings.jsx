import { Sidebar } from "../components/layout/sidebar"
import { Button } from "../components/ui/Button"
import {
    AccountSection,
    NotificationsSection,
    PrivacySection,
    PreferencesSection,
    LegalSection,
} from "../components/feed/settings-sections"

export default function SettingsPage() {
    return (
        <div className="min-h-screen bg-gray-900 flex">
            <Sidebar activeItem="profile" />

            <div className="flex-1 p-8">
                <div className="max-w-2xl">
                    <h1 className="text-3xl font-semibold text-white mb-8">Settings</h1>

                    <div className="space-y-12">
                        <AccountSection />
                        <NotificationsSection />
                        <PrivacySection />
                        <PreferencesSection />
                        <LegalSection />

                        <div className="pt-6 border-t border-gray-800">
                            <Button variant="danger" size="lg">
                                Log Out
                            </Button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
