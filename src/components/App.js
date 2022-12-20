import Banner from "./Banner";
import CartF  from "./CartF";
import UrgenceCard from "./UrgenceCard";
import CategoryCard from "./CategoryCard";
import ProjectSection from "./ProjectSection";
import ProjectDetail from "./ProjectDetail";
import "../styles/Banner.css"
import "../styles/Cart.css"

function App() {
  return (<div className="container p-5">
    <Banner />

    <CartF/>
    <UrgenceCard/>
    <CategoryCard/>
    <ProjectSection/>
    <ProjectDetail/>


  </div>)

}
export default App
