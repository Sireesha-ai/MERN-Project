import EventForm from "../Components/EventForm";
import EventSection from "../Components/EventSection";
import Hero from "../Components/Hero";

function HomePage({ events, onAddEvent }) {
  return (
    <>
      <Hero
        title="Discover What Is Happening on Campus"
        description="Find workshops, sports activities, club meetings, and opportunities to connect with other students."
      />

      <EventForm onAddEvent={onAddEvent} />

      <EventSection events={events} />
    </>
  );
}

export default HomePage;