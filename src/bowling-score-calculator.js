function bowlingScoreCalculator(frames) {
    const calculateFrameScore = (frameIndex) => {
        let frameScore = 0;
        frameScore += frames[frameIndex][0];
        frameScore += frames[frameIndex][1];
        if(frameScore === 10) {
            frameScore += frames[frameIndex+1][0];
        }
        return frameScore;
    } 

    let score = 0;
    for(let frameIndex = 0; frameIndex < frames.length; frameIndex++) {
        score += calculateFrameScore(frameIndex);
    }
    return score;
}

module.exports = bowlingScoreCalculator;