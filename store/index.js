import { v4 as uuidv4 } from 'uuid'
import axios from 'axios'

export const state = () => ({
    ChucNang: [
        {
            id: uuidv4(),
            title: 'Project management',
            to: 'ProjectManagement',
            color: '#940726',
            image: require('assets/icon-project-management.png'),
        },
        {
            id: uuidv4(),
            title: 'Distribution list',
            to: '',
            color: '#008AC1',
            image: require('assets/list2.gif'),
        },
        {
            id: uuidv4(),
            title: 'Work place',
            to: '',
            color: '#2B585F',
            image: require('assets/programming.gif'),
        },
        {
            id: uuidv4(),
            title: '1 Office',
            to: '',
            color: '#157787',
            image: require('assets/1office.svg'),
        },
        {
            id: uuidv4(),
            title: 'Cash flow analysis',
            to: '',
            color: '#C83213',
            image: require('assets/cash.gif'),
        },
        {
            id: uuidv4(),
            title: 'Purchasing',
            to: 'Purchase',
            color: '#90AA1D',
            image: require('assets/buy.gif'),
        },
        {
            id: uuidv4(),
            title: '',
            to: '',
            color: '#90AA1D',
            image: '',
        },
        {
            id: uuidv4(),
            title: '',
            to: '',
            color: '#90AA1D',
            image: '',
        },
        {
            id: uuidv4(),
            title: '',
            to: '',
            color: '#90AA1D',
            image: '',
        },
    ],
    muaDuAn: [],
    danhSachMuaDuAn: [
        {
            id: uuidv4(),
            title: 'List of purchase requests',
            listType: 'muahang',
            data: [
                {
                    id: uuidv4(),
                    tenYeuCau: 'mua hang 1',
                    soLuong: 'mua hang 1',
                    thoiGian: '20/10/2022',
                },
                {
                    id: uuidv4(),
                    tenYeuCau: 'mua hang 1',
                    soLuong: 'mua hang 1',
                    thoiGian: '20/10/2022',
                },
                {
                    id: uuidv4(),
                    tenYeuCau: 'mua hang 1',
                    soLuong: 'mua hang 1',
                    thoiGian: '20/10/2022',
                },
                {
                    id: uuidv4(),
                    tenYeuCau: 'mua hang 1',
                    soLuong: 'mua hang 1',
                    thoiGian: '20/10/2022',
                },
                {
                    id: uuidv4(),
                    tenYeuCau: 'mua hang 1',
                    soLuong: 'mua hang 1',
                    thoiGian: '20/10/2022',
                },
                {
                    id: uuidv4(),
                    tenYeuCau: 'mua hang 1',
                    soLuong: 'mua hang 1',
                    thoiGian: '20/10/2022',
                },
                {
                    id: uuidv4(),
                    tenYeuCau: 'mua hang 1',
                    soLuong: 'mua hang 1',
                    thoiGian: '20/10/2022',
                },
                {
                    id: uuidv4(),
                    tenYeuCau: 'mua hang 1',
                    soLuong: 'mua hang 1',
                    thoiGian: '20/10/2022',
                },
                {
                    id: uuidv4(),
                    tenYeuCau: 'mua hang 1',
                    soLuong: 'mua hang 1',
                    thoiGian: '20/10/2022',
                },
            ],
        },
        {
            id: uuidv4(),
            title: 'List of production requirements',
            listType: 'sanxuat',
            data: [
                {
                    id: uuidv4(),
                    tenYeuCau: 'san xuat 1',
                    dayChuyen: 'san xuat 1',
                    nhanCong: 300,
                },
                {
                    id: uuidv4(),
                    tenYeuCau: 'san xuat 1',
                    dayChuyen: 'san xuat 1',
                    nhanCong: 100,
                },
                {
                    id: uuidv4(),
                    tenYeuCau: 'san xuat 1',
                    dayChuyen: 'san xuat 1',
                    nhanCong: 50,
                },
            ],
        },
    ],
    muaNoiBo: [],
    danhSachMuaNoiBo: [
        {
            id: uuidv4(),
            title: 'List of purchase requests',
            listType: 'muahang',
            data: [
                {
                    id: uuidv4(),
                    tenYeuCau: 'mua hang 1',
                    soLuong: 'mua hang 1',
                    thoiGian: '20/10/2022',
                },
                {
                    id: uuidv4(),
                    tenYeuCau: 'mua hang 1',
                    soLuong: 'mua hang 1',
                    thoiGian: '20/10/2022',
                },
                {
                    id: uuidv4(),
                    tenYeuCau: 'mua hang 1',
                    soLuong: 'mua hang 1',
                    thoiGian: '20/10/2022',
                },
                {
                    id: uuidv4(),
                    tenYeuCau: 'mua hang 1',
                    soLuong: 'mua hang 1',
                    thoiGian: '20/10/2022',
                },
                {
                    id: uuidv4(),
                    tenYeuCau: 'mua hang 1',
                    soLuong: 'mua hang 1',
                    thoiGian: '20/10/2022',
                },
                {
                    id: uuidv4(),
                    tenYeuCau: 'mua hang 1',
                    soLuong: 'mua hang 1',
                    thoiGian: '20/10/2022',
                },
                {
                    id: uuidv4(),
                    tenYeuCau: 'mua hang 1',
                    soLuong: 'mua hang 1',
                    thoiGian: '20/10/2022',
                },
                {
                    id: uuidv4(),
                    tenYeuCau: 'mua hang 1',
                    soLuong: 'mua hang 1',
                    thoiGian: '20/10/2022',
                },
                {
                    id: uuidv4(),
                    tenYeuCau: 'mua hang 1',
                    soLuong: 'mua hang 1',
                    thoiGian: '20/10/2022',
                },
            ],
        },
        {
            id: uuidv4(),
            title: 'List of production requirements',
            listType: 'sanxuat',
            data: [
                {
                    id: uuidv4(),
                    tenYeuCau: 'san xuat 1',
                    dayChuyen: 'san xuat 1',
                    nhanCong: 300,
                },
                {
                    id: uuidv4(),
                    tenYeuCau: 'san xuat 1',
                    dayChuyen: 'san xuat 1',
                    nhanCong: 100,
                },
                {
                    id: uuidv4(),
                    tenYeuCau: 'san xuat 1',
                    dayChuyen: 'san xuat 1',
                    nhanCong: 50,
                },
            ],
        },
    ],
    pheDuyet: [
        {
            id: uuidv4(),
            soThamChieu: 'dnmh',
            ngayDeTrinh: '20/10/2021',
            ngayCanHang: '20/10/2021',
            nguoiTao: 'Nguyễn Duy Cương',
            phongBan: 'IT',
            ghiChu: '',
            trangThai: 'Pending',
            HangHoa: [
                {
                    tenHangHoa: 'hang hoa 1',
                    xuatXu: 'Viet nam',
                    maHieu: 1020212,
                    soluong: 100,
                    soTien: 100000000,
                    ghiChu: 'sadsadsadasdad',
                },
            ],
        },
        {
            id: uuidv4(),
            soThamChieu: 'dnmh',
            ngayDeTrinh: '20/10/2021',
            ngayCanHang: '20/10/2021',
            nguoiTao: 'Nguyễn Duy Cương',
            phongBan: 'IT',
            ghiChu: '',
            trangThai: 'Pending',
            HangHoa: [
                {
                    tenHangHoa: 'hang hoa 2',
                    xuatXu: 'Viet nam',
                    maHieu: 1020212,
                    soluong: 100,
                    soTien: 100000000,
                    ghiChu: 'sadsadsadasdad',
                },
            ],
        },
        {
            id: uuidv4(),
            soThamChieu: 'dnmh',
            ngayDeTrinh: '20/10/2021',
            ngayCanHang: '20/10/2021',
            nguoiTao: 'Nguyễn Duy Cương',
            phongBan: 'IT',
            ghiChu: '',
            trangThai: 'Approved',
            HangHoa: [
                {
                    tenHangHoa: 'hang hoa 3',
                    xuatXu: 'Viet nam',
                    maHieu: 1020212,
                    soluong: 100,
                    soTien: 100000000,
                    ghiChu: 'sadsadsadasdad',
                },
            ],
        },
        {
            id: uuidv4(),
            soThamChieu: 'dnmh',
            ngayDeTrinh: '20/10/2021',
            ngayCanHang: '20/10/2021',
            nguoiTao: 'Nguyễn Duy Cương',
            phongBan: 'IT',
            ghiChu: '',
            trangThai: 'Not approved',
            HangHoa: [
                {
                    tenHangHoa: 'hang hoa 4',
                    xuatXu: 'Viet nam',
                    maHieu: 1020212,
                    soluong: 100,
                    soTien: 100000000,
                    ghiChu: 'sadsadsadasdad',
                },
            ],
        },
    ],
    QuanLy: [],
    DanhSachQuanLy: [
        {
            id: uuidv4(),
            title: 'List of projects',
            listType: 'project',
            data: [
                {
                    no: 1,
                    id: 'AAD2101',
                    Partner: 'AAD',
                    Customer: 'AAD',
                    ProjectName: 'Service Samsung',
                    Description: '',
                    Category: 'service',
                    Company: 'VNAS Services',
                    status: 'Finish',
                    Type: 'Ngoài hệ thống',
                    CreatedDate: '7/7/2021 8:50:33 AM',
                    CurrentIssue: 'test new',
                },
                {
                    no: 2,
                    id: 'ABB2001',
                    Partner: 'AAD',
                    Customer: 'AAD',
                    ProjectName: 'Service Samsung',
                    Description: '',
                    Category: 'service',
                    Company: 'VNAS Services',
                    status: 'Finish',
                    Type: 'Ngoài hệ thống',
                    CreatedDate: '7/7/2021 8:50:33 AM',
                    CurrentIssue: 'test new',
                },
                {
                    no: 3,
                    id: 'ABB2002',
                    Partner: 'AAD',
                    Customer: 'AAD',
                    ProjectName: 'Service Samsung',
                    Description: '',
                    Category: 'service',
                    Company: 'VNAS Services',
                    status: 'Closed',
                    Type: 'Ngoài hệ thống',
                    CreatedDate: '7/7/2021 8:50:33 AM',
                    CurrentIssue: 'test new',
                },
                {
                    no: 4,
                    id: 'ABB2003',
                    Partner: 'AAD',
                    Customer: 'AAD',
                    ProjectName: 'Service Samsung',
                    Description: '',
                    Category: 'service',
                    Company: 'VNAS Services',
                    status: 'Pending',
                    Type: 'Ngoài hệ thống',
                    CreatedDate: '7/7/2021 8:50:33 AM',
                    CurrentIssue: 'test new',
                },
                {
                    no: 5,
                    id: 'ABB2003',
                    Partner: 'AAD',
                    Customer: 'AAD',
                    ProjectName: 'Service Samsung',
                    Description: '',
                    Category: 'service',
                    Company: 'VNAS Services',
                    status: 'Pending',
                    Type: 'Ngoài hệ thống',
                    CreatedDate: '7/7/2021 8:50:33 AM',
                    CurrentIssue: 'test new',
                },
                {
                    no: 6,
                    id: 'ABB2004',
                    Partner: 'AAD',
                    Customer: 'AAD',
                    ProjectName: 'Service Samsung',
                    Description: '',
                    Category: 'service',
                    Company: 'VNAS Services',
                    status: 'Ongoing',
                    Type: 'Ngoài hệ thống',
                    CreatedDate: '7/7/2021 8:50:33 AM',
                    CurrentIssue: 'test new',
                },
                {
                    no: 7,
                    id: 'ABB2008',
                    Partner: 'AAD',
                    Customer: 'AAD',
                    ProjectName: 'Service Samsung',
                    Description: '',
                    Category: 'service',
                    Company: 'VNAS Services',
                    status: 'Ongoing',
                    Type: 'Ngoài hệ thống',
                    CreatedDate: '7/7/2021 8:50:33 AM',
                    CurrentIssue: 'test new',
                },
            ],
        },
        {
            id: uuidv4(),
            title: 'List of partners',
            listType: 'partner',
            data: [
                {
                    id: 1,
                    PartnerID: 'AUM',
                    Name: 'Aumann',
                    TIN: 2800720339,
                    Address: '48361 Beelen, Deutschland, Đức',
                    Contact: '',
                    Email: '',
                    Phone: 0,
                },
                {
                    id: 2,
                    PartnerID: 'BVT',
                    Name: 'Bệnh viện Đa khoa tỉnh Thanh Hoá',
                    TIN: 2800720339,
                    Address:
                        '181- Hải Thượng Lãn ông- Đông Vệ - Thành phố Thanh Hoá',
                    Contact: 'Mr. Sơn Lê',
                    Email: 'lesonbvdkth@gmail.com',
                    Phone: +84945512678,
                },
            ],
        },
        {
            id: uuidv4(),
            title: 'List of customers',
            listType: 'customer',
            data: [
                {
                    id: 1,
                    CustomerID: 'AUM',
                    Name: 'Aumann',
                    TIN: 2800720339,
                    Address: '48361 Beelen, Deutschland, Đức',
                    Contact: '',
                    Email: '',
                    Phone: 0,
                },
                {
                    id: 2,
                    CustomerID: 'TN',
                    Name: '	CÔNG TY CỔ PHẦN TƯ VẤN VÀ XÂY DỰNG THANH NHÀN',
                    TIN: 2300232950,
                    Address:
                        'Thôn Trung, Xã Nghĩa Trung, Huyện Việt Yên, Tỉnh Bắc Giang, Việt Nam',
                    Contact: 'Mr Phát',
                    Email: 'phatnnc@sonha.com.vn',
                    Phone: +84768533888,
                },
            ],
        },
        {
            id: uuidv4(),
            title: 'List of categories',
            listType: 'category',
            data: [
                {
                    id: 1,
                    name: 'Báo giá',
                },
                {
                    id: 2,
                    name: 'Chế tạo, sửa chữa',
                },
                {
                    id: 3,
                    name: 'Gia công theo bản vẽ',
                },

                {
                    id: 4,
                    name: 'Service',
                },
                {
                    id: 5,
                    name: 'Spare part',
                },
                {
                    id: 6,
                    name: 'Thương mại',
                },
                {
                    id: 7,
                    name: 'Turnkey line',
                },
            ],
        },
        {
            id: uuidv4(),
            title: 'List of companies',
            listType: 'company',
            data: [{}],
        },
        {
            id: uuidv4(),
            title: 'List of project views',
            listType: 'view',
            data: [
                {
                    id: 1,
                    Description: 'Basic',
                    ViewMaDuAn: true,
                    ViewDoiTac: true,
                    ViewKhachHang: true,
                    ViewTenDuAn: true,
                    ViewPhanLoai: true,
                    ViewNgayTao: true,
                    ViewTinhTrang: true,
                },
            ],
        },
    ],
    routeParams: '',
    isSelected: '',
    statusItem: [
        {
            id: 'ongoing',
            title: 'Ongoing Projects',
            image: require('assets/ongoingIcon.svg'),
            data: [],
        },
        {
            id: 'finish',
            title: 'Finished Projects',
            image: require('assets/finishedIcon.svg'),
            data: [],
        },
        {
            id: 'closed',
            title: 'Closed Projects',
            image: require('assets/closedIcon2.svg'),
            data: [],
        },
        {
            id: 'pending',
            title: 'Pending Projects',
            image: require('assets/pendingIcon.png'),
            data: [],
        },
    ],
})
export const getters = {
    muaDuAn: (state) => state.muaDuAn,
    danhSachMuaDuAn: (state) => state.danhSachMuaDuAn,
    muaNoiBo: (state) => state.muaNoiBo,
    danhSachMuaNoiBo: (state) => state.danhSachMuaNoiBo,
    pheDuyet: (state) => state.pheDuyet,
    quanLy: (state) => state.QuanLy,
    danhSachQuanLy: (state) => state.DanhSachQuanLy,
}
export const mutations = {
    SET_ITEM(state, item) {
        state.danhSachMuaDuAn.forEach((e) => {
            if (e.listType === 'muahang') {
                e.data = item
            }
        })
    },
    ADD_LIST(state, newItem) {
        if (
            !state.muaDuAn.find((i) => i.id === newItem.id) &&
            !state.muaNoiBo.find((i) => i.id === newItem.id) &&
            !state.QuanLy.find((i) => i.id === newItem.id)
        ) {
            state.muaDuAn.push(newItem)
            state.muaNoiBo.push(newItem)
            state.QuanLy.push(newItem)
        }
    },
    LANG_SWITCH(state, lang) {
        state.routeParams = lang
    },
    IS_SELECTED(state, newText) {
        state.isSelected = newText
    },
    CLICK_DELETE(state, itemId) {
        state.muaDuAn = state.muaDuAn.filter((e) => e.id !== itemId)
        state.muaNoiBo = state.muaNoiBo.filter((e) => e.id !== itemId)
        state.QuanLy = state.QuanLy.filter((e) => e.id !== itemId)
    },
    CLEAR_DATA(state) {
        state.muaDuAn.splice(0, state.muaDuAn.length)
        state.muaNoiBo.splice(0, state.muaNoiBo.length)
        state.QuanLy.splice(0, state.QuanLy.length)
    },
    ADD_OPTION(state) {
        state.DanhSachQuanLy.forEach((e) => {
            if (!state.QuanLy.find((i) => i.id === e.id)) {
                if (e.listType === state.isSelected) {
                    state.QuanLy.push(e)
                }
            }
        })
    },
    PROJECT_STATUS(state) {
        state.DanhSachQuanLy.forEach((e) => {
            if (e.listType === 'project') {
                state.statusItem.forEach((i) => {
                    if (i.id === 'ongoing') {
                        i.data = e.data.filter((x) => {
                            return x.status == 'Ongoing'
                        })
                    }
                    if (i.id === 'finish') {
                        i.data = e.data.filter((x) => {
                            return x.status == 'Finish'
                        })
                    }
                    if (i.id === 'closed') {
                        i.data = e.data.filter((x) => {
                            return x.status == 'Closed'
                        })
                    }
                    if (i.id === 'pending') {
                        i.data = e.data.filter((x) => {
                            return x.status == 'Pending'
                        })
                    }
                })
            }
        })
    },
}
export const actions = {
    async getData({ commit }) {
        try {
            const response = await axios.get(
                `http://jsonplaceholder.typicode.com/posts`
            )
            commit('SET_ITEM', response.data)
        } catch (err) {
            console.log(err)
        }
    },
}
