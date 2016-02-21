/*    eslint indent: 0 */
import React, { Component } from 'react';
import { connect } from 'react-redux';
@connect((state) => {
    return {
        colorBinProps: state.colorB
    };
})
export default class ComponentB extends Component {
    render() {
        return ( < div >
            < div style = {
                {
                    color: this.props.colorBinProps
                }
            } >
            I have many colors < /div> < /div>
        );
    }
}
