import { v4 as uuidv4 } from 'uuid'

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
            title: '1 Office',
            to: '',
            color: '#157787',
            image: require('assets/1office.svg'),
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
            image: require('assets/wp.gif'),
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
    ThongBao: [
        {
            id: 1,
            title: 'Tất cả',
            data: [
                {
                    id: 1,
                    title: 'Phê duyệt yêu cầu mua hàng',
                    time: '1 ngày trước',
                    image: require('assets/logo.png'),
                },
                {
                    id: 2,
                    title: 'Phê duyệt yêu cầu mua hàng',
                    time: '1 ngày trước',
                    image: require('assets/logo.png'),
                },
                {
                    id: 3,
                    title: 'Phê duyệt yêu cầu mua hàng',
                    time: '1 ngày trước',
                    image: require('assets/logo.png'),
                },
                {
                    id: 4,
                    title: 'Phê duyệt yêu cầu mua hàng',
                    time: '1 ngày trước',
                    image: require('assets/logo.png'),
                },
            ],
        },
        {
            id: 2,
            title: 'Chưa đọc',
            data: [
                {
                    id: 1,
                    title: 'Phê duyệt yêu cầu mua hàng',
                    time: '1 ngày trước',
                    image: require('assets/file_tk-02.jpg'),
                },
                {
                    id: 2,
                    title: 'Phê duyệt yêu cầu mua hàng',
                    time: '1 ngày trước',
                    image: require('assets/file_tk-02.jpg'),
                },
            ],
        },
    ],
    routeParams: '',
    DanhSachChucVu: [],
    DanhSachCongTy: [],
    DanhSachPhongBan: [],
    isVisible: false,
    token: '',
})
export const getters = {}

export const mutations = {
    LANG_SWITCH(state, lang) {
        state.routeParams = lang
    },
    GET_ALL_POSITION(state, item) {
        state.DanhSachChucVu = item
    },
    GET_ALL_COMPANY(state, item) {
        state.DanhSachCongTy = item
    },
    GET_ALL_DIVISION(state, item) {
        state.DanhSachPhongBan = item
    },
    IS_VISIBLE(state, item) {
        state.isVisible = item
    },
    GET_TOKEN(state, item) {
        state.token = item
    },
}

export const actions = {
    async getAllPosition({ commit }) {
        try {
            let response = await this.$axios.get('/position/get-all-position')
            commit('GET_ALL_POSITION', response.data.data)
        } catch (err) {
            console.log(err)
        }
    },
    async getAllCompany({ commit }) {
        try {
            let response = await this.$axios.get('/company/get-all-company')
            commit('GET_ALL_COMPANY', response.data.data)
        } catch (err) {
            console.log(err)
        }
    },
    async getAllDivision({ commit }) {
        try {
            let response = await this.$axios.get('/division/get-all-division')
            commit('GET_ALL_DIVISION', response.data.data)
        } catch (err) {
            console.log(err)
        }
    },
    async login({ commit }, item) {
        try {
            let response = await this.$axios.post(
                'https://internal.vnas.com.vn/identityserver/connect/token',
                item
            )
            commit('GET_TOKEN', response.data.access_token)
        } catch (err) {
            console.log(err)
        }
    },
}
