import { Helmet } from 'react-helmet-async';
import { PageTitle } from '../components/PageTitle/PageTitle'
import { Header } from '../components/Header/Header'
import { Cards, Card } from '../components/Cards/Cards'
import opengraphFrontpage from '../assets/Images/opengraph/leolov-frontpage.png'

export const Home = () => {
    return (
        <>
            <Helmet>
                <title>Leo-Lov - Verdens Bedste Advokatfirma!</title>
                <meta name='description' content="Leo-Lov's forside" />
                <meta property="og:type" content="website" />
                <meta property="og:title" content="Leo-Lov - Verdens Bedste Advokatfirma!" />
                <meta property="og:description" content="Leo-Lov's forside" />
                <meta property="og:url" content="https://react-leolov.netlify.app/" />
                <meta property="og:image" content={opengraphFrontpage} />
            </Helmet>
            {/* <PageTitle title="Leo-Lov - Verdens Bedste Advokatfirma!" /> */}
            <Header />
            <Cards>
                <Card title="Familieret" content="Familieret er en ret alle har. Har du en familie har du sikkert ret til familieret. Medmindre du altid er den der tror du har ret. Så kan vi desværre ikke hjælpe dig." />
                <Card title="Ejendomsret" content="Har du købt et hus og fortrudt eller er du blevet svindlet? Fortvivl ej. Vi kan hjælpe dig med at komme af med huset, eller eventuelt sagsøge vedkommende der solgte dig det." />
                <Card title="Konkurs" content="Er du gået konkurs ville vi rigtig gerne hjælpe, men det kan vi desværre ikke. Vi er alle advokater med fede biler her så har du ingen penge får du ingen hjælp" />
                <Card title="Selskabsret" content="Selskabsret. Ved du heller aldrig hvilken ret du skal servere til et stort selskab? Heller ikke os. Heldigvis har vi en mand i udlandet der ved en masse om dette så henvend dig i dag." />
            </Cards>
        </>
    )
}