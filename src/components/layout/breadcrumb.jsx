export function Breadcrumb({ items }) {
    return (
        <nav className="flex items-center space-x-2 text-sm text-gray-400 mb-8">
            {items.map((item, index) => (
                <div key={index} className="flex items-center">
                    {index > 0 && <span className="mx-2 text-gray-600">/</span>}
                    {item.href ? (
                        <a href={item.href} className="hover:text-white transition-colors">
                            {item.label}
                        </a>
                    ) : (
                        <span className="text-white">{item.label}</span>
                    )}
                </div>
            ))}
        </nav>
    )
}
