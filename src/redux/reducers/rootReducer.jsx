import { combineReducers } from 'redux';
import BTGioHangReducer from '../BTGioHangReducer'
//store tong cua ung dung, chua tat ca cac state cung ung dung
const rootReducer = combineReducers({
    stateBTGioHang: BTGioHangReducer
});
export default rootReducer;