import { v4 as uuidv4 } from 'uuid'
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
    async getData({ commit }) {
        try {
            let response = await axios.get(
                'http://internal.vnas.com.vn:108/api/pr/get-approving-prs'
            )
            commit('SET_ITEM', response.data)
        } catch (err) {
            console.log(err)
        }
    },
    async postData({ commit }, newItem) {
        try {
            let response = await axios.get(
                `http://internal.vnas.com.vn:108/api/pr/submit-pr?id=${newItem}`
            )
            commit('SET_ITEM', response.data)
        } catch (err) {
            console.log(err)
        }
    },
}
