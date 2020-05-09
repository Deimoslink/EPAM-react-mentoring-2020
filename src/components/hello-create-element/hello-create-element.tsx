import * as React from "react";
import "./hello-create-element.scss";


const headline = React.createElement(
    "h1",
    {},
    "Hello from Typescript and React!"

);
const paragraph = React.createElement(
    "p",
    {},
    "This is rendered from create element component and does not accept props"

);

export const HelloCreateElement = React.createElement(
    "div",
    {
        className: "HelloCreateElement",
    },
    [headline, paragraph]
);
