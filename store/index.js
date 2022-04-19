import { v4 as uuidv4 } from 'uuid'

export const state = () => ({
    ChucNang: [
        {
            id: uuidv4(),
            title: 'Project management',
            to: '/ProjectManagement',
            color: '#940726',
            image: '/icon-project-management.png',
        },
        {
            id: uuidv4(),
            title: 'Distribution list',
            to: '',
            color: '#008AC1',
            image: '/list.png',
        },
        {
            id: uuidv4(),
            title: 'Work place',
            to: '',
            color: '#2B585F',
            image: '/workplace.png',
        },
        {
            id: uuidv4(),
            title: '1 Office',
            to: '',
            color: '#157787',
            image: '/1office.svg',
        },
        {
            id: uuidv4(),
            title: 'Cash flow analysis',
            to: '',
            color: '#C83213',
            image: '/cash.png',
        },
        {
            id: uuidv4(),
            title: 'Purchasing',
            to: '/Purchase',
            color: '#90AA1D',
            image: '/purchase2.png',
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
    DanhSach: [],
    DanhSachYeuCau: [
        {
            id: uuidv4(),
            title: 'List of purchase requests',
            loaiDanhSach: 'muahang',
            data: [
                {
                    id: uuidv4(),
                    tenYeuCau: 'mua hang 1',
                    soLuong: 'mua hang 1',
                    thoiGian: '20/10/2022',
                    loaiMuaHang: 'Noi bo',
                },
                {
                    id: uuidv4(),
                    tenYeuCau: 'mua hang 1',
                    soLuong: 'mua hang 1',
                    thoiGian: '20/10/2022',
                    loaiMuaHang: 'Du an',
                },
                {
                    id: uuidv4(),
                    tenYeuCau: 'mua hang 1',
                    soLuong: 'mua hang 1',
                    thoiGian: '20/10/2022',
                    loaiMuaHang: 'Noi bo',
                },
                {
                    id: uuidv4(),
                    tenYeuCau: 'mua hang 1',
                    soLuong: 'mua hang 1',
                    thoiGian: '20/10/2022',
                    loaiMuaHang: 'Du an',
                },
                {
                    id: uuidv4(),
                    tenYeuCau: 'mua hang 1',
                    soLuong: 'mua hang 1',
                    thoiGian: '20/10/2022',
                    loaiMuaHang: 'Noi bo',
                },
                {
                    id: uuidv4(),
                    tenYeuCau: 'mua hang 1',
                    soLuong: 'mua hang 1',
                    thoiGian: '20/10/2022',
                    loaiMuaHang: 'Du an',
                },
                {
                    id: uuidv4(),
                    tenYeuCau: 'mua hang 1',
                    soLuong: 'mua hang 1',
                    thoiGian: '20/10/2022',
                    loaiMuaHang: 'Noi bo',
                },
                {
                    id: uuidv4(),
                    tenYeuCau: 'mua hang 1',
                    soLuong: 'mua hang 1',
                    thoiGian: '20/10/2022',
                    loaiMuaHang: 'Du an',
                },
                {
                    id: uuidv4(),
                    tenYeuCau: 'mua hang 1',
                    soLuong: 'mua hang 1',
                    thoiGian: '20/10/2022',
                    loaiMuaHang: 'Noi bo',
                },
            ],
        },
        {
            id: uuidv4(),
            title: 'List of production requirements',
            loaiDanhSach: 'sanxuat',
            data: [
                {
                    id: uuidv4(),
                    tenYeuCau: 'san xuat 1',
                    dayChuyen: 'san xuat 1',
                    nhanCong: 300,
                    loaiSanXuat: 'Noi bo',
                },
                {
                    id: uuidv4(),
                    tenYeuCau: 'san xuat 1',
                    dayChuyen: 'san xuat 1',
                    nhanCong: 100,
                    loaiSanXuat: 'Du an',
                },
                {
                    id: uuidv4(),
                    tenYeuCau: 'san xuat 1',
                    dayChuyen: 'san xuat 1',
                    nhanCong: 50,
                    loaiSanXuat: 'Noi bo',
                },
            ],
        },
    ],
    DuAn: [],
    DanhSachDuAn: [
        {
            id: uuidv4(),
            title: 'List of projects',
            loaiDanhSach: 'project',
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
            loaiDanhSach: 'partner',
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
            loaiDanhSach: 'customer',
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
            loaiDanhSach: 'category',
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
            loaiDanhSach: 'company',
            data: [{}],
        },
        {
            id: uuidv4(),
            title: 'List of project views',
            loaiDanhSach: 'view',
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
            data: [],
            image: '/ongoingIcon.svg',
        },
        {
            id: 'finish',
            title: 'Finished Projects',
            data: [],
            image: '/finishedIcon.svg',
        },
        {
            id: 'closed',
            title: 'Closed Projects',
            data: [],
            image: '/closedIcon2.svg',
        },
        {
            id: 'pending',
            title: 'Pending Projects',
            data: [],
            image: '/pendingIcon.png',
        },
    ],
})
export const getters = {
    List: (state) => state.DanhSach,
    ListYeuCau: (state) => state.DanhSachYeuCau,
    Project: (state) => state.DuAn,
    ListDuAn: (state) => state.DanhSachDuAn,
}
export const mutations = {
    ADD_LIST(state, newItem) {
        if (
            !state.DuAn.find((i) => i.id === newItem.id) &&
            !state.DanhSach.find((i) => i.id === newItem.id)
        ) {
            state.DuAn.push(newItem)
            state.DanhSach.push(newItem)
        }
    },
    LANG_SWITCH(state, lang) {
        state.routeParams = lang
    },
    IS_SELECTED(state, newText) {
        state.isSelected = newText
    },
    CLICK_DELETE(state, itemId) {
        state.DanhSach = state.DanhSach.filter((e) => e.id !== itemId)
        state.DuAn = state.DuAn.filter((e) => e.id !== itemId)
    },
    CLEAR_DATA(state) {
        state.DanhSach.splice(0, state.DanhSach.length)
        state.DuAn.splice(0, state.DuAn.length)
    },
    ADD_OPTION(state) {
        state.DanhSachDuAn.forEach((e) => {
            if (!state.DuAn.find((i) => i.id === e.id)) {
                if (e.loaiDanhSach === state.isSelected) {
                    state.DuAn.push(e)
                }
            }
        })
    },
    PROJECT_STATUS(state) {
        state.DanhSachDuAn.forEach((e) => {
            if (e.loaiDanhSach === 'project') {
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
export const actions = {}
