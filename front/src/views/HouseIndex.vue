<template>
  <div>
    <section>
      <!-- start main image! lime your light -->
      <div class="container">
        <div class="blank"></div>
        <div class="main_img">
          <!-- <a href="./apt.jsp"
            ><img src="./img/house_1.png" id="mainImage" width="960px" alt=""
          /></a> -->
        </div>
        <div class="sub-title-left">
          <p id="title">HAPPYHOUSE</p>
          <p id="sub-title">
            주택의 아파트/다세대, 주택 별 거래 정보와 아파트 정보 제공 사이트
          </p>
        </div>
        <div class="sub-title-right"><p id="sub-title">CLICK</p></div>
      </div>
      <div v-if="aptlist">
        <div class="apthot">
          <p id="title">인기 관심 매물 순위</p>
          <div class="apthot">
            <table id="apthot">
              <colgroup>
                <col width="100" />
                <col width="300" />
                <col width="150" />
                <col width="120" />
              </colgroup>
              <thead>
                <tr class="tr_size">
                  <th class="apt_title_main">순위</th>
                  <th class="apt_title_main">아파트이름</th>
                  <th class="apt_title_main">주소</th>
                  <th class="apt_title_main">건축연도</th>
                </tr>
              </thead>
              <tbody id="apthotlist">
                <div v-for="(apt, index) in items" :key="index">
                  <tr>
                    <td>${index + 1}</td>
                    <td>${apt.aptName}</td>
                    <td>${apt.dongName} ${apt.jibun}</td>
                    <td>${apt.buildYear}</td>
                  </tr>
                </div>
              </tbody>
            </table>
          </div>
        </div>
      </div>
      <div class="long-line"><hr /></div>
    </section>
  </div>
</template>

<script>
export default {};
</script>

<style></style>
