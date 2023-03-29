import { Link } from "react-router-dom";

const Notfound = () => {
    return ( 
        <div className="notfoud">
            <h2>Page not Found</h2>
            <Link to = "/">Back to Home Page</Link>
        </div>
     );
}
 
export default Notfound;