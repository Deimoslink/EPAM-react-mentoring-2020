export interface SortOptionI {
    id: string;
    name: string;
}

export interface OptionsPropsI {
    setSort: (val: string) => void;
    setOption: (val: string) => void;
    toggleDropdown: (val: boolean) => void;
    sortOrder: string;
    selectedOption: string;
    showDropdown: boolean;
}
