import { useState } from 'preact/hooks';
import { Question } from './Question';

interface QuestionCompProps {
    n: number;
    question: Question;
    showRating?: boolean;
}

export default function QuestionComp({
    n,
    question,
    showRating,
}: QuestionCompProps) {
    const [showAnswer, setShowAnswer] = useState(false);
    const [voted, setVoted] = useState('');
    return (
        <div class="question-box">
            {showRating && (
                <div className={getRatingClass(question.rating)}>
                    {question.rating}
                </div>
            )}
            <div className="modul-nr">Q{n}</div>
            <div className="question">{question.question}</div>
            {showAnswer ? (
                <>
                    <div className="answer">{question.answer}</div>
                    <div className="rating-box">
                        {voted !== 'up' && (
                            <i
                                className={
                                    'bi bi-hand-thumbs-down-fill ' +
                                    (voted === 'down' ? 'blue' : '')
                                }
                                onClick={() => {
                                    if (voted === '') question.rateDown();
                                    setVoted('down');
                                }}></i>
                        )}
                        {voted !== 'down' && (
                            <i
                                className={
                                    'bi bi-hand-thumbs-up-fill ' +
                                    (voted === 'up' ? 'blue' : '')
                                }
                                onClick={() => {
                                    if (voted === '') question.rateUp();
                                    setVoted('up');
                                }}></i>
                        )}
                    </div>
                    <div className="modul-nr">
                        <i>{'#' + question.modulNr}</i>
                    </div>
                </>
            ) : (
                <button
                    className="answer-btn"
                    onClick={() => setShowAnswer(!showAnswer)}>
                    Show
                </button>
            )}
        </div>
    );
}

const getRatingClass = (rating: number) => {
    if (rating > 0) return 'rating green';
    if (rating < 0) return 'rating red';
    return 'rating';
};
