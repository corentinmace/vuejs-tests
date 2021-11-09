<template>
    <p>Reaction time - {{ score }} ms</p>
    <p>{{rank}}</p>
</template>

<script>
export default {
    props: ['score'],
    data() {
        return {
            rank: null
        }
    },
    mounted() {
        if (this.score < 250) {
            this.rank = 'Sheeeesh'
        } else if (this.score < 400) {
            this.rank = 'Are you Sanic?'
        } else {
            this.rank = 'u 2 slow'
        }
    },
}
</script>

<style>

</style>