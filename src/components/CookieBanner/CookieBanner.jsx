import ReactGA from "react-ga4";
import cb from './CookieBanner.module.scss';
import { useEffect, useState } from "react";

export const CookieBanner = () => {
    const [withTracking, setWithTracking] = useState(false);
    const [hasUserCookie, setHasUserCookie] = useState(null);
    const [showConsent, setShowConsent] = useState(false);
    const [showButton, setShowButton] = useState(false);

    useEffect(() => {
        const cookieConsent = localStorage.getItem('cookiesAllowed');

        if (cookieConsent === 'true') {
            setWithTracking(true);
            ReactGA.initialize("G-W4CKHB3Q28");
        }
        setHasUserCookie(cookieConsent);
    }, []);

    const enableGA = () => {
        setWithTracking(true);
        localStorage.setItem('cookiesAllowed', 'true');
        setHasUserCookie('true');
        ReactGA.initialize("G-W4CKHB3Q28");
        setShowConsent(false);
    };

    const disableGA = () => {
        setWithTracking(false);
        localStorage.setItem('cookiesAllowed', 'false');
        setHasUserCookie('false');
        setShowConsent(false);
    };

    const showCookieBanner = () => {
        setShowConsent(true);
        setShowButton(false);
    };
    
    return (
        <>
            {showConsent || hasUserCookie === null ? (
                <div className={cb.CookieBanner}>
                    <div className={cb.buttons}>
                        <button onClick={enableGA}>Accepter alle cookies</button><br />
                        <button onClick={disableGA}>Ingen cookies, tak!</button>
                    </div>
                    <div>
                        <p>Vi bruger cookies til at forbedre din oplevelse på vores hjemmeside. Ved at fortsætte accepterer du vores brug af cookies.</p>
                    </div>
                </div>
            ) : null}

            {(hasUserCookie === 'true' || hasUserCookie === 'false') && !showConsent && (
                <button className={cb.ConsentButton} onClick={showCookieBanner}>Ændre cookieindstillinger</button>
            )}
        </>
    );
};