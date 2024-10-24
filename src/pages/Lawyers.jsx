import { Helmet } from 'react-helmet-async';
import { PageTitle } from '../components/PageTitle/PageTitle'
import { TeamMember, TeamMembers } from '../components/Team/Team'
import opengraphLawyers from '../assets/Images/opengraph/leolov-lawyers.png'


export const Lawyers = () => {
    return (
        <>
            <Helmet>
                <title>Leo-Lov's Advokater</title>
                <meta name='description' content="Leo-Lov's advokater" />
                <meta property="og:type" content="website" />
                <meta property="og:title" content="Leo-Lov's Advokater" />
                <meta property="og:description" content="Leo-Lov's advokater" />
                <meta property="og:url" content="https://react-leolov.netlify.app/lawyers" />
                <meta property="og:image" content={opengraphLawyers} />
            </Helmet>
            {/* <PageTitle title="Leo-Lov's Advokater" /> */}
            <TeamMembers>
                <TeamMember avatar="./assets/Images/John-Harbinger.jfif" name="John Harbinger" content="Jeg er den mest successfulde advokat i firmaet. I hvert fald mere end Peter." />
                <TeamMember avatar="./assets/Images/Peter-Parker.jfif" name="Peter Parker" content="Jeg holder af kaffe og så er jeg helt enormt succesfuld. Meget mere end John" />
                <TeamMember avatar="./assets/Images/Elise-Li.jfif" name="Elise Li" content="Uden ret og lov, kunne vi ligeså godt bo i en skov. Sådan har jeg altid sagt. " />
                <TeamMember avatar="./assets/Images/Morten-Nate.jfif" name="Morten Nate" content="Jeg er født på landet. På landet er der ingen ret og lov. Det er det vilde vest derude." />
            </TeamMembers>
        </>
    )
}