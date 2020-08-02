import { combineReducers } from 'redux';
import BTGioHangReducer from '../BTGioHangReducer'
import GameBauCuaReducer from './GamBauCuaReducer';
import GameXiNgauReducer from "./GameXiNgauReducer";
//store tong cua ung dung, chua tat ca cac state cung ung dung
const rootReducer = combineReducers({
    // stateBTGioHang: BTGioHangReducer,
    // GameBauCuaReducer: GameBauCuaReducer
    // GameBauCuaReducer,
    GameXiNgauReducer: GameXiNgauReducer,
})

export default rootReducer;