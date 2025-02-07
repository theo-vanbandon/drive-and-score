import Link from "next/link";
import styles from './styles/Home.module.css';

export default function Home() {
    return (
        <div className="min-h-screen bg-gray-900 text-white flex flex-col items-center justify-center px-4">
            <h1 className="text-5xl font-bold mb-6 text-center">
                Bienvenue sur <span className="titreHome">Drive & Score</span>
            </h1>
            <p className="text-lg text-gray-300 mb-8 text-center max-w-2xl">
                Le premier concept en France combinant karting et football dans une expérience unique et immersive.
            </p>
            <Link
                href="/modes"
                className={`${styles.button} ${styles.primaryButton}`}
            >
                Découvrir le concept
            </Link>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-12 w-full max-w-5xl">
                <div className={`${styles.card} bg-gray-800 p-6 rounded-2xl shadow-lg`}>
                    <h3 className="text-xl font-semibold text-blue-400">Circuits uniques</h3>
                    <p className="text-gray-400 mt-2">Des circuits inspirés des meilleurs tracés pour une immersion totale.</p>
                    <Link
                        href="/circuits"
                        className={`${styles.button} ${styles.secondaryButton}`}
                    >
                        Explorer les circuits
                    </Link>
                </div>
                <div className={`${styles.card} bg-gray-800 p-6 rounded-2xl shadow-lg`}>
                    <h3 className="text-xl font-semibold text-blue-400">Expérience fun</h3>
                    <p className="text-gray-400 mt-2">Jouez en équipe et marquez des buts tout en pilotant votre kart.</p>
                    <Link
                        href="/modes"
                        className={`${styles.button} ${styles.secondaryButton}`}
                    >
                        En savoir plus
                    </Link>
                </div>
                <div className={`${styles.card} bg-gray-800 p-6 rounded-2xl shadow-lg`}>
                    <h3 className="text-xl font-semibold text-blue-400">Accessible à tous</h3>
                    <p className="text-gray-400 mt-2">Que vous soyez débutant ou expert, profitez d&apos;une expérience inédite.</p>
                    <Link
                        href="/prix"
                        className={`${styles.button} ${styles.secondaryButton}`}
                    >
                        Voir les prix
                    </Link>
                </div>
            </div>
        </div>
    );
}
