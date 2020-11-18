<template>
    <div class="rally">
        <div class="info">
            <h4>{{rally.name}}</h4>
            <h5>{{rally.car.name}} - {{rally.result.scratch}}ème scratch | {{rally.result.class}}ème classe {{rally.car.class}}</h5>
            <p v-html="rally.description"></p>
            <a target="_blank" rel="noopener" :href="rally.ewrcLink"><img src="https://img.icons8.com/fluent-systems-filled/24/1D3B75/external-link.png"/> voir sur ewrc-result.com</a>
        </div>
        <div class="images">
            
        </div>

    </div>
</template>

<script>
    export default {
        name: "RallyItem",
        props: {
            rally: {
                type: Object
            }
        }
    }
</script>

<style scoped lang="scss">

    .rally {
        border-left: solid 5px $secondary-color;
        padding-left: 10px;
        .info {

            a {
                display: flex;
                align-items: center;
                margin-top: 10px;
                img {
                    width: 20px;
                    margin-right: 5px;
                }
            }
        }
    }

</style>