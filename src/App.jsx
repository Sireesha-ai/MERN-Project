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
import { useState } from "react";
import { Routes, Route } from "react-router-dom";

import "./App.css";

import Navbar from "./Components/Navbar";
import Footer from "./Components/Footer";

import HomePage from "./Pages/HomePage";
import EventsPage from "./Pages/EventsPage";
import AboutPage from "./Pages/AboutPage";

import { initialEvents } from "./Data/events";

function App() {
  const [events, setEvents] = useState(initialEvents);

  function handleAddEvent(newEvent) {
    setEvents([...events, newEvent]);
  }

  return (
    <div>
      <Navbar />

      <Routes>
        <Route
          path="/"
          element={
            <HomePage
              events={events}
              onAddEvent={handleAddEvent}
            />
          }
        />

        <Route
          path="/events"
          element={<EventsPage events={events} />}
        />

        <Route
          path="/about"
          element={<AboutPage />}
        />
      </Routes>

      <Footer />
    </div>
  );
}

export default App;