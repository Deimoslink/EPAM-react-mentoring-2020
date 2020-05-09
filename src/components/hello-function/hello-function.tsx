import * as React from "react";
import "./hello-function.scss";
import {HelloProps} from '../../core/interface';


export const HelloFunction = (props: HelloProps) => (
    <div className="HelloFunction">
        <h1>
            Hello from {props.compiler} and {props.framework}!
        </h1>
        <p>This is rendered from functional component</p>
    </div>
);
