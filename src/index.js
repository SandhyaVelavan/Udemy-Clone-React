import reactDOM from "react-dom/client"
import App from "../src/components/app.js" 
import "../src/style/style.css"

let root =reactDOM.createRoot(document.querySelector("#root"))

root.render(
  <App></App>
)

