import React,  { Component } from 'react';
import './style.css';

export default class LunchPlace extends Component {
    render() {
        const {name, address, menu} = this.props;
        return (
            <div id="lunchList">
                <h3 className="lunchPlaceTitle">{name}</h3>
                <p className="lunchPlaceAddress">{address}</p>
                <p className="lunchPlaceMenu">
                    {menu.map(function(menuItem){
                        return (
                            <p>{menuItem}</p>
                        )
                    })}
                </p>
            </div>
        )
    }
}