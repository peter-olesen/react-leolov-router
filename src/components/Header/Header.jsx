import headerStyle from './Header.module.scss'

export const Header = () => {
    return (
        <header id="Hjem" className={headerStyle.Header}>
            <div>
                <h1><span className={headerStyle.Leo}>Leo</span>-Lov</h1>
                <p>Lov og ret kan være et plaster! Hvis du ellers har knaster!</p>
            </div>
        </header>
    )
}