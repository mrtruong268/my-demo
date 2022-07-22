export const state = () => ({
    danhSachPheDuyet: [],
    danhSachPheDuyetNp: [],
    danhSachDaDuyet: [],
    danhSachDaDuyetNp: [],
    danhSachKhongDuyet: [],
    danhSachKhongDuyetNp: [],
    danhSachHoanThanh: [],
    danhSachHoanThanhNp: [],
})
export const getters = {}
export const mutations = {
    // phe duyet du an
    SET_ITEM(state, newData) {
        state.danhSachPheDuyet = newData
    },
    SET_DA_DUYET(state, newData) {
        state.danhSachDaDuyet = newData
    },
    SET_KHONG_DUYET(state, newData) {
        state.danhSachKhongDuyet = newData
    },
    SET_HOAN_THANH(state, newData) {
        state.danhSachHoanThanh = newData
    },
    // phe duyet noi bo

    SET_ITEM_NP(state, newData) {
        state.danhSachPheDuyetNp = newData
    },
    SET_DA_DUYET_NP(state, newData) {
        state.danhSachDaDuyetNp = newData
    },
    SET_KHONG_DUYET_NP(state, newData) {
        state.danhSachKhongDuyetNp = newData
    },
    SET_HOAN_THANH_NP(state, newData) {
        state.danhSachHoanThanhNp = newData
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
    async getApproved({ commit }) {
        try {
            let response = await this.$axios.get('/pr/get-approval-pr')
            commit('SET_DA_DUYET', response.data)
        } catch (err) {
            console.log(err)
        }
    },
    async getUnApprove({ commit }) {
        try {
            let response = await this.$axios.get('/pr/get-reject-pr')
            commit('SET_KHONG_DUYET', response.data)
        } catch (err) {
            console.log(err)
        }
    },

    async getComplete({ commit }) {
        try {
            let response = await this.$axios.get('/pr/get-purchased-pr')
            commit('SET_HOAN_THANH', response.data)
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
    async getApprovedNp({ commit }) {
        try {
            let response = await this.$axios.get('/ipr/get-approval-pr')
            commit('SET_DA_DUYET_NP', response.data)
        } catch (err) {
            console.log(err)
        }
    },
    async getUnApproveNp({ commit }) {
        try {
            let response = await this.$axios.get('/ipr/get-reject-pr')
            commit('SET_KHONG_DUYET_NP', response.data)
        } catch (err) {
            console.log(err)
        }
    },

    async getCompleteNp({ commit }) {
        try {
            let response = await this.$axios.get('/ipr/get-purchased-pr')
            commit('SET_HOAN_THANH_NP', response.data)
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
