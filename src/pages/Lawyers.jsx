import { Helmet } from 'react-helmet-async';
import { PageTitle } from '../components/PageTitle/PageTitle'
import { TeamMember, TeamMembers } from '../components/Team/Team'

export const Lawyers = () => {
    return (
        <>
            <Helmet>
                <title>Leo-Lov's Advokater</title>
                <meta name="viewport" content="width=device-width, initial-scale=1.0" />
                <meta name='description' content="Leo-Lov's advokater" />
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