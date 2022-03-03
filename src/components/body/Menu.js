import React from "react";
import { Component } from "react";
import Dishes from "../../data/Dishes";
import MenuItem from "./MenuItem";
import DishDetails from "./DishDetails";

class Menu extends  Component {
    state = {
        dishes : Dishes,
        selectedDish : null,
    }
    onDishSelect = dish =>{
        this.setState({ selectedDish : dish});
    }

    render() {
        const  menu = this.state.dishes.map(item => {
           return(
               <MenuItem
                   dish={item}
                   key={item.id}
                   DishSelect = {() => this.onDishSelect(item)}
               />
           );
        });

        let dishDetail = null;
        if (this.state.selectedDish != null){
            dishDetail = <DishDetails dish={this.state.selectedDish} />
        }

        return(
            <div>
                <div className="container" >
                    <div className="row" >
                        <div className="col-md-6">
                            {menu}
                        </div>
                        <div className="col-md-6">
                            {dishDetail}
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default Menu;