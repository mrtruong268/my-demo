<template>
    <div>
        <i class="mdi mdi-close font-24 close" @click="clickClose"></i>
        <div class="mb-2">
            <DxTextBox
                v-model="NhanVien.tenNhanVien"
                styling-mode="outlined"
                :label="$t('Name')"
                label-mode="floating"
                class="mb-3"
                width="40vw"
            />
            <DxTextBox
                v-model="NhanVien.maNhanVien"
                styling-mode="outlined"
                :label="$t('Employee code')"
                class="mb-3"
                label-mode="floating"
                width="40vw"
            />
            <DxTextBox
                v-model="NhanVien.email"
                styling-mode="outlined"
                :label="$t('Email')"
                class="mb-3"
                label-mode="floating"
                width="40vw"
            />
            <DxSelectBox
                :dataSource="DanhSachChucVu"
                v-model="NhanVien.chucVuId"
                display-expr="ten"
                value-expr="id"
                :label="$t('Position')"
                class="mb-3"
                label-mode="floating"
                width="40vw"
            />
            <DxSelectBox
                :dataSource="DanhSachPhongBan"
                v-model="NhanVien.phongBanId"
                display-expr="Name"
                value-expr="ID"
                :label="$t('Department')"
                class="mb-3"
                label-mode="floating"
                width="40vw"
            />
            <DxTextBox
                v-model="NhanVien.username"
                styling-mode="outlined"
                :label="$t('Username')"
                class="mb-3"
                label-mode="floating"
                width="40vw"
            />
            <DxSelectBox
                :dataSource="DanhSachNhom"
                v-model="NhanVien.groupId"
                display-expr="groupName"
                value-expr="id"
                :label="$t('Group')"
                class="mb-3"
                label-mode="floating"
                width="40vw"
            />
            <DxSelectBox
                :dataSource="DanhSachCongTy"
                v-model="NhanVien.congTyId"
                display-expr="name"
                value-expr="id"
                :label="$t('Company')"
                class="mb-3"
                label-mode="floating"
                width="40vw"
            />
            <DxDateBox
                v-model="NhanVien.createdDate"
                displayFormat="dd/MM/yyyy"
                :use-mask-behavior="true"
                validationMessageMode="always"
                styling-mode="outlined"
                :label="$t('Created date')"
                label-mode="floating"
                class="mb-3"
                width="40vw"
            />
            <DxCheckBox v-model="NhanVien.isActive" text="Active" />
        </div>
        <div class="row justify-end">
            <DxButton
                text="Save"
                type="default"
                styling-mode="contained"
                @click="clickSave"
            />
        </div>
    </div>
</template>

<script>
import DxSelectBox from 'devextreme-vue/select-box'
import DxNumberBox from 'devextreme-vue/number-box'
import DxTextBox from 'devextreme-vue/text-box'
import DxDateBox from 'devextreme-vue/date-box'
import DxButton from 'devextreme-vue/button'
import { DxCheckBox } from 'devextreme-vue/check-box'
import { mapState, mapGetters } from 'vuex'

export default {
    props: {
        edit: {
            type: Object,
            default: null,
        },
    },
    components: {
        DxSelectBox,
        DxTextBox,
        DxDateBox,
        DxNumberBox,
        DxCheckBox,
        DxButton,
    },
    data() {
        return {
            NhanVien: {
                id: 0,
                tenNhanVien: '',
                maNhanVien: '',
                email: '',
                chucVuId: null,
                phongBanId: null,
                congTyId: null,
                groupId: null,
                username: '',
                isActive: true,
                createdDate: new Date(),
            },
        }
    },
    watch: {
        edit() {
            if (this.edit) this.NhanVien = { ...this.edit }
        },
    },
    computed: {
        ...mapState(['DanhSachChucVu', 'DanhSachCongTy', 'DanhSachPhongBan']),
        ...mapState('user', ['resCode']),
        ...mapGetters('user', ['DanhSachNhom']),
    },
    methods: {
        clickSave() {
            this.$store.dispatch('user/postStaff', this.NhanVien)
            this.clickClose()
        },
        clickClose() {
            this.NhanVien = {
                id: 0,
                tenNhanVien: '',
                maNhanVien: '',
                email: '',
                chucVuId: null,
                phongBanId: null,
                congTyId: null,
                groupId: null,
                username: '',
                isActive: true,
                createdDate: new Date(),
            }
            this.$emit('hiddenPopup')
        },
    },
    created() {
        this.$store.dispatch('getAllPosition')
        this.$store.dispatch('getAllCompany')
        this.$store.dispatch('user/getAllGroup')
        this.$store.dispatch('getAllDivision')
    },
}
</script>

<style scoped>
.close {
    position: absolute;
    top: 20px;
    right: 24px;
    cursor: pointer;
}
</style>
