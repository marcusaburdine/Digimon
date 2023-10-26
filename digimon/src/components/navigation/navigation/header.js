import { Link } from "react-router-dom"
import styles from './header.module.css'


export default function Header() {

    return (

        <>
            <div className={styles.header}>
                < Link className={styles.link} to="/home"><strong>HOME</strong></Link><br/>
                < Link className={styles.link} to="/digiDex"><strong >DIGIDEX</strong></Link><br/>
                < Link className={styles.link} to="/game"><strong>GAME</strong></Link><br/>
            </div>
        </>

    )
}

