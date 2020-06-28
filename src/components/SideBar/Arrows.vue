<template>
    <div class="arrows" @click="onClick">
        <a :class="{ 'arrow': true, 'open': open }" v-for="index in 3" :key="index">
            <div class="arrow-top"></div>
            <div class="arrow-bottom"></div>
        </a>
        <span :class="{ 'menu-label': true, 'transparent': open}">MENU</span>
    </div>
</template>

<script>
    export default {
        name: "Arrows",
        props: {
            open: {
                type: Boolean
            }
        },
        methods: {
            onClick() {
                this.$emit('toggle');
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

        .menu-label {
            transform-origin: 0 0;
            transform: rotate(65deg);
            margin-left: 15px;
            margin-top: 5px;
            color: white;
            position: relative;
            transition: color ease-in-out 0.3s;

            &.transparent {
                color: transparent;
            }
        }

        .arrow {
            margin-left: 15px;

            div {
                background-color: transparent;
                width: 6px;
                height: 70px;
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

    @media(max-width: 400px) {
        .arrows {
            .arrow {
                div {
                    height: 35px;
                }

                .arrow-top {
                    top: 44px;
                }

                .arrow-bottom {
                    top: 73px;
                }
            }
        }
    }

</style>