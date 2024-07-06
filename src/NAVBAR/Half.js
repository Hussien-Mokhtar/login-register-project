import { FaCircleXmark } from "react-icons/fa6";
import { MdEmail } from "react-icons/md";
import { FaLock } from "react-icons/fa";

 import { Link } from "react-router-dom";
function Half() {
  return ( 
    <>
      <div className="container">
        <div className="form-box login">

          <Link to="/space"> <FaCircleXmark className="close" /></Link>

          <form action="">

          <div className="login">
            
            <h2>Login</h2>

            <div className="all-1">
              <div className="email">
                <input type="text" placeholder="Email" required /> <MdEmail className="icon" />


              </div>

              <div className="all-2">
                <div className="password">
                  <input type="password" placeholder="Password" required /> <FaLock className="icon" />

                </div>

                <div className="f">
                  <div className="forget">
                    <label>   <input type="checkbox" />Remember me</label>
                    <a href="#"> Forget Password?</a>

                  </div>

                  <div className="btn2">
                    <button type='submit'>Login</button>



                    <div className="last">
                      <label>   Dont have an account? <Link to="/register" r>Register?</Link> </label>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          </form>
        </div>
      </div>


    </>
  )
}
export default Half;