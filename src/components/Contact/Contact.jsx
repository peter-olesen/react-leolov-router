import contact from './Contact.module.scss'
import { LocationBox } from '../../components/InfoBox/LocationBox'

export const ContactForm = () => {
    return (
        <section className={contact.ContactSection}>
            <h2 className={contact.ContactHeader}>KONTAKT</h2>
            <LocationBox />
        </section>
    )
}