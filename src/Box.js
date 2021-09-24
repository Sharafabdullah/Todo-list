import React, { Component } from 'react'

export default class Box extends Component {
    static defaultProps={
        color: 'aliceblue'
    }
    render() {
        return (
            <div>
            <div style={{
                backgroundColor: `${this.props.color}`,
                width: `${this.props.width}rem`,
                height: `${this.props.height}rem`
            }}>
                
            </div>
            <button>X</button>
            </div>
        )
    }
}
