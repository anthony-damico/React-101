import React from 'react';


//A prop is a value you are passing in (argument if we were in C#)
//State is a variable is that is being internally tracked in the component

class Item extends React.Component {

    //This is state? Not sure i understand the funky syntax. i do understand that it is creating "clicks" variable i think?
    //When you have constructor method:
    constructor(props) {
        super(props)

        //this.state is equal to clicks (key) : 0 (value)
        this.state = {
            clicks: 0,
            totalRemaining: 100,
        }
    }

    //This is a method I will class when onClick= is used
    clickMe() {
        this.setState({
            clicks: this.state.clicks + 1,
            totalRemaining: this.state.totalRemaining - 1
        })

        console.log("I Clicked", this.props.name)
    }

    render() {
        return (
            //Div is needed to wrap HTML code
            <div>
                {/*Everything between {} inside onClick= is javascript. Everything outside is HTML */}
                <h1 onClick={() => this.clickMe()}>Hello From {this.props.name}</h1>
                <span>For the prop {this.props.name}, {this.state.clicks} is the number of clicks. </span>
                <span>The total Remaining is as follows {this.state.totalRemaining}</span>
            </div>
        
        )
    }
}

export default Item; //Take the Item class declared and export it. This allows Item to become "importable" - see import statemnets in app.js as an example