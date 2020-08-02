import DSCuoc from "../../GameBauCua/DSCuoc";
import { getRandomInt } from '../../Utils/RandomInt';
import { TANG_GIAM } from '../constants/GameBauCuaConst';
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


        },
        {
            ma: "cua",
            hinhAnh: "./img/cua.png",


        },
        {
            ma: "tom",
            hinhAnh: "./img/tom.png",


        }
    ]
}
const GameBauCuaReducer = (state = iniitialState, actions) => {
    switch (actions.type) {
        case TANG_GIAM:
            // console.log(actions)
            let { tongTien } = state;
            if (actions.tangGiam && !tongTien) {
                return { ...state }
            }

            let danhSachCuoc = [...state.DanhSachCuoc];
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
        case 'CHOI_GAME': {
            let { tongTien } = state;
            let danhsachCuoc1 = [...state.DanhSachCuoc];
            let danhsachCuoc2 = [...state.DanhSachCuoc];
            let xucXac = [
                danhsachCuoc1[getRandomInt(6)],
                danhsachCuoc1[getRandomInt(6)],
                danhsachCuoc1[getRandomInt(6)]
            ];
            // lay nhung con cuoc
            danhsachCuoc1 = danhsachCuoc1.filter((ele) => ele.giaCuoc > 0);
            //tra lai tien
            for (let ele of danhsachCuoc1) {
                let tralaiTien = xucXac.find((item) => item.ma === ele.ma);
                if (tralaiTien) {
                    tongTien += ele.giaCuoc;
                }
            }
            //trung thuong
            for (let ele of xucXac) {
                let trungThuong = xucXac.find((item) => item.ma === ele.ma);
                if (trungThuong) {
                    tongTien += trungThuong.giaCuoc;
                }
            }
            //update
            let updateDSCuoc = [...state.DanhSachCuoc];
            updateDSCuoc = updateDSCuoc.map((ele) => ({
                ...ele,
                giaCuoc: 0,
            }));
            return { ...state, xucXac, tongTien, DanhSachCuoc: updateDSCuoc }

        }
        default:
            break;
    }
    return { ...state };
}
export default GameBauCuaReducer;