<template>
  <div>
    <div class="apt_page">
      <div class="apt_title">
        <h3 class="apt_title_main">아파트 실거래가 조회</h3>
      </div>
      <div class="apt_show">
        <select name="sido" id="sido"></select>
        <select name="gugun" id="gugun">
          <option value="">구/군선택</option>
        </select>
        <select name="dong" id="dong">
          <option value="">동 선택</option>
        </select>
      </div>
    </div>
    <router-view></router-view>
    <router-view></router-view>
  </div>
</template>

<script>
export default {};
</script>

<style></style>
