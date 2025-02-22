import { useState } from 'preact/hooks';
import './app.scss';
import { getAvgRating, getRandomizedQuestions } from './Question';
import QuestionComp from './comp/QuestionComp';
import CookieMsg from './comp/CookieMsg';

export function App() {
    const [showRating, setShowRating] = useState(false);
    const [cookieAllowed, setCookieAllowed] = useState(false);
    const [questions] = useState(getRandomizedQuestions());
    return (
        <>
            <p>
                <i>Answers are generated from ChatGPT</i>
            </p>

            <div className="avg-rating">
                <p>Average Rating: {getAvgRating(questions)}</p>
            </div>
            <button
                className="btn"
                onClick={() => {
                    setShowRating(!showRating);
                }}>
                Toggle Show Rating
            </button>
            <button
                className="btn"
                onClick={() => {
                    localStorage.clear();
                    location.reload();
                }}>
                Reset Storage
            </button>
            <p>{questions.length} questions</p>
            {questions.map((question, i) => (
                <QuestionComp
                    question={question}
                    showRating={showRating}
                    n={i + 1}
                    cookieAllowed={cookieAllowed}
                />
            ))}
            <button
                className="btn"
                onClick={() => {
                    window.scrollTo(0, 0);
                }}>
                Go to top
            </button>
            <button
                className="btn"
                onClick={() => {
                    window.open(
                        'https://github.com/cophilot/promi-stq',
                        '_blank'
                    );
                }}>
                View on GitHub
            </button>
            <CookieMsg
                onAccept={() => {
                    setCookieAllowed(true);
                }}
            />
        </>
    );
}
