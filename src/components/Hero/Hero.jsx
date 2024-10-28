import React from "react";
import { getImageUrl } from "../../utils";
import styles from "./Hero.module.css";

export const Hero = () => {
    return <section className={styles.container}>
        <div className={styles.content}><h1 className={styles.title}>Hi, My name is Mahamed</h1>
        <p className={styles.description}>
          I'm a Computer Science student attending Toronto Metropolitan University.
          This is my portfolio page! Here, my experience, description, education, and 
          projects are shown.   
        </p>
        <a className={styles.contactBtn} href="mailto:mahamednor780@gmail.com">Contact Me</a>
            </div>
            <img className={styles.heroImg} src={getImageUrl("pfp.png")} alt="image of me"></img>
    </section>

}