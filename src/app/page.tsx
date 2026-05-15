import Amenities from "./components/home/Amenities";
import Hero from "./components/home/Hero";
import Rooms from "./components/home/Rooms";
import Story from "./components/home/Story";

export default function Home() {
  return (
    <main>
      <Hero />
      <Story />
      <Rooms />
      <Amenities />
    </main>
  );
}