<template>
  <v-app id="app">

  <v-toolbar class="primary" xs12 sm6 >
  <v-toolbar-title>Home</v-toolbar-title>
  <v-spacer></v-spacer>
  <v-toolbar-items>
    <v-btn flat to="/">Dashboard</v-btn>
    <v-btn flat to="/cal">Calendar </v-btn>
    <v-btn flat to="/weather">Weather</v-btn>
    <v-btn flat to='/todo'>Todo</v-btn>
    <v-btn flat>Shopping</v-btn>
    
  </v-toolbar-items>
  </v-toolbar>

    <router-view></router-view>
    
  <v-footer class="pa-3" id="footer">
   <v-spacer></v-spacer>
    <div>&copy; {{ new Date().getFullYear() }} J-M. Wagner</div>
</v-footer>

  
    
  

  </v-app>
</template>

<script>

export default {
  name: "App",
 
};
</script>

<style>
#footer {
  position:absolute;
   bottom:0;
   width:100%;
   }
#loading {
  position: absolute;
    height: 100px;
    width: 100px;
    top: 50%;
    left: 50%;
    margin-left: -50px;
    margin-top: -50px;
    background: url(/link/to/your/image);
    background-size: 100%;
}

</style>
