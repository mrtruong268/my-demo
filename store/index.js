import { v4 as uuidv4 } from 'uuid'

export const state = () => ({
    ChucNang: [
        {
            id: uuidv4(),
            title: 'Project management',
            to: 'ProjectManagement',
            color: '#940726',
            image: require('assets/icon-project-management.png'),
        },
        {
            id: uuidv4(),
            title: 'Cash flow analysis',
            to: '',
            color: '#C83213',
            image: require('assets/cash.gif'),
        },
        {
            id: uuidv4(),
            title: 'Purchasing',
            to: 'Purchase',
            color: '#90AA1D',
            image: require('assets/buy.gif'),
        },
        {
            id: uuidv4(),
            title: '1 Office',
            to: '',
            color: '#157787',
            image: require('assets/1office.svg'),
        },
        {
            id: uuidv4(),
            title: 'Distribution list',
            to: '',
            color: '#008AC1',
            image: require('assets/list2.gif'),
        },
        {
            id: uuidv4(),
            title: 'Work place',
            to: '',
            color: '#2B585F',
            image: require('assets/programming.gif'),
        },
        {
            id: uuidv4(),
            title: '',
            to: '',
            color: '#90AA1D',
            image: '',
        },
        {
            id: uuidv4(),
            title: '',
            to: '',
            color: '#90AA1D',
            image: '',
        },
    ],
    ThongBao: [
        {
            id: 1,
            title: 'Tất cả',
            data: [
                {
                    id: 1,
                    title: 'Phê duyệt yêu cầu mua hàng',
                    time: '1 ngày trước',
                    image: require('assets/logo.png'),
                },
                {
                    id: 2,
                    title: 'Phê duyệt yêu cầu mua hàng',
                    time: '1 ngày trước',
                    image: require('assets/logo.png'),
                },
                {
                    id: 3,
                    title: 'Phê duyệt yêu cầu mua hàng',
                    time: '1 ngày trước',
                    image: require('assets/logo.png'),
                },
                {
                    id: 4,
                    title: 'Phê duyệt yêu cầu mua hàng',
                    time: '1 ngày trước',
                    image: require('assets/logo.png'),
                },
            ],
        },
        {
            id: 2,
            title: 'Chưa đọc',
            data: [
                {
                    id: 1,
                    title: 'Phê duyệt yêu cầu mua hàng',
                    time: '1 ngày trước',
                    image: require('assets/file_tk-02.jpg'),
                },
                {
                    id: 2,
                    title: 'Phê duyệt yêu cầu mua hàng',
                    time: '1 ngày trước',
                    image: require('assets/file_tk-02.jpg'),
                },
            ],
        },
    ],
    routeParams: '',
})

export const mutations = {
    LANG_SWITCH(state, lang) {
        state.routeParams = lang
    },
}
