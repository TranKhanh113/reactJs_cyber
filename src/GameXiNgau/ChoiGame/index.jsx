import React, { Component } from 'react'
import {connect} from 'react-redux';
 class ChoiGame extends Component {
     
    render() {
        const {choiGame} = this.props;
        return (
            <div className="xi-ngau__play text-center">
                <button className="btn btn-success btn-lg" style={{ fontSize: 30, backgroundColor: 'white', color: '#d83226', fontWeight: 'bold' }}
                onClick = {()=>{
                    choiGame();
                }}
                >
                    Chơi Game
  </button>
            </div>

        )
    }
}
const mapDispatchToProps = (dispactch)=>{
    return{
        choiGame:()=>{
            const actions = {
                type: 'CHOI_GAME',
            }
            dispactch(actions);
        }
    }
}
export default connect(null,mapDispatchToProps)(ChoiGame)