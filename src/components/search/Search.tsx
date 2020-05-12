import * as React from 'react';


interface SearchPropsI {
    setQuery: (val: string) => void;
}

export class Search extends React.Component<SearchPropsI, {}> {
    query = '';

    handleChange = (event) => {
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
