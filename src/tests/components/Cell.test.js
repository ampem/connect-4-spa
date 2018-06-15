import React from 'react';
import ReactDOM from 'react-dom';
import { shallow } from 'enzyme';
import { RED_PLAYER, YELLOW_PLAYER } from '../../constants/player';
import Cell from '../../components/Cell';

describe('Cell', () => {
	it('renders correctly', () => {
		const wrapper = shallow(<Cell occupiedBy={RED_PLAYER} />);
		expect(wrapper).toMatchSnapshot();
	});

	it('Renders the yellow checker when occupiedBy is YELLOW_PLAYER', () => {
		const wrapper = shallow(<Cell occupiedBy={YELLOW_PLAYER} />);
		expect(wrapper).toMatchSnapshot();
	});
})
