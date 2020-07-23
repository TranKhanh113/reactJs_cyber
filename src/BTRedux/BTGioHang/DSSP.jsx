import React, { Component } from 'react'
import SanPham from './SanPham'
import { connect } from 'react-redux'

class DSSP extends Component {
    renderSanPham = () => {
        //lay props tu component cha la mangSanPham render ra cac component card
        return this.props.mangSanPham.map((sanPham, index) => {
            return <div className="col-4" key={index}>
                <SanPham sanPham={sanPham} />
            </div>
        })
    }
    render() {
        return (
            <div className="container">
                <h3>Danh Sach San Pham</h3>
                <div className="row">
                    {this.renderSanPham()}
                </div>
                <div className="row">
                    <div className="col-4">
                        <h3 className="text-center">{this.props.spChiTiet.tenSP}</h3>
                        <img height={350} src={this.props.spChiTiet.hinhAnh} alt="123" />
                    </div>
                    <div className="col-8">
                        <table className="table">
                            <tr>
                                <td>Ten SP</td>
                                <td>{this.props.spChiTiet.tenSP}</td>
                            </tr>
                            <tr>
                                <td>Man Hinh</td>
                                <td>{this.props.spChiTiet.manHinh}</td>
                            </tr>
                            <tr>
                                <td>He Dieu Hanh</td>
                                <td>{this.props.spChiTiet.heDieuHanh}</td>
                            </tr>
                            <tr>
                                <td>Camera Truoc</td>
                                <td>{this.props.spChiTiet.cameraTruoc}</td>
                            </tr>
                            <tr>
                                <td>Camera Sau</td>
                                <td>{this.props.spChiTiet.cameraSau}</td>
                            </tr>
                            <tr>
                                <td>Ram</td>
                                <td>{this.props.spChiTiet.ram}</td>
                            </tr>
                            <tr>
                                <td>Rom</td>
                                <td>{this.props.spChiTiet.rom}</td>
                            </tr>
                        </table>
                    </div>
                </div>
            </div>
        )
    }
}
//day la ham lay state tu redux chuyen thanh props cua component
const mapStateToProps = state => {
    //state la rootReducer
    return {
        spChiTiet: state.stateBTGioHang.spChiTiet
    }
}
export default connect(mapStateToProps)(DSSP)