import * as React from "react";
import * as ReactDOM from "react-dom";
import {HelloFunction} from './components/hello-function/hello-function';
import {HelloClass} from './components/hello-class/hello-class';
import cheetah from './assets/cheetah.jpg';
import {HelloCreateElement} from './components/hello-create-element/hello-create-element';


ReactDOM.render(
    <div>
        <HelloFunction compiler="TypeScript" framework="React" />
        <HelloClass compiler="TypeScript" framework="React"/>
        <div id="placeForHelloCreateElement"></div>
        <img src={cheetah} alt=""/>
    </div>,
    document.getElementById("app")
);

ReactDOM.render(HelloCreateElement, document.getElementById("placeForHelloCreateElement"));
