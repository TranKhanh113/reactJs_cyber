import React, { Component } from 'react'
import XiNgau from './XiNgau'
import KetQua from './KetQua'
import ChoiGame from './ChoiGame'
export default class GameXiNgau extends Component {
    render() {
        return (
            <div>
                <section className="xi-ngau" style={{ background: 'url(./img/bg.jpg)', height: '100vh', overflowX: 'hidden' }}>
                    <XiNgau />
                    <KetQua />
                    <ChoiGame />
                </section>
            </div>
        )
    }
}
