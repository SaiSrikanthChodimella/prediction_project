import NavBar from "./Navbar";
import Homepage from "./Homepage";
import APIDocumentation from "./APIDocumentation";
import Footer from "./Footer";
import { useRef } from "react";

function App() {
  const documentRef = useRef(null);
  const contactRef = useRef(null);

  const scrollToSection = (ref) => {
    if (ref.current) {
      ref.current.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };

  return (
    <div>
      <NavBar
        scrollToSection={scrollToSection}
        refs={{
          documentRef,
          contactRef,
        }}
      />
      <Homepage />
      <div ref={documentRef}>
        <APIDocumentation />
      </div>
      <div ref={contactRef}>
        <Footer />
      </div>
    </div>
  );
}

export default App;
