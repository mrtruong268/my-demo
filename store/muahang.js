import { v4 as uuidv4 } from 'uuid'

export const state = () => ({
    danhSach: [
        {
            id: uuidv4(),
            header: 'Purchase',
            title: 'List of purchase requests',
            listType: 'muahang',
        },
        {
            id: uuidv4(),
            header: 'Production',
            title: 'List of production requirements',
            listType: 'sanxuat',
        },
        {
            id: uuidv4(),
            header: 'Approve',
            title: 'List of approve requests',
            listType: 'pheduyet',
        },
    ],
    duLieuMoi: [
        {
            id: 1,
            title: 'Create purchase requisition',
            listType: 'TaoMuaHang',
        },
        {
            id: 2,
            title: 'Create production requisition',
            listType: 'TaoSanXuat',
        },
    ],
    muaHangDuAn: [],
    suaYeuCau: null,
    listItem: [],
    refNumber: {},
})
export const getters = {
    suaYeuCau: (state) => state.suaYeuCau,
    danhSachHangHoa: (state) => {
        let objSuaYeuCau = JSON.parse(JSON.stringify(state.suaYeuCau))
        if (!objSuaYeuCau) return []
        return objSuaYeuCau ? objSuaYeuCau.yeuCauMuaHangChiTiets : []
    },
}
export const mutations = {
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
}
export const actions = {
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
}
