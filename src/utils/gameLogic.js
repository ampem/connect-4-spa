function getCell(x, y, columns) {
    const column = columns[x];
    if(!column) { return false; }
    const columnLength = column.length;
    if (y < columnLength){
        return column[y];
    }
    else{
        return false;
    }
};

function isDraw(columns) {
    //If the length of every column is 6
    for(let i = 0; i < 6; i++) {
        if (columns[i] && columns[i].length < 6) {
            return false;
        }
    }
    return true;
};

function isWinningMove(x, y, columns) {
    const player = columns[x][y];
    //Horizontal checks
    if( x < 4 && columns[x+1][y] === player && columns[x+2][y] === player && columns[x+3][y] === player) {
        return player;
    } else if ( x > 2 && columns[x-1][y] === player && columns[x-2][y] === player && columns[x-3][y] === player) {
        return player;
    } else if (y > 2 && columns[x][y-1] === player && columns[x][y-2] === player && columns[x][y-3] === player) {
        return player;
    } else if(
        (x > 2) && (y > 2) &&
        (getCell(x - 1, y-1, columns) === player) &&
        (getCell(x - 2, y-2, columns) === player) &&
        (getCell(x - 3, y-3, columns) === player)
    ) {
        return player;
    } else if(
        (x > 2) && (y < 3) &&
        (getCell(x - 1, y+1, columns) === player) &&
        (getCell(x - 2, y+2, columns) === player) &&
        (getCell(x - 3, y+3, columns) === player)
    ) {
        return player;
    } else if(
        (x < 4) && (y < 3) &&
        (getCell(x + 1, y+1, columns) === player) &&
        (getCell(x + 2, y+2, columns) === player) &&
        (getCell(x + 3, y+3, columns) === player)
    ) {
        //Diagonal check SW to NE
        return player;
    } else if(
        (x < 4) && (y > 2) &&
        (getCell(x + 1, y-1, columns) === player) &&
        (getCell(x + 2, y-2, columns) === player) &&
        (getCell(x + 3, y-3, columns) === player)
        ) {
        //Diagonal check NW to SE
        return player;
    } else if(
        (x < 6) &&
        (getCell(x + 1, y, columns) === player) &&
        (getCell(x - 1, y, columns) === player) &&
        (getCell(x - 2, y, columns) === player)
    ) {
        return player;
    } else if(
        (x < 5) &&
        (getCell(x - 1, y, columns) === player) &&
        (getCell(x + 1, y, columns) === player) &&
        (getCell(x + 2, y, columns) === player)
        ) {
        return player;
    }
    return false;
};

module.exports = {
    getCell: getCell,
    isDraw: isDraw,
    isWinningMove: isWinningMove
};
