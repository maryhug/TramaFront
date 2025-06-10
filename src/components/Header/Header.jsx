import React from "react";
import { NavLink } from "react-router-dom";
import {ProfileDropdown} from "../layout/ProfileDropdown";
import Logo from "../../assets/Logo.svg";

const mockUser = {
    name: "Reina",
    email: "reina@example.com",
    avatar: "https://i.pravatar.cc/150?img=3"
};


const Header = () => {
    return (
        <header className="flex items-center justify-between border-b border-b-[#223649] bg-[#0f1c2e] px-10 py-2">

            <div className="flex items-center gap-2 min-w-[150px]">
                <div className="flex items-center gap-1 text-white">

                    <NavLink to="/">
                        <img
                            src={Logo}
                            alt="Logo Trama"
                            style={{width: "50px", height: "auto"}}
                        />
                    </NavLink>
                    <a href="https://postimg.cc/MXbfhT9Y" target="_blank" rel="noopener noreferrer">
                        <img
                            src="https://i.postimg.cc/MXbfhT9Y/Dise-o-sin-t-tulo-3.png"
                            alt="Texto Trama"
                            className="h-6"
                        />
                    </a>
                </div>
            </div>

            <div>
                <nav className="flex-1 flex justify-center">
                    <div className="flex items-center gap-9">
                        <NavLink
                            to="/"
                            className={({ isActive }) =>
                                `text-white text-[15px] font-semibold pb-1 transition-all ${
                                    isActive ? "border-b-2 border-white" : "hover:border-b-2 hover:border-white"
                                }`
                            }
                        >
                            Home
                        </NavLink>

                        <NavLink
                            to="/descubrir"
                            className={({ isActive }) =>
                                `text-white text-[15px] font-semibold pb-1 transition-all ${
                                    isActive ? "border-b-2 border-white" : "hover:border-b-2 hover:border-white"
                                }`
                            }
                        >
                            Descubrir
                        </NavLink>


                        <NavLink
                            to="/mis-listas"
                            className={({ isActive }) =>
                                `text-white text-[15px] font-semibold pb-1 transition-all ${
                                    isActive ? "border-b-2 border-white" : "hover:border-b-2 hover:border-white"
                                }`
                            }
                        >
                            Mis Listas
                        </NavLink>


                        <NavLink
                            to="/buscar"
                            className={({ isActive }) =>
                                `text-white text-[15px] font-semibold pb-1 transition-all ${
                                    isActive ? "border-b-2 border-white" : "hover:border-b-2 hover:border-white"
                                }`
                            }
                        >
                            Buscar
                        </NavLink>
                    </div>
                </nav>

            </div>

            <div>
                <ProfileDropdown user={mockUser}/>
            </div>
        </header>
    );
};

export default Header;
