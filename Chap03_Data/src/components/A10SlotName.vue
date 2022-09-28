<template>
  <h3>A10 Slot Name</h3>

  <A10SlotNameChild>
    이름이 존재하는 Slot은 인수로 참조한다.<br>
    
    <template v-slot:header>Header Content</template>
    <template v-slot:menu>Menu Content</template>
    <template v-slot:content>Content</template>
    <template v-slot:footer>Footer Content</template>

    <div>
      Hello World
    </div>
  </A10SlotNameChild>
</template>

<script>
import A10SlotNameChild from './childcomps/A10SlotNameChild.vue'

export default {
  components: {A10SlotNameChild},

}
</script>
