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
        
        const afterNextFrame = frames[nextFrameIndex + 1];
        if (afterNextFrame && isStrike(nextFrame)) {
            score += afterNextFrame[0];
        }
        return score;
    };

    const isLastFrame = (frameIndex) => frames.length - 1 === frameIndex;

    const calculateFrameScore = (frameIndex) => {
        const frame = frames[frameIndex];
        const nextFrameIndex = frameIndex + 1;
        let frameScore = calculateSimpleFrameScore(frame);

        if (isSpare(frame)) {
            frameScore += frames[nextFrameIndex][0];
        }

        if (isStrike(frame)) {
            frameScore += calculateNextStrikesScore(nextFrameIndex);
        }

        if (isLastFrame(frameIndex) && frame[2]) {
            frameScore += frame[2];
        }
        return frameScore;
    };

    let score = 0;
    for (let frameIndex = 0; frameIndex < frames.length; frameIndex++) {
        score += calculateFrameScore(frameIndex);
    }
    return score;
}

module.exports = bowlingScoreCalculator;