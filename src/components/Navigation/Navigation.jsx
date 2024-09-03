import { NavLink } from 'react-router-dom'
import navStyle from './Navigation.module.scss'

export const Navigation = () => {

    const NavItems = [
        {
            "item": "Hjem",
            "url": "/"
        },
        {
            "item": "Advokaterne",
            "url": "lawyers"
        },
        {
            "item": "Om Leo-Lov",
            "url": "about"
        },
        {
            "item": "Kontakt",
            "url": "contact"
        }
    ]

    return (
        <nav className={navStyle.Navigation}>
            <ul>
                {NavItems.map((navItem, index) => {
                    return(
                        <li key={index}>
                            <NavLink className={({ isActive }) => isActive ? navStyle.active : ''} to={navItem.url}>{navItem.item}</NavLink>
                        </li>
                    )
                })}
            </ul>
            <h2><span className={navStyle.Leo}>Leo</span>-<span className={navStyle.Lov}>Lov</span></h2>
        </nav>
    )
}