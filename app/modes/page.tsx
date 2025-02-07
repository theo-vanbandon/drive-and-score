import Link from "next/link";

export default function Page() {
    return (
        <div className="min-h-screen bg-gray-900 text-white flex flex-col items-center justify-start px-4 py-8">
            <h1 className="text-4xl font-bold mb-6 text-center text-blue-500">Modes de Jeu</h1>

            {/* Mode Chronométré */}
            <section className="w-full max-w-5xl mb-12">
                <h2 className="text-3xl font-semibold text-blue-400 mb-4">Mode Chronométré</h2>
                <p className="text-lg text-gray-300 mb-6">
                    Dans ce mode, vous pouvez affronter les meilleurs temps sur des circuits miniaturisés inspirés des plus grands tracés de Formule 1. Testez votre habileté à gérer la vitesse et la précision tout en étant sur des répliques fidèles de circuits comme Monaco ou Paul-Ricard.
                </p>
                <p className="text-lg text-gray-300 mb-6">
                    Chaque circuit propose des défis uniques avec des virages serrés, des lignes droites rapides et des zones techniques où la moindre erreur peut vous faire perdre des secondes cruciales. À vous de gérer les risques et maximiser votre temps pour battre les meilleurs chronos. Retrouvez ces circuits <Link href="/circuits" className="text-blue-400 hover:underline">ici</Link>.
                </p>
            </section>

            {/* Mode Chat */}
            <section className="w-full max-w-5xl mb-12">
                <h2 className="text-3xl font-semibold text-blue-400 mb-4">Mode Chat</h2>
                <p className="text-lg text-gray-300 mb-6">
                    Le mode Chat introduit un gameplay unique où un joueur incarne un chat et doit attraper les souris. Le chat commence avec un piège et peut en récupérer un autre à chaque tour. Il doit poser ces pièges pour piéger les souris tout en restant insensible à ces derniers.
                </p>
                <p className="text-lg text-gray-300 mb-6">
                    Le chat démarre 15 secondes après les souris, donnant ainsi un léger avantage aux souris pour se disperser et se cacher. De plus, le sens inverse est interdit, empêchant ainsi les souris de revenir sur leurs pas pour éviter un piège. Ce mode utilise les mêmes circuits que le mode Chronométré. Retrouvez-les <Link href="/circuits" className="text-blue-400 hover:underline">ici</Link>.
                </p>
                <p className="text-lg text-gray-300 mb-6">
                    Le but pour le chat est d'attraper toutes les souris en les piégeant, mais chaque souris attrapée se transforme à son tour en chat, ce qui complique l'objectif à mesure que le jeu progresse.
                </p>
            </section>

            {/* Mode Foot */}
            <section className="w-full max-w-5xl mb-12">
                <h2 className="text-3xl font-semibold text-blue-400 mb-4">Mode Foot</h2>
                <p className="text-lg text-gray-300 mb-6">
                    Le mode Foot s'inspire du mode "Rumble" de Rocket League. Les joueurs s'affrontent dans des matchs de football où des objets spéciaux peuvent être utilisés pour perturber le jeu et créer des opportunités stratégiques.
                </p>
                <p className="text-lg text-gray-300 mb-6">
                    L'objectif est de marquer des buts en manipulant un ballon tout en utilisant des objets pour gêner les adversaires ou se défendre. Les objets disponibles incluent :
                </p>

                <div className="w-full bg-gray-800 p-6 rounded-2xl shadow-lg">
                    <h3 className="text-xl font-semibold text-blue-400 mb-4">Objets</h3>
                    <ul className="text-gray-400">
                        <li className="mb-6">
                            <strong>Roquette : </strong>Propulsez-vous ou vos adversaires dans les airs, perturbant leur trajectoire ou leur positionnement sur le terrain. Idéal pour marquer un but ou empêcher l'adversaire d'atteindre la balle.
                        </li>
                        <li className="mb-6">
                            <strong>Freeze : </strong>Gèle un joueur pendant quelques secondes, l'empêchant de bouger et le rendant vulnérable à une attaque ou à une perte de position stratégique.
                        </li>
                        <li className="mb-6">
                            <strong>Ventouse : </strong>Utilise une ventouse pour attirer ou repousser la balle ou un autre joueur. Parfait pour manipuler la balle à distance ou interrompre les actions adverses.
                        </li>
                        <li className="mb-6">
                            <strong>Pic : </strong>Des objets pointus qui ralentissent ou endommagent les joueurs qui les touchent, augmentant les risques de perdre du contrôle sur la balle ou d’être déséquilibré.
                        </li>
                        <li className="mb-6">
                            <strong>Réduction de vitesse : </strong>Réduit temporairement la vitesse d'un joueur ou de la balle, permettant de prendre un avantage stratégique dans un moment clé de la partie.
                        </li>
                    </ul>
                </div>

                <p className="text-lg text-gray-300 mt-6">
                    Ce mode dynamique et imprévisible incite à une grande variété de stratégies. Utilisez les objets de manière astucieuse pour déstabiliser vos adversaires, protéger votre but et marquer des buts spectaculaires. Le chaos et la compétition sont au rendez-vous !
                </p>
            </section>
        </div>
    );
}
