import React, { Component } from 'react'
import "./style.css";
import DSCuoc from './DSCuoc';
import BauCuaDo from './BauCuaDo';
import { connect } from 'react-redux';
class GameBauCua extends Component {
    render() {
        const { tongTien } = this.props;
        return (
            <div className="bau-cua">
                <div className="container">
                    <div className="d-flex justify-content-between align-items-center">
                        <div className="bau-cua__tien font-weight-bold">Tổng Tiền : {tongTien}$</div>
                        <h2 className="text-center text-danger">Bầu Cua</h2>
                        <div><button className="btn btn-info">Chơi Game</button></div>
                    </div>
                    <div className="row">
                        <div className="col-md-12 col-lg-7">
                            <DSCuoc />
                        </div>
                        <div className="col-md-12 col-lg-5">
                            <BauCuaDo />
                        </div>
                    </div>
                </div>
            </div>


        )
    }
}
const mapStateToProps = (state) => {
    return {
        //key la props of component: value la state of store
        tongTien: state.GameBauCuaReducer.tongTien
    };
}
export default connect(mapStateToProps, null)(GameBauCua);
