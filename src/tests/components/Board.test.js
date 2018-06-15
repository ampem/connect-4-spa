import React from 'react';
import ReactDOM from 'react-dom';
import { shallow } from 'enzyme';
import { RED_PLAYER, YELLOW_PLAYER } from '../../constants/player';
import Board from '../../components/Board';


describe('Board', () => {
    it('renders correctly', () => {
        const wrapper = shallow(<Board />);
        expect(wrapper).toMatchSnapshot();
    });
    it('renders `win` message on win condition', () => {
        const wrapper = shallow(<Board />);
        wrapper.setState({winner: RED_PLAYER});
        expect(wrapper.find('div.board-winner-message').length).toBe(1);
    });
    it('hides next player info on win condition', () => {
        const wrapper = shallow(<Board />);
        wrapper.setState({winner: RED_PLAYER});
        expect(wrapper.find('div.board-player').length).toBe(0);
    });
    it('shows the `draw` message on `draw` condition', () => {
        const wrapper = shallow(<Board />);
        wrapper.setState({
            draw: true
        });
        expect(wrapper.find('div.board-draw-message').length).toBe(1);
    });

    describe('addCellToColumn', () => {
        it('Does not add over 6 markers', () => {
            const wrapper = shallow(<Board />);
            wrapper.setState({
                currentPlayer: RED_PLAYER,
                winner: null,
                columns: [Array(6).fill(RED_PLAYER),[],[],[],[],[],[]]
            });
            wrapper.instance().addCellToColumn(0);
            expect(wrapper.state().columns[0].length).toBe(6)
        });
        it('Does nothing if the game is already won', () => {
            const wrapper = shallow(<Board />);
            wrapper.setState({
                winner: RED_PLAYER
            });
            wrapper.instance().addCellToColumn(0);
            expect(wrapper.state().columns[0].length).toBe(0)
        });
        it('Adds the next marker to the column', () => {
            const wrapper = shallow(<Board />);
            wrapper.setState({
                currentPlayer: RED_PLAYER,
                winner: false,
                draw: false,
                columns: [[RED_PLAYER],[],[],[],[],[],[]]
            });
            wrapper.instance().addCellToColumn(0);
            expect(wrapper.state().columns).toEqual({
                    '0':[RED_PLAYER, YELLOW_PLAYER],
                    '1':[],
                    '2':[],
                    '3':[],
                    '4':[],
                    '5':[],
                    '6':[]
                });
        });
        it('Alternates currentPlayer after adding a marker', () => {
            const wrapper = shallow(<Board />);
            wrapper.setState({
                currentPlayer: RED_PLAYER,
                winner: false,
                columns: [[RED_PLAYER],[],[],[],[],[],[]]
            });
            wrapper.instance().addCellToColumn(0);
            expect(wrapper.state().currentPlayer).toBe(YELLOW_PLAYER);
            wrapper.instance().addCellToColumn(0);
            expect(wrapper.state().currentPlayer).toBe(RED_PLAYER);
        });
    });
});
