import React from 'react';
import ReactDOM from 'react-dom';
import { shallow } from 'enzyme';
import { RED_PLAYER, YELLOW_PLAYER } from '../../constants/player';
import Column from '../../components/Column';

describe('Column', () => {
	it('renders correctly', () => {
		const wrapper = shallow(
			<Column
				cells={[RED_PLAYER, YELLOW_PLAYER]}
				clickHandler={jest.fn()}
			/>);
		expect(wrapper).toMatchSnapshot();
	});

	it('Renders empty columns correctly', () => {
		const wrapper = shallow(
			<Column
				cells={[]}
				clickHandler={jest.fn()}
			/>);
		expect(wrapper).toMatchSnapshot();
	});

	it('Renders correctly if no cells are passed', () => {
		const wrapper = shallow(
			<Column
				clickHandler={jest.fn()}
			/>);
		expect(wrapper).toMatchSnapshot();
	});
})
