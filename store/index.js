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
            image: '/list4.png',
        },
        {
            id: uuidv4(),
            title: 'Work place',
            to: '',
            color: '#2B585F',
            image: '/workplace2.png',
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
            image: '/cash3.png',
        },
        {
            id: uuidv4(),
            title: 'Purchasing',
            to: '/Purchase',
            color: '#90AA1D',
            image: '/purchase.png',
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
            data: ['partner'],
        },
        {
            id: uuidv4(),
            title: 'List of customers',
            loaiDanhSach: 'customer',
            data: ['customer'],
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
            data: ['company'],
        },
        {
            id: uuidv4(),
            title: 'List of views',
            loaiDanhSach: 'view',
            data: ['view'],
        },
    ],
    routeParams: '',
    isSelected: '',
    ongoing: [],
    finish: [],
    closed: [],
    pending: [],
})
export const getters = {
    List: (state) => state.DanhSach,
    ListYeuCau: (state) => state.DanhSachYeuCau,
    Project: (state) => state.DuAn,
    ListDuAn: (state) => state.DanhSachDuAn,
}
export const mutations = {
    ADD_LIST(state, newItem) {
        state.DanhSach.push(newItem)
        state.DuAn.push(newItem)
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
    PROJECT_STATUS(state) {
        state.DanhSachDuAn.forEach((e) => {
            if (e.loaiDanhSach === 'project') {
                state.ongoing = e.data.filter((x) => {
                    return x.status == 'Ongoing'
                })
                state.finish = e.data.filter((x) => {
                    return x.status == 'Finish'
                })
                state.closed = e.data.filter((x) => {
                    return x.status == 'Closed'
                })
                state.pending = e.data.filter((x) => {
                    return x.status == 'Pending'
                })
            }
        })
    },
    CATEGORY_ADD(state) {
        state.DanhSachDuAn.forEach((e) => {
            if (e.loaiDanhSach === state.isSelected) {
                state.DuAn.push(e)
            }
        })
    },
}
export const actions = {}
