import teamStyles from './Team.module.scss'

export const TeamMembers = ({children}) => {
    return (
        <>
            <h2 id="Advokaterne" className={teamStyles.TeamHeader}>MØD HOLDET</h2>
            <section className={teamStyles.Section}>
                {children}
            </section>
        </>
    )
}

export const TeamMember = ({avatar, name, content}) => {
    return (
        <div className={teamStyles.TeamMember}>
            <img src={avatar} alt={name}></img>
            <h3>{name}</h3>
            <p>“{content}”</p>
        </div>
    )
}