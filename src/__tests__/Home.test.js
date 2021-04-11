import ReactDOM from 'react-dom';
import Home from '../pages/Home';
import Header from '../components/Header';
import Button from '../components/Button';
import { shallow } from 'enzyme';

describe("<Home> component" , function(){
   let mountedHome = null;
    
   beforeEach(()=>{
        mountedHome = shallow(<Home />);
    })

    it ("Home Component renders" , function(){
        const div = document.createElement('div');
        ReactDOM.render(<Home />, div);
    });

    it ("renders Header component", function(){
        const header = mountedHome.find(Header);
        expect(header.length).toBe(1);
    });

    it ("renders Button component", function(){
        const button = mountedHome.find(Button);
        expect(button.length).toBe(1);
    });


})