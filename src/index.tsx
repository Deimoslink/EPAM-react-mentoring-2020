import * as React from "react";
import * as ReactDOM from "react-dom";
import {HelloFunction} from './components/hello-function/hello-function';
import {HelloClass} from './components/hello-class/hello-class';
import cheetah from './assets/cheetah.jpg';


ReactDOM.render(
    <div>
        <HelloFunction compiler="TypeScript" framework="React" />
        <HelloClass compiler="TypeScript" framework="React"/>
        <img src={cheetah} alt=""/>
    </div>,
    document.getElementById("app")
);
