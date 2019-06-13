<template>
 <div class="container">
 <div class=row>

 <div class =col-lg-9>
  <div>
  <h3>Add Activity Form </h3>
    <b-form @submit="onSubmit" @reset="onReset" v-if="show">
     

    <b-input-group prepend="Activity Name" class="mt-3" size="sm">
        <b-form-input
          id="input-1"
          v-model="form.name"
          size="sm"
          required
          placeholder="Enter Activity name"
        ></b-form-input>
     </b-input-group>

    <b-input-group prepend="Category" class="mt-3" size="sm">
        <b-form-select
          id="input-2"
          size="sm"
          v-model="form.food"
          :options="foods"
          required
        ></b-form-select>
     </b-input-group>

       <b-input-group prepend="Activity Code" class="mt-3" size="sm">
        <b-form-input
          id="input-3"
          v-model="form.Code"
          size="sm"
          required
          placeholder="Enter Activity Code"
        ></b-form-input>
     </b-input-group>


        <b-input-group prepend="Price" class="mt-3" size="sm">
        <b-form-input
          id="input-4"
          v-model="form.Price"
          size="sm"
          required
          placeholder="Enter Price"
        ></b-form-input>
       </b-input-group>

      
         <b-input-group prepend="Tax" class="mt-3" size="sm">
        <b-form-input
          id="input-5"
          v-model="form.Tax"
      size="sm"
          placeholder="Enter Tax"
        ></b-form-input>
      </b-input-group>

      
        <b-input-group prepend="Tax Amount" class="mt-3" size="sm">
        <b-form-input
          id="input-6"
          v-model="form.TaxAmount"
         size="sm"
          placeholder="Enter Tax amount"
        ></b-form-input>
     </b-input-group>


      
         <b-input-group prepend="Discount" class="mt-3" size="sm">
        <b-form-input
          id="input-7"
          v-model="form.Discount"
         size="sm"
          placeholder="Enter Discount"
        ></b-form-input>
      </b-input-group>

      
       <b-input-group prepend="Total Amount" class="mt-3" size="sm">
        <b-form-input
          id="input-8"
          v-model="form.Total"
          size="sm"
          required
         
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
          name: '',
          food: null,
          Code:'',
        
        },
        foods: [{ text: 'Select One', value: null }, 'boat ridding', 'hiking', 'Safari', 'Surfing'],
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
        this.form.file=''
        this.form.name = ''
        this.form.food = null
       this.form.Code=''
        this.form.Price=''
         this.form.Tax=''
          this.form.TaxAmount=''
           this.form.Discount=''
            this.form.Total=''
           
        // Trick to reset/clear native browser form validation state
        this.show = false
        this.$nextTick(() => {
          this.show = true
        })
      }
    }
  }
</script>