<template>
  
 <div class="container">
 <div class=row>

 <div class =col-lg-9>
  <div>
  <h3>Add Activity Category</h3>
    <b-form @submit="onSubmit" @reset="onReset" v-if="show">
     

        <b-input-group prepend="Category ID" class="mt-3" size="sm">
        <b-form-input
          id="input-1"
          v-model="form.id"
          size="sm"
          required
       
        ></b-form-input>
   </b-input-group>

       <b-input-group prepend="Category Name" class="mt-3" size="sm">
        <b-form-input
          id="input-2"
          v-model="form.name"
          size="sm"
          required
          placeholder="Enter Name"
        ></b-form-input>
     </b-input-group>

      <b-button type="submit" variant="primary">Add</b-button>
      <b-button type="reset" variant="danger">Clear</b-button>
    </b-form>
    <div class=col-lg-3></div>
   </div>
  </div>
    </div>
  </div>
</template>

<script>
  export default {
    data() {
      return {
        form: {
            id:'',
          name: '',
         
        
        },
        
        show: true
      }
    },
    methods: {
      onSubmit(evt) {
        evt.preventDefault()
        alert(JSON.stringify(this.form))
      },
      onReset(evt) {
        evt.preventDefault()
        // Reset our form values
        this.form.id = ''
        this.form.name = ''
      
           
        // Trick to reset/clear native browser form validation state
        this.show = false
        this.$nextTick(() => {
          this.show = true
        })
      }
    }
  }
</script>
