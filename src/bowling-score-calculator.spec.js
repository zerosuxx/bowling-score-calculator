const bowlingScoreCalculator = require('./bowling-score-calculator');

describe('bowlingScoreCalculator', function () {
    it('should not throw exception', function () {
        expect(bowlingScoreCalculator([[0, 0], [0, 0], [0, 0], [0, 0], [0, 0], [0, 0], [0, 0], [0, 0], [0, 0], [0, 0]])).to.be.not.throw;
    });

    it('should return 0', function () {
        expect(bowlingScoreCalculator([[0, 0], [0, 0], [0, 0], [0, 0], [0, 0], [0, 0], [0, 0], [0, 0], [0, 0], [0, 0]])).to.be.equals(0);
    });

    it('should return 1', function () {
        expect(bowlingScoreCalculator([[1, 0], [0, 0], [0, 0], [0, 0], [0, 0], [0, 0], [0, 0], [0, 0], [0, 0], [0, 0]])).to.be.equals(1);
    });

    it('should return 4', function () {
        expect(bowlingScoreCalculator([[2, 0], [2, 0], [0, 0], [0, 0], [0, 0], [0, 0], [0, 0], [0, 0], [0, 0], [0, 0]])).to.be.equals(4);
    });

    it('should return 5', function () {
        expect(bowlingScoreCalculator([[2, 0], [2, 0], [0, 1], [0, 0], [0, 0], [0, 0], [0, 0], [0, 0], [0, 0], [0, 0]])).to.be.equals(5);
    });

    it('should handle spare', function () {
        expect(bowlingScoreCalculator([[2, 8], [1, 0], [0, 0], [0, 0], [0, 0], [0, 0], [0, 0], [0, 0], [0, 0], [0, 0]])).to.be.equals(12);
    });

    it('should handle multiple spare', function () {
        expect(bowlingScoreCalculator([[2, 8], [3, 7], [5, 0], [0, 0], [0, 0], [0, 0], [0, 0], [0, 0], [0, 0], [0, 0]])).to.be.equals(33);
    });

    it('should handle strike', function () {
        expect(bowlingScoreCalculator([[10, 0], [5, 2], [0, 0], [0, 0], [0, 0], [0, 0], [0, 0], [0, 0], [0, 0], [0, 0]])).to.be.equals(24);
    });

    it('should handle simple rolling after two strike', function () {
        expect(bowlingScoreCalculator([[10, 0], [10, 0], [5, 0], [0, 0], [0, 0], [0, 0], [0, 0], [0, 0], [0, 0], [0, 0]])).to.be.equals(45);
    });

    it('should handle all strike', function () {
        expect(bowlingScoreCalculator([[10, 0], [10, 0], [10, 0], [10, 0], [10, 0], [10, 0], [10, 0], [10, 0], [10, 0], [10, 10, 10]])).to.be.equals(300);
    });

    it('should handle strike after spare', function () {
        expect(bowlingScoreCalculator([[5, 5], [10, 0], [0, 0], [0, 0], [0, 0], [0, 0], [0, 0], [0, 0], [0, 0], [0, 0]])).to.be.equals(30);
    });

    it('should handle strike after two spare', function () {
        expect(bowlingScoreCalculator([[9, 1], [8, 2], [10, 0], [3, 1], [0, 0], [0, 0], [0, 0], [0, 0], [0, 0], [0, 0]])).to.be.equals(56);
    });

    it('should handle last triple strike after spare', function () {
        expect(bowlingScoreCalculator([[0, 0], [0, 0], [0, 0], [0, 0], [0, 0], [0, 0], [0, 0], [0, 0], [5, 5], [10, 10, 10]])).to.be.equals(50);
    });

    it('should handle spare and strike ping pong', function () {
        expect(bowlingScoreCalculator([[5, 5], [10, 0], [1, 9], [10, 0], [2, 8], [10, 0], [7, 3], [10, 0], [0, 10], [10, 10, 10]])).to.be.equals(210);
    });

    it('should handle 20 rolls: 10 pairs of 9 and miss', function () {
        expect(bowlingScoreCalculator([[9, 0], [9, 0], [9, 0], [9, 0], [9, 0], [9, 0], [9, 0], [9, 0], [9, 0], [9, 0]])).to.be.equals(90);
    });

    it('should handle spare and strike after last strike', function () {
        expect(bowlingScoreCalculator([[0, 0], [0, 0], [0, 0], [0, 0], [0, 0], [0, 0], [0, 0], [0, 0], [10, 0], [5, 5, 10]])).to.be.equals(40);
    });
});