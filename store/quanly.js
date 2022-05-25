import { v4 as uuidv4 } from 'uuid'
import axios from 'axios'

export const state = () => ({
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
export const getters = {}
export const mutations = {
    SET_ITEM(state, item) {
        state.DanhSachQuanLy.forEach((e) => {
            if (e.listType === 'muahang') {
                e.data = item
            }
        })
    },

    // PROJECT_STATUS(state) {
    //     state.DanhSachQuanLy.forEach((e) => {
    //         if (e.listType === 'project') {
    //             state.statusItem.forEach((i) => {
    //                 if (i.id === 'ongoing') {
    //                     i.data = e.data.filter((x) => {
    //                         return x.status == 'Ongoing'
    //                     })
    //                 }
    //                 if (i.id === 'finish') {
    //                     i.data = e.data.filter((x) => {
    //                         return x.status == 'Finish'
    //                     })
    //                 }
    //                 if (i.id === 'closed') {
    //                     i.data = e.data.filter((x) => {
    //                         return x.status == 'Closed'
    //                     })
    //                 }
    //                 if (i.id === 'pending') {
    //                     i.data = e.data.filter((x) => {
    //                         return x.status == 'Pending'
    //                     })
    //                 }
    //             })
    //         }
    //     })
    // },
}
export const actions = {}
