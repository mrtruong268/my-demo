import axios from 'axios'

export const state = () => ({
    DanhSachNhanVien: [],
    DanhSachChucVu: [],
    DanhSachCongTy: [],
    DanhSachPhongBan: [],
    DanhSachNhom: [],
})
export const getters = {}
export const mutations = {
    GET_ALL_STAFF(state, item) {
        state.DanhSachNhanVien = item
    },
    GET_ALL_POSITION(state, item) {
        state.DanhSachChucVu = item
    },
    GET_ALL_COMPANY(state, item) {
        state.DanhSachCongTy = item
    },
    GET_ALL_GROUP(state, item) {
        state.DanhSachNhom = item
    },
    GET_ALL_DIVISION(state, item) {
        state.DanhSachPhongBan = item
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
    async getAllPosition({ commit }) {
        try {
            let response = await axios.get(
                'http://internal.vnas.com.vn:108/api/position/get-all-position'
            )
            commit('GET_ALL_POSITION', response.data.data)
        } catch (err) {
            console.log(err)
        }
    },
    async getAllCompany({ commit }) {
        try {
            let response = await axios.get(
                'http://internal.vnas.com.vn:108/api/company/get-all-company'
            )
            commit('GET_ALL_COMPANY', response.data.data)
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
    async getAllDivision({ commit }) {
        try {
            let response = await axios.get(
                'http://internal.vnas.com.vn:108/api/division/get-all-division'
            )
            commit('GET_ALL_DIVISION', response.data.data)
        } catch (err) {
            console.log(err)
        }
    },
}
