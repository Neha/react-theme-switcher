import React from 'react';
import ReactDOM from 'react-dom';
import Nav from '../components/Nav';
import { shallow } from 'enzyme';

describe ("Nav component" , function() {
    let mountedNav = null;
  

    beforeEach(() => {
        mountedNav = shallow(<Nav/>);
    });

    it ("render <Nav /> without crashing", function(){
        const DIV = document.createElement('div');
        ReactDOM.render(<Nav />, DIV);
    })

    it ("render <Nav />", function(){
        const NavElm = mountedNav.find('nav');
        expect(NavElm.length).toBe(1);
    })

    it ("render UL", function(){
       
    })

    it ("Check Data UL", function(){
       
    })
})
