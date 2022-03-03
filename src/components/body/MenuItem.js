import React from "react";
import { Card , CardImg ,CardImgOverlay , CardBody , CardTitle} from "reactstrap";

const MenuItem = props  => {
    return(
        <div>
            <Card style={{ marginTop : '20px'}}>
                <CardBody>
                    <CardImg
                        width="300px"
                        height= "400px"
                        alt={props.dish.name}
                        src={props.dish.images}
                        style={
                            {opacity : '.5'}
                        }

                    />
                    <CardImgOverlay>
                        <CardTitle
                            onClick={props.DishSelect}
                            className="m-auto display-5 btn btn-sm btn-primary" >
                            {props.dish.name}
                        </CardTitle>
                    </CardImgOverlay>
                </CardBody>
            </Card>
        </div>
    );
}

export default MenuItem;