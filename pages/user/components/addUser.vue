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
                :data-source="DanhSachChucVu"
                :value="NhanVien.chucVu"
                display-expr="ten"
                value-expr="id"
                :label="$t('Position')"
                label-mode="floating"
                class="xs4 mr-3"
            />
            <DxSelectBox
                :data-source="DanhSachPhongBan"
                :value="NhanVien.phongBan"
                display-expr="Name"
                value-expr="ID"
                :label="$t('Department')"
                label-mode="floating"
                class="xs4 mr-3"
            />
            <DxSelectBox
                :data-source="DanhSachCongTy"
                :value="NhanVien.congTy"
                display-expr="name"
                value-expr="id"
                :label="$t('Company')"
                label-mode="floating"
                class="xs4"
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
            <DxSelectBox
                :data-source="DanhSachNhom"
                :value="NhanVien.groupName"
                display-expr="groupName"
                value-expr="id"
                :label="$t('Group')"
                label-mode="floating"
                class="xs4 mr-3"
            />
            <DxTextBox
                v-model="NhanVien.isActive"
                styling-mode="outlined"
                :label="$t('Active')"
                label-mode="floating"
                class="xs4"
            />
        </div>
        <div class="row align-center mb-3">
            <DxDateBox
                v-model="NhanVien.createdDate"
                displayFormat="dd/MM/yyyy"
                :use-mask-behavior="true"
                validationMessageMode="always"
                styling-mode="outlined"
                :label="$t('Created date')"
                label-mode="floating"
                class="xs12"
            />
        </div>
        <div class="row justify-end">
            <DxButton text="Lưu" type="default" styling-mode="contained" />
        </div>
    </div>
</template>

<script>
import DxSelectBox from 'devextreme-vue/select-box'
import DxNumberBox from 'devextreme-vue/number-box'
import DxTextBox from 'devextreme-vue/text-box'
import DxDateBox from 'devextreme-vue/date-box'
import DxButton from 'devextreme-vue/button'
import { mapGetters, mapState } from 'vuex'

export default {
    components: {
        DxSelectBox,
        DxTextBox,
        DxDateBox,
        DxNumberBox,
        DxButton,
    },
    computed: {
        ...mapGetters('user', ['NhanVien']),
        ...mapState('user', [
            'DanhSachChucVu',
            'DanhSachCongTy',
            'DanhSachPhongBan',
            'DanhSachNhom',
        ]),
    },
    data() {
        return {}
    },
    mounted() {
        console.log(this.DanhSachChucVu)
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
