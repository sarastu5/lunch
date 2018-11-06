import React,  { Component } from 'react';

export default class LunchPlace extends Component {
    render() {
        const {name, address, menu} = this.props;
        return (
            <div>
                <h1>{name}</h1>
                <p>{address}<br/>
                {menu}</p>
            </div>
        )
    }
}