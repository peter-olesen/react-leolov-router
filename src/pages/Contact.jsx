import { Helmet } from 'react-helmet-async';
import { PageTitle } from '../components/PageTitle/PageTitle'
import { ContactForm } from '../components/Contact/Contact'

export const Contact = () => {
    return (
        <>
            <Helmet>
                <></>
                <title>Kontakt - Leo-Lov</title>
                <meta name="viewport" content="width=device-width, initial-scale=1.0" />
                <meta name='description' content="Leo-Lov's kontakt side" />
            </Helmet>
            {/* <PageTitle title="Kontakt - Leo-Lov" /> */}
            <ContactForm />
        </>
    )
}