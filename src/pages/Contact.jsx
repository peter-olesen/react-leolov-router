import { Helmet } from 'react-helmet-async';
import { PageTitle } from '../components/PageTitle/PageTitle'
import { ContactForm } from '../components/Contact/Contact'
import opengraphContact from '../assets/Images/opengraph/leolov-contact.png'

export const Contact = () => {
    return (
        <>
            <Helmet>
                <></>
                <title>Kontakt - Leo-Lov</title>
                <meta name='description' content="Leo-Lov's kontakt side" />
                <meta property="og:type" content="website" />
                <meta property="og:title" content="Kontakt - Leo-Lov" />
                <meta property="og:description" content="Leo-Lov's kontakt side" />
                <meta property="og:url" content="https://react-leolov.netlify.app/contact" />
                <meta property="og:image" content={opengraphContact} />
            </Helmet>
            {/* <PageTitle title="Kontakt - Leo-Lov" /> */}
            <ContactForm />
        </>
    )
}