<template>
  <div>
    <h3 class="apt_title_detail hidden">아파트 조회 상세</h3>

    <table>
      <colgroup>
        <col width="100" />
        <col width="150" />
        <col width="*" />
        <col width="120" />
        <col width="150" />
      </colgroup>
      <thead>
        <tr class="tr_size">
          <th class="apt_title_detail hidden">거래번호</th>
          <th class="apt_title_detail hidden">아파트이름</th>
          <th class="apt_title_detail hidden">거래가격</th>
          <th class="apt_title_detail hidden">거래연도</th>
          <th class="apt_title_detail hidden">면적</th>
        </tr>
      </thead>
      <tbody id="aptinfo"></tbody>
    </table>

    <br />
    <br />

    <div><h2>우리 동네에 많은 상권 종류 TOP3</h2></div>
    <div id="storerank"></div>

    <br />
    <br />

    <div><h2>1km 반경 내 역</h2></div>
    <div id="subway"></div>

    <br />
    <br />

    <div class="storeclose"><h2>가까운 곳에 있는 상권 정보</h2></div>
  </div>
</template>

<script>
export default {};
</script>

<style></style>
