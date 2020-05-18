import * as React from 'react';
import { shallow } from 'enzyme';
import {HelloClass} from './hello-class';


it("renders the heading", () => {
    const result = shallow(<HelloClass compiler="TypeScript" framework="React"/>)
        .contains(<h1>Hello from TypeScript and React</h1>);

    expect(result).toBeTruthy();
});
