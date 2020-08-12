import { configure } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

configure({ adapter: new Adapter() });
//---1 
import React from 'react';
import { shallow } from 'enzyme';
import App from './App';


describe(App, () => {
  const id = 1;
  //--2 we make a local copy of APP comp by  a shallowing render of make a shallow  function App is used as JSX below then we have to write a unit test for it 
  const app = shallow(<App />);
  //3-- now it function for testing wih two parameters(describe the test, function for running the test )
  it('renders correctly', () => {
    //4-- expect is jest function which check if app render correctly with toMatchSnapshot function so now we move to app.js
    expect(app).toMatchSnapshot();
  });
  //--6 we are testing a list 
  it('initializes the `state` with an empty list of gifts', () => {
    expect(app.state().gifts).toEqual([]);
  });

  describe('when clicking the `add gift` button ', () => {
    //--10 making a const for id 
    const id = 1;

    beforeEach(() => {
      app.find('.btn-add').simulate('click');
    });
    // after each reverse the effect of before each so gifts array gets empty
    afterEach(() => {
      app.setState({ gifts: [] })
    });

    it('add a new gifts to `state`', () => {
      expect(app.state().gifts).toEqual([{ id }]);
    });
    //--8 test we can add a gift 
    it('add a new gift to the render list ', () => {
      expect(app.find('.gift-list').children().length).toEqual(1);
    });
    //--9 actual component made -- exists function for true or false 
    it('creates a Gift components', () => {
      expect(app.find('Gift').exists()).toBe(true);
    })

  });
  //-- adding a button to delete a gift
  describe('and the user can remove the added gift', () =>{
    
    beforeEach(() => {
      app.instance().removeGift(id);
    });
    it('removes a gift from `state`' , ()=>{
      expect(app.state().gifts).toEqual([]);
    })
  });

});