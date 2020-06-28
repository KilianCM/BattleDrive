<template>
    <div :class="{ 'side-bar': true, 'closed': !open }">
        <div class="logo">
            <router-link :to="{ name: 'home'}" >
                <img src="../../assets/logo.png" alt="Logo BattleDrive Competition">
            </router-link>
            <arrows :open.sync="open" v-on:toggle="toggleMenu"></arrows>
        </div>
        <transition name="quick-fade">
            <link-list v-on:click="onLinkClick" v-if="open"></link-list>
        </transition>
        <transition name="quick-fade">
            <footer-bar v-if="open"></footer-bar>
        </transition>
    </div>
</template>

<script>
    import LinkList from "./LinkList";
    import FooterBar from "./FooterBar";
    import Arrows from "./Arrows";
    export default {
        name: "SideBar",
        components: {Arrows, FooterBar, LinkList},
        data() {
            return {
                open: true
            }
        },
        methods: {
            toggleMenu() {
                this.open = !this.open;
                this.$emit('toggle-menu', this.open);
            },
            onLinkClick() {
                this.toggleMenu();
            }
        }
    }
</script>

<style scoped lang="scss">

    .side-bar {
        position: fixed;
        background-color: $background-color;
        box-shadow: 10px -1px 25px -18px rgba(0,0,0,0.86);
        width: $width-menu;
        height: 100%;
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: space-between;
        z-index: 100;
        transition: all ease-in-out 0.7s;

        &.closed {
            width: $width-menu-reduced;

            .logo {
                margin-left: 360px;
            }
        }

        .logo {
            display: flex;
            margin: 30px 0 0 200px;
            transition: all ease-in-out 0.5s;

            img {
                width: 300px;
                background-color: $background-color;
                padding: 10px;
                margin-right: 5px;
                height: auto;
                border-radius: 10px;
            }
        }
    }

    @media(max-width: 400px) {
        .side-bar .logo {
            margin-left: 150px;
            img {
                width: 200px;
            }
        }
    }

</style>