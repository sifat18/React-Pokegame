import React, { Component } from "react";
import './Pokegame.css';
import Pokedex from './Pokedex';

class Pokegame extends Component {
    static defaultProps = {
        pokemon: [
            { id: 4, name: 'Charmender', type: 'Fire', exp: 62 },
            { id: 7, name: 'Squritle', type: 'Water', exp: 63 },
            { id: 11, name: 'Metapod', type: 'Bug', exp: 72 },
            { id: 12, name: 'Butterfree', type: 'Flying', exp: 165 },
            { id: 25, name: 'Pikachu', type: 'Electric', exp: 112 },
            { id: 39, name: 'Jiggly', type: 'Normal', exp: 225 },
            { id: 94, name: 'Genger', type: 'Poison', exp: 56 },
            { id: 133, name: 'Evee', type: 'Normal', exp: 66 },
        ]
    };
    render() {
        let hand1 = [];
        let hand2 = [...this.props.pokemon];
        while (hand1.length < hand2.length) {
            let randi = Math.floor(Math.random() * hand2.length);
            let randPoke = hand2.splice(randi, 1)[0];
            hand1.push(randPoke);

        };
        let exp1 = hand1.reduce((e, pokemon) => e + pokemon.exp, 0);
        let exp2 = hand2.reduce((e, pokemon) => e + pokemon.exp, 0);
        return (
            <div class='Pokegame'>
                <h1>Pokegame!</h1>
                <Pokedex pokemon={hand1} exp={exp1} win={exp1 > exp2} />
                <Pokedex pokemon={hand2} exp={exp2} win={exp2 > exp1} />
            </div>
        );
    }
}
export default Pokegame;