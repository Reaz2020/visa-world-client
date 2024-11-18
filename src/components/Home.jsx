import Banner from "./components-for-home/Banner";
import AboutInHome from "./components-for-home/AboutinHome";
import Success from "./components-for-home/Sucess";
import ValueOfScandinavia from "./components-for-home/ValueOfScandinavia";
import CourseStatistics from "./components-for-home/CourseStatistics";





const Home = () => {
    return ( <div>
     <div className="">   <Banner></Banner></div>
   
        <section className="min-h-96 bg-sky-300">
          <AboutInHome></AboutInHome>
       </section>
        <section className="min-h-96 bg-sky-300">
            <Success></Success>
        </section>
        <section>
        <ValueOfScandinavia></ValueOfScandinavia>
        </section>
        <section><CourseStatistics></CourseStatistics></section>
        
    </div> );
}
 
export default Home;