<template>
    <div>
        <p>User Id: {{ $route.params.id }}</p>
        <p>User Name: {{$route.query.userName}}</p><!-- 可取得url?後的參數a=1&b=2 -->
        <p>Message: {{message}}</p><!-- router的path 開啟props後，可使用props接收$route.params的參數 -->
    </div>
</template>
<script>
export default {
    props: ['message'],
    created() {
        console.log(this.message);
        console.log(this.$route.params)
        console.log(this.$route.query)
    }
}
</script>