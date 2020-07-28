import { combineReducers } from 'redux';
import BTGioHangReducer from '../BTGioHangReducer'
import GameBauCuaReducer from './GamBauCuaReducer';
//store tong cua ung dung, chua tat ca cac state cung ung dung
const rootReducer = combineReducers({
    // stateBTGioHang: BTGioHangReducer,
    // GameBauCuaReducer: GameBauCuaReducer
    GameBauCuaReducer,
})

export default rootReducer;