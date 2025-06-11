import { HomeIcon, SearchIcon, BellIcon, MailIcon, UserIcon, DotsIcon } from "../icons/Icons"

const navigationItems = [
    { id: "home", label: "Home", icon: HomeIcon, href: "/" },
    { id: "profile", label: "Profile", icon: UserIcon, href: "/profile" },
]

export function Sidebar({ activeItem = "profile" }) {
    return (
        <div className="w-64 bg-gray-900 h-screen flex flex-col">
            {/* User Profile */}
            <div className="p-6 border-b border-gray-800">
                <div className="flex items-center space-x-3">
                    <div className="w-10 h-10 bg-gray-700 rounded-full flex items-center justify-center">
                        <UserIcon className="w-6 h-6 text-gray-300" />
                    </div>
                    {/*<div>*/}
                    {/*    <h3 className="text-white font-semibold">Sophia Carter</h3>*/}
                    {/*</div>*/}
                </div>
            </div>

            {/* Navigation */}
            <nav className="flex-1 p-4">
                <ul className="space-y-2">
                    {navigationItems.map((item) => {
                        const Icon = item.icon
                        const isActive = activeItem === item.id
                        return (
                            <li key={item.id}>
                                <a
                                    href={item.href}
                                    className={`flex items-center space-x-3 px-4 py-3 rounded-lg transition-colors ${
                                        isActive ? "bg-gray-800 text-white" : "text-gray-400 hover:text-white hover:bg-gray-800"
                                    }`}
                                >
                                    <Icon className="w-5 h-5" />
                                    <span className="font-medium">{item.label}</span>
                                </a>
                            </li>
                        )
                    })}
                </ul>
            </nav>

            {/* More */}
            <div className="p-4 border-t border-gray-800">
                <button className="flex items-center space-x-3 px-4 py-3 rounded-lg text-gray-400 hover:text-white hover:bg-gray-800 w-full transition-colors">
                    <DotsIcon className="w-5 h-5" />
                    <span className="font-medium">More</span>
                </button>
            </div>
        </div>
    )
}
