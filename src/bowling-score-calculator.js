function bowlingScoreCalculator(frames) {
    let score = 0;
    frames.forEach(frame => {
        score += frame.reduce((a, b) => a + b, 0);
    });
    return score;
}

module.exports = bowlingScoreCalculator;
