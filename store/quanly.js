import { v4 as uuidv4 } from 'uuid'
import axios from 'axios'

export const state = () => ({
    QuanLy: [],
    DanhSachQuanLy: [
        {
            id: uuidv4(),
            title: 'List of projects',
            listType: 'project',
            data: [
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
                {
                    no: 2,
                    id: 'ABB2001',
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
                {
                    no: 3,
                    id: 'ABB2002',
                    Partner: 'AAD',
                    Customer: 'AAD',
                    ProjectName: 'Service Samsung',
                    Description: '',
                    Category: 'service',
                    Company: 'VNAS Services',
                    status: 'Closed',
                    Type: 'Ngoài hệ thống',
                    CreatedDate: '7/7/2021 8:50:33 AM',
                    CurrentIssue: 'test new',
                },
                {
                    no: 4,
                    id: 'ABB2003',
                    Partner: 'AAD',
                    Customer: 'AAD',
                    ProjectName: 'Service Samsung',
                    Description: '',
                    Category: 'service',
                    Company: 'VNAS Services',
                    status: 'Pending',
                    Type: 'Ngoài hệ thống',
                    CreatedDate: '7/7/2021 8:50:33 AM',
                    CurrentIssue: 'test new',
                },
                {
                    no: 5,
                    id: 'ABB2003',
                    Partner: 'AAD',
                    Customer: 'AAD',
                    ProjectName: 'Service Samsung',
                    Description: '',
                    Category: 'service',
                    Company: 'VNAS Services',
                    status: 'Pending',
                    Type: 'Ngoài hệ thống',
                    CreatedDate: '7/7/2021 8:50:33 AM',
                    CurrentIssue: 'test new',
                },
                {
                    no: 6,
                    id: 'ABB2004',
                    Partner: 'AAD',
                    Customer: 'AAD',
                    ProjectName: 'Service Samsung',
                    Description: '',
                    Category: 'service',
                    Company: 'VNAS Services',
                    status: 'Ongoing',
                    Type: 'Ngoài hệ thống',
                    CreatedDate: '7/7/2021 8:50:33 AM',
                    CurrentIssue: 'test new',
                },
                {
                    no: 7,
                    id: 'ABB2008',
                    Partner: 'AAD',
                    Customer: 'AAD',
                    ProjectName: 'Service Samsung',
                    Description: '',
                    Category: 'service',
                    Company: 'VNAS Services',
                    status: 'Ongoing',
                    Type: 'Ngoài hệ thống',
                    CreatedDate: '7/7/2021 8:50:33 AM',
                    CurrentIssue: 'test new',
                },
            ],
        },
        {
            id: uuidv4(),
            title: 'List of partners',
            listType: 'partner',
            data: [
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
                {
                    id: 2,
                    PartnerID: 'BVT',
                    Name: 'Bệnh viện Đa khoa tỉnh Thanh Hoá',
                    TIN: 2800720339,
                    Address:
                        '181- Hải Thượng Lãn ông- Đông Vệ - Thành phố Thanh Hoá',
                    Contact: 'Mr. Sơn Lê',
                    Email: 'lesonbvdkth@gmail.com',
                    Phone: +84945512678,
                },
            ],
        },
        {
            id: uuidv4(),
            title: 'List of customers',
            listType: 'customer',
            data: [
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
                {
                    id: 2,
                    CustomerID: 'TN',
                    Name: '	CÔNG TY CỔ PHẦN TƯ VẤN VÀ XÂY DỰNG THANH NHÀN',
                    TIN: 2300232950,
                    Address:
                        'Thôn Trung, Xã Nghĩa Trung, Huyện Việt Yên, Tỉnh Bắc Giang, Việt Nam',
                    Contact: 'Mr Phát',
                    Email: 'phatnnc@sonha.com.vn',
                    Phone: +84768533888,
                },
            ],
        },
        {
            id: uuidv4(),
            title: 'List of categories',
            listType: 'category',
            data: [
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
        },
        {
            id: uuidv4(),
            title: 'List of companies',
            listType: 'company',
            data: [{}],
        },
        {
            id: uuidv4(),
            title: 'List of project views',
            listType: 'view',
            data: [
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
        },
    ],
    isSelected: '',
    statusItem: [
        {
            id: 'ongoing',
            title: 'Ongoing projects',
            image: require('assets/ongoingIcon.svg'),
            data: [],
        },
        {
            id: 'finish',
            title: 'Finished projects',
            image: require('assets/finishedIcon.svg'),
            data: [],
        },
        {
            id: 'closed',
            title: 'Closed projects',
            image: require('assets/closedIcon2.svg'),
            data: [],
        },
        {
            id: 'pending',
            title: 'Pending projects',
            image: require('assets/pendingIcon.png'),
            data: [],
        },
    ],
})
export const getters = {
    quanLy: (state) => state.QuanLy,
    danhSachQuanLy: (state) => state.DanhSachQuanLy,
}
export const mutations = {
    SET_ITEM(state, item) {
        state.danhSachQuanLy.forEach((e) => {
            if (e.listType === 'muahang') {
                e.data = item
            }
        })
    },
    ADD_LIST(state, newItem) {
        if (!state.QuanLy.find((i) => i.id === newItem.id)) {
            state.QuanLy.push(newItem)
        }
    },
    IS_SELECTED(state, newText) {
        state.isSelected = newText
    },
    CLICK_DELETE(state, itemId) {
        state.QuanLy = state.QuanLy.filter((e) => e.id !== itemId)
    },
    CLEAR_DATA(state) {
        state.QuanLy.splice(0, state.QuanLy.length)
    },
    ADD_OPTION(state) {
        state.DanhSachQuanLy.forEach((e) => {
            if (!state.QuanLy.find((i) => i.id === e.id)) {
                if (e.listType === state.isSelected) {
                    state.QuanLy.push(e)
                }
            }
        })
    },
    PROJECT_STATUS(state) {
        state.DanhSachQuanLy.forEach((e) => {
            if (e.listType === 'project') {
                state.statusItem.forEach((i) => {
                    if (i.id === 'ongoing') {
                        i.data = e.data.filter((x) => {
                            return x.status == 'Ongoing'
                        })
                    }
                    if (i.id === 'finish') {
                        i.data = e.data.filter((x) => {
                            return x.status == 'Finish'
                        })
                    }
                    if (i.id === 'closed') {
                        i.data = e.data.filter((x) => {
                            return x.status == 'Closed'
                        })
                    }
                    if (i.id === 'pending') {
                        i.data = e.data.filter((x) => {
                            return x.status == 'Pending'
                        })
                    }
                })
            }
        })
    },
}
export const actions = {}
