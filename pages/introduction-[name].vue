<template>
     <div class="introduce">
       <ContentDoc> 
          <template #not-found>
            <h1>not found</h1>  
          </template>
       </ContentDoc>

    </div>
</template>
<script setup>
</script>

<style scoped lang="scss">
.introduce :deep {
  color: #333;
  width: 80%;
  margin: auto;
  line-height: 30px;
  border: solid 1px #eee;
  padding: 0px 20px 20px 20px;    
  p{
    font-size: 20px;
    color: #000;
    letter-spacing: 5px;
  }
}
</style>