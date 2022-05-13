<template>
  <div>
    <div class="apt_page">
      <div class="apt_title">
        <h3 class="apt_title_main">아파트 실거래가 조회</h3>
        <h3 class="apt_title_detail hidden">아파트 조회 상세</h3>
        <button
          class="apt_title_detail hidden"
          id="detail_btn"
          onclick="location.reload()"
        >
          리셋
        </button>
        <div id="blank_1"></div>
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

      <div class="apt_show">
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
              <th class="apt_title_main">번호</th>
              <th class="apt_title_main">아파트이름</th>
              <th class="apt_title_main">주소</th>
              <th class="apt_title_main">건축연도</th>
              <th class="apt_title_main">최근거래금액</th>
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
        <table>
          <!-- <thead>
		         	<tr class ="tr_size" >
		              <th>상호명</th>
		              <th>대분류</th>
		              <th>중분류</th>
		              <th>소분류</th>
		              <th>도로명 주소</th>
		         	</tr>
	       		</thead> -->
          <tbody id="storeinfo"></tbody>
        </table>
        <div class="storeclose hidden"></div>
      </div>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style></style>
