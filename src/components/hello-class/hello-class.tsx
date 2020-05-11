import * as React from 'react';
import './hello-class.scss';
import {HelloProps} from '../../core/interface';


export class HelloClass extends React.Component<HelloProps, {}> {
    render() {
        return (
            <div className="HelloClass">
                <h1>
                    Hello from {this.props.compiler} and {this.props.framework}
                </h1>
                <p>This is rendered from class component</p>
                <p>Current environment is {process.env.NODE_ENV}</p>
            </div>

        );
    }
}
