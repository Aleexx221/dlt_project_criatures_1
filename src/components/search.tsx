"use client";

import { usePathname, useSearchParams, useRouter } from "next/navigation";
import { useDebouncedCallback } from "use-debounce";

const Search = () => {
    const searchParams = useSearchParams();
    const pathname = usePathname();
    const router = useRouter();

    const handleSearch = useDebouncedCallback((term: string) => {
        console.log(term);
        const params = new URLSearchParams(searchParams);
        if (term) {
            params.set("query", term);
        } else {
            params.delete("query");
        }
        router.replace(`${pathname}?${params.toString()}`);
    }, 300);

    return (
        <div className="relative flex flex-1 mb-5 ml-5 mr-5">
            <label htmlFor="search" className="block text-purple-600">Palabra Mágica</label>
            <input 
                type="text" 
                className="w-full p-2 mt-2 border rounded-md bg-gray-100" 
                placeholder="Busca por nombre..."
                onChange={(e) => handleSearch(e.target.value)}
                defaultValue={searchParams.get("query")?.toString()}
            />
        </div>
    );
};

export default Search;
