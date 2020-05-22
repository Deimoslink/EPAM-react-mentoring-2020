export interface PaginationPropsI {
    offset: number;
    limit: number;
    total: number;
    setSize: (val: number) => void;
    setPage: (val: number) => void;
}
