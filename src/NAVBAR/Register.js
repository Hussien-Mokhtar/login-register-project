import { FaCircleXmark } from "react-icons/fa6";
import { MdEmail } from "react-icons/md";
import { FaLock } from "react-icons/fa";
import { FaUser } from "react-icons/fa";
import { Link } from "react-router-dom";
function Register() { 
    return (
        <>
            <div className="container">
                <div className="form-box login">
                    <form action="">


                    <Link to="/space"> <FaCircleXmark className="close-2" /></Link>

                     <div className="login">

                    
                        <h2>Registration</h2>


                        <div className="all-0">
                            <div className="email">
                                <input type="text" placeholder="Username" required /> <FaUser className="icon" />
                            </div>
                        </div>

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
                                        <label>   <input type="checkbox" />I agree to the terms & condetions</label>

                                    </div>

                                    <div className="btn2">
                                        <button type="submit">Register</button>


                                        <div className="last">
                                            <label>   Dont have an account?  <Link to="/">Login</Link> </label>
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

export default Register;