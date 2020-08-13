import React, { Component } from 'react';
import { Button } from 'react-bootstrap';
 import Gift from './Gift';
 import {max_number} from '../helper';


//--5 to pass our first test we make the App comp
class App extends Component {
  //--7 to add state to comp we need to add constructor the add state
  constructor() {
    super();

    this.state = { gifts: [] };
    //gift is an object { id: value }
  }
  //make a function to add gift when button clicks 
  addGift = () => {
    //getting local copy of the gifts array by deconstruction
    const { gifts } = this.state;

    // so we grab the array of ids below 
    //const ids = ;
    // max function taking any parameters and returns the max value by getting the length of id  
    //first time we run the add gift there won't be any id so it would be 0 so we only use max_id when we have something in an array so we use conditional below

    //const max_id = ids.length > 0 ? Math.max(...ids) : 0;
   // const max_id = max_number(ids);
    //we are pushing new object to the local copy which is a new gift key is id value is max id 

    // we use +1 to max id be unique not the one that already exist
    gifts.push({ id: max_number(this.state.gifts.map(gift => gift.id))+ 1 });
    //update the state gi
    this.setState({ gifts });
  }

  removeGift = id =>{
    const gifts  = this.state.gifts.filter(gift => gift.id !== id );
   
    this.setState({ gifts });
  }
  render() {
    return (
      <div>
        <h2>List My Gifts</h2>
        <div className="gift-list">
          {
            this.state.gifts.map(gift => {
              return (
                <Gift 
                key={gift.id}
                gift={gift}
                removeGift={this.removeGift}
                />
              )
            })
          }
        </div>
        <Button className='btn-add' onClick={this.addGift}>Add gift</Button>
      </div>
    )
  }
}
export default App;


