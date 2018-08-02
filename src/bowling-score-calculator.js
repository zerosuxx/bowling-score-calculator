function bowlingScoreCalculator(frames) {
    let score = 0;
    for(let frameIndex = 0; frameIndex < frames.length; frameIndex++) {
        score += frames[frameIndex][0];
    }
    return score;
}

module.exports = bowlingScoreCalculator;
