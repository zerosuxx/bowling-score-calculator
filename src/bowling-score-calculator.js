function bowlingScoreCalculator(frames) {
    const isSpare = (frame) => frame[0] !== 10 && calculateSimpleFrameScore(frame) === 10;

    const isStrike = (frame) => frame[0] === 10;

    const calculateSimpleFrameScore = (frame) => frame[0] + frame[1];

    const calculateWholeFrameScore = (frame) => frame.reduce((previousValue, currentValue) => previousValue + currentValue, 0);

    const calculateNextStrikesScore = (nextFrameIndex) => {
        let strikeScore = 0;

        const nextFrame = frames[nextFrameIndex];
        if (nextFrame) {
            strikeScore += calculateSimpleFrameScore(nextFrame);
        }

        const nextNextFrame = frames[nextFrameIndex + 1];
        if (nextNextFrame && isStrike(nextFrame)) {
            strikeScore += nextNextFrame[0];
        }
        return strikeScore;
    };

    const calculateFrameScore = (frame, frameIndex) => {
        let frameScore = calculateWholeFrameScore(frame);
        const nextFrameIndex = frameIndex + 1;
        const nextFrame = frames[nextFrameIndex];

        if (isSpare(frame) && nextFrame) {
            frameScore += nextFrame[0];
        }

        if (isStrike(frame) && nextFrame) {
            frameScore += calculateNextStrikesScore(nextFrameIndex);
        }

        return frameScore;
    };

    let score = 0;

    frames.forEach((frame, frameIndex) => score += calculateFrameScore(frame, frameIndex));

    return score;
}

module.exports = bowlingScoreCalculator;