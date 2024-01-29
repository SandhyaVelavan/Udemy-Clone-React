import Navbar from "../components/navbar.js"
import Items from "../components/items.js"
import Hero from "../components/hero.js"
import Recommended from "../components/recommend.js"
import Topics from "../components/topics.js"
import Popular from "../components/popular.js"
import Footer from "../components/footer.js"




function App(){
    return(
        <>
        <Navbar></Navbar>
        <Items></Items>
        <Hero></Hero>
        <Recommended></Recommended>
        <Topics></Topics>
        <Popular></Popular>
        <Footer></Footer>
        </>
    )
}

export default App