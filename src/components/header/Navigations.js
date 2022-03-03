import React from "react";
import { Navbar , NavbarBrand} from "reactstrap";

const Navigations = () => {
    return(
        <div>
            <Navbar dark color="dark">
                <div className="container">
                    <NavbarBrand href="/" >Shuvo Restaurant</NavbarBrand>
                </div>
            </Navbar>
        </div>
    );
}

export default Navigations;