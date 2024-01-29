import search from "../images/Search.svg"
import cart from "../images/cart.svg"
import Notification from "../images/Notifications.svg"
import person from "../images/Person.svg"
import menubar from "../images/menubar.svg"




function Navbar(){
    return(
        <div class="navbar">
        <div class="navbar-s1">
            <h1>Udemy</h1>
        </div>
        <div class="navbar-s2">
            <img src={search} alt="icon" width="23"></img>
            <input type="text" placeholder="Search for anything here.Tech,Business,art..."></input>
        </div>
        <div class="navbar-s3">
            <ul>
                <li>Courses</li>
                <li class="mylearning">
                    <p>My Learning</p>
                    <div class="mylearning__popup">
                        <p>you don't have anything in my learning section</p>
                    </div>
                </li>
                <li><img src={cart} alt="cart" width="25"></img></li>
                <li><img src={Notification} alt="alert" width="25"></img></li>
                <li><img src={person} alt="profile" width="30"></img></li>
            </ul>
        </div>
        <div class="navbar-s4">
        <img src={menubar} alt="menubar"></img>
        </div>
    </div>
    )
}

export default Navbar