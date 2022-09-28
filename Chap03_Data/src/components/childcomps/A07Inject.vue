<template>
  <h5>A07 Inject</h5>

  <div>
    main.js에 app.config.unwrapInjectedRef = true 속성을 추가<br>

    Name: {{name}}<br>
    User: {{user.name}} / {{user.age}}<br>
    <br>
    <button @click="changeName">Name</button>
    <button @click="changeUser">User</button><br>
  </div>
</template>

<script>
export default {
  // props와 같이 기본값 설정 가능
  inject: ['name', 'user', 'changeName', 'changeUser']
  // inject: {
  //   user: { default: 'A' },
  //   user: {default: () => {name: '', age: ''}}
  // }
}
</script>
