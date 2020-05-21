import { configure } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

configure({ adapter: new Adapter() });
import React from 'react';
import { shallow } from 'enzyme';
import App from './App';

const app = shallow(<App />);

it('renders correctly', () => {
  expect(app).toMatchSnapshot();
});

it('initializes the `state` with an empty list of gifts', ()=>{
expect(app.state().gifts).toEqual([]);
});

it('Add new gifts to `state` when clicking `add gift` button', () =>{
  app.find('.btn-add').simulate('click'); 

  expect(app.state().gifts).toEqual([{ id: 1}]);
});