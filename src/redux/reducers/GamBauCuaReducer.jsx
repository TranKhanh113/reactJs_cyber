import DSCuoc from "../../GameBauCua/DSCuoc";

const iniitialState = {
    tongTien: 100,
    DanhSachCuoc: [
        {
            ma: "bau",
            hinhAnh: "./img/bau.png",
            giaCuoc: 0,

        },
        {
            ma: "cua",
            hinhAnh: "./img/cua.png",
            giaCuoc: 0,

        },
        {
            ma: "tom",
            hinhAnh: "./img/tom.png",
            giaCuoc: 0,

        }, {
            ma: "ca",
            hinhAnh: "./img/ca.png",
            giaCuoc: 0,

        },
        {
            ma: "nai",
            hinhAnh: "./img/nai.png",
            giaCuoc: 0,

        },
        {
            ma: "ga",
            hinhAnh: "./img/ga.png",
            giaCuoc: 0,

        }
    ],
    xucXac: [
        {
            ma: "bau",
            hinhAnh: "./img/bau.png",
            giaCuoc: 0,

        },
        {
            ma: "cua",
            hinhAnh: "./img/cua.png",
            giaCuoc: 0,

        },
        {
            ma: "tom",
            hinhAnh: "./img/tom.png",
            giaCuoc: 0,

        }
    ]
}
const GameBauCuaReducer = (state = iniitialState, actions) => {
    switch (actions.type) {
        case 'TANG_GIAM':
            // console.log(actions)
            let { tongTien } = state;
            let danhSachCuoc = [...state.DanhSachCuoc];
            debugger;
            let index = danhSachCuoc.findIndex((ele) => ele.ma === actions.ma);
            if (index !== -1) {
                if (actions.tangGiam) {
                    danhSachCuoc[index].giaCuoc += 10;
                    tongTien -= 10;
                } else {
                    if (danhSachCuoc[index].giaCuoc > 0) {
                        danhSachCuoc[index].giaCuoc -= 10;
                        tongTien += 10;
                    }

                }
            }
            state.DanhSachCuoc = danhSachCuoc;
            state.tongTien = tongTien;
            // return state;
            return { ...state };
        default:
            break;
    }
    return { ...state };
}
export default GameBauCuaReducer;