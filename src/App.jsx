// function App() {
//   return (
//     <div>
//       <h1>Hello Firends</h1>
//       <p>Chai Peelo</p>
//     </div>
//   );
// }

// export default App;
// import "./App.css";
// function App(){
//   const tarinerName="Nirmal";
//   const trainingDay=3;
//   return(
//     <main className="app">
//       <section className="welcome-card">
//       <p className="day-label">React Day {trainingDay}</p>
//       <h1 className="title">College Course Explorer </h1>
//       <p>Trainer:{tarinerName}</p>
//       <p>React Learning Project</p>
//       <p>Used React,JSX,componets,CSS</p>
//       </section>   
//     </main>       
//   );
// }
// export default App;
import "./App.css";
import Navbar from "./Components/Navbar";
import Hero from "./Components/Hero";
import EventSection from "./Components/EventSection";
import Footer from "./Components/Footer";
function App() {
  return (
    <div>
      <Navbar />
      <main id="home">
        {/* <h1>campus Connect</h1>
        <p>Welcome to College Event and Clubs</p> */}
        <Hero />
        <EventSection />
      </main>
      <Footer />
    </div>
  );
}
export default App;