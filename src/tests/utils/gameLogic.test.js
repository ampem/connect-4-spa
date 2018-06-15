import { RED_PLAYER, YELLOW_PLAYER } from '../../constants/player';
import gameLogic from '../../utils/gameLogic';


describe('gameLogic', () => {
    const [RP,YP] = [RED_PLAYER, YELLOW_PLAYER];
    const exampleColumns = {
        'firstColumnFull': [Array(6).fill(RED_PLAYER),[],[],[],[],[],[]],
        'drawState': {
            0: [RP, YP, RP, YP, RP, YP],
            1: [RP, YP, RP, YP, RP, YP],
            2: [YP, RP, YP, RP, YP, RP],
            3: [RP, YP, RP, YP, RP, YP],
            4: [YP, RP, YP, RP, YP, RP],
            5: [RP, YP, RP, YP, RP, YP],
            6: [RP, YP, RP, YP, RP, YP]
        },
        'NtoS': {
            0:[], 1:[], 2:[], 3:[], 4:[],
            5:[RP, RP, RP],
            6:[YP, YP, YP, YP]
        },
        'WtoE': {
            0: [YP, RP],
            1: [YP, RP],
            2: [YP, RP],
            3: [YP],
            4: [], 5: [], 6: []
        },
        'EtoW': {
            0:[], 1:[], 2:[],
            3:[YP],
            4:[YP, RED_PLAYER],
            5:[YP, RED_PLAYER],
            6:[YP, RED_PLAYER]
        },
    }
    describe('getCell', () => {
        it('Returns cell value', () => {
            const res = gameLogic.getCell(0, 0, exampleColumns['firstColumnFull']);
            expect(res).toBe(RED_PLAYER);
        });
        it('Returns false for a nonexistent cell', () => {
            const res = gameLogic.getCell(0, 8, exampleColumns['firstColumnFull']);
            expect(res).toBe(false);
        });
        it('Returns false for a nonexistent column', () => {
            const res = gameLogic.getCell(8, 8, exampleColumns['firstColumnFull']);
            expect(res).toBe(false);
        });
    });

    describe('isDraw', () => {
        it('Returns false if the board is not in `drawn` state', () => {
            const res = gameLogic.isDraw(exampleColumns['firstColumnFull']);
            expect(res).toBe(false);
        });
        it('Returns true if the board is in `drawn` state', () => {
            const res = gameLogic.isDraw(exampleColumns['drawState']);
            expect(res).toBe(true);
        });
    });
    describe('isWinningMove', () => {
        it('detects win conditions', () => {
            expect(gameLogic.isWinningMove(6, 3, exampleColumns['NtoS'])).toBe(YELLOW_PLAYER);
            expect(gameLogic.isWinningMove(3, 0, exampleColumns['WtoE'])).toBe(YELLOW_PLAYER);
            expect(gameLogic.isWinningMove(3, 0, exampleColumns['EtoW'])).toBe(YELLOW_PLAYER);
        });
    });
});
