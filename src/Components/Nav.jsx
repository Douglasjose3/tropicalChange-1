import { useState } from "react"
import { Link } from "react-scroll"
import { FaTimes } from "react-icons/fa"
import { HiMenuAlt1 } from "react-icons/hi";


const Nav = () => {
    const [click, setClick] = useState('');
    const handleClick = () => setClick(!click);
    
    const content = <aside className="absolute top-4 left-6 w-full p-[50px] backdrop-blur-lg flex justify-end lg:hidden md:hidden">
            <button className="absolute top-[25px] right-[50px]" onClick={handleClick}>
                {click && <FaTimes className="text-[20px]"/>}
            </button>
            
            <ul className="flex flex-col mt-[30px]">
                <Link spy={true} smooth={true} to="About">
                    <li className="menu-links hover:bg-[#F7EDB2] hover:text-[#FFAC33]">About</li>
                </Link>
                <Link spy={true} smooth={true} to="Secao1">
                    <li className="menu-links hover:bg-[#F7EDB2] hover:text-[#FFAC33]">Included in</li>
                </Link>
                <Link spy={true} smooth={true} to="Secao2">
                    <li className="menu-links hover:bg-[#F7EDB2] hover:text-[#FFAC33]">Seção 2</li>
                </Link>
                <Link spy={true} smooth={true} to="Secao3">
                    <li className="menu-links hover:bg-[#F7EDB2] hover:text-[#FFAC33]">Seção 3</li>
                </Link>
                <div>
                    <button className="botao lg:hidden hover:bg-[#F16354] hover:shadow-lg hover:shadow-[#1E7C8C] focus:opacity-[0.85] focus:shadow-none active:opacity-[0.85]"
                        type="button">
                        <a href="https://www.launchpass.com/tropical-change/discord">Discord</a>
                    </button>
                </div>
            </ul>
    </aside>

    return (
        <nav className="flex colorText3 py-[40px] px-[40px] sticky top-0">

            <a href="/" className="flex flex-1">
                <span className="colorText2 lg:text-3xl font-extrabold">Tropical Change</span>

            </a>
            <div className="lg:flex text-[18px] colorText3 hidden">
                <div className="flex-10">
                    <ul className="flex items-center gap-10 mr-16 text-[18px] font-bold">
                        <Link spy={true} smooth={true} to="About">
                            <li className="colorText2 hover:text-[#F7EDB2] cursor-pointer">About</li>
                        </Link>
                        <Link spy={true} smooth={true} to="IncludedIn">
                            <li className="colorText2 hover:text-[#F7EDB2] cursor-pointer">Included in</li>
                        </Link>
                        <Link spy={true} smooth={true} to="Secao2">
                            <li className="colorText2 hover:text-[#F7EDB2] cursor-pointer">Seção 2</li>
                        </Link>
                        <Link spy={true} smooth={true} to="Footer">
                            <li className="colorText2 hover:text-[#F7EDB2] cursor-pointer">Footer</li>
                        </Link>
                        <div>
                            <button className="botao-link hover:bg-[#F7EDB2] hover:shadow-lg hover:shadow-[#F16354] focus:opacity-[0.85] focus:shadow-none active:opacity-[0.85]"
                                type="button">
                                <a href="https://www.launchpass.com/tropical-change/discord">Discord</a>
                            </button>
                        </div>
                    </ul>
                </div>
            </div>

            <button className="lg:hidden" onClick={handleClick}>
                {!click && <HiMenuAlt1 className="colorText3 text-[20px]"/>}
            </button>

                {click && content}

        </nav>
    )
}

export default Nav;