function bowlingScoreCalculator(frames) {
    let score = 0;
    score += frames[0][0];
    score += frames[1][0];
    return score;
}

module.exports = bowlingScoreCalculator;
