export const state = () => ({
    danhSachPheDuyet: [],
    danhSachPheDuyetNp: [],
})
export const getters = {}
export const mutations = {
    // phe duyet du an
    SET_ITEM(state, newData) {
        state.danhSachPheDuyet = newData
    },
    // phe duyet noi bo

    SET_ITEM_NP(state, newData) {
        state.danhSachPheDuyetNp = newData
    },
}
export const actions = {
    // phe duyet du an

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
    async unApprove({ commit }, newItem) {
        try {
            let response = await this.$axios.get(
                `/pr/undo-approve-pr?ycmhId=${newItem}`
            )
            commit('SET_ITEM', response.data)
        } catch (err) {
            console.log(err)
        }
    },
    // phe duyet noi bo

    async getApproveNp({ commit }) {
        try {
            let response = await this.$axios.get('/ipr/get-approving-prs')
            commit('SET_ITEM_NP', response.data)
        } catch (err) {
            console.log(err)
        }
    },
    async submitApproveNp({ commit }, newItem) {
        try {
            let response = await this.$axios.get(`/ipr/submit-pr?id=${newItem}`)
            commit('SET_ITEM_NP', response.data)
        } catch (err) {
            console.log(err)
        }
    },
    async postApproveNp({ commit }, newItem) {
        try {
            await this.$axios.post('/ipr/approve-pr', newItem)
        } catch (err) {
            console.log(err)
        }
    },
    async postReviseNp({ commit }, newItem) {
        try {
            await this.$axios.post('/ipr/must-revise-pr', newItem)
        } catch (err) {
            console.log(err)
        }
    },
    async unApproveNp({ commit }, newItem) {
        try {
            let response = await this.$axios.get(
                `/ipr/undo-approve-pr?ycmhId=${newItem}`
            )
            commit('SET_ITEM_NP', response.data)
        } catch (err) {
            console.log(err)
        }
    },
}
