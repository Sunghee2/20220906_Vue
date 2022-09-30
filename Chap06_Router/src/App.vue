<template>
  <div class="m-3">
    <h1>Chap06 Router</h1>

    <!-- router에서는 링크를 a 대신 router-lint 태그를 이용 -->
    <router-link to="/">INDEX</router-link> | 
    <router-link to="/A01Binding">A01Binding</router-link> | 
    <router-link to="/A02Attr">A02Attr</router-link> | 
    <router-link to="/A03Params/1001/놀부">A03Params 1001</router-link> | 
    <router-link to="/A03Params/1002/향단">A03Params 1002</router-link> | 

    <router-link to="/A04Props/1003/홍길동">A04Props 1003</router-link> | 
    <router-link to="/A04Props/1004/방자">A04Props 1004</router-link> | 

    <router-link to="/A05Contact/">A05Contact</router-link> | 

    <router-link to="/A06Query?no=1005&name=흥부&address=Seoul#TOP">A06Query</router-link> | 
    <router-link to="/A07Push/">A07Push</router-link> | 

    <!-- 하위 라우터 구성은 페이지 내부에서 구정한다 -->
    <router-link to="/A08Child/">A08Child</router-link> | 

    <router-link to="/ABC/">ABC</router-link> | 


    <hr>

    <router-link :to="{path: '/'}">INDEX</router-link> | 
    <router-link :to="{path: '/A01Binding'}">A01Binding</router-link> | 
    <router-link :to="{name: 'attr'}">A02Attr</router-link> | 
    <router-link :to="{name: 'params', params:{no:1001, name:'놀부'}}">A03Params 1001</router-link> | 
    <router-link to="/A03Params/1002/향단">A03Params 1002</router-link> | 
    <router-link :to="{name: 'props', params: {no: 1003, name: '홍길동'}}">A04Props 1003</router-link> | 
    <router-link to="/A04Props/1004/방자">A04Props 1004</router-link> | 
    <router-link to="/A05Contact/">A05Contact</router-link> | 
    <router-link :to="{name: 'query', query:{no: 1005, name: '향단', address: 'Busan'}, hash: '#BTN'}">A06Query</router-link> | 
    <router-link to="/A07Push/">A07Push</router-link> | 
    <router-link to="/A08Child/">A08Child</router-link> | 
    <router-link to="/ABC/">ABC</router-link> | 

    
    <router-view></router-view>
  </div>
</template>

<script>
// npm i vue-router
export default {
  name: 'App',
  components: {}
}
</script>
