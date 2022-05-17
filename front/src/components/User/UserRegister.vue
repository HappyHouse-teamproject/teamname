<template>
  <div>
    <div class="join_page">
      <div class="join_title">
        <h3>회원가입</h3>
        <div id="blank_1"></div>
      </div>
      <form id="userform" method="post" action="${root}/user/register">
        <input type="hidden" name="act" value="regist" />

        <div class="join_input">
          <label for="id">아이디</label>
          <input
            id="id"
            name="id"
            type="text"
            size="20"
            placeholder=" ID"
            required
          />
        </div>

        <div class="join_input">
          <label for="pw">패스워드</label>
          <input
            id="password"
            name="password"
            type="text"
            size="20"
            placeholder=" PASSWORD"
            required
          />
        </div>

        <div class="join_input">
          <label for="name">이름</label>
          <input
            id="name"
            name="name"
            type="text"
            size="20"
            placeholder=" NAME"
            required
          />
        </div>

        <div class="join_input">
          <label for="email">이메일</label>
          <input
            id="email"
            name="email"
            type="email"
            size="20"
            placeholder=" EMAIL"
            required
          />
        </div>

        <div class="join_input">
          <label for="tell">전화번호</label>
          <input
            id="tell"
            name="tell"
            type="tel"
            size="20"
            placeholder=" TEL"
            required
          />
        </div>

        <input style="opacity: 0" id="submit" type="submit" value="회원가입" />
        <input id="submit" type="submit" value="회원가입" />
      </form>
    </div>
    <form method="post" action="user"></form>
  </div>
</template>

<script>
export default {};
</script>

<style></style>
