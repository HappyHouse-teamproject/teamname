<template>
  <div>
    <!-- <div class="layback"><p>&nbsp;</p></div> -->
    <div class="login_page">
      <div class="login_title">
        <h3>로그인</h3>
        <div id="blank_1"></div>
      </div>
      <form id="userform" method="post" action="${root}/user/login">
        <div class="login_input">
          <input type="hidden" name="act" value="login" />
          <div class="login_summit">
            <input
              style="opacity: 0"
              id="button_login"
              type="submit"
              value="로그인"
            />
          </div>
        </div>

        <input type="hidden" name="act" value="login" />
        <div class="login_input">
          <div>
            <label for="id">아이디</label>
            <input
              id="id"
              type="text"
              name="id"
              size="20"
              placeholder=" ID"
              required
            />
          </div>

          <div>
            <label for="pw">비밀번호</label>
            <input
              id="password"
              type="text"
              name="password"
              size="20"
              placeholder=" PASSWORD"
              required
            />
          </div>
        </div>

        <div class="login_summit">
          <input id="button_login" type="submit" value="로그인" />
        </div>
      </form>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style></style>
