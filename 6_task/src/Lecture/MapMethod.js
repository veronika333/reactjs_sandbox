/*import React from 'react'

 const MapMethod = () => {
     const myArray = [1 ,2 ,3 ,4 ,5 ,6 ,7 ,8 ,9 ,10];
 const listItems = myArray.map((munumber) => <li>{myumber}</li>);
    return 
        <div>
            {listItems}
        </div>
};
export default MapMethod;*/ 
import React, { Component } from 'react';
const myArray = [1 ,2 ,3 ,4 ,5 ,6 ,7 ,8 ,9 ,10];
 class MapMethod extends Component {
    state = {
        numberList: myArray,
    };
    removeHandler = (listIndex) => {
        // const myOldArray = this.state.numberList;
        // const myOldArray = this.state.numberList.slice();
        const myOldArray = [...this.state.numberList];
        myOldArray.splice(listIndex, 1);
        this.setState({ numberList: myOldArray });
    }
    render() {
        const listItems = this.state.numberList.map((number, index) => 
        (<li key={index} onClick={this.removeHandler.bind(this, index)}>{number}</li>));
        return ( 
            <div>
              <ul>{listItems}</ul>  
            </div>
        );
    }
}

export default MapMethod;