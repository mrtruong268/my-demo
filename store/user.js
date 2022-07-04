export const state = () => ({
    DanhSachNhanVien: [],
    DanhSachNhom: [],
    DanhSachChucNang: [
        {
            key: 'Project management',
            items: [
                {
                    id: 1,
                    title: 'Project',
                    dataQuyen: [
                        {
                            id: 1,
                            quyen: 'Full control',
                            allow: true,
                        },
                        {
                            id: 2,
                            quyen: 'Read',
                            allow: false,
                        },
                        {
                            id: 3,
                            quyen: 'White',
                            allow: false,
                        },
                    ],
                },
                {
                    id: 2,
                    title: 'Partner',
                    dataQuyen: [
                        {
                            id: 1,
                            quyen: 'Full control',
                            allow: true,
                        },
                        {
                            id: 2,
                            quyen: 'Read',
                            allow: true,
                        },
                        {
                            id: 3,
                            quyen: 'White',
                            allow: false,
                        },
                    ],
                },
                {
                    id: 3,
                    title: 'Customer',
                    dataQuyen: [
                        {
                            id: 1,
                            quyen: 'Full control',
                            allow: false,
                        },
                        {
                            id: 2,
                            quyen: 'Read',
                            allow: false,
                        },
                        {
                            id: 3,
                            quyen: 'White',
                            allow: true,
                        },
                    ],
                },
            ],
        },
    ],
    DanhSachQuyen: [
        {
            id: 1,
            quyen: 'Full control',
            allow: false,
        },
        {
            id: 2,
            quyen: 'Read',
            allow: false,
        },
        {
            id: 3,
            quyen: 'White',
            allow: false,
        },
    ],
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
}
