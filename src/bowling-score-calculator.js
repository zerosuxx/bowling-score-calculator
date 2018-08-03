function bowlingScoreCalculator(frames) {

    const isSpare = (frame) => frame[0] !== 10 && calculateSimpleFrameScore(frame) === 10;

    const isStrike = (frame) => frame[0] === 10; 

    const calculateSimpleFrameScore = (frame) => frame[0] + frame[1];

    const calculateStrikesScore = (frameIndex) => {
        let score = 0;
        if(frames.length > frameIndex+1) {
            score += calculateSimpleFrameScore(frames[frameIndex+1]);
        }
        return score;
    }

    const calculateFrameScore = (frameIndex) => {
        const frame = frames[frameIndex];
        let frameScore = calculateSimpleFrameScore(frame);
        if(isSpare(frame)) {
            frameScore += frames[frameIndex+1][0];
        }
        if(isStrike(frame) ) {
            frameScore += calculateStrikesScore(frameIndex);
            frameScore += calculateStrikesScore(frameIndex+1);
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