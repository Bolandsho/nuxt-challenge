<template>
    <v-row justify='center' align='center'>
        <v-col cols='12' sm='8' md='6'>
            <v-card  class='mt-2'>
                <v-card-title class='headline'>
                    {{ post.title }}
                </v-card-title>
                <v-card-text>
                    {{ post.description }}
                </v-card-text>
                <v-card-actions>
                    <v-spacer />

                </v-card-actions>
            </v-card>
        </v-col>
    </v-row>
</template>

<script lang='ts'>
    import Vue from 'vue'
    import { mapGetters } from 'vuex'

    export default Vue.extend({
        async fetch() {

            await this.$store.dispatch('posts/getPost',
                {id:this.$route.params.id})
        },
        computed: {
            ...mapGetters({
                post: 'posts/post'
            })
        },

    })
</script>
