import React from 'react'
import styles from "../Footer/Footer.module.css"

const Footer = () => {
    return (
        <footer className={styles.container}>   
            <div className={styles.footerText}>
                <p>© 2023 Cupcake Palace. All rights reserved.</p>
            </div>
        </footer>
    )
};

export default Footer