import React from "react";
import { getImageUrl } from "../../utils";
import styles from "./About.module.css";

export const About = () => {
    return <section className= {styles.container} id="about">
        <h2 className={styles.title}>About</h2>
    <div className={styles.content}>
        <img src={getImageUrl("ipurple.png")} alt="i icon"></img>
        <ul className={styles.aboutItems}><li className={styles.aboutItem}>
            <img src = {getImageUrl("cursorIcon.png")} alt="Cursor"></img>
            <div className={styles.aboutItemText}>
                <h3>Novice Frontend Developer</h3>
                <p>I'm a novice in frontend development, with experience in building web applications,
                    and this website.
                </p>
            </div>
            </li>

            <li className={styles.aboutItem}>
            <img src = {getImageUrl("serverIcon.png")} alt="Cursor"></img>
            <div className={styles.aboutItemText}>
                <h3>Novice Backend Developer</h3>
                <p>I'm a novice in backend development, developing back-end systems and APIs.</p>
            </div>
            </li>


            <li className={styles.aboutItem}>
            <img src = {getImageUrl("uiIcon.png")} alt="Cursor"></img>
            <div className={styles.aboutItemText}>
                <h3>University Student</h3>
                <p>I'm a second year student attending TMU, gaining experience
                    in OOP, data structures, and mastering the basics of programming.
                </p>
            </div>
            </li>
            
            </ul>

    </div>
    </section>
}