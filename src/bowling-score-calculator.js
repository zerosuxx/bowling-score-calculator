function bowlingScoreCalculator(frames) {
    let score = 0;
    for(let frameIndex = 0; frameIndex < frames.length; frameIndex++) {
        score += frames[frameIndex][0];
        score += frames[frameIndex][1];
        if(score === 10) {
            score += frames[frameIndex+1][0];
        }
    }
    return score;
}

module.exports = bowlingScoreCalculator;
