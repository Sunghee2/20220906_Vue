<template>
  <h5>A02 Props Child Component</h5>

  <div>
    props로 넘어온 데이터는 여기서 변경 불가. 참조만 가능한 변수<br>
    Name: {{name}}<br>
    Age: {{age + 100}}<br>
    Title: {{title}}<br>
    Address: {{address}}<br>
    Array: {{ary[0]}} / {{ary[1]}} / {{ary[2]}}<br>
    User: {{user.name}} / {{user.age}} / {{user.address}}<br>
    onAdd: {{onAdd(10, 30)}}<br>
    isChecked: {{isChecked ? 'T' : 'F'}}
  </div>
</template>

<script>
export default {
  // props: ['name', 'age', 'title', 'address', 'ary', 'user', 'onAdd', 'isChecked'],
  props: {
    name: { type: String, default: 'Unknown', required: true },
    age: { type: [String, Number], default: '0' },
    title: { type: [String, Number] },
    address: { type: [String, Number], default: 0 },
    isChecked: { type: [Boolean, undefined] },
    ary: {
      type: Array,
      default: () => ['', ''],
      validator: (value) => value.length >= 2,
    },
    user: {
      type: Object,
      default: () => ({ name: '', age: 0 }),
      validator: value => value.name && value.age,
    },
    onAdd: {
      type: Function,
      default() {           // 정의한 함수 자체가 기본값이다
        console.log('함수가 정의되지 않았습니다.')
      },
      validator: value => typeof value(1,2) === 'string'
    },
  }
}
</script>
