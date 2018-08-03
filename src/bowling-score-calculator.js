function bowlingScoreCalculator(frames) {
    const isSpare = (frame) => !isStrike(frame) && getFrameScore(frame) === 10;

    const isStrike = (frame) => frame[0] === 10;

    const getFrameScore = (frame) => frame.reduce((previousValue, currentValue) => previousValue + currentValue, 0);

    const calculateNextStrikesScore = (nextFrameIndex) => {
        let strikeScore = 0;

        const nextFrame = frames[nextFrameIndex];
        if (nextFrame) {
            strikeScore += getFrameScore(nextFrame.slice(0, 2));
        }

        const nextNextFrame = frames[nextFrameIndex + 1];
        if (nextNextFrame && isStrike(nextFrame)) {
            strikeScore += nextNextFrame[0];
        }
        return strikeScore;
    };

    const calculateFrameScore = (frame, frameIndex) => {
        let frameScore = getFrameScore(frame);
        const nextFrameIndex = frameIndex + 1;
        const nextFrame = frames[nextFrameIndex];

        if ( nextFrame && isSpare(frame) ) {
            frameScore += nextFrame[0];
        }

        if ( nextFrame && isStrike(frame) ) {
            frameScore += calculateNextStrikesScore(nextFrameIndex);
        }

        return frameScore;
    };

    let score = 0;

    frames.forEach((frame, frameIndex) => score += calculateFrameScore(frame, frameIndex));

    return score;
}

module.exports = bowlingScoreCalculator;