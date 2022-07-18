import { v4 as uuidv4 } from 'uuid'

export const state = () => ({
    danhSach: [
        {
            id: uuidv4(),
            title: 'Tất cả',
            listType: 'all',
        },
        {
            id: uuidv4(),
            title: 'Chờ duyệt',
            listType: 'wait',
        },
        {
            id: uuidv4(),
            title: 'Đã duyệt',
            listType: 'approved',
        },
        {
            id: uuidv4(),
            title: 'Không duyệt',
            listType: 'reject',
        },
    ],
    headerList: [
        {
            id: uuidv4(),
            title: 'Mua hàng dự án',
            to: 'Purchase/Project',
        },
        {
            id: uuidv4(),
            title: 'Mua hàng ngoài dự án',
            to: 'Purchase/NonProject',
        },
    ],
    muaHangDuAn: [],
    muaHangNgoaiDuAn: [],
    suaYeuCau: null,
    suaYeuCauNp: null,
    listItem: [],
    listItemNp: [],
    refNumber: {},
    refNumberNp: {},
    baoCaoYcmh: [],
    isApprove: false,
    isApproveNp: false,
})
export const getters = {
    // mua hang du an

    suaYeuCau: (state) => state.suaYeuCau,
    danhSachHangHoa: (state) => {
        let objSuaYeuCau = JSON.parse(JSON.stringify(state.suaYeuCau))
        if (!objSuaYeuCau) return []
        return objSuaYeuCau ? objSuaYeuCau.yeuCauMuaHangChiTiets : []
    },
    // mua hang ngoai du an

    suaYeuCauNp: (state) => state.suaYeuCauNp,
    danhSachHangHoaNp: (state) => {
        let objSuaYeuCau = JSON.parse(JSON.stringify(state.suaYeuCauNp))
        if (!objSuaYeuCau) return []
        return objSuaYeuCau ? objSuaYeuCau.yeuCauMuaHangNoiBoChiTiets : []
    },
}
export const mutations = {
    // mua hang du an
    SET_ITEM(state, item) {
        state.muaHangDuAn = item
    },
    EDIT_ITEM(state, item) {
        state.suaYeuCau = item
    },
    GET_ITEM(state, item) {
        state.listItem = item
    },
    GET_REF_NUM(state, item) {
        state.refNumber = item
    },
    IS_APPROVE(state, item) {
        state.isApprove = item
    },

    // mua hang ngoai du an
    SET_ITEM_NP(state, item) {
        state.muaHangNgoaiDuAn = item
    },
    EDIT_ITEM_NP(state, item) {
        state.suaYeuCauNp = item
    },
    GET_ITEM_NP(state, item) {
        state.listItemNp = item
    },
    GET_REF_NUM_NP(state, item) {
        state.refNumberNp = item
    },
    IS_APPROVE_NP(state, item) {
        state.isApproveNp = item
    },

    // Bao cao

    SET_ITEM_BC(state, item) {
        state.baoCaoYcmh = item
    },
}
export const actions = {
    // mua hang du an

    async getData({ commit }) {
        try {
            let response = await this.$axios.get('/pr/get-all-of-pr')
            commit('SET_ITEM', response.data.data)
        } catch (err) {
            console.log(err)
        }
    },

    async postData({ commit }, newItem) {
        try {
            await this.$axios.post('/pr/post-pr', newItem)
        } catch (err) {
            console.log(err)
        }
    },
    async deleteData({ commit }, delId) {
        try {
            await this.$axios.delete(`/pr/delete-pr?id=${delId}`)
        } catch (err) {
            console.log(err)
        }
    },
    async getEditData({ commit }, editId) {
        try {
            let response = await this.$axios.get(`/pr/get-pr?id=${editId}`)
            commit('EDIT_ITEM', response.data.data)
        } catch (err) {
            console.log(err)
        }
    },
    async editData({ commit }, editItem) {
        try {
            await this.$axios.put('/pr/put-pr', editItem)
        } catch (err) {
            console.log(err)
        }
    },
    async getItems({ commit }) {
        try {
            let response = await this.$axios.get('/item/get-items')
            commit('GET_ITEM', response.data.data)
        } catch (err) {
            console.log(err)
        }
    },
    async getRefNumber({ commit }, payload) {
        try {
            let response = await this.$axios.get(
                `/pr/get-ref-number?maDuAn=${payload.maDuAn}&phongBanId=${payload.phongBanId}`
            )
            commit('GET_REF_NUM', response.data.data)
        } catch (err) {
            console.log(err)
        }
    },

    async checkApprove({ commit }, ycID) {
        try {
            let response = await this.$axios.get(
                `/pr/is-approving-pr?ycmhId=${ycID}`
            )
            commit('IS_APPROVE', response.data.data)
        } catch (err) {
            console.log(err)
        }
    },

    // mua hang ngoai du an

    async getDataNp({ commit }) {
        try {
            let response = await this.$axios.get('/ipr/get-all-of-pr')
            commit('SET_ITEM_NP', response.data.data)
        } catch (err) {
            console.log(err)
        }
    },

    async postDataNp({ commit }, newItem) {
        try {
            await this.$axios.post('/ipr/post-pr', newItem)
        } catch (err) {
            console.log(err)
        }
    },
    async deleteDataNp({ commit }, delId) {
        try {
            await this.$axios.delete(`/ipr/delete-pr?id=${delId}`)
        } catch (err) {
            console.log(err)
        }
    },
    async getEditDataNp({ commit }, editId) {
        try {
            let response = await this.$axios.get(`/ipr/get-pr?id=${editId}`)
            commit('EDIT_ITEM_NP', response.data.data)
        } catch (err) {
            console.log(err)
        }
    },
    async editDataNp({ commit }, editItem) {
        try {
            await this.$axios.put('/ipr/put-pr', editItem)
        } catch (err) {
            console.log(err)
        }
    },
    async getItemsNp({ commit }) {
        try {
            let response = await this.$axios.get('/iitem/get-items')
            commit('GET_ITEM_NP', response.data.data)
        } catch (err) {
            console.log(err)
        }
    },
    async getRefNumberNp({ commit }, pbId) {
        try {
            let response = await this.$axios.get(
                `/ipr/get-ref-number?phongBanId=${pbId}`
            )
            commit('GET_REF_NUM_NP', response.data.data)
        } catch (err) {
            console.log(err)
        }
    },

    async checkApproveNp({ commit }, ycID) {
        try {
            let response = await this.$axios.get(
                `/ipr/is-approving-pr?ycmhId=${ycID}`
            )
            commit('IS_APPROVE_NP', response.data.data)
        } catch (err) {
            console.log(err)
        }
    },

    // Bao cao

    async getReportApproval({ commit }) {
        try {
            let response = await this.$axios.get('/pr/report-approval-pr-items')
            commit('SET_ITEM_BC', response.data.data)
        } catch (err) {
            console.log(err)
        }
    },
}
