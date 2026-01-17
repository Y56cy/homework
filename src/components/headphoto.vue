<template>
    <header>
        <div class="hcontainer">
            <h2>作品一览</h2> 
        </div>
    </header> 

    <hr>
</template>
<style scoped>
    h2{
        color: rgb(255, 255, 255);
        }
    header {
        background: 
        linear-gradient(90deg, rgba(1, 21, 39, 0.7) 0%, rgba(171, 198, 229, 0.4) 50%, rgba(0,0,0,0) 100%),
        url('../assets/images/totoro2.jpg')  ;

         background-size: cover;
        color: white;
        padding: 6rem 1rem;
         margin-bottom: 2rem;
}

        header .hcontainer {
     text-align: left;
    max-width: 600px;
    margin-left: 2rem;
    max-width: 1200px; 
    margin: 0 auto 0 2rem; 
}
header h2{
             font-size: 2.5rem;
            margin:0;
       }
       hr {
            border: 0;
            height: 2px;
            background: linear-gradient(to right, transparent, #2196f3, transparent);
            margin-bottom: 40px;
            width: 80%;
            margin-left: auto;
            margin-right: auto;
        }

</style>