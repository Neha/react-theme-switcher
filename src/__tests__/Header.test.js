import React from 'react';
import ReactDOM from 'react-dom';
import { shallow } from 'enzyme';
import Nav from '../components/Nav';
import Header from '../components/Header';

describe ("<Header /> component", function(){
    let mountedHeader = null;
    let h1Text = "Theme Switcher in ReactJS";

    beforeEach(() => {
        mountedHeader = shallow(<Header/>);
    });

    it ("<header/> component render without crashing", function(){
        const DIV = document.createElement('div');
        ReactDOM.render(<Header/>, DIV);
    });

    it ("Header component render", function(){
        const HeaderElm = mountedHeader.find('header');
        expect(HeaderElm.length).toBe(1);
    });

    it ("Header component has H1", function(){
        const HeaderElm = mountedHeader.find('h1');
        expect(HeaderElm.length).toBe(1);
    });

    it ("H1 has the text...", function(){
        const HeaderElm = mountedHeader.find('h1');
        expect(HeaderElm.text()).toBe(h1Text);
    });

    it ("<Nav /> compoment", function(){
        const NavMounted = mountedHeader.find(Nav);
        expect(NavMounted.length).toBe(1);
    });
})