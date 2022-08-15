import React, { Component } from "react";
import Banner from "./Banner";
import Item from "./Item";
import { itemData } from "./itemData";
class Body extends Component {
  itemData = itemData;
  render() {
    return (
      <div>
        <Banner />
        <section className="pt-4">
          <div className="container px-lg-5">
            <div className="row gx-lg-5">
              {itemData.map((item, index) => {
                return <Item key={index.toString() + index} data={item} />;
              })}
            </div>
          </div>
        </section>
      </div>
    );
  }
}

export default Body;
