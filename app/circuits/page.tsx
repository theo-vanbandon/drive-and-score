import Image from "next/image";

export default function Page() {
    return (
        <div className="min-h-screen bg-gray-900 text-white flex flex-col items-center justify-center px-4 py-8">
            <h1 className="text-4xl font-bold mb-6 text-center text-blue-500">Nos Circuits</h1>
            <p className="text-lg text-gray-300 mb-8 text-center max-w-2xl">
                Découvrez nos circuits miniaturisés, inspirés des plus grands tracés de France et Formule 1, adaptés pour une expérience de course unique en intérieur. Ces circuits, en partenariat avec des acteurs renommés du secteur, vous offrent une immersion totale dans l'univers de la compétition, tout en garantissant une sécurité optimale.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-12 w-full max-w-5xl">
                <div className="bg-gray-800 p-6 rounded-2xl shadow-lg">
                    <div className="flex justify-center">
                        <Image src="/images/monaco.jpg" alt="Circuit Monaco" width={600} height={400} className="rounded-lg mb-4" />
                    </div>
                    <h3 className="text-xl font-semibold text-blue-400">Monaco</h3>
                    <p className="text-gray-400 mt-2">
                        Le circuit de Monaco, célèbre pour ses virages serrés et son ambiance unique, a été miniaturisé pour offrir une course palpitante à l'intérieur. Une véritable réplique des rues monégasques, avec une complexité qui vous mettra au défi à chaque virage.
                    </p>
                </div>
                <div className="bg-gray-800 p-6 rounded-2xl shadow-lg">
                    <div className="flex justify-center">
                        <Image src="/images/croix-en-ternois.jpg" alt="Circuit de Croix-en-Ternois" width={600} height={400} className="rounded-lg mb-4" />
                    </div>
                    <h3 className="text-xl font-semibold text-blue-400">Circuit de Croix-en-Ternois</h3>
                    <p className="text-gray-400 mt-2">
                        Ce circuit technique, réputé pour ses virages rapides et ses enchaînements sinueux, est une reproduction fidèle du tracé français. Miniaturisé pour l'intérieur, il offre un challenge unique à chaque course, idéal pour tester vos réflexes.
                    </p>
                </div>
                <div className="bg-gray-800 p-6 rounded-2xl shadow-lg">
                    <div className="flex justify-center">
                        <Image src="/images/paul-ricard.svg" alt="Circuit Paul-Ricard" width={600} height={400} className="rounded-lg mb-4" />
                    </div>
                    <h3 className="text-xl font-semibold text-blue-400">Circuit Paul-Ricard</h3>
                    <p className="text-gray-400 mt-2">
                        Le circuit Paul-Ricard, célèbre pour ses longues lignes droites et ses virages variés, est recréé en version miniaturisée pour des sensations maximales. Un excellent choix pour ceux qui veulent tester leur vitesse sur une réplique de ce grand circuit.
                    </p>
                </div>
                <div className="bg-gray-800 p-6 rounded-2xl shadow-lg">
                    <div className="flex justify-center">
                        <Image src="/images/nogaro.jpg" alt="Circuit Paul Armagnac de Nogaro" width={600} height={400} className="rounded-lg mb-4" />
                    </div>
                    <h3 className="text-xl font-semibold text-blue-400">Circuit Paul Armagnac de Nogaro</h3>
                    <p className="text-gray-400 mt-2">
                        Ce circuit du sud-ouest de la France est connu pour ses virages rapides et ses sections techniques. Reproduit en miniature, il vous offrira une expérience de course dynamique et stimulante, où chaque virage compte.
                    </p>
                </div>
                <div className="bg-gray-800 p-6 rounded-2xl shadow-lg">
                    <div className="flex justify-center">
                        <Image src="/images/magny-cours.jpg" alt="Circuit de Nevers Magny-Cours" width={600} height={400} className="rounded-lg mb-4" />
                    </div>
                    <h3 className="text-xl font-semibold text-blue-400">Circuit de Nevers Magny-Cours</h3>
                    <p className="text-gray-400 mt-2">
                        Le circuit de Magny-Cours, avec ses longues lignes droites et ses virages techniques, a été fidèlement réduit pour vous offrir une expérience de conduite excitante. Idéal pour tester vos capacités à gérer la vitesse et la précision.
                    </p>
                </div>
            </div>
        </div>
    );
}

