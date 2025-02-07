import React from 'react';
import styles from '../styles/Prix.module.css';

export default function Page() {
    return (
        <div className={styles.container}>
            <h1 className={styles.title}>Prix et Abonnement</h1>

            <div className={styles.content}>
                {/* Avertissement */}
                <div className={styles.warning}>
                    ⚠️ <strong>Âge minimum requis : 8 ans</strong>
                </div>

                {/* Tarifs */}
                <div className={styles.section}>
                    <h2 className={styles.sectionTitle}>Tarifs</h2>
                    <ul className={styles.list}>
                        <li className={styles.listItem}>Prix d’une partie : <span>18€</span></li>
                        <li className={styles.listItem}>Seconde partie : <span>15€</span></li>
                        <li className={styles.listItem}>Partie suivante : <span>14€</span></li>
                        <li className={styles.listItem}>Durée d’une session : <span>20 minutes</span></li>
                    </ul>
                </div>

                {/* Abonnement SuperMax */}
                <div className={styles.section}>
                    <h2 className={styles.sectionTitle}>Abonnement SuperMax</h2>
                    <ul className={styles.list}>
                        <li className={styles.listItem}>Premier mois : <span>80€</span></li>
                        <li className={styles.listItem}>Renouvellement : <span>60€</span></li>
                        <li className={styles.listItem}>Limite de parties par jour : <span>Max 3 parties par jour</span></li>
                    </ul>
                </div>

                {/* Équipements */}
                <div className={styles.section}>
                    <h2 className={styles.sectionTitle}>Nos équipements</h2>
                    <p>Nous mettons à disposition une large gamme d’équipements pour vous offrir la meilleure expérience :</p>
                    <div className={styles.equipmentList}>
                        <div className={styles.equipmentItem}>
                            <p>🎯 Cible de fléchettes</p>
                            <img src="/images/darts.jpg" alt="Cible de fléchettes" className={styles.image} />
                        </div>
                        <div className={styles.equipmentItem}>
                            <p>🏒 Table d’air hockey</p>
                            <img src="/images/airhockey.jpg" alt="Table d’air hockey" className={styles.image} />
                        </div>
                        <div className={styles.equipmentItem}>
                            <p>🥊 Punching ball arcade</p>
                            <img src="/images/punchingball.jpeg" alt="Punching ball arcade" className={styles.image} />
                        </div>
                        <div className={styles.equipmentItem}>
                            <p>🏀 Basket arcade</p>
                            <img src="/images/basket.jpg" alt="Basket arcade" className={styles.image} />
                        </div>
                        <div className={styles.equipmentItem}>
                            <p>🎮 Simulateur de course</p>
                            <img src="/images/simulator.avif" alt="Simulateur de course" className={styles.image} />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}