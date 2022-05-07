import { v4 as uuidv4 } from 'uuid'

export const state = () => ({
    muaDuAn: [],
    danhSachMuaDuAn: [
        {
            id: uuidv4(),
            header: 'Purchase',
            title: 'List of purchase requests',
            listType: 'muahang',
            data: [],
        },
        {
            id: uuidv4(),
            header: 'Production',
            title: 'List of production requirements',
            listType: 'sanxuat',
            data: [],
        },
        {
            id: uuidv4(),
            header: 'Approve',
            title: 'List of approve requests',
            listType: 'pheduyet',
            data: [],
        },
    ],
    muaNoiBo: [],
    danhSachMuaNoiBo: [
        {
            id: uuidv4(),
            title: 'List of purchase requests',
            listType: 'muahang',
            data: [],
        },
        {
            id: uuidv4(),
            title: 'List of production requirements',
            listType: 'sanxuat',
            data: [],
        },
    ],
    suaYeuCau: null,
    HangHoaDichVu: null,
    isSelected: '',
})
export const getters = {
    muaDuAn: (state) => state.muaDuAn,
    danhSachMuaDuAn: (state) => state.danhSachMuaDuAn,
    muaNoiBo: (state) => state.muaNoiBo,
    danhSachMuaNoiBo: (state) => state.danhSachMuaNoiBo,
    suaYeuCau: (state) => state.suaYeuCau,
    danhSachHangHoa: (state) => {
        let objSuaYeuCau = JSON.parse(JSON.stringify(state.suaYeuCau))
        if (!objSuaYeuCau) return []
        return objSuaYeuCau.data ? objSuaYeuCau.data.yeuCauMuaHangChiTiets : []
    },
}
export const mutations = {
    SET_ITEM(state, item) {
        state.danhSachMuaDuAn.forEach((e) => {
            if (e.listType === 'muahang') {
                e.data = item
            }
        })
    },
    IS_SELECTED(state, newText) {
        state.isSelected = newText
    },
    EDIT_ITEM(state, item) {
        state.suaYeuCau = item
    },
    GET_ALL_ITEM(state, item) {
        state.HangHoaDichVu = item
    },
    ADD_LIST(state, newItem) {
        if (
            !state.muaDuAn.find((i) => i.id === newItem.id) &&
            !state.muaNoiBo.find((i) => i.id === newItem.id)
        ) {
            state.muaDuAn.push(newItem)
            state.muaNoiBo.push(newItem)
        }
    },
    CLICK_DELETE(state, itemId) {
        state.muaDuAn = state.muaDuAn.filter((e) => e.id !== itemId)
        state.muaNoiBo = state.muaNoiBo.filter((e) => e.id !== itemId)
    },
    CLEAR_DATA(state) {
        state.muaDuAn.splice(0, state.muaDuAn.length)
        state.muaNoiBo.splice(0, state.muaNoiBo.length)
    },
    ADD_OPTION(state) {
        state.danhSachMuaDuAn.forEach((e) => {
            if (!state.muaDuAn.find((i) => i.id === e.id)) {
                if (e.listType === state.isSelected) {
                    state.muaDuAn.push(e)
                }
            }
        })
    },
}
export const actions = {
    async getData({ commit }) {
        try {
            let response = await this.$axios.get('/pr/get-all-of-pr')
            commit('SET_ITEM', response.data)
        } catch (err) {
            console.log(err)
        }
    },

    async postData({ commit }, newItem) {
        try {
            let response = await this.$axios.post('/pr/post-pr', newItem)
            commit('SET_ITEM', response.data)
        } catch (err) {
            console.log(err)
        }
    },
    async deleteData({ commit }, delId) {
        try {
            let response = await this.$axios.delete(`/pr/delete-pr?id=${delId}`)
        } catch (err) {
            console.log(err)
        }
    },
    async deletePrItem({ commit }, delId) {
        try {
            await this.$axios.delete(`/pr/delete-pr-item?id=${delId}`)
        } catch (err) {
            console.log(err)
        }
    },
    async getEditData({ commit }, editId) {
        try {
            let response = await this.$axios.get(`/pr/get-pr?id=${editId}`)
            commit('EDIT_ITEM', response.data)
        } catch (err) {
            console.log(err)
        }
    },
    async editData({ commit }, editItem) {
        try {
            let response = await this.$axios.put('/pr/put-pr', editItem)
        } catch (err) {
            console.log(err)
        }
    },
}
