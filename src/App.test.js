import Enzyme, { shallow } from 'enzyme';
import EnzymeAdapter from '@wojtekmaj/enzyme-adapter-react-17';

import App from './App';

Enzyme.configure({ adapter: new EnzymeAdapter() });

test('renders without crashing', () => {
  const wrapper = shallow(<App />)
  // console.log(wrapper.debug()); //helpful for debugging, returns the DOM as a string
  // expect(wrapper).toBeTruthy();
});
