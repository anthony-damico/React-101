import React from 'react';

class StarWars extends React.Component {
    constructor(props) {
        super(props)

        //Set the state to blank on setup
        this.state = {
            name: null,
            height: null,
            homeworld: null,
            films: [],
        }
    }

    //Everytime getNewCharacter() is called, we need to update the state
    getNewCharacter() {
        console.log("Get new character from a button")
        this.setState({
            name: 'Luke',
            height: 172,
            homeworld: 'Tatooine',
            films: ['item 1', 'item 2'],
        })
    }

    render() {
        return (
        <div>
            <h1>{this.state.name}</h1>
            <p>{this.state.height} (cm)</p>
            <p>Homeworld: {this.state.homeworld}</p>
            <ul>
                <li>{this.state.films}</li>
            </ul>
            <button type="button" onClick={() => this.getNewCharacter()} className="btn">Randomize Character</button>
            </div>
        )    
    }
}

export default StarWars;