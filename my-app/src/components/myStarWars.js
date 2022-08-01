import React from 'react';

class StarWars extends React.Component {
  render() {
    return (
      <div>
          <h1>Name</h1>
          <p>Height (cm)</p>
          <p>Homeworld: URL GOES HERE</p>
          <ul>
              <li>Films: GO HERE</li>
          </ul>
          <button type="button" className="btn">Randomize Character</button>
      </div>
    )    
  }
}

export default StarWars;