import { Helmet } from 'react-helmet-async';

export const Error404 = () => {
    return (
        <>
            <Helmet>
                <title>404 Page not found</title>
                <meta name="viewport" content="width=device-width, initial-scale=1.0" />
                <meta name='description' content="Siden du ledte efter kunne ikke findes." />
                <meta name="robots" content="noindex" />
            </Helmet>
            <h2 style={{fontSize: '5rem', color: 'red', textAlign: 'center', marginTop: '2rem'}}>404</h2>
            <p style={{textAlign: 'center'}}>The file you requested could not be found</p>
        </>
    )
}