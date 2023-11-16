import styles from './index.scss'

export const Header = () => {

    return (
        <header className="header">
            <div className="header__container">
                <h2 className="header__logo">Logo</h2>
                <div className="header__search-container">
                    <input type="text" placeholder="Search" className="header__search-input"/>
                    <img src="/search.svg" alt="logo" className="header__search-icon" />
                </div>
            </div>
        </header>
    )
}