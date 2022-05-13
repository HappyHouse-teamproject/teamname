<template>
  <div>
    <div id="logo">
      <p class="happyhouse">
        <a href="/">HAPPYHOUSE</a>
      </p>
    </div>

    <div id="category">
      <ul id="category_menu">
        <!-- <li class="category_menu"><a href="">NOTICE</a> 공지사항
            </li> -->

        <li class="category_menu">
          <a href="apt">APT</a>
          <!--아파트 거래가-->
        </li>
        <!-- <li class="category_menu"><a href="">LOCATION</a></li>
            <li class="category_menu"><a href="">SEARCH</a> 검색
            </li> -->

        <div v-if="loginUser">
          <li class="user_menu" id="login">
            <a href="${root}/user/login">LOGIN</a>
          </li>
          <li class="user_menu" id="join">
            <a href="${root}/user/join">JOIN</a>
          </li>
        </div>

        <div v-if="loginUser == null">
          <li class="user_menu" id="logout">
            <a href="${root}/user/logout">LOGOUT</a>
          </li>
          <li class="user_menu" id="mypage">
            <a href="${root}/user/mypage">MYPAGE</a>
          </li>
          <li class="user_menu">${loginUser.name}님 반갑습니다.</li>
          <br /><br />
        </div>
      </ul>
      <br />
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style></style>
