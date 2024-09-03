import footerStyle from './Footer.module.scss'

export const Footer = (props) => {

    return (
        <footer id="Kontakt" className={footerStyle.Footer}>
            <div>
                <h4>Adresse</h4>
                <p>Find os her: <br /></p>
                <address>
                    Maldive rd. 22, <br />
                    Seychelle Islands
                </address>
            </div>
            <div>
                <h4>Kontakt</h4>
                <p>Kontakt os her:</p>
                <p>email@email.dk <br />Tlf: 0192 3023</p>
                <p></p>
            </div>
            <div>
                <h4>Politik</h4>
                <p>Vores politikker: <br /></p>
                <p>Privatlivspolitik <br />Cookiepolitik <br />Generelle betingelser</p>
            </div>
            <div>
                <h4>Sociale medier</h4>
                <ul>
                    <li><img src="./assets/Icons/facebook.png" alt="Facebook" /></li>
                    <li><img src="./assets/Icons/linkedin.png" alt="LinkedIn" /></li>
                </ul>
            </div>
        </footer>
    )
}