<template>
    <v-container class="frame">
        <v-row class="pt-10">
            <v-col cols="4" class="d-flex flex-column">
                <h2 class="mb-2">ساخت پست</h2>
                <v-text-field
                    label="عنوان"
                    placeholder="عنوان را وارد کنید"
                    outlined
                    dense
                    v-model="form.title"
                ></v-text-field>
                <v-textarea
                    label="توضیحات"
                    placeholder="توضیحات را وارد کنید"
                    outlined
                    dense
                    v-model="form.body"
                ></v-textarea>
                <v-btn color="primary" class="mr-auto bold" @click="resetPosts"
                    >ذخیره
                </v-btn>
            </v-col>
            <v-col cols="8"> </v-col>
        </v-row>
    </v-container>
</template>


<script lang='ts'>
import Vue from 'vue'
import { mapGetters, mapActions } from 'vuex'

export default Vue.extend({
    // async fetch() {
    //     await this.$store.dispatch('posts/getPosts')
    // },
    data() {
        return {
            form: {
                title: '',
                body: '',
            },
        }
    },
    mounted() {
        let res = this.$repositories.posts().getPosts()
        console.log(this.posts)
    },
    methods: {
        async resetPosts() {
            await this.$store.dispatch('posts/getPosts')
        },
    },
    computed: {
        ...mapGetters({
            posts: 'posts/posts',
        }),
    },
})
</script>

<style lang="scss" scoped>
.frame {
    margin-bottom: 200px;
}
</style>
