import { v4 as uuidv4 } from 'uuid'

export const state = () => ({
    ChucNang: [
        {
            id: uuidv4(),
            title: 'ProjectManagement',
            to: '/ProjectManagement',
            color: '#940726',
            icon: 'mdi mdi-account-details',
            image: '',
        },
        {
            id: uuidv4(),
            title: 'DistributionList',
            to: '',
            color: '#008AC1',
            icon: 'mdi mdi-clipboard-list',
            image: '',
        },
        {
            id: uuidv4(),
            title: 'WorkPlace',
            to: '',
            color: '#2B585F',
            icon: 'mdi mdi-domain',
            image: '',
        },
        {
            id: uuidv4(),
            title: '1Office',
            to: '',
            color: '#157787',
            icon: '',
            image: '/1office.svg',
        },
        {
            id: uuidv4(),
            title: 'CashFlowAnalysis',
            to: '',
            color: '#C83213',
            icon: 'mdi mdi-cash',
            image: '',
        },
        {
            id: uuidv4(),
            title: 'Purchasing',
            to: '/Purchase',
            color: '#90AA1D',
            icon: 'mdi mdi-cart',
            image: '',
        },
        {
            id: uuidv4(),
            title: '',
            to: '',
            color: '#90AA1D',
            icon: '',
            image: '',
        },
        {
            id: uuidv4(),
            title: '',
            color: '#90AA1D',
            to: '',
            icon: '',
            image: '',
        },
        {
            id: uuidv4(),
            title: '',
            to: '',
            color: '#90AA1D',
            icon: '',
            image: '',
        },
    ],
    DanhSach: [],
    DanhSachYeuCau: [
        {
            id: uuidv4(),
            title: 'ListPurchase',
            loaiDanhSach: 'muahang',
            dataMuahang: [
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
            title: 'ListProduction',
            loaiDanhSach: 'sanxuat',
            dataSanXuat: [
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
            title: 'ListProjects',
            loaiDanhSach: 'project',
            dataProject: [
                {
                    id: uuidv4(),
                    ten: 'a',
                },
            ],
        },
        {
            id: uuidv4(),
            title: 'ListPartners',
            loaiDanhSach: 'partner',
            dataPartner: ['partner'],
        },
        {
            id: uuidv4(),
            title: 'ListCustomers',
            loaiDanhSach: 'customer',
            dataCustomer: ['customer'],
        },
        {
            id: uuidv4(),
            title: 'ListCategories',
            loaiDanhSach: 'category',
            dataCategory: ['category'],
        },
        {
            id: uuidv4(),
            title: 'ListCompanies',
            loaiDanhSach: 'company',
            dataCompany: ['company'],
        },
        {
            id: uuidv4(),
            title: 'ListViews',
            loaiDanhSach: 'view',
            dataView: ['view'],
        },
    ],
    routeParams: '',
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
    CLICK_DELETE(state, itemId) {
        state.DanhSach = state.DanhSach.filter((e) => e.id !== itemId)
        state.DuAn = state.DuAn.filter((e) => e.id !== itemId)
    },
    CLEAR_DATA(state) {
        state.DanhSach.splice(0, state.DanhSach.length)
        state.DuAn.splice(0, state.DuAn.length)
    },
}
export const actions = {}
