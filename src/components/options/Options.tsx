import * as React from 'react';
import './Options.scss';
import {setOptionAction} from '../../core/actions/actions';


interface SortOptionI {
    id: string;
    name: string;
}

interface OptionsPropsI {
    setSort: (val: string) => void;
    setOption: (val: string) => void;
    toggleDropdown: (val: boolean) => void;
    sortOrder: string;
    selectedOption: string;
    showDropdown: boolean;
}

export class Options extends React.Component<OptionsPropsI, {}> {
    sortOptionsMap: any = {
        'release_date': 'Release Date',
        'vote_average': 'Average Rate',
        'vote_count': 'Most Rated'
    };
    options: Array<SortOptionI> = [
        {
            id: 'release_date',
            name: 'Release date'
        },
        {
            id: 'vote_average',
            name: 'Average rate'
        },
        {
            id: 'vote_count',
            name: 'Most rated'
        }
    ];

    setOption = (item: SortOptionI): void => {
        this.props.setOption(item.id);
        this.props.toggleDropdown(!this.props.showDropdown)
    };

    render() {
        // const arrowClassName= this.props.sortOrder === 'desc' ? 'down' : 'up';
        // const arrow = <i className='arrow ${arrowClassName}'></i>;
        let arrow;
        if (this.props.sortOrder === 'desc'){
            arrow = <i className="arrow down"></i>;
        } else {
            arrow = <i className="arrow up"></i>;
        }


        let dropdown;
        if (this.props.showDropdown === true){
            dropdown =
                <ul className="dropdown">{this.options.map((item: SortOptionI, index: number) => {
                    return <li className="option" key={index}
                               onClick={this.setOption.bind(this, item)}>
                        {item.name}
                    </li>
                })}
                </ul>
        }


        return (
            <section className="sort-options">
                <h5>Sort by: </h5>
                <div className="selected-option"
                     onClick={() => this.props.toggleDropdown(!this.props.showDropdown)}>
                    {this.sortOptionsMap[this.props.selectedOption]}
                </div>
                <div className="arrow-wrapper" onClick={() => {this.props.setSort(this.props.sortOrder === 'asc' ? 'desc' : 'asc')}}>{arrow}</div>
                {dropdown}
            </section>
        );
    }
}
