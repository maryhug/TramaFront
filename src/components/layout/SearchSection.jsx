"use client"

import { SearchBar } from "../ui/SearchBar"

// Añadir placeholder como prop y darle un valor por defecto
export function SearchSection({ searchQuery, onInputChange, onKeyDown, onSearchClear, placeholder = "Search movies, shows, people..." }) {
    return (
        <div className="mb-6">
            <SearchBar
                placeholder={placeholder} // Usar la prop placeholder
                value={searchQuery}
                onChange={onInputChange}
                onKeyDown={onKeyDown}
                onClear={onSearchClear}
                showClearButton={!!searchQuery} // Mostrar botón de limpiar si hay texto
            />
        </div>
    )
}