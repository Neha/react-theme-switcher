import React from 'react';
import ReactDOM from 'react-dom';
import Toggle from '../components/Toggle';
import App from '../App';
import { shallow } from 'enzyme';

describe("<App /> component ", function(){

    let mountedApp = null;
    let mountToggle = null;
    let themeChangeFn = jest.fn;
    let text = 'Click here';

    beforeEach(() => {
        mountedApp = shallow(<App />);
        mountToggle = shallow(<Toggle themeChange={themeChangeFn} text={text}/>);
    });

    it ('renders <App/> without crashing', function(){
        let DIV = document.createElement('div');
        ReactDOM.render(<App/>, DIV);
    });

    it('renders Home component', function(){
        let mountHome = mountedApp.find('Home');
        expect(mountHome.length).toBe(1);
    });

    it('renders Toggle component', function(){
        let mountToggle = mountedApp.find('Toggle');
        expect(mountToggle.length).toBe(1);
    });


    it('renders Footer component', function(){
        let mountFooter = mountedApp.find('Footer');
        expect(mountFooter.length).toBe(1);
    });

})