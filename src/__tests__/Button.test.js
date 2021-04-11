import React from 'react';
import ReactDOM from 'react-dom';
import Button from '../components/Button';
import { shallow } from 'enzyme';

describe("Button Component", function() {
    let btnText = "click";
    let mountedButton = null;

    beforeEach(() => {
        mountedButton = shallow(<Button text={btnText} />);
    })
    
    it ("Button Component renders" , function(){
        const div = document.createElement('div');
        ReactDOM.render(<Button />, div);
    });

    it ("Button Component has shallow" , function(){
       let button  = mountedButton.find('button');
       expect(button.length).toBe(1);
    });

    it ("Button Component has props" , function(){
        let button  = mountedButton.find('button');
        expect(button.text()).toBe(btnText);
     });
 });
