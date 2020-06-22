<template>
    <span class="arrows" @click="onClick">
        <a :class="{ 'arrow': true, 'open': open }" v-for="index in 3" :key="index">
            <div class="arrow-top"></div>
            <div class="arrow-bottom"></div>
        </a>
    </span>
</template>

<script>
    export default {
        name: "Arrows",
        data() {
            return {
                open: true
            }
        },
        methods: {
            onClick() {
                this.open = !this.open;
                this.$emit('click', this.open);
            }
        }
    }
</script>

<style scoped lang="scss">

    $easing: cubic-bezier(.25,1.7,.35,.8);
    $duration: 0.5s;

    .arrows {
        margin-left: 10px;
        display: flex;

        &:hover {
            cursor: pointer;
        }

        .arrow {
            margin-left: 15px;

            div {
                background-color: transparent;
                width: 6px;
                height: 10%;
                position: absolute;
                border-radius: 10px;
                box-shadow: 10px -1px 25px -18px rgba(0,0,0,0.86);

                &::after {
                    content:"";
                    background-color: $background-color;
                    width: 6px;
                    height: 100%;
                    display: block;
                    float: right;
                    border-radius: 10px;
                    transition: all $easing $duration;
                    z-index: -1;
                }
            }

            .arrow-top {
                transform: rotate(-25deg);
                top: 28px;
            }

            .arrow-bottom {
                transform: rotate(25deg);
                top: 87px;
            }

            &.open {
                .arrow-top:after {
                    transform-origin: center center;
                    transform: rotate(50deg);
                }

                .arrow-bottom:after {
                    transform-origin: center center;
                    transform: rotate(-50deg);
                }
            }
        }
    }

</style>