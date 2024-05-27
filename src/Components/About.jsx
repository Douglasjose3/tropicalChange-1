import { AiFillDiscord } from "react-icons/ai";

const About = () => {

    
    return (
        <div id="About" className="flex justify-center items-center">
            <div className="lg:w-[480px] mt-20 items-center justify-center bg-white bg-opacity-60 p-8 rounded-xl hover:sm w-[90%]">
                <h1 className="textoPrincipal">Tropical Change</h1>
                <div className="text-center text-pretty">
                    <p>"We want to make a difference in the Day Trading Community, by removing stress and adding confidence to your trades".</p>
                    <p>We do not intend to sell anything. We are a group of traders who like to share how we navigate the market.</p>
                    <div className="botaoDiscord">
                        <a href="https://www.launchpass.com/tropical-change/discord" className="flex items-center text-white"><AiFillDiscord/>
                        <p className="text-white font-bold ml-3 hover">Join Our Discord</p>
                        </a>
                    </div>
                </div>
            </div>
        </div>
    )
} 

export default About;