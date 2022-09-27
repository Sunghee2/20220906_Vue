<template>
  <h3>A10 Vue Form Element</h3>
  <br>

  <form>
    Text Field: <span class="orange">{{name}} / {{name.length}}</span>
    <input type="text" class="form-control"   v-model.trim="name"><br>

    Number Field: <span class="orange">{{num + 10}}</span>
    <input type="number" class="form-control"   v-model.number="num"><br>

    Lazy Field: <span class="orange">{{address}}</span>
    <input type="text" class="form-control"   v-model.lazy="address"><br>

    
    Radio Button: <span class="orange">{{gender}}</span><br>
    <input type="radio" name="gender" value="남자"    v-model="gender">Male
    <input type="radio" name="gender" value="여자"    v-model="gender">Female
    <input type="radio" name="gender" value="어린이"   v-model="gender">Children <br>
    <br>

    Single Check: <span class="orange">{{isChecked ? '동의' : '동의 안함'}}</span><br>
    <input type="checkbox" name="check"   v-model="isChecked">Agree<br>
    <br>

    Single Check: <span class="orange">{{check}}</span><br>
    <input type="checkbox" name="check"   v-model="check" true-value="남자" false-value="여자">Agree<br>
    <br>

    CheckBox: <span class="orange">{{fruit}}</span><br>
    <input type="checkbox" value="apple"    v-model="fruit">사과,
    <input type="checkbox" value="banana"   v-model="fruit">바나나,
    <input type="checkbox" value="melon"    v-model="fruit">멜론<br>
    <br>

    SelectBox: <span class="orange">{{language}}</span><br>
    <select class="form-control"    v-model="language">
      <option>선택해 주세요.</option>
      <option v-for="item in items" :key="item">{{item}}</option>
    </select>
    <br>

    SelectBox Multi: <span class="orange">{{languages}}</span><br>
    <select class="form-control" multiple size="5"    v-model="languages">
      <option v-for="item in items" :key="item">{{item}}</option>
    </select>
    <br>

    TextArea: <span class="orange">{{msg}}</span>
    <textarea cols="50" rows="5" class="form-control"   v-model="msg"></textarea>
    <br>


    Radio Button Object Value: <span class="orange">{{user}} / {{user.name}}</span><br>
    <input type="radio" name="person"   :value="{name: 'NolBu', age: 40}"    v-model="user">놀부
    <input type="radio" name="person"   :value="{name: 'HungBu', age: 30}"   v-model="user">흥부
    <input type="radio" name="person"   :value="{name: 'BangJa', age: 20}"   v-model="user">방자 <br>
    <br>

    Text Field: <span class="orange">{{txt}}</span>
    <input type="text" class="form-control"   :value="txt"  @input="checkText"><br>

    <button type="submit"   @click.prevent="sendData">SEND</button>
  </form>  
</template>

<script>
export default {
  data() {
    return {
      // formData: {
      //   name: 'NolBu',
      //   num: 10,
      //   address: 'Seoul',
      //   gender: '남자',
      // },
      name: 'NolBu',
      num: 10,
      address: 'Seoul',
      gender: '남자',
      isChecked: true,
      check: '남자',
      fruit: ['apple', 'banana'],
      language: 'Vue',
      languages: ['Vue'],
      msg: '',
      user: '',
      txt: 'Hello World'
    }
  },
  computed: {
    items: () => ['React', 'Vue', 'Angular', 'jQuery', 'JavaScript']
  },
  methods: {
    checkText(evt) {
      this.txt = evt.target.value;
      if (this.txt.trim().length > 5) {
        this.txt = this.txt.substring(0, 5) + '...';
      }
    },
    sendData() {
      const data = {
        name: this.name,
        num: this.num,
        address: this.address,
        language: this.language,
        languages: this.languages,
        fruit: this.fruit
      }
      console.log(data);
    }
  }
}
</script>

<style scoped>
  .orange {color: orange;}
</style>