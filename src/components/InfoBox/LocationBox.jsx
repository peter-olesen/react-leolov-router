import infoStyles from './Boxes.module.scss'

export const LocationBox = () => {
    return (
        <section className={infoStyles.InfoBox}>
            <div className={infoStyles.Left}>
            <iframe defer src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d994.2543149362456!2d55.450099269495645!3d-4.590925362909101!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x22e0287dfa7c5639%3A0x4b3332c69d7bec7d!2sMaldive%20Rd%2C%20Maldive%20Village%2C%20Seychellerne!5e0!3m2!1sda!2sdk!4v1723793983723!5m2!1sda!2sdk" width="100%" height="100%" style={{border:0}} allowFullScreen="" loading="lazy" referrerPolicy="no-referrer-when-downgrade"></iframe>
            </div>
            <div className={infoStyles.Right}>
                <h2>HER BOR VI</h2>
                <p>Vi har valgt at bosætte os i solen!</p>
                <p>Her er dejlig varmt og ikke ret mange fattige mennesker. Det nyder vi rigtig meget. </p>
                <p>“Hvis du har råd til at tage til Sechellerne har du råd til os”. <br /> Det er et af vores utallige motto´er.</p>
                <p className={infoStyles.blueText}>
                    Leo-Lov ApS <br />
                    Maldive rd. 22 <br />
                    Seychelles
                </p>
            </div>
        </section>
    )
}