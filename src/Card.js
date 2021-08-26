import React, { Component } from 'react';
import './Card.css';

const poki = 'https://assets.pokemon.com/assets/cms2/img/pokedex/detail/';

// 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/';

let addZero = x => x <= 999 ? `00${x}`.slice(-3) : x;

class Card extends Component {
    render() {
        let imgSrc = `${poki}${addZero(this.props.id)}.png`;
        // console.log(imgSrc);
        return (
            <div className='Card'>
                <h1 className='Card-name'>{this.props.name}</h1>
                <div className='Card-img'><img src={imgSrc} alt={this.props.name} /></div>
                <p className='Card-p'>Type: {this.props.type}</p>
                <p className='Card-exp'>EXP: {this.props.exp}</p>
            </div>
        );

    };
};

export default Card;