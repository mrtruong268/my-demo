import { v4 as uuidv4 } from 'uuid'

export const state = () => ({
    danhSach: [
        {
            id: uuidv4(),
            title: 'Tất cả',
            listType: 'all',
            length: 0,
        },
        {
            id: uuidv4(),
            title: 'Chờ duyệt',
            listType: 'wait',
            length: 0,
        },
        {
            id: uuidv4(),
            title: 'Đã duyệt',
            listType: 'approved',
            length: 0,
        },
        {
            id: uuidv4(),
            title: 'Không duyệt',
            listType: 'reject',
            length: 0,
        },
        {
            id: uuidv4(),
            title: 'Đã mua hàng',
            listType: 'complete',
            length: 0,
        },
    ],
    headerList: [
        {
            id: uuidv4(),
            title: 'Mua hàng dự án',
            to: 'Purchase/Project',
        },
        {
            id: uuidv4(),
            title: 'Mua hàng ngoài dự án',
            to: 'Purchase/NonProject',
        },
    ],
    muaHangDuAn: [],
    muaHangNgoaiDuAn: [],
    suaYeuCau: null,
    suaYeuCauNp: null,
    listItem: [],
    listItemNp: [],
    refNumber: {},
    refNumberNp: {},
    baoCaoYcmh: [],
    isApprove: false,
    isApproveNp: false,
})
export const getters = {
    // mua hang du an

    suaYeuCau: (state) => state.suaYeuCau,
    danhSachHangHoa: (state) => {
        let objSuaYeuCau = JSON.parse(JSON.stringify(state.suaYeuCau))
        if (!objSuaYeuCau) return []
        return objSuaYeuCau ? objSuaYeuCau.yeuCauMuaHangChiTiets : []
    },
    // mua hang ngoai du an

    suaYeuCauNp: (state) => state.suaYeuCauNp,
    danhSachHangHoaNp: (state) => {
        let objSuaYeuCau = JSON.parse(JSON.stringify(state.suaYeuCauNp))
        if (!objSuaYeuCau) return []
        return objSuaYeuCau ? objSuaYeuCau.yeuCauMuaHangNoiBoChiTiets : []
    },
}
export const mutations = {
    // mua hang du an
    SET_ITEM(state, item) {
        state.muaHangDuAn = item
    },
    EDIT_ITEM(state, item) {
        state.suaYeuCau = item
    },
    GET_ITEM(state, item) {
        state.listItem = item
    },
    GET_REF_NUM(state, item) {
        state.refNumber = item
    },
    IS_APPROVE(state, item) {
        state.isApprove = item
    },
    SET_LENGTH(state, item) {
        state.danhSach.forEach((e) => {
            e.listType === 'all'
                ? (e.length = item.all)
                : e.listType === 'wait'
                ? (e.length = item.wait)
                : e.listType === 'approved'
                ? (e.length = item.approved)
                : e.listType === 'reject'
                ? (e.length = item.reject)
                : (e.length = item.complete)
        })
    },

    // mua hang ngoai du an
    SET_ITEM_NP(state, item) {
        state.muaHangNgoaiDuAn = item
    },
    EDIT_ITEM_NP(state, item) {
        state.suaYeuCauNp = item
    },
    GET_ITEM_NP(state, item) {
        state.listItemNp = item
    },
    GET_REF_NUM_NP(state, item) {
        state.refNumberNp = item
    },
    IS_APPROVE_NP(state, item) {
        state.isApproveNp = item
    },
    SET_LENGTH_NP(state, item) {
        state.danhSach.forEach((e) => {
            e.listType === 'all'
                ? (e.length = item.all)
                : e.listType === 'wait'
                ? (e.length = item.wait)
                : e.listType === 'approved'
                ? (e.length = item.approved)
                : e.listType === 'reject'
                ? (e.length = item.reject)
                : (e.length = item.complete)
        })
    },

    // Bao cao

    SET_ITEM_BC(state, item) {
        state.baoCaoYcmh = item
    },
}
export const actions = {
    // mua hang du an

    async getData({ commit }) {
        try {
            let response = await this.$axios.get('/pr/get-all-of-pr')
            commit('SET_ITEM', response.data.data)
        } catch (err) {
            console.log(err)
        }
    },

    async postData({ commit }, newItem) {
        try {
            await this.$axios.post('/pr/post-pr', newItem, {
                headers: {
                    'Content-Type': 'multipart/form-data',
                },
            })
        } catch (err) {
            console.log(err)
        }
    },
    async deleteData({ commit }, delId) {
        try {
            await this.$axios.delete(`/pr/delete-pr?id=${delId}`)
        } catch (err) {
            console.log(err)
        }
    },
    async getEditData({ commit }, editId) {
        try {
            let response = await this.$axios.get(`/pr/get-pr?id=${editId}`)
            commit('EDIT_ITEM', response.data.data)
        } catch (err) {
            console.log(err)
        }
    },
    async editData({ commit }, editItem) {
        try {
            await this.$axios.put('/pr/put-pr', editItem)
        } catch (err) {
            console.log(err)
        }
    },
    async getItems({ commit }) {
        try {
            let response = await this.$axios.get('/item/get-items')
            commit('GET_ITEM', response.data.data)
        } catch (err) {
            console.log(err)
        }
    },
    async getRefNumber({ commit }, payload) {
        try {
            let response = await this.$axios.get(
                `/pr/get-ref-number?maDuAn=${payload.maDuAn}&phongBanId=${payload.phongBanId}&ycmhId=${payload.ycmhId}`
            )
            commit('GET_REF_NUM', response.data.data)
        } catch (err) {
            console.log(err)
        }
    },

    async checkApprove({ commit }, ycID) {
        try {
            let response = await this.$axios.get(
                `/pr/is-approving-pr?ycmhId=${ycID}`
            )
            commit('IS_APPROVE', response.data.data)
        } catch (err) {
            console.log(err)
        }
    },

    async checkComplete({ commit }, ycID) {
        try {
            let response = await this.$axios.get(
                `/pr/purchased-pr?ycmhId=${ycID}`
            )
        } catch (err) {
            console.log(err)
        }
    },

    async checkUnDo({ commit }, ycID) {
        try {
            let response = await this.$axios.get(
                `/pr/undo-purchased-pr?ycmhId=${ycID}`
            )
        } catch (err) {
            console.log(err)
        }
    },

    async downloadFile({ commit }, payload) {
        try {
            let response = await this.$axios.get(
                `/pr/download-ban-ve?linkThuMucBanVeFolder=${payload.linkThuMucBanVeFolder}&tenFileBanVe=${payload.tenFileBanVe}`,
                {
                    responseType: 'blob',
                }
            )
            let url = window.URL.createObjectURL(new Blob([response.data]))
            let link = document.createElement('a')
            link.href = url
            link.setAttribute('download', payload.tenFileBanVe)
            document.body.appendChild(link)
            link.click()
        } catch (err) {
            console.log(err)
        }
    },

    async deleteFile({ commit }, payload) {
        try {
            await this.$axios.get(
                `/pr/remove-ban-ve?linkThuMucBanVeFolder=${payload.linkThuMucBanVeFolder}&tenFileBanVe=${payload.tenFileBanVe}`
            )
        } catch (err) {
            console.log(err)
        }
    },
    // mua hang ngoai du an

    async getDataNp({ commit }) {
        try {
            let response = await this.$axios.get('/ipr/get-all-of-pr')
            commit('SET_ITEM_NP', response.data.data)
        } catch (err) {
            console.log(err)
        }
    },

    async postDataNp({ commit }, newItem) {
        try {
            await this.$axios.post('/ipr/post-pr', newItem)
        } catch (err) {
            console.log(err)
        }
    },
    async deleteDataNp({ commit }, delId) {
        try {
            await this.$axios.delete(`/ipr/delete-pr?id=${delId}`)
        } catch (err) {
            console.log(err)
        }
    },
    async getEditDataNp({ commit }, editId) {
        try {
            let response = await this.$axios.get(`/ipr/get-pr?id=${editId}`)
            commit('EDIT_ITEM_NP', response.data.data)
        } catch (err) {
            console.log(err)
        }
    },
    async editDataNp({ commit }, editItem) {
        try {
            await this.$axios.put('/ipr/put-pr', editItem)
        } catch (err) {
            console.log(err)
        }
    },
    async getItemsNp({ commit }) {
        try {
            let response = await this.$axios.get('/iitem/get-items')
            commit('GET_ITEM_NP', response.data.data)
        } catch (err) {
            console.log(err)
        }
    },
    async getRefNumberNp({ commit }, payload) {
        try {
            let response = await this.$axios.get(
                `/ipr/get-ref-number?phongBanId=${payload.phongBanId}&ycmhId=${payload.ycmhId}`
            )
            commit('GET_REF_NUM_NP', response.data.data)
        } catch (err) {
            console.log(err)
        }
    },

    async checkApproveNp({ commit }, ycID) {
        try {
            let response = await this.$axios.get(
                `/ipr/is-approving-pr?ycmhId=${ycID}`
            )
            commit('IS_APPROVE_NP', response.data.data)
        } catch (err) {
            console.log(err)
        }
    },

    async checkCompleteNp({ commit }, ycID) {
        try {
            let response = await this.$axios.get(
                `/ipr/purchased-pr?ycmhId=${ycID}`
            )
        } catch (err) {
            console.log(err)
        }
    },

    async checkUnDoNp({ commit }, ycID) {
        try {
            let response = await this.$axios.get(
                `/ipr/undo-purchased-pr?ycmhId=${ycID}`
            )
        } catch (err) {
            console.log(err)
        }
    },

    // Bao cao

    async getReportApproval({ commit }) {
        try {
            let response = await this.$axios.get('/pr/report-approval-pr-items')
            commit('SET_ITEM_BC', response.data.data)
        } catch (err) {
            console.log(err)
        }
    },
}
