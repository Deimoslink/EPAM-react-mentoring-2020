import * as React from 'react';
import {ErrorInfo} from 'react';

interface ErrorBoundaryStateI {
    errorInfo: ErrorInfo,
    error: Error
}

export class ErrorBoundary extends React.Component<any, ErrorBoundaryStateI> {
    state: ErrorBoundaryStateI = {
        errorInfo: null,
        error: null
    };

    constructor(props: any) {
        super(props);
    }

    componentDidCatch(error: Error, errorInfo: ErrorInfo) {
        this.setState({
            error: error,
            errorInfo: errorInfo
        })
    }

    render() {
        if (this.state.errorInfo) {
            return (
                <div>
                    <h2>Something went wrong.</h2>
                    <details style={{ whiteSpace: 'pre-wrap' }}>
                        {this.state.error && this.state.error.toString()}
                        <br />
                        {this.state.errorInfo.componentStack}
                    </details>
                </div>
            );
        }
        return this.props.children;
    }
}
