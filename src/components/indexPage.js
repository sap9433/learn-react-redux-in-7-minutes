/*    eslint indent: 0 */
import React, { Component } from 'react';

import ComponentA from './componentA';
import ComponentB from './componentB';

export default class IndexPage extends Component {
    render() {
        return ( < div >
            < ComponentA / >
            < ComponentB / >
            < /div>
        );
    }
}
