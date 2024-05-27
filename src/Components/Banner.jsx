import Nav from "./Nav"
import About from "./About"

const Banner = () => {
    return (
        <div className="bg-[url('assets/background.jpg')] bg-cover h-screen w-screen hover:sm bg-center">
            <Nav/>
            <About/>
        </div>
    )
}

export default Banner;