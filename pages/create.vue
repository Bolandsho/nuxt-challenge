<template>
  <v-row justify='center' align='center'>
    <v-col cols='12' sm='8' md='6'>
      <v-card class='mt-2'>
        <v-card-title class='headline'>
          Create Post
        </v-card-title>
        <div class="col-md-9  p-3">
          <div class="card mt-3  p-3 " >
            <v-col
                    cols="12"
                    md="12"
            >
              <v-text-field
                      v-model="title"
                      label="title"
                      required
              ></v-text-field>
            </v-col>
            <v-col
                    cols="12"
                    md="12"
            >
              <v-textarea
                      v-model="description"
                      label="description"
                      required
              ></v-textarea>
            </v-col>


          </div>
        </div>
        <v-card-actions>
          <v-spacer />
          <v-btn @click="save" color='primary'>
           Save
          </v-btn>
        </v-card-actions>
      </v-card>
    </v-col>
  </v-row>
</template>

<script lang='ts'>
import Vue from 'vue'
import { mapGetters } from 'vuex'
import VueToast from 'vue-toast-notification';

Vue.use(VueToast);
export default Vue.extend({

  computed: {
    ...mapGetters({
      post: 'posts/post'
    })
  },
    data(){
      return {
          title: "",
          description :""
      }
    },
    watch:{
        post(old_value,new_value){
            if(old_value){
                this.$toast.success("post created successfully", {
                    position: 'bottom-left'
                })
                this.title = "";
                this.description = "";
            }

        }
    },
    methods:{
      save(){

          if(this.title=="")
          return this.$toast.error("title  can 't be empty", {
              position: 'bottom-left'
          })
          if(this.description=="")
              return this.$toast.error("description  can 't be empty", {
                  position: 'bottom-left'
              })
          this.$store.dispatch("posts/savePost", {
              title:this.title,
              description:this.description,
          });
      }
    }
})
</script>
