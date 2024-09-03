import { PageTitle } from '../components/PageTitle/PageTitle'
import { NoProblemBox } from '../components/InfoBox/NoProblemBox'
import { GuaranteeBox } from '../components/InfoBox/GuaranteeBox'

export const About = () => {
    return (
        <>
            <PageTitle title="Om Leo-Lov" />
            <NoProblemBox />
            <GuaranteeBox />
        </>
    )
}