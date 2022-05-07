<template>
    <div>
        <DxList
            :data-source="DanhSachQuyen"
            :grouped="true"
            :collapsible-groups="true"
            height="60vh"
        >
            <template #group="{ data: item }">
                <div>{{ item.key }}</div>
            </template>
            <template #item="{ data: item }">
                <div>{{ item.title }}</div>
            </template>
        </DxList>
    </div>
</template>

<script>
import { mapState } from 'vuex'
import DxList from 'devextreme-vue/list'
export default {
    props: ['edit'],
    components: {
        DxList,
    },
    data() {
        return {}
    },
    computed: {
        ...mapState('user', ['DanhSachQuyen']),
    },
}
</script>

<style scoped></style>
