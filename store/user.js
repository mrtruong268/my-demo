import axios from 'axios'

export const state = () => ({
    DanhSachNhanVien: [],
    DanhSachNhom: [],
})
export const getters = {
    DanhSachNhom: (state) => state.DanhSachNhom,
}
export const mutations = {
    GET_ALL_STAFF(state, item) {
        state.DanhSachNhanVien = item
    },

    GET_ALL_GROUP(state, item) {
        state.DanhSachNhom = item
    },
}
export const actions = {
    async getAllStaff({ commit }) {
        try {
            let response = await axios.get(
                'http://internal.vnas.com.vn:108/api/staff/get-all-staff'
            )
            commit('GET_ALL_STAFF', response.data)
        } catch (err) {
            console.log(err)
        }
    },
    async postStaff({ commit }, newItem) {
        try {
            await axios.post(
                'http://internal.vnas.com.vn:108/api/staff/post-pr',
                newItem
            )
        } catch (err) {
            console.log(err)
        }
    },
    async deleteStaff({ commit }, delId) {
        try {
            await axios.delete(
                `http://internal.vnas.com.vn:108/api/staff/delete-staff?id=${delId}`
            )
        } catch (err) {
            console.log(err)
        }
    },
    async getAllGroup({ commit }) {
        try {
            let response = await axios.get(
                'http://internal.vnas.com.vn:108/api/group/get-all-group'
            )
            commit('GET_ALL_GROUP', response.data.data)
        } catch (err) {
            console.log(err)
        }
    },
}
