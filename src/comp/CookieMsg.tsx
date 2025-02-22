import { useEffect, useState } from 'preact/hooks';

const ALLOWED_KEY = 'promi-stq-cookie-allowed';

interface CookieMsgProps {
    onAccept: () => void;
}

export default function CookieMsg({ onAccept }: CookieMsgProps) {
    const [show, setShow] = useState(false);

    useEffect(() => {
        const cookieAllowed = localStorage.getItem(ALLOWED_KEY);
        if (cookieAllowed) {
            onAccept();
            return;
        }
        setShow(true);
    }, []);
    if (!show) return null;

    return (
        <div className="cookie-msg">
            <p>
                This website uses cookies to store statistics about the
                questions you rate. By clicking "Accept", you agree to store
                cookies.
            </p>
            <div>
                <button
                    className="btn"
                    onClick={() => {
                        setShow(false);
                    }}>
                    Decline
                </button>
                <button
                    className="btn"
                    onClick={() => {
                        localStorage.setItem(ALLOWED_KEY, 'true');
                        setShow(false);
                        onAccept();
                    }}>
                    Accept
                </button>
            </div>
        </div>
    );
}
