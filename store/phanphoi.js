export const state = () => ({
    danhSachNhaPhanPhoi: [
        {
            id: 1,
            tenHangMuc: 'CẢI TIẾN TRẠM HÀN',
            data: [
                {
                    id: 1,
                    tenNcc: 'abvc',
                    soLuong: 1,
                    donGia: 300000,
                    vat: 10,
                    tongTien: 0,
                    tongTienChuaVat: 0,
                    thoiGianGiaoHang: new Date(),
                    thoiGianBaoHanh: new Date(),
                    dieuKhoan: 'abvc',
                    ghiChu: 'abvc',
                },
                {
                    id: 2,
                    tenNcc: 'abvc',
                    soLuong: 1,
                    donGia: 200000,
                    vat: 8,
                    tongTien: 0,
                    tongTienChuaVat: 0,
                    thoiGianGiaoHang: new Date(),
                    thoiGianBaoHanh: new Date(),
                    dieuKhoan: 'abvc',
                    ghiChu: 'abvc',
                },
                {
                    id: 3,
                    tenNcc: 'abvc',
                    soLuong: 1,
                    donGia: 8500000,
                    vat: 6,
                    tongTien: 0,
                    tongTienChuaVat: 0,
                    thoiGianGiaoHang: new Date(),
                    thoiGianBaoHanh: new Date(),
                    dieuKhoan: 'abvc',
                    ghiChu: 'abvc',
                },
            ],
        },
        {
            id: 2,
            tenHangMuc: 'Hang muc 2',
            data: [
                {
                    id: 1,
                    tenNcc: 'haskjdhasjdhasjk',
                    soLuong: 1,
                    donGia: 980000,
                    vat: 4,
                    tongTien: 0,
                    tongTienChuaVat: 0,
                    thoiGianGiaoHang: new Date(),
                    thoiGianBaoHanh: new Date(),
                    dieuKhoan: 'haskjdhasjdhasjk',
                    ghiChu: 'haskjdhasjdhasjk',
                },
                {
                    id: 2,
                    tenNcc: 'haskjdhasjdhasjk',
                    soLuong: 1,
                    donGia: 5640000,
                    vat: 8,
                    tongTien: 0,
                    tongTienChuaVat: 0,
                    thoiGianGiaoHang: new Date(),
                    thoiGianBaoHanh: new Date(),
                    dieuKhoan: 'haskjdhasjdhasjk',
                    ghiChu: 'haskjdhasjdhasjk',
                },
                {
                    id: 3,
                    tenNcc: 'haskjdhasjdhasjk',
                    soLuong: 1,
                    donGia: 54520000,
                    vat: 7,
                    tongTien: 0,
                    tongTienChuaVat: 0,
                    thoiGianGiaoHang: new Date(),
                    thoiGianBaoHanh: new Date(),
                    dieuKhoan: 'haskjdhasjdhasjk',
                    ghiChu: 'haskjdhasjdhasjk',
                },
            ],
        },
    ],
})
export const getters = {
    // danhSachNhaPhanPhoi: (state) => state.danhSachNhaPhanPhoi,
}
export const mutations = {
    // SET_ITEM(state, newData) {
    //     state.danhSachNhaPhanPhoi = newData
    // },
}
export const actions = {}
