import React, { Component } from 'react'
import { connect } from 'react-redux';
import { tangGamActions } from '../../redux/actions/GameBauCuaActions';
class DSCuoc extends Component {
    renderDSCuoc = (list) => {
        return list.map((ele, index) => {
            return (<div className="card col-4" key={index}>
                <img className="card-img-top" src={ele.hinhAnh} alt="Card cap" style={{ height: 200 }} />
                <div className="card-body">
                    <h5 className="card-title" />
                    <div className="d-flex justify-content-around align-items-center">
                        <button className="btn btn-info" onClick={() => {
                            this.props.tangGiamMucCuoc(ele.ma, false)
                        }}>-</button><span>{ele.giaCuoc}$</span><button className="btn btn-info" onClick={() => {
                            this.props.tangGiamMucCuoc(ele.ma, true)
                        }}>+</button>
                    </div>
                </div>
            </div>)
        })
    }
    render() {
        const { danhSachCuoc } = this.props;
        return (
            <div className="bau-cua__chon">
                <div className="bau-cua__bang row">
                    {this.renderDSCuoc(danhSachCuoc)}
                </div>
            </div>

        )
    }
}
const mapStateToProps = (state) => {
    return {
        //key la props of component: value la state of store
        danhSachCuoc: state.GameBauCuaReducer.DanhSachCuoc,
    };
}
const mapDispatchToProps = (dispatch) => {
    return {
        //key la props of component: value la method send action to reducer
        tangGiamMucCuoc: (ma, tangGiam) => {
            // function tangGamActions() {
            //     return {
            //         type: 'TANG_GIAM',
            //         ma: ma,
            //         tangGiam: tangGiam,
            //     };
            // }
            // const actions = {
            //     type: 'TANG_GIAM',
            //     ma: ma,
            //     tangGiam: tangGiam,
            // };
            dispatch(tangGamActions(ma, tangGiam));
        },
    };
};
export default connect(mapStateToProps, mapDispatchToProps)(DSCuoc);
