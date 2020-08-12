import React from 'react';
import { configure } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
configure({ adapter: new Adapter() });


import { shallow } from 'enzyme';
import Gift from './Gift';

describe ( 'Gift', () => {
  //mocking in jest --faking 
  const mockRemove = jest.fn();
  const id =1;
  //now we assign removeGift to mockRemove instead 
  const props = { gift:{ id}, removeGift: mockRemove};
  const gift = shallow(< Gift {...props} />);

  it('Render correctly', () => {
    expect(gift).toMatchSnapshot();
  });

  it('Initializes a person and present in `state`', () => {
    expect(gift.state()).toEqual({ person: '', present: ''});
  });

  describe('When typing into the person input', () => {
  const person = 'Uncle';

    beforeEach(() => {
      gift.find('.input-person').simulate('change', { target:{ value: person } });
     });

    it('updates the person in `state`', () => {
      expect(gift.state().person).toEqual(person);
    });
  });

  describe('When typing into the present input', () => {
    const present = 'Golf Clubs';
  
     beforeEach(() => {
        gift.find('.input-present').simulate('change', { target:{ value: present } });
        });
  
      it('updates the present in `state`', () => {
        expect(gift.state().present).toEqual(present);
      });
    });
    describe('When clicking the `Remove Gift` button', ()=>{
      beforeEach(()=>{
        gift.find('.btn-remove').simulate('click');
      });
      it('it calls the removeGift callback ', ()=>{
        expect(mockRemove).toHaveBeenCalledWith(id);
      })
    });
}); 