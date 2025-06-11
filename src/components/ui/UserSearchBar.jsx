// src/components/ui/UserSearchBar.jsx
import { SearchBar } from "./SearchBar"
import { useUserSearch } from "../../hooks/use-user-search"
import { UserSearchResults } from "../feed/UserSearchResults"

export function UserSearchBar() {
    const {
        searchQuery,
        users,
        loading,
        error,
        handleInputChange,
        handleKeyDown,
        handleSearchClear
    } = useUserSearch()

    return (
        <div className="relative w-full max-w-md mx-auto">
            <SearchBar
                placeholder="Buscar usuarios por nombre..."
                value={searchQuery}
                onChange={handleInputChange}
                onKeyDown={handleKeyDown}
                onClear={handleSearchClear}
                showClearButton={!!searchQuery}
            />
            {loading && <div className="text-white mt-2">Buscando...</div>}
            {error && <div className="text-red-500 mt-2">{error}</div>}
            <UserSearchResults users={users} onClose={handleSearchClear} />
        </div>
    )
}