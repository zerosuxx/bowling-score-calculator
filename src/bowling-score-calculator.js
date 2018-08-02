function bowlingScoreCalculator(frames) {

    const isSpare = (frame) => frame[0] !== 10 && simpleFrameScore(frame) === 10;

    const isStrike = (frame) => frame[0] === 10; 

    const simpleFrameScore = (frame) => frame[0] + frame[1];

    const calculateFrameScore = (frameIndex) => {
        const frame = frames[frameIndex];
        let frameScore = simpleFrameScore(frame);
        if(isSpare(frame)) {
            frameScore += frames[frameIndex+1][0];
        }
        if(isStrike(frame)) {
            frameScore += simpleFrameScore(frames[frameIndex+1]);
        }
        return frameScore;
    };

    let score = 0;
    for(let frameIndex = 0; frameIndex < frames.length; frameIndex++) {
        score += calculateFrameScore(frameIndex);
    }
    return score;
}

module.exports = bowlingScoreCalculator;