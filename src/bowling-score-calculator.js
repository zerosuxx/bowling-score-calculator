function bowlingScoreCalculator(frames) {

    const isSpare = (frame) => frame[0] !== 10 && calculateSimpleFrameScore(frame) === 10;

    const isStrike = (frame) => frame[0] === 10;

    const calculateSimpleFrameScore = (frame) => frame[0] + frame[1];

    const calculateNextStrikesScore = (nextFrameIndex) => {
        let score = 0;

        const nextFrame = frames[nextFrameIndex];
        if (nextFrame) {
            score = calculateSimpleFrameScore(nextFrame);
        }
        
        const nextNextFrame = frames[nextFrameIndex + 1];
        if (nextNextFrame && isStrike(nextFrame)) {
            score += nextNextFrame[0];
        }
        return score;
    };

    const isLastFrame = (frameIndex) => frames.length - 1 === frameIndex;

    const calculateFrameScore = (frame, frameIndex) => {
        let frameScore = calculateSimpleFrameScore(frame);
        const nextFrameIndex = frameIndex + 1;
        const nextFrame = frames[nextFrameIndex];

        if (isSpare(frame) && nextFrame) {
            frameScore += frames[nextFrameIndex][0];
        }

        if (isStrike(frame) && nextFrame) {
            frameScore += calculateNextStrikesScore(nextFrameIndex);
        }

        if (isLastFrame(frameIndex) && frame[2]) {
            frameScore += frame[2];
        }
        return frameScore;
    };

    let score = 0;
    frames.forEach(function(frame, frameIndex) {
        score += calculateFrameScore(frame, frameIndex);
    });
    return score;
}

module.exports = bowlingScoreCalculator;