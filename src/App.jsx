import Banner from './Components/Banner'
import SecaoOne from './Components/IncludedIn'
import Footer from './Components/Footer'

const App = () => {
  return (
    <>
      <div>
        <Banner/>
      </div>

      <section className="colorBg3">
        <SecaoOne />
      </section>

      <div className="bg-slate-800">
        <Footer/>
      </div>
      
      
    </>
  )
}

export default App;