<template>
  <h3>A15 Currency</h3>

  Qty: <input type="number" class="form-control"    v-model.number="qty">
  Cost: <input type="number" class="form-control"   v-model.number="cost">
  Country: {{inCurr}}
    <select class="form-control"    v-model="inCurr">
      <template v-for="item in currencies" :key="item">
        <option>{{item}}</option>
      </template>
    </select>
  <br>
  <div>Total: {{qty * cost}}</div>
  <div>Total: 
    <span v-for="item in total" :key="item.country">
      {{item.country}}: {{item.value}} &nbsp; {{' '}}
    </span>
  </div>  
</template>

<script>
export default {
  data() {
    return {
      qty: 3,
      cost: 5,
      inCurr: 'USD',
    }
  },
  computed: {
    currencies: () => ['USD', 'EUR', 'KRW'],
    rate: () => ({ 'USD': 1, 'EUR': 1.13, 'KRW': 0.00061 }),
    total() {
      // [ {USD: 234.3434}, {EUR: 3434.34}, ...]
      const dom = this.currencies.map(item => {
        const value = (this.cost * this.qty * this.rate[this.inCurr] / this.rate[item]).toFixed(2);
        return { country: item, value }
      });
      return dom;
    }
  },
  methods: { }
}
</script>
