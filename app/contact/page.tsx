// app/contact/page.tsx
import Link from "next/link";

export default function ContactPage() {
    return (
        <div className="bg-gray-900 text-white min-h-screen flex flex-col items-center justify-center py-8">
            <div className="container mx-auto px-6 md:px-12">
                <h1 className="text-4xl font-bold text-blue-500 text-center mb-8">Contactez-nous</h1>

                <div className="bg-gray-800 p-6 rounded-lg shadow-lg mb-6">
                    <h2 className="text-blue-400 text-2xl font-semibold mb-4">Adresse Mail</h2>
                    <p className="text-lg mb-4">
                        Pour toute question, vous pouvez nous contacter par mail à l&apos;adresse suivante :
                    </p>
                    <a
                        href="mailto:driveandscore@gmail.com"
                        className="text-blue-400 hover:text-blue-700 text-lg font-semibold"
                    >
                        driveandscore@gmail.com
                    </a>
                </div>

                <div className="bg-gray-800 p-6 rounded-lg shadow-lg">
                    <h2 className="text-blue-400 text-2xl font-semibold mb-4">Réseaux Sociaux</h2>
                    <p className="text-lg mb-4">Suivez-nous sur nos réseaux sociaux :</p>
                    <ul className="space-y-4">
                        <li>
                            <Link
                                href="https://x.com/DriveScore123"
                                target="_blank"
                                className="text-blue-400 hover:text-blue-700 text-lg font-semibold"
                            >
                                Twitter (X)
                            </Link>
                        </li>
                        <li>
                            <Link
                                href="https://www.facebook.com/profile.php?id=61572786510074"
                                target="_blank"
                                className="text-blue-400 hover:text-blue-700 text-lg font-semibold"
                            >
                                Facebook
                            </Link>
                        </li>
                        <li>
                            <Link
                                href="https://www.instagram.com/drivescore123/"
                                target="_blank"
                                className="text-blue-400 hover:text-blue-700 text-lg font-semibold"
                            >
                                Instagram
                            </Link>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    );
}
