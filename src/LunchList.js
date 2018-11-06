import React, { Component } from 'react';
import LunchPlace from './lunchPlace';
import './style.css';

export default class LunchList extends Component {
    render() {
        const lunchList = [
            { name: "lunch1", address: "plaaplaa 1", menu: "kakkaa" },
            { name: "lunch2", address: "plaaplaa2", menu: "pissaa" },
            { name: "lunch3", address: "plaaplaa2", menu: "jotain" }
        ];
        return (
            <div>
                {/* TODO: tee hienon näköinen */}
                {/* TODO: muuta menu listaksi, jossa on monta juttua */}
                {/* TODO: käyttöliittymä: nappi */}
                <h1>Lounaspaikkoja</h1>
                {lunchList.map(function (lunchPlace) {
                        return (
                            <LunchPlace name={lunchPlace.name} address={lunchPlace.address} menu={lunchPlace.menu} />
                        )
                    }
                )}
            </div>
        );
    }
}

