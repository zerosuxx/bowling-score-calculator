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

  it('should handle spare return 12', function () {
    expect(bowlingScoreCalculator([[2, 8], [1, 0], [0, 0], [0, 0], [0, 0], [0, 0], [0, 0], [0, 0], [0, 0], [0, 0]])).to.be.equals(12);
  });

  it('should handle multiple spare return 33', function () {
    expect(bowlingScoreCalculator([[2, 8], [3, 7], [5, 0], [0, 0], [0, 0], [0, 0], [0, 0], [0, 0], [0, 0], [0, 0]])).to.be.equals(33);
  });

  it('should handle strike return 24', function () {
    expect(bowlingScoreCalculator([[10, 0], [5, 2], [0, 0], [0, 0], [0, 0], [0, 0], [0, 0], [0, 0], [0, 0], [0, 0]])).to.be.equals(24);
  });

  it('should handle strike after strike', function () {
    expect(bowlingScoreCalculator([[10, 0], [10, 0], [5, 0], [0, 0], [0, 0], [0, 0], [0, 0], [0, 0], [0, 0], [0, 0]])).to.be.equals(45);
  });


  it('should handle all strike', function () {
    expect(bowlingScoreCalculator([[10, 0], [10, 0], [10, 0], [10, 0], [10, 0], [10, 0], [10, 0], [10, 0], [10, 0], [10, 10, 10]])).to.be.equals(300);
  });
});