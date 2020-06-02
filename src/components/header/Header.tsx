import * as React from 'react';
import './Header.scss';
import {HeaderPropsI} from './Header.interface';


export class Header extends React.Component<HeaderPropsI, {query: string}> {

    constructor (props: HeaderPropsI) {
        super(props);
        this.state = {
            query: props.query,
        };
    }

    setQuery = (): void => {
        this.props.setQuery(this.state.query)
    };

    handleChange = (event: React.ChangeEvent<HTMLInputElement>): void => {
        this.setState({query: event.target.value});
    };

    componentDidMount() {
        this.setQuery();
    }

    render() {
        return (
            <div className="header">
                <input placeholder="What do you want to watch?"
                       className="search"
                       onChange={this.handleChange}
                       value={this.state.query}
                />
                <button className="btn-search"
                        onClick={this.setQuery}
                >Search</button>
            </div>
        );
    }
}
