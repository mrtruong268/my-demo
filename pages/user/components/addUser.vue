<template>
    <div>
        <div class="row align-center mb-2">
            <DxTextBox
                v-model="NhanVien.tenNhanVien"
                styling-mode="outlined"
                :label="$t('Name')"
                label-mode="floating"
                class="xs4 mr-3"
            />
            <DxTextBox
                v-model="NhanVien.maNhanVien"
                styling-mode="outlined"
                :label="$t('Employee code')"
                label-mode="floating"
                class="xs4 mr-3"
            />
            <DxTextBox
                v-model="NhanVien.email"
                styling-mode="outlined"
                :label="$t('Email')"
                label-mode="floating"
                class="xs4"
            />
        </div>
        <div class="row align-center mb-2">
            <DxSelectBox
                :dataSource="DanhSachChucVu"
                v-model="NhanVien.chucVuId"
                display-expr="ten"
                value-expr="id"
                :label="$t('Position')"
                label-mode="floating"
                class="xs3 mr-3"
            />
            <DxSelectBox
                :dataSource="DanhSachPhongBan"
                v-model="NhanVien.phongBan"
                display-expr="Name"
                value-expr="ID"
                :label="$t('Department')"
                label-mode="floating"
                class="xs3 mr-3"
            />
            <DxSelectBox
                :dataSource="DanhSachNhom"
                v-model="NhanVien.groupName"
                display-expr="groupName"
                value-expr="id"
                :label="$t('Group')"
                label-mode="floating"
                class="xs3 mr-3"
            />
            <DxSelectBox
                :dataSource="DanhSachCongTy"
                v-model="NhanVien.congTy"
                display-expr="name"
                value-expr="id"
                :label="$t('Company')"
                label-mode="floating"
                class="xs3"
            />
        </div>
        <div class="row align-center mb-2">
            <DxTextBox
                v-model="NhanVien.username"
                styling-mode="outlined"
                :label="$t('Username')"
                label-mode="floating"
                class="xs4 mr-3"
            />
            <DxDateBox
                v-model="NhanVien.createdDate"
                displayFormat="dd/MM/yyyy"
                :use-mask-behavior="true"
                validationMessageMode="always"
                styling-mode="outlined"
                :label="$t('Created date')"
                label-mode="floating"
                class="xs4 mr-3"
            />
            <DxCheckBox :value="NhanVien.isActive" class="xs4" text="Active" />
        </div>
        <div class="row justify-end">
            <DxButton
                text="Lưu"
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
import { mapState } from 'vuex'

export default {
    components: {
        DxSelectBox,
        DxTextBox,
        DxDateBox,
        DxNumberBox,
        DxCheckBox,
        DxButton,
    },
    computed: {
        ...mapState('user', [
            'DanhSachChucVu',
            'DanhSachCongTy',
            'DanhSachNhom',
            'DanhSachPhongBan',
        ]),
    },
    data() {
        return {
            NhanVien: {
                id: 0,
                tenNhanVien: '',
                maNhanVien: '',
                email: '',
                chucVuId: '',
                phongBan: '',
                username: '',
                groupName: '',
                congTy: '',
                isActive: true,
                createdDate: new Date(),
            },
        }
    },
    methods: {
        selectionChanged(e) {
            console.log(
                '🚀 ~ file: addUser.vue ~ line 141 ~ this.NhanVien.chucVu',
                e.selectedItem.ten
            )
        },
        clickSave() {
            // this.$store.dispatch('user/postStaff', this.NhanVien)
            console.log(
                '🚀 ~ file: addUser.vue ~ line 147 ~ this.NhanVien',
                this.NhanVien
            )
        },
    },
    created() {
        this.$store.dispatch('user/getAllPosition')
        this.$store.dispatch('user/getAllCompany')
        this.$store.dispatch('user/getAllGroup')
        this.$store.dispatch('user/getAllDivision')
    },
}
</script>

<style scoped></style>
