import React, { Component } from 'react'
import { connect } from 'react-redux';
class BauCuaDo extends Component {
    renderXucXac = (list) => {
        return list.map((ele, index) => {
            return (<div className={`bau-cua__xoay bau-cua__xoay--${index + 1}`} key={index}>
                <img src={ele.hinhAnh} alt="hinhanh" />
            </div>)

        })
    }
    render() {
        const { xucxac } = this.props
        return (
            <div className="bau-cua__do w-100 h-100">
                <img src="./img/dia.png" alt="hinh" className="w-100 h-100" />
                {this.renderXucXac(xucxac)};
            </div>

        )
    }
}
const mapStateToProps = (state) => {
    return {
        //key la props of component: value la state of store
        xucxac: state.GameBauCuaReducer.xucXac,
    };
}
export default connect(mapStateToProps, null)(BauCuaDo);
