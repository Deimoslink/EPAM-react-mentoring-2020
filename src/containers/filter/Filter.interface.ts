export interface FilterPropsI {
    setGenre: (val: string) => void;
    setSort: (val: string) => void;
    setOption: (val: string) => void;
    toggleDropdown: (val: boolean) => void;
    sortOrder: string;
    selectedOption: string;
    selectedGenre: string;
    showDropdown: boolean;
}
