// Footer.tsx
export default function Footer() {
    return (
        <footer className="text-white py-6">
            <div className="container mx-auto text-center">
                <p className="text-sm text-gray-400 mb-2">
                    &copy; {new Date().getFullYear()} Drive & Score. Tous droits réservés.
                </p>
                <div className="space-x-4">
                    <a href="https://www.instagram.com/drivescore123/" className="text-blue-400 hover:text-blue-600" target="_blank" rel="noopener noreferrer">
                        Instagram
                    </a>
                    <a href="https://www.facebook.com/profile.php?id=61572786510074" className="text-blue-400 hover:text-blue-600" target="_blank" rel="noopener noreferrer">
                        Facebook
                    </a>
                    <a href="https://x.com/DriveScore123" className="text-blue-400 hover:text-blue-600" target="_blank" rel="noopener noreferrer">
                        X (Twitter)
                    </a>
                </div>
            </div>
        </footer>
    );
}
