import { v4 as uuidv4 } from 'uuid'
import axios from 'axios'

export const state = () => ({
    dataProject: [
        {
            no: 1,
            id: 'AAD2101',
            Partner: 'AAD',
            Customer: 'AAD',
            ProjectName: 'Service Samsung',
            Description: '',
            Category: 'service',
            Company: 'VNAS Services',
            status: 'Finish',
            Type: 'Ngoài hệ thống',
            CreatedDate: '7/7/2021 8:50:33 AM',
            CurrentIssue: 'test new',
        },
    ],
    dataPartner: [
        {
            id: 1,
            PartnerID: 'AUM',
            Name: 'Aumann',
            TIN: 2800720339,
            Address: '48361 Beelen, Deutschland, Đức',
            Contact: '',
            Email: '',
            Phone: 0,
        },
    ],
    dataCustomer: [
        {
            id: 1,
            CustomerID: 'AUM',
            Name: 'Aumann',
            TIN: 2800720339,
            Address: '48361 Beelen, Deutschland, Đức',
            Contact: '',
            Email: '',
            Phone: 0,
        },
    ],
    dataCategory: [
        {
            id: 1,
            name: 'Báo giá',
        },
        {
            id: 2,
            name: 'Chế tạo, sửa chữa',
        },
        {
            id: 3,
            name: 'Gia công theo bản vẽ',
        },

        {
            id: 4,
            name: 'Service',
        },
        {
            id: 5,
            name: 'Spare part',
        },
        {
            id: 6,
            name: 'Thương mại',
        },
        {
            id: 7,
            name: 'Turnkey line',
        },
    ],
    dataCompany: [],
    dataView: [
        {
            id: 1,
            Description: 'Basic',
            ViewMaDuAn: true,
            ViewDoiTac: true,
            ViewKhachHang: true,
            ViewTenDuAn: true,
            ViewPhanLoai: true,
            ViewNgayTao: true,
            ViewTinhTrang: true,
        },
    ],
    statusItem: [
        {
            id: 'ongoing',
            title: 'Dự án đang thực hiện',
            image: require('assets/ongoingIcon.svg'),
            data: [],
        },
        {
            id: 'finish',
            title: 'Dự án đã kết thúc',
            image: require('assets/finishedIcon.svg'),
            data: [],
        },
        {
            id: 'closed',
            title: 'Dự án đã đóng',
            image: require('assets/closedIcon2.svg'),
            data: [],
        },
        {
            id: 'pending',
            title: 'Dự án chưa giải quyết',
            image: require('assets/pendingIcon.png'),
            data: [],
        },
    ],
})
export const getters = {}
export const mutations = {
    // SET_ITEM(state, item) {
    //     state.DanhSachQuanLy.forEach((e) => {
    //         if (e.listType === 'muahang') {
    //             e.data = item
    //         }
    //     })
    // },

    PROJECT_STATUS(state) {
        state.statusItem.forEach((i) => {
            if (i.id === 'ongoing') {
                i.data = state.dataProject.filter((x) => {
                    return x.status == 'Ongoing'
                })
            }
            if (i.id === 'finish') {
                i.data = state.dataProject.filter((x) => {
                    return x.status == 'Finish'
                })
            }
            if (i.id === 'closed') {
                i.data = state.dataProject.filter((x) => {
                    return x.status == 'Closed'
                })
            }
            if (i.id === 'pending') {
                i.data = state.dataProject.filter((x) => {
                    return x.status == 'Pending'
                })
            }
        })
    },
}
export const actions = {}
