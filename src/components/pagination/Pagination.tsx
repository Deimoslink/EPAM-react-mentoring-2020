import * as React from 'react';
import './Pagination.scss'


interface PaginationPropsI {
    offset: number;
    limit: number;
    total: number;
    setSize: (val: number) => void;
    setPage: (val: number) => void;
}

export class Pagination extends React.Component<PaginationPropsI, {}> {
    pageSizes: Array<number> = [6, 9, 12];
    currentPage: number = this.props.offset / this.props.limit + 1;
    pageButtons: Array<number> = [];
    lastPage: number = Math.ceil(this.props.total / this.props.limit);

    calculatePageButtons = (props: PaginationPropsI): Array<number> => {
        const currentPage = props.offset / props.limit + 1;
        const lastPage = Math.ceil(props.total / props.limit);
        if (lastPage <= 1) {
            return [];
        } else if (currentPage <= 3) {
            return [1, 2, 3, 4, 5].filter(page => page <= lastPage)
        } else if (currentPage >= lastPage - 2) {
            return [lastPage - 4, lastPage - 3, lastPage - 2, lastPage - 1, lastPage].filter(page => page >= 1)
        } else {
            return [currentPage - 2, currentPage - 1, currentPage, currentPage + 1, currentPage + 2]
        }
    };

    componentWillReceiveProps(props: PaginationPropsI): void {
        this.pageButtons = this.calculatePageButtons(props);
        this.currentPage = props.offset / props.limit + 1;
        this.lastPage = Math.ceil(props.total / props.limit);
    };

    calculateOffset = (page: number): number => {
        return (page - 1) * this.props.limit;
    };

    render() {
        let arrowPrev;
        let arrowNext;

        if (this.currentPage !== 1){
            arrowPrev = <button className="pagination-button prev"
                                onClick={() => {this.props.setPage(this.calculateOffset(this.currentPage - 1))}}>
                <i className="arrow left"></i>
            </button>
        }
        if (this.currentPage !== this.lastPage){
            arrowNext = <button className="pagination-button next"
                                onClick={() => {this.props.setPage(this.calculateOffset(this.currentPage + 1))}}>
                <i className="arrow right"></i>
            </button>;
        }

        return (
            <div className="pagination-wrapper">
                <div className="pagination">
                    {arrowPrev}
                    {this.pageButtons.map((item, index) => {
                        if (item === this.currentPage){
                            return <button className="pagination-button current" key={index} onClick={() =>this.props.setPage(this.calculateOffset(item))}>{item}</button>
                        } else {
                            return <button className="pagination-button" key={index} onClick={() =>this.props.setPage(this.calculateOffset(item))}>{item}</button>
                        }
                    })}
                    {arrowNext}
                </div>
                <div className="size-wrapper">
                    <div>Show per page:</div>
                    <div className="size">
                        {this.pageSizes.map((item, index) => {
                            if (item === this.props.limit){
                                return <button className="pagination-button current" key={index} onClick={() => this.props.setSize(item)}>{item}</button>
                            } else {
                                return <button className="pagination-button" key={index} onClick={() => this.props.setSize(item)}>{item}</button>
                            }
                        })}
                    </div>
                </div>
            </div>
        );
    }
}
