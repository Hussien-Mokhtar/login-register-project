import { Link } from "react-router-dom";
function Nav() {
  return (
    <>
      <header>
        <h2 class="logo"> Logo</h2>
        <nav class="navbar">
         
             <Link to="/space">Home</Link>
            <a href="#">About</a>
            <a href="#">Services</a>
            <a href="#">Contact</a>
            <button className="btn"> <Link to="/">Login</Link> </button>
        
        </nav>
 
      </header>










    </>
  )
}

export default Nav;