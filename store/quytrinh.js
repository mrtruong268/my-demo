export const state = () => ({
    danhSachQuyTrinh: [],
    maQuyTrinh: [],
    locDuAn: [],
})
export const getters = {}
export const mutations = {
    SET_ALL_APS(state, item) {
        state.danhSachQuyTrinh = item
    },
    SET_ID_APS(state, item) {
        state.maQuyTrinh = item
    },
    SET_PROJECT_FILTER(state, item) {
        state.locDuAn = item
    },
}
export const actions = {
    async getAllAps({ commit }) {
        try {
            let response = await this.$axios.get('/ap/get-all-aps')
            commit('SET_ALL_APS', response.data.data)
        } catch (err) {
            console.log(err)
        }
    },
    async getIdAps({ commit }) {
        try {
            let response = await this.$axios.get('/ap/get-ap-ids')
            commit('SET_ID_APS', response.data.data)
        } catch (err) {
            console.log(err)
        }
    },
    async getProjectFilter({ commit }) {
        try {
            let response = await this.$axios.get('/ap/get-project-filter')
            commit('SET_PROJECT_FILTER', response.data.data)
        } catch (err) {
            console.log(err)
        }
    },
    async postAps({ commit }, newItem) {
        try {
            let response = await this.$axios.post('/ap/post-ap', newItem)
        } catch (err) {
            console.log(err)
        }
    },
    async deleteAps({ commit }, delId) {
        try {
            let response = await this.$axios.delete(`/ap/delete-ap?id=${delId}`)
        } catch (err) {
            console.log(err)
        }
    },
}
