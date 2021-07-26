<template>
    <div>
        <p>User {{ $route.params.id }}</p>
        <p>{{$route.query}}</p><!-- 可取得url?後的參數a=1&b=2 -->
    </div>
</template>
<script>
export default {
    created() {
        
    }
}
</script>