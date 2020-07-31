<template>
  <div>
      <h1>My Web Page</h1>

<p>Hello everybody!</p>

<p>Translate this page:</p>

<div id="google_translate_element"></div>
  </div>
</template>

<script>
export default {
    data(){
        return{

        }
    },
    methods:{
     googleTranslateElementInit() {
    new google.translate.TranslateElement({pageLanguage: 'en'}, 'google_translate_element');
    }
},
mounted(){
    this.googleTranslateElementInit()
}
}
</script>

<style>

</style>