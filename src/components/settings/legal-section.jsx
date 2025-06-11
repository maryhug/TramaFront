import { ChevronRightIcon } from "../icons/Icons"

const legalItems = [
    { id: "terms", label: "Terms of Service", href: "/terms" },
    { id: "privacy", label: "Privacy Policy", href: "/privacy" },
    { id: "cookies", label: "Cookie Policy", href: "/cookies" },
]

export function LegalSection() {
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
