import Image from "next/image";
import Hero from "./components/hero";
import Navbar from "./components/navbar";
import WhoWeAre from "./components/whoweare";
import Flow from "./components/flow";
import Impact from "./components/impact";

export default function Home() {
  return (
    <div>
      <header>
        <Navbar />
        <Hero />
      </header>

      {/* who we are */}
      <WhoWeAre />

      {/* flow of work */}
      {/* <Flow /> */}

      {/* impact */}
      <Impact />
    </div>
  );
}
