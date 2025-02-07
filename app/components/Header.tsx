import Link from "next/link";
import { FaHome, FaMap, FaPlay, FaShoppingCart, FaEnvelope } from 'react-icons/fa';
import styles from '../styles/Header.module.css';

export default function Header() {
    return (
        <header className="bg-gray-900 text-white py-4">
            <div className="container mx-auto flex justify-between items-center px-4">
                {/* Logo */}
                <div className="text-2xl font-bold text-blue-500">
                    <Link href="/" style={{ textDecoration: 'none', color: "#59F68F" }}>Drive & Score</Link>
                </div>

                {/* Menu */}
                <nav>
                    <ul className="flex space-x-6">
                        <li className="flex items-center">
                            <FaHome className={`h-5 w-5 mr-3 hover:text-blue-500 ${styles.iconBorder}`} />
                            <Link href="/" style={{ textDecoration: 'none' }} className="green">Accueil</Link>
                        </li>
                        <li className="flex items-center">
                            <FaMap className={`h-5 w-5 mr-3 hover:text-blue-500 ${styles.iconBorder}`} />
                            <Link href="/circuits" style={{ textDecoration: 'none' }} className="green">Circuits</Link>
                        </li>
                        <li className="flex items-center">
                            <FaPlay className={`h-5 w-5 mr-3 hover:text-blue-500 ${styles.iconBorder}`} />
                            <Link href="/modes" style={{ textDecoration: 'none' }} className="green">Modes de Jeu</Link>
                        </li>
                        <li className="flex items-center">
                            <FaShoppingCart className={`h-5 w-5 mr-3 hover:text-blue-500 ${styles.iconBorder}`} />
                            <Link href="/prix" style={{ textDecoration: 'none' }} className="green">Prix et abonnement</Link>
                        </li>
                        <li className="flex items-center">
                            <FaEnvelope className={`h-5 w-5 mr-3 hover:text-blue-500 ${styles.iconBorder}`} />
                            <Link href="/contact" style={{ textDecoration: 'none' }} className="green">Contact</Link>
                        </li>
                    </ul>
                </nav>
            </div>
        </header>
    );
}
