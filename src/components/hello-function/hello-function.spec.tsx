import * as React from 'react';
import { shallow } from 'enzyme';
import {HelloFunction} from './hello-function';


it("renders the heading", () => {
    const result = shallow(<HelloFunction compiler="TypeScript" framework="React"/>)
        .contains(<h1>Hello from TypeScript and React!</h1>);

    expect(result).toBeTruthy();
});
