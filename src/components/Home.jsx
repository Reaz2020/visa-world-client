import Banner from "./components-for-home/Banner";




const Home = () => {
    return ( <div>
     <div className="max-h-96">   <Banner></Banner></div>
        Home component ... . . . . .
        <section className="min-h-96 bg-sky-300">ABOUT SECTION </section>
        <section className="min-h-96 bg-sky-300">SUCCESS SECTION </section>
        <section className="min-h-96 bg-sky-300">MY OWN MADE SECTION</section>
    </div> );
}
 
export default Home;