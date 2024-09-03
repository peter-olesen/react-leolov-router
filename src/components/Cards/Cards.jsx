import cardStyles from './Cards.module.scss'

export const Cards = ({children}) => {
    return (
        <section id="Om-Leo-Lov" className={cardStyles.Section}>
            {children}
        </section>
    )
}

export const Card = ({title, content}) => {
    return (
        <div className={cardStyles.Card}>
            <h3>{title}</h3>
            <p>{content}</p>
        </div>
    )
}