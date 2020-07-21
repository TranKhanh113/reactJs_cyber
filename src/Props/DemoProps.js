import React, { Component } from "react";
import ClassProps from "./ClassProps";
import FunctionProp from "./FunctionProp";
export default class DemoProps extends Component {
  render() {
    const dog = {
      image:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcQZmMWc_yStWGkauDJ73H0sUEZYwh0tbwaxJw&usqp=CAU",
      name: "husky",
      age: 3,
    };

    const cat = {
      srcImg:
        "https://pethealth.vn/wp-content/uploads/2018/09/c%C3%A1ch-nu%C3%B4i-m%C3%A8o-t%E1%BB%AB-chuy%C3%AAn-gia.jpg",
      name: "mimi",
      age: 5,
    };

    return (
      <div className="text-center">
        <h1>Demo Props</h1>
        {/* truyền props image cho component Classprops */}
        <ClassProps cho={dog} />
        <FunctionProp meo={cat} />
      </div>
    );
  }
}
