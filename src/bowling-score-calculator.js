function bowlingScoreCalculator(frames) {
    let score = 0;
    for(let frameIndex = 0; frameIndex < frames.length; frameIndex++) {
        let frameScore = 0;
        frameScore += frames[frameIndex][0];
        frameScore += frames[frameIndex][1];
        if(frameScore === 10) {
            frameScore += frames[frameIndex+1][0];
        }
        score += frameScore;
    }
    return score;
}

module.exports = bowlingScoreCalculator;
