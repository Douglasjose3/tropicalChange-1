import { useState } from "react"
import { Link } from "react-scroll"
import { FaTimes } from "react-icons/fa"
import { HiMenuAlt1 } from "react-icons/hi"
import { AiFillDiscord } from "react-icons/ai"


const Nav = () => {
    const [click, setClick] = useState('');
    const handleClick = () => setClick(!click);
    
    const content = <aside className="absolute top-0 left-0 w-full pb-[130px] backdrop-blur-lg flex justify-center lg:hidden md:hidden">
            <button className="absolute top-[45px] right-[40px]" onClick={handleClick}>
                {click && <FaTimes className="text-[20px]"/>}
            </button>
            
            <ul className="flex flex-col mt-[80px]">
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
                    <button className="botao-menu lg:hidden hover:bg-[#F7EDB2] hover:text-[#F16354] hover:shadow-lg hover:shadow-[#F16354] hover:border-2 hover:border-[#F16354]"
                        type="button">
                            <p className="text-[30px]">
                                <AiFillDiscord/>
                            </p>            
                        <a href="https://www.launchpass.com/tropical-change/discord">Join Our Discord</a>
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
                            <button className="botao-link hover:bg-[#F7EDB2] hover:text-[#F16354] hover:shadow-lg hover:shadow-[#F16354] hover:border-2 hover:border-[#F16354]"
                                type="button">
                                    <span className="text-[40px]">
                                        <AiFillDiscord/>
                                    </span>
                                <a href="https://www.launchpass.com/tropical-change/discord">Join Our Discord</a>
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