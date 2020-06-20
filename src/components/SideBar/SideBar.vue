<template>
    <div class="side-bar">
        <router-link :to="{ name: 'home'}" class="logo">
            <img src="../../assets/logo.png" alt="Logo BattleDrive Competition">
            <div></div>
            <div></div>
            <div></div>
        </router-link>
        <link-list></link-list>
        <footer-bar></footer-bar>
    </div>
</template>

<script>
    import LinkList from "./LinkList";
    import FooterBar from "./FooterBar";
    export default {
        name: "SideBar",
        components: {FooterBar, LinkList}
    }
</script>

<style scoped lang="scss">

    .side-bar {
        position: relative;
        background-color: $background-color;
        box-shadow: 10px -1px 25px -18px rgba(0,0,0,0.86);
        width: 300px;
        min-width: 250px;
        height: 100%;
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: space-between;
        z-index: 100;

        .logo {
            display: flex;
            margin: 30px 0 0 200px;

            div {
                background-color: $background-color;
                width: 6px;
                margin: 0 5px;
                box-shadow: 10px -1px 25px -18px rgba(0,0,0,0.86);
            }

            img {
                width: 300px;
                background-color: $background-color;
                padding: 10px;
                margin-right: 5px;
                height: auto;
            }
        }
    }

</style>