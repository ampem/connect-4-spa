import React from 'react';
import PropTypes from 'prop-types';
import { RED_PLAYER } from '../constants/player';
import redCircle from '../assets/red.svg';
import yellowCircle from '../assets/yellow.svg';
import '../styles/cell.css';


function Cell({occupiedBy}) {
	const checkerImage = (occupiedBy === RED_PLAYER)?redCircle:yellowCircle;
    return (
        <div
          className="checker"
        >
        	<img src={checkerImage} className="checker-image" alt="checker" />
        </div>
       );
}

Cell.propTypes = {
	occupiedBy: PropTypes.string.isRequired
}

export default Cell;
