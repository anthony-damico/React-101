import React from 'react';

class StarWars extends React.Component {
    getNewCharacter() {
        console.log("Get new character from a button")
    }

    render() {
        return (
        <div>
            <h1>Name</h1>
            <p>Height (cm)</p>
            <p>Homeworld: URL GOES HERE</p>
            <ul>
                <li>Films: GO HERE</li>
            </ul>
            <button type="button" onClick={() => this.getNewCharacter()} className="btn">Randomize Character</button>
            </div>
        )    
    }
}

export default StarWars;