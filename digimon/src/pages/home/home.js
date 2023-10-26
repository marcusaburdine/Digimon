import Header from "../../components/navigation/navigation/header"
import styles from "./home.module.css"



export default function Home() {

    return (
        <>
            <Header />
            <div className= {styles.container}>
                <p> hello</p>
            </div>
        </>
    )
}