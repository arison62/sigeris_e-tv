import { useState } from "react"

function NavBar() {
    const [isMenuOpen, setIsMenuOpen] = useState(false)
    return (
        <div className="bg-secondary h-[100px] fixed w-full z-50">
            <header className="max-container relative h-full flex items-center px-4 sm:px-6 bg-transparent">
                <div className=" grid grid-cols-12 w-full">
                    <p className="text-2xl text-slate-200 font-montserrat font-semibold col-span-3 max-lg:col-span-6">
                        <span className="text-accent">e</span>-Afrika <span className="text-accent">TV</span>
                    </p>
                    <div className="grid grid-cols-12  col-span-6 gap-4 max-lg:hidden">

                        <div className="relative  col-span-8 ">
                            <input className="w-full rounded-md px-4 py-2 font-palanquin"
                                type="search"
                                placeholder="Rechercher sur e-Afrika" />
                            <input type="submit" value={"Rechercher"} className="absolute text-slate-200 font-bold 
                            px-2 py-1 bg-gradient-to-l
                             from-blue-500 to-blue-600
                             font-palanquin
                             rounded-md shadow-md top-1 right-0 mr-1
                             "/>
                        </div>
                        <select name="" id="" className="block rounded-md
                         bg-gray-100 border-transparent
                         font-palanquin
                          focus:border-gray-500
                           focus:bg-white focus:ring-0
                           h-fit col-span-4">
                            <option value="" disabled>--Choisir un pays</option>
                            <option value="Cameroun">Cameroun</option>
                            <option value="Canada">Canada</option>
                            <option value="France">France</option>
                        </select>

                    </div>

                    <div className="flex text-slate-200 font-palanquin  items-center gap-4 col-span-3 ml-auto max-lg:hidden">
                        <p>Alberto Foster</p>
                        <img className="w-12 h-12 rounded-full" src="https://randomuser.me/api/portraits/men/1.jpg" alt="" />
                    </div>
                    <div className="left-auto max-lg:flex hidden col-span-6">
                        <i className={`fa-solid ${isMenuOpen ? 'fa-xmark' : 'fa-bars'} text-3xl ml-auto text-slate-200`} onClick={() => setIsMenuOpen((val) => !val)}></i>
                    </div>
                </div>
                {/* menu au small screen */}
                <div className={`absolute top-[100px]
                 duration-300 ease-in-out  
                 ${isMenuOpen ?
                        'translate-x-0'
                        : 'translate-x-full'} 
                 right-0 hidden max-lg:block 
                 min-w-[300px] h-svh w-2/3 p-4 sm:p-6
                shadow-lg border-t bg-slate-100`}>
                    <div className="grid grid-cols-12 grid-rows-2 gap-4  max-sm:grid-cols-1">

                        <div className="relative  col-span-8">
                            <input className="w-full rounded-md px-4 py-2"
                                type="search"
                                placeholder="Rechercher sur e-Afrika" />
                            <input type="submit" value={"Rechercher"} className="absolute text-slate-200 font-bold 
                                            px-2 py-1 bg-gradient-to-l font-palanquin
                                            from-blue-500 to-blue-600
                                            rounded-md shadow-md top-1 right-0 mr-1
                                            " />
                        </div>
                        <select name="" id="" className="block rounded-md
                                                        bg-gray-100 font-palanquin
                                                        focus:border-2 border-slate-600
                                                        focus:border-blue-600
                                                        focus:bg-white focus:ring-0
                                                        h-fit col-span-4 sm:row-span-1">
                            <option value="" disabled>--Choisir un pays</option>
                            <option value="Cameroun">Cameroun</option>
                            <option value="Canada">Canada</option>
                            <option value="France">France</option>
                        </select>

                    </div>
                    <div className="flex text-slate-900 font-palanquin border-slate-300 border-t-2 border-spacing-1.5 pt-4 top-1/2 relative items-center gap-4">
                        <p>Alberto Foster</p>
                        <img className="w-12 h-12 rounded-full" src="https://randomuser.me/api/portraits/men/1.jpg" alt="" />
                    </div>
                </div>
            </header>
        </div>
    )
}

export default NavBar