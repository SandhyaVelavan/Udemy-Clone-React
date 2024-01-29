import salesImage from "../images/sales.jpg"

function Hero(){


    return(
        <div class="sales-image">
        <img src={salesImage} alt="sales"></img>
        <div class="sales__offer">
            <h2>Udemy flash sale 24hrs to SAVE</h2>
            <p>Get any courses at flat 449/- only. Last 24hrs left for getting it for just 449/- for lifetime access...</p>
        </div>
    </div>
    )
}

export default Hero