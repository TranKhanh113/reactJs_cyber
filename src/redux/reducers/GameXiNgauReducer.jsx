import {getRandomInt} from '../../Utils/RandomInt'
const danhSachXucXac = [
    { ma: "one", classes: "fa fa-dice-one", so: 1 },
    { ma: "two", classes: "fa fa-dice-two", so: 2 },
    { ma: "three", classes: "fa fa-dice-three", so: 3 },
    { ma: "four", classes: "fa fa-dice-four", so: 4 },
    { ma: "five", classes: "fa fa-dice-five", so: 5 },
    { ma: "six", classes: "fa fa-dice-six", so: 6 },
];
const initialState = {
    xucXac: [
        { ma: "four", classes: "fa fa-dice-four", so: 4 },
        { ma: "five", classes: "fa fa-dice-five", so: 5 },
        { ma: "six", classes: "fa fa-dice-six", so: 6 }
    ],
    taiXiu: false, // false la xiu, true la tai
    soBanThang: 0,
    soBanChoi: 0,
}
const GameXiNgauReducer = (state = initialState, actions) => {
    switch (actions.type) {
        case 'CHON_TAI_XIU':{
            let { taiXiu } = state;
            taiXiu = actions.taiXiu;
            return { ...state, taiXiu };
        }
        case 'CHOI_GAME':{
            let {taiXiu,soBanThang,soBanChoi} = state;
            let xucXac= [danhSachXucXac[getRandomInt(6)],
            danhSachXucXac[getRandomInt(6)],
            danhSachXucXac[getRandomInt(6)]];
            let tongXucXac = xucXac.reduce((tong,ele)=>(tong+=ele.so),0)
            //tinh tong xuc xac
            if(tongXucXac >=3 && tongXucXac <= 10){
                //xiu
                tongXucXac = false;
            } else{
                tongXucXac = true;
            }
            //ktra thang thua
            if(taiXiu === tongXucXac){
                //thang
                soBanThang+=1;

             }
            
            soBanChoi++;
            return {...state, xucXac,soBanThang,soBanChoi};
        }
        default:
            break;
    }
    return { ...state };
}
export default GameXiNgauReducer;