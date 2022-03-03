import React from "react";
import { Card , CardImg , CardBody , CardTitle,CardText} from "reactstrap";
import LoadComment from "./loadComment";


const DishDetails = props => {
    return(
        <div>
            <Card style={{ marginTop : '20px'}}>
                <CardImg
                    top
                    width="200px"
                    height="400px"
                    src={props.dish.images}
                    alt={props.dish.name}
                />
                <CardBody className="bg-dark" style={{ textAlign : "left"}}>
                    <CardTitle className="text-white display-5">{props.dish.name}</CardTitle>
                    <CardText className="text-white justify-content-center">{props.dish.description}</CardText>
                    <CardText className="text-white" >Price : {props.dish.price}</CardText>
                    <hr className="bg-white" />
                    <h4 className="text-white fw-bold text-decoration-underline d">Comments :</h4>
                    <br/>
                    <LoadComment comments={props.dish.comments}/>
                </CardBody>
            </Card>
        </div>
    );
}

export default DishDetails;