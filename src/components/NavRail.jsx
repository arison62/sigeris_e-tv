import PropTypes from "prop-types";
import { useState } from "react";
import { useNavigate } from "react-router-dom";


function LinkItem({ icon, name, isActive = false }) {
  
    
    return (
        <div
            className={`flex gap-2 
                    items-baseline
                    px-6 py-1 
                    rounded-lg cursor-pointer
                    duration-200 ease-in
                    active:bg-blue-900
                    ${isActive
                    ? "text-white bg-secondary hover:bg-blue-900"
                    : "text-secondary bg-white hover:bg-blue-200 hover:text-white"
                }`}
        >
            <i className={`fa-solid ${icon} xl`}></i>
            <span
                className="font-palanquin text-xl
                      max-lg:hidden
                       max-lg:group-hover:inline"
            >
                {name}
            </span>
        </div>
    );
}

function SecondLink({ icon, name }) {
    return (
        <div className="flex gap-2 items-center max-lg:justify-center max-lg:group-hover:justify-start px-6 rounded-lg cursor-pointer">
            <i className={`fa-solid ${icon} text-xl text-secondary hover:text-blue-950`}></i>
            <span
                className=" font-palanquin
                        max-lg:hidden
                       max-lg:group-hover:inline"
            >
                {name}
            </span>
        </div>
    );
}

SecondLink.propTypes = {
    icon: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
};

function NavRail() {
    const [hover, setHover] = useState(false);
    const isRoot  = document.location.pathname === '/'
    const navigate = useNavigate()
    const handleNavigation = () => {
        if(isRoot) return navigate('/details');
        return navigate('/');
    }
    return (
        <div
            className={`bg-slate-100 pb-6 max-sm:hidden w-fit ${hover ? "group" : ""}`}
            onMouseEnter={() => setHover(true)}
            onMouseLeave={() => setHover(false)}
        >
            <div className={`flex flex-col gap-6 p-8`}>
                <LinkItem icon={"fa-house"} name={"Accueil"} isActive />
                <LinkItem icon={"fa-circle-plus"} name={"Nouveauté"} />
                <LinkItem icon={"fa-circle-play"} name={"En direct"} />
                <LinkItem icon={"fa-calendar-days"} name={"Historique"} />
            </div>
            <div className="px-3" aria-hidden="true">
                <div className="border-slate-300 border-t-2 w-full"></div>
            </div>
            <div className="mt-8">
                <h2
                    className="text-xl font-montserrat
                         font-medium px-3 text-secondary max-lg:hidden"
                >
                    <span className="uppercase">Le meilleur de</span> e-Afrika TV
                </h2>
                <div className="my-6 space-y-4">
                    <SecondLink icon={"fa-circle-play"} name={"Vidéos favorites"} />
                    <SecondLink icon="fa-newspaper" name={"Recommandations"} />
                    <SecondLink icon="fa-photo-film" name="A regarder plus tard" />
                    <SecondLink icon="fa-bell" name="Abonnements" />
                    <SecondLink icon="fa-tv" name="Les chaines e-Afrika TV" />
                </div>
                <div className="px-3" aria-hidden="true">
                    <div className="border-slate-300 border-t-2 w-full"></div>
                </div>
            </div>
            <div className="mt-8">
                <h2
                    className="text-xl font-montserrat
                         font-medium px-3 text-secondary max-lg:hidden"
                >
                    <span className="uppercase">Mes abonnements</span>
                </h2>
                <ul className="my-6 space-y-4 list-disc 
                list-inside text-secondary
                  font-palanquin
                  px-6">
                    <li className="overflow-hidden max-lg:w-0 max-lg:group-hover:w-auto">Telecoms</li>
                    <li className="overflow-hidden max-lg:w-0 max-lg:group-hover:w-auto">Agroalimentaire</li>
                    <li className="overflow-hidden max-lg:w-0 max-lg:group-hover:w-auto">Environnement</li>
                    <li className="overflow-hidden max-lg:w-0 max-lg:group-hover:w-auto">Industrie textile</li>
                </ul>
                <div className="px-3" aria-hidden="true">
                    <div className="border-slate-300 border-t-2 w-full"></div>
                </div>
                
                    <button className="my-6 border-2 ml-6 px-4
                    py-2 rounded-md border-none hover:from-blue-600
                    hover:to-blue-300
                    text-slate-200 duration-100
                    font-palanquin text-xl bg-gradient-to-l
                    to-blue-600 from-blue-400
                    shadow-md active:scale-95 
                    max-lg:hidden
                    max-lg:group-hover:block
                   " onClick={handleNavigation}>{isRoot ? 'Se connecter' : 'Se deconnecter'}</button>
              

                <div className="px-3" aria-hidden="true">
                    <div className="border-slate-300 border-t-2 w-full"></div>
                    <div className="mt-6 px-2 space-y-3">
                        <div className="flex gap-2 items-baseline  font-palanquin">
                            <i className="fa-solid fa-gear"></i>
                            <span className="ml-2 max-lg:hidden max-lg:group-hover:inline">Paramètres</span>
                        </div>
                        <div className="flex gap-2 items-baseline font-palanquin">
                            <i className="fa-solid fa-circle-question"></i>
                            <span className="ml-2 max-lg:hidden max-lg:group-hover:inline">Aide</span>
                        </div>
                        <div className="flex gap-2 items-baseline  font-palanquin">
                            <i className="fa-brands fa-stack-exchange"></i>
                            <span className="ml-2 max-lg:hidden max-lg:group-hover:inline">Votre Avis</span>
                        </div>
                    </div>
                </div>
            </div>
            {/* Nav Rail forn screen width < 420 px */}
            <div className="hidden"></div>
        </div>
    );
}

LinkItem.propTypes = {
    icon: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    isActive: PropTypes.bool,
};
export default NavRail;
