<template>
  <h5>A02 Props Child Component</h5>

  <div>
    props로 넘어온 데이터는 여기서 변경 불가. 참조만 가능한 변수<br>
    Name: {{name}}<br>
    Age: {{age + 100}}<br>
    Title: {{title}}<br>
  </div>
</template>

<script>
export default {
  props: ['name', 'age', 'title'],
}
</script>
