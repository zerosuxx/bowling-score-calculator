function bowlingScoreCalculator(frames) {

    const isSpare = (frame) => frame[0] !== 10 && calculateSimpleFrameScore(frame) === 10;

    const isStrike = (frame) => frame[0] === 10;

    const calculateSimpleFrameScore = (frame) => frame[0] + frame[1];

    const calculateStrikesScore = (frameIndex) => {
        let score = 0;

        if (frames.length > frameIndex) {
            score = calculateSimpleFrameScore(frames[frameIndex]);
        }
        return score;
    };

    const isLastFrame = (frameIndex) => frames.length - 1 === frameIndex;

    const calculateFrameScore = (frameIndex) => {
        const frame = frames[frameIndex];
        const nextFrameIndex = frameIndex + 1;
        let frameScore = calculateSimpleFrameScore(frame);

        if (frames.length === nextFrameIndex) {
            return frameScore;
        }

        if (isSpare(frame)) {
            frameScore += frames[nextFrameIndex][0];
        }

        if(isStrike(frame) && isLastFrame(frameIndex)) {
            if(frame[2]) {
                frameScore += frame[2];
            }
        } else if (isStrike(frame)) {
            frameScore += calculateStrikesScore(nextFrameIndex);
            frameScore += calculateStrikesScore(nextFrameIndex + 1);
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