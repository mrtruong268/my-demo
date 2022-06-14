import { v4 as uuidv4 } from 'uuid'

export const state = () => ({
    danhSach: [
        {
            id: uuidv4(),
            header: 'Mua hàng dự án',
            title: 'Danh sách mua hàng dự án',
            listType: 'mhda',
        },
        {
            id: uuidv4(),
            header: 'Mua hàng ngoài dự án',
            title: 'Danh sách mua hàng ngoài dự án',
            listType: 'mhnda',
        },
        {
            id: uuidv4(),
            header: 'Phê duyệt',
            title: 'Phê duyệt mua hàng dự án',
            listType: 'pd',
        },
    ],
    duLieuMoi: [
        {
            id: 1,
            title: 'Tạo yêu cầu mua hàng',
            listType: 'tmhda',
        },
        {
            id: 2,
            title: 'Tạo yêu cầu(Ngoài dự án)',
            listType: 'tmhnda',
        },
        {
            id: 3,
            title: 'Phê duyệt mua hàng ngoài dự án',
            listType: 'pdnda',
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
    async getRefNumber({ commit }, maDuAn) {
        try {
            let response = await this.$axios.get(
                `/pr/get-ref-number?maduan=${maDuAn}`
            )
            commit('GET_REF_NUM', response.data.data)
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
    async getRefNumberNp({ commit }) {
        try {
            let response = await this.$axios.get(`/ipr/get-ref-number`)
            commit('GET_REF_NUM_NP', response.data.data)
        } catch (err) {
            console.log(err)
        }
    },
}
