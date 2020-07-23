import React, { Component } from 'react'
import data from './data.json';
import Product from './Product';
import ProductList from './ProductList';
import Card from './Card';
export default class ExampleCard extends Component {
    //dieu kien luu tru state: 
    //1:  chua giao dien duoc binding tu state (truc tiep hoac gian tiep)
    //2: chua nut xu ly lam thay doi state do (truc tiep hoac gian tiep)
    state = {
        proList: data,
        proSelected: null,
        cardList: [],
    };
    // xu li tang giam so luong
    tangGiamSL = (maSP, tangGiam) => { //tang true, giam false
        //tim ra sp chua maSP = voi maSP nut tang giam so luong click
        // console.log("maSP", maSP);
        // console.log('tangGiam', tangGiam);
        let gioHangCapNhat = [...this.state.cardList];
        let index = gioHangCapNhat.findIndex(spGioHang => spGioHang.maSP === maSP);
        if (index !== -1) {
            if (tangGiam) {
                gioHangCapNhat[index].soLuong += 1;
            } else {
                if (gioHangCapNhat[index].soLuong > 1) {
                    gioHangCapNhat[index].soLuong -= 1;
                } else {
                    alert('so luong toi thieu = 1')
                }
            }
        }
        //setState thay doi so luong
        this.setState({
            cardList: gioHangCapNhat
        })
    }

    // handle luon di theo state
    handleSelectPro = (pro) => {
        this.setState({
            proSelected: pro,
        });
    }
    handleBuy = (card) => {
        //tao cardList moi
        // let cardListUpdate = this.state.cardList.push(card);
        let cardListUpdate = [...this.state.cardList];
        //tim vi tri cua phan tu trong mang
        let indexSL = cardListUpdate.findIndex((item) => item.maSP === card.maSP);
        if (indexSL >= 0) {
            cardListUpdate[indexSL].soLuong += 1;
        } else {
            //ko tim thay
            card.soLuong = 1;
            cardListUpdate = [...cardListUpdate, card]
        }
        //setState
        this.setState({
            cardList: cardListUpdate,
        });

    }
    handleDelete = (card) => {
        /**
         * tim vi tri
         * cat ra khoi mang
         * setState
         */
        let cardListUpdate = [...this.state.cardList];
        let index = cardListUpdate.findIndex((item) => item.maSP == card.maSP);
        if (index >= 0) {
            cardListUpdate.splice(index, 1);
            this.setState({
                cardList: cardListUpdate,
            });
        }

    }
    // renderProList = () => {
    //     return this.state.proList.map((item, index) => {
    //         return <div className="col-sm-4" key={index}>
    //             <Product handleSelectPro={this.handleSelectPro} item={item} />
    //         </div>
    //     })
    // }
    render() {
        return (
            <div>
                <div className="container">
                    <Card cardList={this.state.cardList} handleDelete={this.handleDelete} tangGiamSL={this.tangGiamSL} />
                    <ProductList handleSelectPro={this.handleSelectPro} proList1={this.state.proList} handleBuy={this.handleBuy} />
                    {/* <div className="row">
                        {this.renderProList()}
                    </div> */}
                    {this.state.proSelected ?
                        <div className="row">
                            <div className="col-sm-5">
                                <img className="img-fluid" src={this.state.proSelected.hinhAnh} />
                            </div>
                            <div className="col-sm-7">
                                <h3>Thông số kỹ thuật</h3>
                                <table className="table">
                                    <tbody>
                                        <tr>
                                            <td>Màn hình</td>
                                            <td>{this.state.proSelected.manHinh}</td>
                                        </tr>
                                        <tr>
                                            <td>Hệ điều hành</td>
                                            <td>{this.state.proSelected.heDieuHanh}</td>
                                        </tr>
                                        <tr>
                                            <td>Camera trước</td>
                                            <td>{this.state.proSelected.cameraTruoc}</td>
                                        </tr>
                                        <tr>
                                            <td>Camera sau</td>
                                            <td>{this.state.proSelected.cameraSau}</td>
                                        </tr>
                                        <tr>
                                            <td>RAM</td>
                                            <td>{this.state.proSelected.ram}</td>
                                        </tr>
                                        <tr>
                                            <td>ROM</td>
                                            <td>{this.state.proSelected.rom}</td>
                                        </tr>
                                    </tbody>
                                </table>
                            </div>
                        </div>
                        : null
                    }

                </div>
            </div>
        )
    }
}
