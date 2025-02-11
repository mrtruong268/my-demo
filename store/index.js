import { v4 as uuidv4 } from 'uuid'

export const state = () => ({
    ChucNang: [
        {
            id: uuidv4(),
            title: 'Quản lý dự án',
            to: 'ProjectManagement',
            color: '#940726',
            image: require('assets/icon-project-management.png'),
        },
        {
            id: uuidv4(),
            title: 'Phân tích dòng tiền',
            to: '',
            color: '#C83213',
            image: require('assets/cash.gif'),
        },
        {
            id: uuidv4(),
            title: 'Mua hàng',
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
            title: 'Danh sách nhà phân phối',
            to: 'distribution',
            color: '#008AC1',
            image: require('assets/list.png'),
        },
        {
            id: uuidv4(),
            title: 'Địa điểm làm việc',
            to: '',
            color: '#2B585F',
            image: require('assets/wp.gif'),
        },
    ],
    routeParams: '',
    token: '',
    userInfo: {},
    isSelected: '',
    projectCode: [],
    hangMucTrienKhai: [],
    dataExcel: null,
    dataExcelNp: null,
    fullscreen: false,
})
export const getters = {
    isLogin: (state) => (state.token !== '' ? true : false),
}

export const mutations = {
    IS_SELECTED(state, item) {
        state.isSelected = item
    },
    LANG_SWITCH(state, lang) {
        state.routeParams = lang
    },
    GET_TOKEN(state, item) {
        state.token = item
    },
    GET_USER(state, item) {
        state.userInfo = item
    },
    GET_PROJECT(state, item) {
        state.projectCode = item
    },
    GET_HANG_MUC(state, item) {
        state.hangMucTrienKhai = item
    },
    GET_DATA_EXCEL(state, item) {
        state.dataExcel = item
    },
    GET_DATA_EXCELNP(state, item) {
        state.dataExcelNp = item
    },
    SET_FULLSCREEN(state, item) {
        state.fullscreen = item
    },
}

export const actions = {
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
            commit('GET_USER', response.data.data)
        } catch (err) {
            console.log(err)
        }
    },

    async getProjectCode({ commit }) {
        try {
            let response = await this.$axios.get(`/project/get-project-codes`)
            commit('GET_PROJECT', response.data.data)
        } catch (err) {
            console.log(err)
        }
    },

    async getHangMuc({ commit }, hangMuc) {
        try {
            let response = await this.$axios.get(
                `/project/get-dev-cate?maduan=${hangMuc}`
            )
            commit('GET_HANG_MUC', response.data.data)
        } catch (err) {
            console.log(err)
        }
    },

    async exportExcel({ commit }, exportItem) {
        try {
            let response = await this.$axios.get(
                `/pr/export-pr?id=${exportItem.id}`,
                {
                    responseType: 'blob',
                }
            )
            let url = window.URL.createObjectURL(new Blob([response.data]))
            let link = document.createElement('a')
            link.href = url
            if (response.data.type === 'application/pdf') {
                link.setAttribute(
                    'download',
                    `DNMH(${exportItem.soThamChieu}).pdf`
                )
            } else {
                link.setAttribute(
                    'download',
                    `DNMH(${exportItem.soThamChieu}).xlsx`
                )
            }
            document.body.appendChild(link)
            link.click()
        } catch (err) {
            console.log(err)
        }
    },
    async exportExcelNp({ commit }, exportItem) {
        try {
            let response = await this.$axios.get(
                `/ipr/export-pr?id=${exportItem.id}`,
                {
                    responseType: 'blob',
                }
            )
            let url = window.URL.createObjectURL(new Blob([response.data]))
            let link = document.createElement('a')
            link.href = url
            if (response.data.type === 'application/pdf') {
                link.setAttribute(
                    'download',
                    `DNMH(${exportItem.soThamChieu}).pdf`
                )
            } else {
                link.setAttribute(
                    'download',
                    `DNMH(${exportItem.soThamChieu}).xlsx`
                )
            }
            document.body.appendChild(link)
            link.click()
        } catch (err) {
            console.log(err)
        }
    },
    async uploadExcel({ commit }, uploadItem) {
        try {
            let response = await this.$axios.post(
                '/pr/import-from-excel',
                uploadItem,
                {
                    headers: {
                        'Content-Type': 'multipart/form-data',
                    },
                }
            )
            commit('GET_DATA_EXCEL', response.data.data)
        } catch (error) {
            console.log(err)
        }
    },
    async uploadExcelNp({ commit }, uploadItem) {
        try {
            let response = await this.$axios.post(
                '/ipr/import-from-excel',
                uploadItem,
                {
                    headers: {
                        'Content-Type': 'multipart/form-data',
                    },
                }
            )
            commit('GET_DATA_EXCELNP', response.data.data)
        } catch (error) {
            console.log(err)
        }
    },
    async downloadExcel({ commit }) {
        try {
            let response = await this.$axios.get('/pr/download-pr-template', {
                responseType: 'blob',
            })
            let url = window.URL.createObjectURL(new Blob([response.data]))
            let link = document.createElement('a')
            link.href = url
            link.setAttribute('download', `DNMH_TEMPLATE.xlsx`)
            document.body.appendChild(link)
            link.click()
        } catch (err) {
            console.log(err)
        }
    },
    async downloadExcelNp({ commit }) {
        try {
            let response = await this.$axios.get('/ipr/download-pr-template', {
                responseType: 'blob',
            })
            let url = window.URL.createObjectURL(new Blob([response.data]))
            let link = document.createElement('a')
            link.href = url
            link.setAttribute('download', `DNMH_TEMPLATE.xlsx`)
            document.body.appendChild(link)
            link.click()
        } catch (err) {
            console.log(err)
        }
    },
}
