<template>
  <div>
    <section>
      <div class="container">
        <div></div>
        <div>
          <a href="#"
            ><img src="@/assets/house_1.png" width="960px" alt=""
          /></a>
        </div>
        <div>
          <p>HAPPYHOUSE</p>
          <p>
            주택의 아파트/다세대, 주택 별 거래 정보와 아파트 정보 제공 사이트
          </p>
        </div>
        <div><p>CLICK</p></div>
      </div>
      <div v-if="aptlist">
        <div>
          <p>인기 관심 매물 순위</p>
          <div>
            <table>
              <colgroup>
                <col width="100" />
                <col width="300" />
                <col width="150" />
                <col width="120" />
              </colgroup>
              <thead>
                <tr>
                  <thead>
                    순위
                  </thead>
                  <th>아파트이름</th>
                  <th>주소</th>
                  <th>건축연도</th>
                </tr>
              </thead>
              <tbody>
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
      <div><hr /></div>
    </section>
  </div>
</template>

<script>
export default {};
</script>

<style></style>
