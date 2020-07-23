import React, { Component } from 'react'
import { connect } from 'react-redux';

class SanPham extends Component {
    render() {
        let { sanPham } = this.props;
        return (
            <div className="card text-left">
                <img className="card-img-top" src={sanPham.hinhAnh} alt="" />
                <div className="card-body">
                    <h4 className="card-title">{sanPham.tenSP}</h4>
                    <p className="card-text">
                        {sanPham.gia}
                    </p>
                    <button onClick={() => {
                        this.props.xemChiTiet(sanPham)
                    }} className="btn btn-success">Xem Chi Tiet</button>
                </div>
            </div>
        )
    }
}
//ham lay gia tri callback tu store ve de dua du lieu len redux
const mapDispatchtToProps = (dispatch) => {
    return {
        xemChiTiet: (sanPham) => {//dinh nghia 1 props cho component nay la 1 ham
            //dung ham dispatch cua redux dua sp len tat ca reducer
            // console.log('sp', sanPham);
            //dung ham dispatch tu redux tra ra=> dua du lieu len reducer xu ly
            const action = {
                type: 'XEM_CHI_TIET',//gia tri bat buoc fai co
                sanPham
            }
            dispatch(action);//gui len reducer
        }
    }
}
export default connect(null, mapDispatchtToProps)(SanPham)