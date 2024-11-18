import Banner from "./components-for-home/Banner";
import AboutInHome from "./components-for-home/AboutinHome";
import Success from "./components-for-home/Sucess";





const Home = () => {
    return ( <div>
     <div className="max-h-96">   <Banner></Banner></div>
        Home component ... . . . . .
        <section className="min-h-96 bg-sky-300">ABOUT SECTION 
          <AboutInHome></AboutInHome>
       </section>
        <section className="min-h-96 bg-sky-300">SUCCESS SECTION 
            <Success></Success>
        </section>
        <section className="min-h-96 bg-sky-300">MY OWN MADE SECTION</section>
    </div> );
}
 
export default Home;