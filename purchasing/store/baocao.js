import { v4 as uuidv4 } from 'uuid'

export const state = () => ({
    danhSach: [
        {
            id: uuidv4(),
            title: 'Danh sách mặt hàng cần mua',
            listType: 'dsmhcm',
        },
    ],
    duLieuMoi: [],
    baoCaoYcmh: [],
})
export const getters = {}
export const mutations = {
    SET_ITEM(state, item) {
        state.baoCaoYcmh = item
    },
}
export const actions = {
    async getReportApproval({ commit }) {
        try {
            let response = await this.$axios.get('/pr/report-approval-pr-items')
            commit('SET_ITEM', response.data.data)
        } catch (err) {
            console.log(err)
        }
    },
}
