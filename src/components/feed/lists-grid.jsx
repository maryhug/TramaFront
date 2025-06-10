"use client"

import { ListItem } from "./list-item"

export function ListsGrid({ lists, onListClick }) {
    return (
        <div className="space-y-3">
            {lists.map((list) => (
                <ListItem
                    key={list.id}
                    icon={list.icon}
                    title={list.title}
                    itemCount={list.itemCount}
                    onClick={() => onListClick(list)}
                />
            ))}
        </div>
    )
}
