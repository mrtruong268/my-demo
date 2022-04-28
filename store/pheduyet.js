import axios from 'axios'

export const state = () => ({
    danhSachPheDuyet: [],
})
export const getters = {
    danhSachPheDuyet: (state) => state.danhSachPheDuyet,
}
export const mutations = {
    SET_ITEM(state, newData) {
        state.danhSachPheDuyet = newData
    },
}
export const actions = {
    async getApprove({ commit }) {
        try {
            let response = await axios.get(
                'http://internal.vnas.com.vn:108/api/pr/get-approving-prs'
            )
            commit('SET_ITEM', response.data)
        } catch (err) {
            console.log(err)
        }
    },
    async submitApprove({ commit }, newItem) {
        try {
            let response = await axios.get(
                `http://internal.vnas.com.vn:108/api/pr/submit-pr?id=${newItem}`
            )
            commit('SET_ITEM', response.data)
        } catch (err) {
            console.log(err)
        }
    },
    async postApprove({ commit }, newItem) {
        try {
            let response = await axios.post(
                'http://internal.vnas.com.vn:108/api/pr/approve-pr',
                newItem
            )
            commit('SET_ITEM', response.data)
        } catch (err) {
            console.log(err)
        }
    },
    async postRevise({ commit }, newItem) {
        try {
            let response = await axios.post(
                'http://internal.vnas.com.vn:108/api/pr/must-revise-pr',
                newItem
            )
            commit('SET_ITEM', response.data)
        } catch (err) {
            console.log(err)
        }
    },
}
