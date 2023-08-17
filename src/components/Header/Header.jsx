import styles from './Header.module.css'

function Header(){
    
    return(
        <header className={styles.header}>
            <img className={styles.logo} src="https://campus.devf.la/static/media/logo-devf-white.0e9942b3.svg" alt="" />

            <ul className={styles.nav}>
                <li><a href="#">Inicio</a></li>
                <li><a href="#">Acerca de</a></li>
                <li><a href="#">Servicios</a></li>
                <li><a href="#">Contacto</a></li>
            </ul>
        </header>
    )
}

export default Header