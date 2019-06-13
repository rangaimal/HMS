<template>
 <div class="container">
 <div class=row>

 <div class =col-lg-9>
  <div>
  <h3>Add Available Food form</h3>
    <b-form @submit="onSubmit" @reset="onReset" v-if="show">
     

     
     <b-input-group prepend="Food ID" class="mt-3" size="sm">
        <b-form-select
          id="input-2"
          v-model="form.id"
          :options="ids"
          required
        ></b-form-select>
    </b-input-group>

    
       <b-input-group prepend="Food Category" class="mt-3" size="sm">
        <b-form-select
          id="input-2"
          v-model="form.category"
          :options="categories"
          required
        ></b-form-select>
     </b-input-group>


      
       <b-input-group prepend="Food Name" class="mt-3" size="sm">
        <b-form-select
          id="input-2"
          v-model="form.name"
          :options="names"
          required
        ></b-form-select>
       </b-input-group>
<div>
      <b-button type="submit" variant="outline-info">Add</b-button>
      <b-button type="reset" variant="outline-danger">Clear</b-button>
</div>
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
            id:null,
          name: null,
          category:null,
         
        
        },
          ids: [{ text: 'Select One', value: null }, '1', '2', '3', '4'],
        categories: [{ text: 'Select One', value: null }, 'desert', 'rice', 'soup', 'Meat'],
        names: [{ text: 'Select One', value: null }, 'Full rice', 'chicken', 'fish deval', 'Ice cream'],

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
         this.form.category = ''
      
           
        // Trick to reset/clear native browser form validation state
        this.show = false
        this.$nextTick(() => {
          this.show = true
        })
      }
    }
  }
</script>