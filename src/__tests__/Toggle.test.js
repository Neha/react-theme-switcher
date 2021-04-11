import ReactDOM from 'react-dom';
import React from 'react';
import { shallow } from 'enzyme';
import Toggle from '../components/Toggle';

describe ("<Toggle/> Component", function(){
    let toggleMounted = null;
    let ButtonText = 'Click Here';
    let themeChangeFn = jest.fn();

    beforeEach(() => {
        toggleMounted = shallow(<Toggle themeChange={themeChangeFn} text={ButtonText}/>);
    });

    it ('renders without crashing', function(){
        const DIV = document.createElement('div');
        ReactDOM.render(<Toggle />, DIV);
    });

    it ('renders <Toggle/>', function(){
       const toggle = toggleMounted.find('button');
       expect(toggle.length).toBe(1);
    });

    it ('props are passing', function(){
        const toggle = toggleMounted.find('button');
        expect(toggle.text()).toBe(ButtonText);
    });

    it ('click event', function(){
        const toggle = toggleMounted.find('button');
        toggle.simulate('click');
        expect(themeChangeFn.mock.calls.length).toEqual(1);
       
    });
})