import { AiFillDiscord } from "react-icons/ai";

const About = () => {

    
    return (
        <div id="About" className="flex justify-center items-center">
            <div className="lg:w-[480px] mt-20 items-center justify-center bg-white bg-opacity-60 p-8 rounded-xl hover:sm w-[90%]">
                <h1 className="textoPrincipal">Tropical Change</h1>
                <div className="text-center">
                    <p>"We want to make a difference in the Day Trading Community, by removing stress and adding confidence to your trades".</p>
                    <p>We do not intend to sell anything. We are a group of traders who like to share how we navigate the market.</p>
                    <div className="botaoAbout text-white hover:text-[#F16354] hover:bg-[#F7EDB2] hover:shadow-lg hover:shadow-[#F16354] hover:border-2 hover:border-[#F16354]">
                        <a href="https://www.launchpass.com/tropical-change/discord" className="flex justify-center items-center">
                            <span className="text-[60px]">
                                <AiFillDiscord/>
                            </span>
                        <p className="font-bold ml-3 hover">Join Our Discord</p>
                        </a>
                    </div>
                </div>
            </div>
        </div>
    )
} 

export default About;