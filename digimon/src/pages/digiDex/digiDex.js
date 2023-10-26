import { useState, useEffect } from "react";
import styles from "./digiDex.module.css"
import Header from "../../components/navigation/navigation/header"



export default function DigiDex() {

    return (
        <>
            <Header />
            <div className= {styles.container}>
                <p> hello</p>
            </div>
        </>
    )
}