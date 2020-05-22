import * as React from 'react';
import './Header.scss';
import {HeaderPropsI} from './Header.interface';


export class Header extends React.Component<HeaderPropsI, {}> {
    query = '';

    setQuery = (): void => {
        this.props.setQuery(this.query)
    };

    handleChange = (event: React.ChangeEvent<HTMLInputElement>): void => {
        this.query = event.target.value;
    };

    render() {
        return (
            <div className="header">
                <input placeholder="What do you want to watch?"
                       className="search"
                       onChange={this.handleChange}
                       onKeyPress={ (event) => {if (event.key === 'Enter'){this.setQuery}} }
                />
                <button className="btn-search"
                        onClick={this.setQuery}
                >Search</button>
            </div>
        );
    }
}
