import React from 'react';
import PropTypes from 'prop-types';
import { RED_PLAYER, YELLOW_PLAYER } from '../constants/player';
import Cell from './Cell';
import '../styles/column.css';


function Column({cells=[], clickHandler}) {
    return (
        <div className="column" onClick={clickHandler}>
            { cells.map((occupier,i)=><Cell key={i} occupiedBy={occupier} />)}
        </div>
    );
}

Column.propTypes = {
	cells: PropTypes.arrayOf(PropTypes.oneOf([RED_PLAYER, YELLOW_PLAYER])),
	clickHandler: PropTypes.func.isRequired
}

export default Column;
