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
            title: 'Purchase',
            to: 'Purchase',
            color: '#90AA1D',
            image: require('assets/buy.gif'),
        },
        {
            id: uuidv4(),
            title: '1Office',
            to: '',
            color: '#157787',
            image: require('assets/1office.svg'),
        },
        {
            id: uuidv4(),
            title: 'Distribution list',
            to: 'distribution',
            color: '#008AC1',
            image: require('assets/list.png'),
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
    token: '',
    userInfo: {},
    excelFile: null,
    isSelected: '',
})
export const getters = {
    isLogin: (state) => (state.token !== '' ? true : false),
}

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
    GET_TOKEN(state, item) {
        state.token = item
    },
    GET_USER(state, item) {
        state.userInfo = item
    },
    EXCEL_FILE(state, item) {
        state.excelFile = item
    },
    IS_SELECTED(state, newText) {
        state.isSelected = newText
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
                'https://data.vnas.com.vn/identityserver/connect/token',
                item
            )
            this.$cookies.set('cookieToken', response.data.access_token, {
                path: '/',
                maxAge: 60 * 60 * 24 * 7,
            })
            commit('GET_TOKEN', response.data.access_token)
        } catch (err) {
            console.log(err)
        }
    },
    async getUser({ commit }, username) {
        try {
            let response = await this.$axios.get(
                `/staff/get-staff-by-username?username=${username}`
            )
            commit('GET_USER', response.data.data || {})
        } catch (err) {
            console.log(err)
        }
    },

    async exportExcel({ commit }, exportId) {
        try {
            let response = await this.$axios.get(
                `/pr/export-pr?id=${exportId}`,
                {
                    responseType: 'blob',
                }
            )
            commit('EXCEL_FILE', response.data.data)
            let url = window.URL.createObjectURL(new Blob([response.data]))
            let link = document.createElement('a')
            link.href = url
            link.setAttribute('download', 'De-Nghi-Mua-Hang.xlsx')
            document.body.appendChild(link)
            link.click()
        } catch (err) {
            console.log(err)
        }
    },
}
