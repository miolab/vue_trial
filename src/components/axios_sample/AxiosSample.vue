<template>
  <div id="axios-sample">
    <AxiosSampleHeader :header-description="descriptionOfBitcoinSection"></AxiosSampleHeader>
    <section v-if="errored">
      <h1>Error</h1>
      <p>We're sorry, we're not able to retrieve this information at the moment, please try back later</p>
    </section>
    <section v-else>
      <div v-if="loading">Loading...</div>
      <ul>
        <div
          v-for="item in bitcoinItems"
          v-bind:key="item"
          class="item"
        >
          <li>
            <strong>
              {{ item.description }}
            </strong>
            <span class="lighten">
              <span v-html="item.symbol"></span>
              {{ item.rate_float | currencyDecimal }}
            </span>
          </li>
        </div>
      </ul>
      <div>
        <button
          v-on:click="switchIsShown"
          class="btn-switch-msg"
        >
          raw dataの表示非/表示を切り替える
        </button>
        <div v-show="isShown">
          <p>
            <strong>{{
              headlineRawData
              | myFilterTextReplace
              | myFilterLowerCase
            }}</strong>
          </p>
          <p>
            {{ bitcoinItems }}
          </p>
        </div>
        <hr>
      </div>
    </section>
  </div>
</template>

<script>
import axios from 'axios'
import AxiosSampleHeader from './AxiosSampleHeader.vue'

export default {
  name: 'AxiosSample',
  components: {
    AxiosSampleHeader
  },
  data() {
    return {
      bitcoinItems: null,
      headlineRawData: 'Raw Data',
      descriptionOfBitcoinSection: 'Bitcoin price情報を表示します',
      isShown: true,
      loading: true,
      errored: false
    }
  },
  mounted() {
    axios
    .get('https://api.coindesk.com/v1/bpi/currentprice.json')
    .then(response => {this.bitcoinItems = response.data.bpi})
    .catch(error => {
      console.log(error)
      this.errored = true
    })
    .finally(() => {
      this.loading = false
    })
  },
  filters: {
    myFilterTextReplace(value) {
      return value.replace('Data', 'Data All');
    },
    myFilterLowerCase(value) {
      return value.toLowerCase();
    },
    currencyDecimal(value) {
      return value.toFixed(2)
    }
  },
  methods: {
    switchIsShown: function() {
      this.isShown = !this.isShown;
    }
  }
}
</script>

<style scoped>
#axios-sample ul {
  display: inline-block;
  text-align: left;
  margin-top: 0;
}
.btn-switch-msg {
  color: blue;
}
</style>
