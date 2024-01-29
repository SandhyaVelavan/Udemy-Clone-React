import c1 from "../images/c1.jpg"
import c2 from "../images/c2.jpg"
import c3 from "../images/c3.jpg"
import c4 from "../images/c4.jpg"

function Recommended(){
    return(
        <div class="recommended">
        <h1 class="recommended__title">Recommended for you</h1>
        <p>Pick the best fit</p>
        <div class="recommended__card">
            <div class="course__card">
                <img src={c1} alt=""></img>
                <h3>2023 Python Data Visualization Masterclass</h3>
                <p>Col steele </p>
                <p>4.9 ⭐⭐⭐⭐</p>
                <p>₹449 <del>1999</del></p>
            </div>

            <div class="course__card">
                <img src={c2} alt=""></img>
                <h3>Basic to Advance Programming with EMC</h3>
                <p>George</p>
                <p>3.6 ⭐⭐⭐</p>
                <p>₹449 <del>1999</del></p>
            </div>

            <div class="course__card">
                <img src={c3}alt=""></img>
                <h3>The complete SQL bootcamp: Go from zero to hero</h3>
                <p>John</p>
                <p>4.9 ⭐⭐⭐⭐</p>
                <p>₹449 <del>1999</del></p>
            </div>


            <div class="course__card">
                <img src={c4} alt=""></img>
                <h3>The Data science course : Complete Data science....</h3>
                <p>James</p>
                <p>3.9 ⭐⭐⭐⭐</p>
                <p>₹449 <del>1999</del></p>
            </div>
        </div>
    </div>
    )
}

export default Recommended