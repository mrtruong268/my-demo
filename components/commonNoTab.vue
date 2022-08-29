<template>
    <div class="purchase container">
        <div class="mb-2 row align-center">
            <div class="row align-center">
                <h3>
                    {{ $t(headTitle) }}
                </h3>
                <div class="mdi mdi-filter-variant filter px-2">
                    <div class="filter-drop">
                        <p
                            v-for="item in headerTitle"
                            :key="item.id"
                            @click="selectionChanged(item)"
                        >
                            {{ $t(item.title) }}
                        </p>
                    </div>
                </div>
            </div>
            <div class="mdi mdi-overscan btn-full" @click="toggle"></div>
        </div>
        <div class="toolbar">
            <div class="row align-center justify-start">
                <div v-for="item in list" :key="item.id" :class="classProp">
                    <div @click="onItemClick(item)" class="btn-list row mr-3">
                        <i class="mdi mdi-format-list-numbered mr-1" />
                        <p class="font-14">
                            {{ $t(item.title) }} ({{ item.length }})
                        </p>
                    </div>
                </div>
            </div>
        </div>
        <div>
            <div class="tabPanel">
                <fullscreen
                    v-model="fullscreen"
                    :page-only="true"
                    :teleport="true"
                >
                    <div :class="fullscreen ? 'fullscreen' : ''">
                        <div v-if="fullscreen" class="row justify-end">
                            <DxButton
                                :text="$t('Đóng')"
                                type="normal"
                                styling-mode="text"
                                icon="mdi mdi-close"
                                @click="toggle"
                            />
                        </div>
                        <div :class="fullscreen ? 'item-temp' : ''">
                            <slot :itemProp="selectedItem" />
                        </div>
                    </div>
                </fullscreen>
            </div>
        </div>
    </div>
</template>

<script>
import DxTabPanel from 'devextreme-vue/tab-panel'
import DxButton from 'devextreme-vue/button'
import DxSelectBox from 'devextreme-vue/select-box'
import { DxScrollView } from 'devextreme-vue/scroll-view'
import { mapState } from 'vuex'

export default {
    props: {
        headerTitle: {
            type: Array,
            default: () => [],
        },
        classProp: {
            type: String,
            default: '',
        },
        headTitle: {
            type: String,
            default: '',
        },
        list: {
            type: Array,
            default: [],
        },
    },
    components: {
        DxTabPanel,
        DxButton,
        DxScrollView,
        DxSelectBox,
    },
    data() {
        return {
            selectedItem: {},
        }
    },
    computed: {
        ...mapState(['isSelected', 'routeParams', 'fullscreen']),
    },
    methods: {
        toggle() {
            this.$store.commit('SET_FULLSCREEN', !this.fullscreen)
        },
        selectionChanged(e) {
            if (e == null) return
            this.clickRouter(e.to, this.routeParams)
        },
        onItemClick(e) {
            this.selectedItem = e
        },
        addOption() {
            this.list.forEach((e) => {
                if (e.listType === this.isSelected) this.selectedItem = e
            })
        },
    },
    created() {
        if (this.isSelected !== '') this.addOption()
    },
    beforeDestroy() {
        this.$store.commit('IS_SELECTED', '')
    },
}
</script>

<style scoped>
.fullscreen {
    background-color: white;
    position: relative;
    z-index: 4;
}
.item-temp {
    overflow-y: auto;
    height: 95vh;
}
.purchase {
    height: 100%;
    overflow: hidden;
    margin-top: 80px;
}
.btn-full {
    font-size: 18px;
    cursor: pointer;
}
.filter:hover .filter-drop {
    display: block;
}
.filter-drop {
    display: none;
    position: absolute;
    min-width: 190px;
    background-color: white;
    box-shadow: 0px 8px 16px 0px rgba(0, 0, 0, 0.2);
    z-index: 2;
}
.filter-drop p {
    padding: 10px 14px;
    text-decoration: none;
    display: block;
    transition: all 0.2s linear 0s;
    cursor: pointer;
}
.filter-drop p:hover {
    background-color: #ddd;
    transition: all 0.2s linear 0s;
}
.toolbar {
    border: 1px solid #e7e7e7;
}
.header {
    font-weight: bold;
    font-size: 14px;
}
.btn-list {
    background-color: white;
    color: black;
    cursor: pointer;
    padding: 4px 0;
}
.btn-list:hover {
    background-color: #e7e7e7;
}
#btn-new:hover {
    background-color: #e7e7e7;
}
@media only screen and (max-width: 739px) {
    .purchase {
        margin-top: 10px;
    }
}
</style>
