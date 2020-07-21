import React, { Component } from 'react'

export default class BaiTapChonXe extends Component {

    state = {
        srcImg: './img/black-car.jpg'
    }

    changeColor = (color) => {
        let imgColor = `./img/${color}-car.jpg`;
        //setState cho src tấm hình thay đổi để giao diện render lại
        this.setState({
            srcImg: imgColor
        })
    }
    render() {
        return (
            <div className="container-fluid">
                <div className="row mt-5">
                    <div className="col-6">
                        <img className="w-100" src={this.state.srcImg} alt="123" />
                    </div>
                    <div className="col-6">
                        <div className="row">
                            <div className="col-3">
                                <button onClick={() => {
                                    this.changeColor('red');
                                }} className="btn text-white" style={{ backgroundColor: 'red' }} >Red color</button>
                            </div>
                            <div className="col-3">
                                <button onClick={() => {
                                    this.changeColor('black');

                                }} className="btn text-white" style={{ backgroundColor: 'black' }} >black color</button>
                            </div>
                            <div className="col-3">
                                <button onClick={() => {
                                    this.changeColor('silver');

                                }} className="btn text-white" style={{ backgroundColor: 'silver' }} >Silver color</button>
                            </div>
                            <div className="col-3">
                                <button onClick={() => {
                                    this.changeColor('steel');
                                }} className="btn text-white" style={{ backgroundColor: 'gray' }} >steel color</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}
