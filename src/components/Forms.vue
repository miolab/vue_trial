<template>
  <div id="forms">
    <p>フォーム</p>
    <input
      class="input-text"
      type="text"
      v-model="message"
    >
    <p>入力結果:
      <span class="show-input-text">{{ message }}</span>
    </p>
    <p>バリデーション付きフォーム（v-model.Lazy）</p>
    <input
      type="text"
      v-model.trim.lazy="messageByLazy"
    >
    <span>（{{ maxTextLimit }}文字以内）</span>
    <p>入力結果:
      <span class="show-input-text">{{ messageByLazy }}</span>
      <span style="color: red;"> {{ messageLimitAlert }}</span>
    </p>
    <section class="single-checkbox">
      <input
        type="checkbox"
        id="single-checkbox-input"
        v-model="inputEventData.isChecked"
      >
      <label for="single-checkbox-input"> チェックする（単体チェックボックス）</label>
      <p>{{ inputEventData.isChecked }}</p>
    </section>
    <section class="multiple-checkbox">
      <p>
        （複数チェックボックス）
        <input
          type="checkbox"
          id="checkbox-soccer"
          value="soccer"
          v-model="inputEventData.favboriteSports"
        >
        <label for="checkbox-soccer">サッカー</label>
        <input
          type="checkbox"
          id="checkbox-running"
          value="running"
          v-model="inputEventData.favboriteSports"
        >
        <label for="checkbox-running">ランニング</label>
        <input
          type="checkbox"
          id="checkbox-swimming"
          value="swimming"
          v-model="inputEventData.favboriteSports"
        >
        <label for="checkbox-swimming">水泳</label>
      </p>
      <p class="favorite-sports-result">{{ inputEventData.favboriteSports }}</p>
    </section>
    <section class="input-radio">
      <input
        type="radio"
        id="not-allow"
        value="not_allow"
        v-model="inputEventData.allowOrNot"
      >
      <label for="not-allow">許可しない</label>
      <input
        type="radio"
        id="allow"
        value="allow"
        v-model="inputEventData.allowOrNot"
      >
      <label for="allow">許可する</label>
      <p>{{ inputEventData.allowOrNot }}</p>
    </section>
    <section class="input-select">
      <select v-model="inputEventData.favoriteMusicGenre">
        <option
          v-for="musicGenre in musicGenres"
          :key="musicGenre"
        >
          {{ musicGenre }}
        </option>
      </select>
      <p>{{ inputEventData.favoriteMusicGenre }}</p>
    </section>
  </div>
</template>

<script>
export default {
  name: 'Forms',
  data() {
    return {
      message: '',
      messageByLazy: '',
      maxTextLimit: 8,
      musicGenres: ['EDM', 'Rock', 'ポップ', 'アニメ'],
      inputEventData: {
        isChecked: false,
        favboriteSports: [],
        allowOrNot: '（ラジオボックスが未選択です）',
        favoriteMusicGenre: '（未選択）'
      }
    }
  },
  computed: {
    messageLimitAlert() {
      return this.messageByLazy.length > this.maxTextLimit ?
        String(this.maxTextLimit) + '文字以内にしてください' :
        ''
    }
  }
}
</script>
