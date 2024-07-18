
function Footer() {
    return (
        <div className="bg-secondary text-slate-200 px-4 sm:px-6">
            <div className="max-container py-6 grid grid-cols-1 gap-6 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
                <div className="max-w-sm">
                    <h2 className="font-montserrat font-xl font-bold mb-2">A propos</h2>
                    <ul className="font-palanquin space-y-2">
                        <li>Qui somme nous ?</li>
                        <li>Conditions generales {"d'utilisation"}</li>
                        <li>Politique de confidentialite</li>
                    </ul>
                </div>

                <div className="max-w-sm">
                    <h2 className="font-montserrat font-xl font-bold mb-2">Suivez nous</h2>
                    <ul className="font-palanquin space-y-2">
                        <li>Youtube</li>
                        <li>Facebook</li>
                        <li>Instagram</li>
                        <li>Twitter</li>
                        <li>LinkedIn</li>
                    </ul>
                </div>
                <div className="max-w-sm">
                    <h2 className="font-montserrat font-xl font-bold mb-2">Contacter nous</h2>
                    <ul className="font-palanquin space-y-2">
                        <li>Email : e-afrika@mail.com</li>
                        <li>Hotline : +221 77 777 77 77</li>
                    </ul>
                </div>
                <div className="max-w-sm">
                    <h2 className="font-montserrat font-xl font-bold mb-2">Alertes</h2>
                    <ul className="font-palanquin space-y-2">
                        <li>Youtube</li>
                        <li>Facebook</li>
                        <li>Instagram</li>
                    </ul>
                </div>
            </div>
        </div>
    )
}

export default Footer