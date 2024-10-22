import { Helmet } from 'react-helmet-async';
import { PageTitle } from '../components/PageTitle/PageTitle'
import { NoProblemBox } from '../components/InfoBox/NoProblemBox'
import { GuaranteeBox } from '../components/InfoBox/GuaranteeBox'

export const About = () => {
    return (
        <>
            <Helmet>
                <title>Om Leo-Lov</title>
                <meta name="viewport" content="width=device-width, initial-scale=1.0" />
                <meta name='description' content="Om Leo-Lov siden" />
            </Helmet>
            {/* <PageTitle title="Om Leo-Lov" /> */}
            <NoProblemBox />
            <GuaranteeBox />
        </>
    )
}