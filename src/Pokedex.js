import React, { Component } from 'react';
import Card from './Card';
import './Pokedex.css';

class Pokedex extends Component {

    render() {
        let title = ''
        if (this.props.win) {
            title = <h3 className='Pokedex-Win'>Winning Hand!</h3>

        } else {
            title = <h3 className='Pokedex-loose'>Looser Hand!</h3>

        };
        return (
            <div className='Pokedex'>
                {title}
                <p>Total Exp: {this.props.exp}</p>
                {/* <h3>{this.props.win ? 'Winner' : 'You Lost'}</h3> */}

                <div className='Pokedex-card'>
                    {this.props.pokemon.map(m => (
                        <Card
                            id={m.id} name={m.name} type={m.type} exp={m.exp} />
                    ))}
                </div>


            </div>
        )
    }
}



export default Pokedex;