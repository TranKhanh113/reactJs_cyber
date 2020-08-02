import React, { Component } from 'react'
import { connect } from 'react-redux';
import {chonTaiXiuActions} from '../../redux/actions/GameXiNgauActions'
class XiNgau extends Component {
    renderDanhXiNgau = (list) => {
        return list.map((ele, index) => {
            return (
                <span key={index}><i className={ele.classes} style={{ color: 'white', fontSize: 150 }} /></span>
            )
        })
    }
    render() {
        const { xucXac, chonTaiXiu } = this.props;
        // console.log(this.props.xucXac);
        return (
            <div>

                <h1 className="text-center" style={{ color: 'white', fontWeight: 'bold', fontSize: 50 }}>
                    Game Tài Xỉu
    </h1>
                <div className="xi-ngau__control row text-center mt-4">
                    <div className="col-4">
                        <button className="btn btn-lg rounded-circle" style={{ overflow: 'hidden' }} onClick={() => {
                            chonTaiXiu(true);
                        }}>
                            <img src="./img/tai.PNG" alt="tai" />
                        </button>
                    </div>
                    <div className="col-4 d-flex align-items-center justify-content-around">
                        {this.renderDanhXiNgau(xucXac)}
                    </div>
                    <div className="col-4">
                        <button className="btn btn-lg rounded-circle" style={{ overflow: 'hidden' }} onClick={() => {
                            // console.log("xiu")
                            chonTaiXiu(false);
                        }}>
                            <img src="./img/xiu.PNG" alt="xiu" />
                        </button>
                    </div>
                </div>

            </div >

        )
    }
}
const mapStateToProps = (state) => {
    return {
        xucXac: state.GameXiNgauReducer.xucXac,
    };
}
const mapDispatchToProps = (dispatch) => {
    return {
        chonTaiXiu: (taiXiu) => {
            dispatch(chonTaiXiuActions(taiXiu))
        }
    }
}
export default connect(mapStateToProps, mapDispatchToProps)(XiNgau);