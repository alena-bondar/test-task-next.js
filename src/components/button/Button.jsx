import styles from './index.scss'

export const Button = ({ iconShown, icon, title, className, iconClassName, iconName, onClick}) => {

    return (
        <div className={className}>
            <button onClick={onClick}>
                {iconShown && <img src={icon} className={iconClassName} alt={iconName}/>}
                {title}
            </button>
        </div>
    )
}