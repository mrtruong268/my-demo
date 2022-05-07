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
            let response = await this.$axios.get('/pr/get-approving-prs')
            commit('SET_ITEM', response.data)
        } catch (err) {
            console.log(err)
        }
    },
    async submitApprove({ commit }, newItem) {
        try {
            let response = await this.$axios.get(`/pr/submit-pr?id=${newItem}`)
            commit('SET_ITEM', response.data)
        } catch (err) {
            console.log(err)
        }
    },
    async postApprove({ commit }, newItem) {
        try {
            let response = await this.$axios.post('/pr/approve-pr', newItem)
            commit('SET_ITEM', response.data)
        } catch (err) {
            console.log(err)
        }
    },
    async postRevise({ commit }, newItem) {
        try {
            let response = await this.$axios.post('/pr/must-revise-pr', newItem)
            commit('SET_ITEM', response.data)
        } catch (err) {
            console.log(err)
        }
    },
}
