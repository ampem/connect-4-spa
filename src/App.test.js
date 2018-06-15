import React from 'react';
import ReactDOM from 'react-dom';
import { shallow } from 'enzyme';
import App from './App';

describe('App', () => {
	it('renders correctly', () => {
		const wrapper = shallow(<App />);
		expect(wrapper).toMatchSnapshot();
	});
})
