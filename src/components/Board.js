import React, { Component } from 'react';
import keys from 'lodash/keys';
import { RED_PLAYER, YELLOW_PLAYER } from '../constants/player';
import { isDraw, isWinningMove } from '../utils/gameLogic.js';
import Cell from './Cell';
import Column from './Column';
import styles from '../styles/board.css';

class Board extends Component {
    constructor(props) {
        super(props);
        this.state = {
            currentPlayer: RED_PLAYER,
            winner: false,
            draw: false,
            columns: [[],[],[],[],[],[],[]]
        };
    }

    renderColumns() {
        const columns = this.state.columns;
        return keys(columns).sort().map( (_,i) => <Column
                key={i}
                cells={columns[i]}
                clickHandler={() => this.addCellToColumn(i)}
            /> );
    }

    addCellToColumn(columnId) {
        if(this.state.columns[columnId].length > 5) {
            return;
        }
        if(this.state.winner || this.state.draw){
            return;
        }
        const currentPlayer = (this.state.currentPlayer === RED_PLAYER) ? YELLOW_PLAYER : RED_PLAYER;
        const columns = {
            ...this.state.columns,
            [columnId]: [...this.state.columns[columnId], currentPlayer]
        };
        const rowId = this.state.columns[columnId].length;
        const winner = isWinningMove(columnId, rowId, columns);
        const draw = isDraw(columns);
        this.setState({columns, currentPlayer, winner, draw});
    }

    render() {
        const nextPlayer = (this.state.currentPlayer === RED_PLAYER) ? YELLOW_PLAYER : RED_PLAYER;
        const winner = this.state.winner;
        const draw = this.state.draw;

        return (
            <section>
                <div className="board-mask"></div>
                <div className="board-columns">
                    {this.renderColumns()}
                </div>
                { !winner &&
                    <div className="board-player">Next Player:
                        <Cell occupiedBy={nextPlayer} />
                    </div>
                }
                { winner && <div className="board-winner-message">You WON!!!</div> }
                { draw && <div className="board-draw-message">Draw!!!</div> }
            </section>
        );
    }
}

export default Board;
