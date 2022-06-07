export const state = () => ({
    danhSach: [
        {
            id: Math.floor(Math.random() * 10000000),
            title: 'List of units participating in the bid',
            listType: 1,
        },
        {
            id: Math.floor(Math.random() * 10000000),
            title: 'List of items by supplier',
            listType: 2,
        },
    ],
    duLieuMoi: [],
    supplier: [],
    approvePr: [],
})
export const getters = {}
export const mutations = {
    SET_SUPPLIER(state, item) {
        state.supplier = item
    },
    SET_APPROVE_PR(state, item) {
        state.approvePr = item
    },
}
export const actions = {
    async getSupplier({ commit }) {
        try {
            let response = await this.$axios.get('/supplier/get-suppliers')
            commit('SET_SUPPLIER', response.data.data)
        } catch (err) {
            console.log(err)
        }
    },
    async getApprovalPr({ commit }) {
        try {
            let response = await this.$axios.get('/pr/get-aproval-pr')
            commit('SET_APPROVE_PR', response.data.data)
        } catch (err) {
            console.log(err)
        }
    },
}
