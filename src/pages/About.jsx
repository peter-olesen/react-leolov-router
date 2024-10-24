import { Helmet } from 'react-helmet-async';
import { PageTitle } from '../components/PageTitle/PageTitle'
import { NoProblemBox } from '../components/InfoBox/NoProblemBox'
import { GuaranteeBox } from '../components/InfoBox/GuaranteeBox'
import opengraphAbout from '../assets/Images/opengraph/leolov-about.png'

export const About = () => {
    return (
        <>
            <Helmet>
                <title>Om Leo-Lov</title>
                <meta name='description' content="Om Leo-Lov siden" />
                <meta property="og:type" content="website" />
                <meta property="og:title" content="Om Leo-Lov" />
                <meta property="og:description" content="Om Leo-Lov siden" />
                <meta property="og:url" content="https://react-leolov.netlify.app/about" />
                <meta property="og:image" content={opengraphAbout} />
            </Helmet>
            {/* <PageTitle title="Om Leo-Lov" /> */}
            <NoProblemBox />
            <GuaranteeBox />
        </>
    )
}