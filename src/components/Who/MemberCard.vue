<template>
    <div class="member">
        <h2>{{ member.firstname }}</h2>
        <h3>{{ member.lastname }}</h3>
        <p>{{ member.role }}</p>
    </div>
</template>

<script>
    export default {
        name: "MemberCard",
        props: {
            member: {
                type: Object
            }
        }
    }
</script>

<style scoped lang="scss">

    .member {
        border-left: solid 5px $secondary-color;
        padding: 10px;
        width: 200px;
        margin-top: 20px;
        margin-right: 10px;

        h3 {
            margin-bottom: 5px !important;
            margin-top: 5px !important;
        }
    }

</style>