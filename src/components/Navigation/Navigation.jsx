import navStyle from './Navigation.module.scss'

export const Navigation = () => {

    const NavItems = [
        {
            "item": "Hjem",
            "url": "#Hjem"
        },
        {
            "item": "Advokaterne",
            "url": "#Advokaterne"
        },
        {
            "item": "Om Leo-Lov",
            "url": "#Om-Leo-Lov"
        },
        {
            "item": "Kontakt",
            "url": "#Kontakt"
        }
    ]

    return (
        <nav className={navStyle.Navigation}>
            <ul>
                {NavItems.map((navItem, index) => {
                    return(
                        <li key={index}>
                            <a href={navItem.url}>{navItem.item}</a>
                        </li>
                    )
                })}
            </ul>
            <h2><span className={navStyle.Leo}>Leo</span>-<span className={navStyle.Lov}>Lov</span></h2>
        </nav>
    )
}