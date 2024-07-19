import { List, ShoppingCart, X } from "@phosphor-icons/react";
import { useContext, useState } from "react";
import { NavTextsData } from "../CustomHooks/UseContext";

function Navbar() {
    const [NavShowModal, SetNavShowModal] = useState(false);
    const { LogoText, NavLinksText } = useContext(NavTextsData)
    return (
        <div>
            <div className="h-[70px] w-full bg-slate-200 flex flex-row justify-between items-center pr-[40px] pl-[17px] fixed top-0">
                <div>
                    <a href="/" className="text-[2rem] font-[500] hover:text-orange-600 ">
                        {LogoText}
                    </a>
                </div>
                <div className="phone:hidden tablet:hidden">
                    <ul className="nav-li-hover flex flex-row gap-4 justify-between text-[20px] font-[500]">
                        <li className="">
                            <a href="#">{NavLinksText[0]}</a>
                        </li>
                        <li>
                            <a href="#">{NavLinksText[1]}</a>
                        </li>
                        <li>
                            <a href="#">{NavLinksText[2]}</a>
                        </li>
                        <li>
                            <a href="#">{NavLinksText[3]}</a>
                        </li>
                    </ul>
                </div>
                <div className="flex flex-row justify-center items-center">
                    <a href="#" className="phone:hidden block tablet:hidden hover:text-orange-400">
                        <ShoppingCart size={32} />
                    </a>
                    <a
                        href="#"
                        className="hidden phone:block tablet:block"
                        onClick={() => {
                            SetNavShowModal((current) => !current);
                            console.log("clicked");
                        }}
                    >
                        {NavShowModal ? (
                            <X size={32} weight="bold" />
                        ) : (
                            <List weight="bold" size={32} />
                        )}
                    </a>
                </div>
            </div>
            <div
                className={` hidden ${NavShowModal ? "phone:block tablet:block" : "phone:hidden tablet:hidden"
                    } phone:h-[230px] phone:w-full phone:bg-slate-300 phone:border-t-[4px] border-white p-[20px] tablet:h-[250px] tablet:w-full tablet: bg-slate-300 fixed phone:top-[9%] tablet:top-[7%]`}
            >
                <ul className="nav-li-hover flex flex-col gap-4 justify-between text-[20px] font-[500]">
                    <li className="">
                        <a href="#">{NavLinksText[0]}</a>
                    </li>
                    <li>
                        <a href="#">{NavLinksText[1]}</a>
                    </li>
                    <li>
                        <a href="#">{NavLinksText[2]}</a>
                    </li>
                    <li>
                        <a href="#">{NavLinksText[3]}</a>
                    </li>
                </ul>
            </div>
        </div>
    );
}

export default Navbar;
