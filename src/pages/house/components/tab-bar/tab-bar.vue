<template>
    <view class="tab-bar">
        <view class="tab-row row">
            <view class="tab-col col-4"
                  :class="{'active':tabIndex===index}"
                  v-for="(item,index) in items"
                  @click="onHandleChange(index)">
                <view class="tab-item">
                    <view class="tab-text">{{item}}</view>
                </view>
            </view>
        </view>
    </view>
</template>

<script type="text/ecmascript-6">
    export default {
        name: "tab-bar",
        data() {
            return {
                items: [
                    '区域', '筛选', '排序'
                ]
            }
        },
        props: {
            tabIndex: {
                type: Number,
                default: -1
            }
        },
        methods: {
            onHandleChange(index) {
                this.$emit('onChange', index);
            }
        },
        created() {
        }
    }
</script>

<style lang="less">
    @import "../../../../assets/less/common";

    .tab-bar {
        position: fixed;
        top: @top1;
        left: 0;
        z-index: 1009;
        width: 100%;
        height: unit(80, rpx);
        box-shadow: 0 0 15px @boxShadow05;
        background-color: @white;
        .tab-row {
            .tab-col {
                width: 33.333%;
                padding: unit(20, rpx) 0;
                .tab-item {
                    height: unit(40, rpx);
                    line-height: unit(40, rpx);
                    border-right: 0.5px solid @borderColor1;
                    text-align: center;
                    font-size: 0;
                    .tab-text {
                        display: inline-block;
                        vertical-align: middle;
                        font-size: @fontSize28;
                    }
                    &:after {
                        content: '';
                        display: inline-block;
                        vertical-align: middle;
                        margin-left: unit(20, rpx);
                        transition: all 300ms ease;
                        border-top: unit(12, rpx) solid @fontColor1;
                        border-left: unit(8, rpx) solid @transparent;
                        border-right: unit(8, rpx) solid @transparent;
                    }
                }
                &.active {
                    color: @theme;
                    .tab-item {
                        &:after {
                            transform: rotate(180deg);
                            border-top-color: @theme !important;
                        }
                    }
                }
                &:last-child {
                    .tab-text {
                        border: none;
                    }
                }
            }
        }
    }
</style>