import * as React from 'react';
import './Options.scss';
import {OptionsPropsI, SortOptionI} from './Options.interface';


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
        const arrowClassName = this.props.sortOrder === 'desc' ? 'arrow down' : 'arrow up';
        const arrow = <i className={arrowClassName}></i>;

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
