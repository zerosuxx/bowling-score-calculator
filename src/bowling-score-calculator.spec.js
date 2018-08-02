const bowlingScoreCalculator = require('./bowling-score-calculator');

describe('bowlingScoreCalculator', function() {
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
});