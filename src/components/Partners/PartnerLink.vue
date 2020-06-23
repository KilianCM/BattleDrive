<template>
    <a :href="partner.link" class="partner-link" target="_blank">
        <img :src="require('../../assets/' + partner.image + '')" :alt="partner.name">
    </a>

</template>

<script>
    export default {
        name: "PartnerLink",
        props: {
            partner: {
                type: Object
            }
        }
    }
</script>

<style scoped lang="scss">
    .partner-link {
        margin: 10px;
        img {
            width: 300px;
            object-fit: cover;
            filter: drop-shadow($box-shadow);
            transition: filter ease-in-out 0.3s;

            &:hover {
                filter: drop-shadow($box-shadow-hover);
            }
        }
    }
</style>