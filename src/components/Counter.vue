<template>
  <div>
    <div>
      <p>例（@click）
        <span class="count-int">{{ count }}</span>
        <span class="flash-message-new">{{ flashMessageUpdate }}</span>
      </p>
      <p :class="fontOrangeStraight">
        {{ showOverNumOrLess }}
      </p>
      <button class="btn-increment" @click="increment">
        oshitara-kazuga-fuemasu
      </button>
    </div>
    <div>
      <p>例（v-on:click）
        <span class="number-int">{{ number }}</span>
      </p>
      <p>
        <button class="btn-countup-single" v-on:click="countUp(1)">
          Count Up (1n)
        </button>
        <button class="btn-countup-twice" v-on:click="countUp(2)">
          Count Up (2n)
        </button>
      </p>
      <p>
        <button
          class="btn-reset-count"
          v-on:click="resetCount"
          v-on:mouseover="showDescription"
          v-on:mouseleave="removeDescription"
        >
          Reset Count<span v-if="isMouseover"> (hover test)</span>
        </button>
      </p>
    </div>
    <CounterFooter
      :twice-incremented-number="numberIncrementedTwice"
      @click-increment-twice="incrementNumberTwice"
    >
    </CounterFooter>
  </div>
</template>

<script>
import CounterFooter from './CounterFooter.vue'

export default {
  name: 'Counter',
  components: {
    CounterFooter
  },
  data() {
    return {
      count: 0,
      flashMessageUpdate: '',
      number: 0,
      isActiveFontOrangeStraight: false,
      isMouseover: false,
      numberIncrementedTwice: 0
    }
  },
  methods: {
    increment() {
      this.count++
      this.isActiveFontOrangeStraight = true;
      this.flashMessageUpdate = ' update!';
    },
    countUp: function(times) {
      this.number += 1 * times
    },
    resetCount: async function() {
      this.number = 0;
      this.count = 0;
      this.isActiveFontOrangeStraight = false;
    },
    showDescription() {
      this.isMouseover = true
    },
    removeDescription() {
      this.isMouseover = false
    },
    incrementNumberTwice(value) {
      this.numberIncrementedTwice = value;
    }
  },
  computed: {
    showOverNumOrLess: function() {
      const num = 3;
      return this.count > num ?
        String(num) + 'より大きい':
        String(num) + 'より小さい'
    },
    fontOrangeStraight: function() {
      return {
        'font-orange': this.isActiveFontOrangeStraight,
        'font-straight': !this.isActiveFontOrangeStraight
      }
    }
  },
  watch: {
    count: function() {
      setTimeout(() => {
        this.flashMessageUpdate = ''
      }, 2000)
    }
  }
}
</script>

<style scoped>
.flash-message-new {
  color: red;
  font-weight: bold;
}
.font-orange {
  color: orange;
}
.font-straight {
  font-style: italic;
}
</style>
