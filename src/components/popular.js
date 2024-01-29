import c5 from "../images/c5.jpg"
import c6 from "../images/c6.jpg"
import c7 from "../images/c7.jpg"
import c8 from "../images/c8.jpg"
import c9 from "../images/c1.jpg"
import c10 from "../images/c10.jpg"
import c11 from "../images/c11.jpg"
import c12 from "../images/c12.jpg"



function Popular(){
    return(
        <div class="popular">
        <h1>Most Popular</h1>
        <p>Pick the best fit</p>
        <div class="popular__container">
           
            <div class="popular__card">
                <img src={c5} alt="c5"></img>
                <h3>Web development bootcamp 2023-new addons</h3>
                <p>William</p>
                <p>4.5⭐⭐⭐⭐</p>
                <p>₹449 <del>1999</del></p>
            </div>


            <div class="popular__card">
                <img src={c6}  alt="c6"></img>
                <h3> Full stack Web development Masterclass </h3>
                <p>Charles</p>
                <p>4.5⭐⭐⭐⭐</p>
                <p>₹449 <del>1999</del></p>
            </div>

            <div class="popular__card">
                <img src={c7} alt="c7"></img>
                <h3>Machine learning with advanced concepts </h3>
                <p>Ganesh</p>
                <p>4.5⭐⭐⭐⭐</p>
                <p>₹449 <del>1999</del></p>
            </div>

            <div class="popular__card">
                <img src={c8} alt="c8"></img>
                <h3>Data structures and alogorithm -Basic concepts</h3>
                <p>Muthuvel</p>
                <p>4.5⭐⭐⭐⭐</p>
                <p>₹449 <del>1999</del></p>
            </div>

            <div class="popular__card">
                <img src={c9}  alt="c9"></img>
                <h3>Data structures and alogorithm -Advanced concepts</h3>
                <p>Marcas</p>
                <p>4.5⭐⭐⭐⭐</p>
                <p>₹449 <del>1999</del></p>
            </div>


            <div class="popular__card">
                <img src={c10} alt="c10"></img>
                <h3>Data analytics and Machine learning combo</h3>
                <p>siddik</p>
                <p>4.5⭐⭐⭐⭐</p>
                <p>₹449 <del>1999</del></p>
            </div>


            <div class="popular__card">
                <img src={c11}  alt="c11"></img>
                <h3>Object oriented programming concepts-outlook</h3>
                <p>joseph</p>
                <p>4.5⭐⭐⭐⭐</p>
                <p>₹449 <del>1999</del></p>
            </div>


            <div class="popular__card">
                <img src={c12}  alt="c12"></img>
                <h3>Digital Marketing - email,social,networking...</h3>
                <p>william</p>
                <p>4.5⭐⭐⭐⭐</p>
                <p>₹449 <del>1999</del></p>
            </div>
        </div>
    </div>
    )
}

export default Popular