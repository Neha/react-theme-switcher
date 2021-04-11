import Footer from '../components/Footer';
import ReactDOM from 'react-dom';
import React from 'react';
import { shallow } from 'enzyme';

describe("<Footer /> component", function(){
    let mountedFooter = null;
    let FooterText = "Your speed doesn't matter, forward is forward";

    beforeEach(() => {
        mountedFooter = shallow(<Footer />);
    });

    it ('Footer component renders without crashing', function(){
        const DIV = document.createElement('div');
        ReactDOM.render(<Footer />, DIV);
    });

    it('Footer Component mount', function(){
        const Footer = mountedFooter.find("footer");
        expect(Footer.length).toBe(1);
    });

    it('Footer Component text', function(){
        const Footer = mountedFooter.find("footer");
        expect(Footer.text()).toBe(FooterText);
    });
})