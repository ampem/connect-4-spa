import React from 'react';
import ReactDOM from 'react-dom';
import { shallow } from 'enzyme';
import Game from '../../components/Game';

describe('Game', () => {
	it('renders correctly', () => {
		const wrapper = shallow(<Game />);
		expect(wrapper).toMatchSnapshot();
	});
})
