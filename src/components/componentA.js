/*    eslint indent: 0 */
import React, { Component } from 'react';
import { connect } from 'react-redux';
import * as colorActionCreator from '../actions/colorAction';

class ComponentA extends Component {
    render() {
        return ( < div > 
              <button onClick= {() => {
                const randomColor = '#' + Math.random().toString(16).slice(-6);
                this.props.changeColor(randomColor);
            }}>
                 Change Color.
               </button>
            </div>
            );
    }
}

export default connect(
    null,
    colorActionCreator
)(ComponentA);
