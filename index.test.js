const {sequelize} = require('./db')
const {
    Cheese, 
    Board, 
    User
} = require('./models')

describe('Cheese-Board Integrity checks', () => {
    beforeAll(async () => {
        await sequelize.sync({ force: true });
    });
    
    describe('Cheese integrity', () => {
        test('Can create a Cheese', async () => {
            const testCheese = await Cheese.create({ title: 'Uncle Roger', description: 'Tastes like FAILURE'});

            expect(testCheese.title).toBe('Uncle Roger');
            expect(testCheese.description).toBe('Tastes like FAILURE');
        });
    });

    describe('Board integrity', () => {
        test('Can create a Board', async () => {
            const testBoard = await Board.create({ type: 'boardType', description: 'boardDescription', rating: 8 });

            expect(testBoard.type).toBe('boardType');
            expect(testBoard.description).toBe('boardDescription');
            expect(testBoard.rating).toBe(8);
        });
    });

    describe('User integrity', () => {
        test('Can create a User', async () => {
            const testUser = await User.create({ name: 'Steven', email: 'Steven@failure.com' });

            expect(testUser.name).toBe('Steven');
            expect(testUser.email).toBe('Steven@failure.com');
        })
    })
});
/*------------------------------------------------------- WIP
describe('Cheese-Board Assosciation checks', () => {
    beforeAll(async () => {
        await sequelize.sync({ force: true });
    });
    
    describe("`User` and `Board` models with a One-to-Many")
    test('One `User` can have many `Board`', async () => {
        const testUser = await User.create({ name: 'Steven', email: 'Steven@failure.com' });
        const testBoard = await Board.create([{ type: 'board1', description: 'board1Description', rating: 8 },{ type: 'board2', description: 'board2Description', rating: 9 }]);

    });
    WIP --------------------------------------------------------*/

});