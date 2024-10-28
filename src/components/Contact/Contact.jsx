import React from "react";
import { getImageUrl } from "../../utils";
import styles from "./Contact.module.css"

export const Contact = () => {
    return <footer id= 'contact' className={styles.container}>
        <div className={styles.text}>
            <h2>Contact</h2>
            <p>Reach out to me!</p>
            </div>
            <ul className={styles.links}>
            <li className={styles.link}> 
                <img src={getImageUrl('emailIcon.png')} alt='Email'></img>
                <a href = 'mailto:mahamednor780@gmail.com'>mahamednor780@gmail.com</a>
            </li>

            <li className={styles.link}> 
                <img src={getImageUrl('githubIcon.png')} alt='Github'></img>
                <a href = 'https://github.com/o-Mahamed'>My GitHub </a>
            </li>

            <li className={styles.link}> 
                <img src={getImageUrl('linkedinIcon.png')} alt='LinkedIn'></img>
                <a href = 'https://www.linkedin.com/in/mahamed-nor-6b810b2b3/'>My LinkedIn</a>
            </li>


            </ul>
            </footer>
}