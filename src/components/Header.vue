<template>
    <div>
        
        <ul class="nav">
            <li class="nav-item">
                <router-link
                v-for="(link,index) in links"
                :key="index"
                :to="link.url"
                 class="nav-link active" aria-current="page">{{link.name}}</router-link>
            </li>
            
            <!-- <li class="nav-item">
                <router-link class="nav-link" to="/buyurtma">Buyurtmani qanday qilish kerak</router-link>
            </li>
            <li class="nav-item">
                <router-link class="nav-link" to="/dokon">Bizning do'konlarimiz</router-link>
            </li>
            <li class="nav-item">
                <router-link class="nav-link" to="/qayta-aloqa">Qayta aloqa</router-link>
            </li> -->
        </ul>

        <hr>
    </div>
   
</template>

<script>
export default {
    data(){
        return{
            links:[
                {
                    name:'Kompaniya haqida',
                    url:'/'
                },
                {
                    name:'Buyurtmani qanday qilish kerak',
                    url:'/buyurtma'
                },
                {
                    name:'Bizning dokonlarimiz',
                    url:'/dokon'    
                },
                {
                    name:'Qayta aloqa',
                    url:'/qayta-aloqa'
                }
            ]
            
        }
    }
}
</script>

<style>
.nav-link{
  color: rgb(31, 27, 27);
  font-family: sans-serif;
  
}
</style>