import Nav from "./Nav"
import About from "./About"

const Banner = () => {
    return (
        <div className="bg-[url('assets/background.png')] bg-cover min-w-screen min-h-screen hover:sm bg-center">
            <Nav className="sticky top-0"/>
            <About/>
        </div>
    )
}

export default Banner;