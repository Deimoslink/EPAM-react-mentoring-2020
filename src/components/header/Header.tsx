import * as React from 'react';
import './Header.scss';


interface HeaderPropsI {
    setQuery: (val: string) => void;
}

export class Header extends React.Component<HeaderPropsI, {}> {
    query = '';

    handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        this.query = event.target.value;
    };

    render() {
        return (
            <div className="header">
                <input placeholder="What do you want to watch?"
                       className="search"
                       onChange={this.handleChange}
                       onKeyPress={ (event) => {if (event.key === 'Enter'){this.props.setQuery(this.query)}} }
                />
                <button className="btn-search"
                        onClick={() => {this.props.setQuery(this.query)}}
                >Search</button>
            </div>
        );
    }
}
