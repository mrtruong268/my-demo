export const state = () => ({
    DanhSachNhanVien: [],
    DanhSachNhom: [],
    DanhSachChucNang: [],
    DanhSachQuyen: [],
    DanhSachChucVu: [],
    DanhSachCongTy: [],
    DanhSachPhongBan: [],
    DsPhongBanCongTy: [],
})
export const getters = {}
export const mutations = {
    GET_ALL_STAFF(state, item) {
        state.DanhSachNhanVien = item
    },
    GET_ALL_GROUP(state, item) {
        state.DanhSachNhom = item
    },
    GET_ALL_POSITION(state, item) {
        state.DanhSachChucVu = item
    },
    GET_ALL_COMPANY(state, item) {
        state.DanhSachCongTy = item
    },
    GET_ALL_DIVISION(state, item) {
        state.DanhSachPhongBan = item
    },
    GET_DIVISION_BY_COMPANY(state, item) {
        state.DsPhongBanCongTy = item
    },
}
export const actions = {
    async getAllPosition({ commit }) {
        try {
            let response = await this.$axios.get('/position/get-all-position')
            commit('GET_ALL_POSITION', response.data.data)
        } catch (err) {
            console.log(err)
        }
    },
    async getAllCompany({ commit }) {
        try {
            let response = await this.$axios.get('/company/get-all-company')
            commit('GET_ALL_COMPANY', response.data.data)
        } catch (err) {
            console.log(err)
        }
    },
    async getAllDivision({ commit }) {
        try {
            let response = await this.$axios.get('/division/get-all-division')
            commit('GET_ALL_DIVISION', response.data.data)
        } catch (err) {
            console.log(err)
        }
    },
    async getAllStaff({ commit }) {
        try {
            let response = await this.$axios.get('/staff/get-all-staff')
            commit('GET_ALL_STAFF', response.data)
        } catch (err) {
            console.log(err)
        }
    },
    async postStaff({ commit }, newItem) {
        try {
            let response = await this.$axios.post('/staff/post-pr', newItem)
        } catch (err) {
            console.log(err)
        }
    },
    async deleteStaff({ commit }, delId) {
        try {
            let response = await this.$axios.delete(
                `/staff/delete-staff?id=${delId}`
            )
        } catch (err) {
            console.log(err)
        }
    },
    async getAllGroup({ commit }) {
        try {
            let response = await this.$axios.get('/group/get-all-group')
            commit('GET_ALL_GROUP', response.data.data)
        } catch (err) {
            console.log(err)
        }
    },
    async getDivisionByCom({ commit }, comId) {
        try {
            let response = await this.$axios.get(
                `/division/get-divisions-by-company?CompanyId=${comId}`
            )
            commit('GET_DIVISION_BY_COMPANY', response.data.data)
        } catch (err) {
            console.log(err)
        }
    },
}
