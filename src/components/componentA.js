/*    eslint indent: 0 */
import React, { Component } from 'react';
import { connect } from 'react-redux';
import * as colorActionCreator from '../actions/colorAction';
@connect(
    null,
    colorActionCreator
)
export default class ComponentA extends Component {
    render() {
        return ( < div > 
              <button onClick= {() => {
                const randomColor = '#' + Math.random().toString(16).slice(-6);
                this.props.changeColor(randomColor);
            }}>
                 ChangeColor
               </button>
            </div>
            );
    }
}
