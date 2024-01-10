import  {HomePage}  from "./components/HomePage";
import ProjectPage from "./components/ProjectPage";
import AboutPage from "./components/AboutPage";
import ContactPage from "./components/ContactPage";
import Navbar from "./components/Navbar";

function App() {
  return (
    <>
    <Navbar/>
    <HomePage/>
    <AboutPage/>
    <ProjectPage/>
    <ContactPage/>
    </>
  );
}

export default App;
