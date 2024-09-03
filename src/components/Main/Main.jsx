import { Cards, Card } from '../Cards/Cards'
import { NoProblemBox } from '../InfoBox/NoProblemBox'
import { GuaranteeBox } from '../InfoBox/GuaranteeBox'
import { TeamMember, TeamMembers } from '../Team/Team'
import { LocationBox } from '../InfoBox/LocationBox'

export const Main = () => {
    return (
        <>
            <Cards>
                <Card title="Familieret" content="Familieret er en ret alle har. Har du en familie har du sikkert ret til familieret. Medmindre du altid er den der tror du har ret. Så kan vi desværre ikke hjælpe dig." />
                <Card title="Ejendomsret" content="Har du købt et hus og fortrudt eller er du blevet svindlet? Fortvivl ej. Vi kan hjælpe dig med at komme af med huset, eller eventuelt sagsøge vedkommende der solgte dig det." />
                <Card title="Konkurs" content="Er du gået konkurs ville vi rigtig gerne hjælpe, men det kan vi desværre ikke. Vi er alle advokater med fede biler her så har du ingen penge får du ingen hjælp" />
                <Card title="Selskabsret" content="Selskabsret. Ved du heller aldrig hvilken ret du skal servere til et stort selskab? Heller ikke os. Heldigvis har vi en mand i udlandet der ved en masse om dette så henvend dig i dag." />
            </Cards>
            <NoProblemBox />
            <GuaranteeBox />
            <TeamMembers>
                <TeamMember avatar="./assets/Images/John-Harbinger.jfif" name="John Harbinger" content="Jeg er den mest successfulde advokat i firmaet. I hvert fald mere end Peter." />
                <TeamMember avatar="./assets/Images/Peter-Parker.jfif" name="Peter Parker" content="Jeg holder af kaffe og så er jeg helt enormt succesfuld. Meget mere end John" />
                <TeamMember avatar="./assets/Images/Elise-Li.jfif" name="Elise Li" content="Uden ret og lov, kunne vi ligeså godt bo i en skov. Sådan har jeg altid sagt. " />
                <TeamMember avatar="./assets/Images/Morten-Nate.jfif" name="Morten Nate" content="Jeg er født på landet. På landet er der ingen ret og lov. Det er det vilde vest derude." />
            </TeamMembers>
            <LocationBox />
        </>
    )
}