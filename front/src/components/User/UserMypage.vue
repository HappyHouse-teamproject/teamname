<template>
  <div>
    <form id="updateform" method="post" action="">
      <div class="userInfo_page">
        <div class="user_title">
          <h3>회원 정보 확인</h3>
          <div id="blank_1"></div>
        </div>

        <div class="user_check">
          <label for="id">아이디</label>
          <input
            id="id"
            name="id"
            type="text"
            size="20"
            value="${loginUser.id}"
            required
            readonly
          />
        </div>
        <div class="user_check">
          <label for="pw">패스워드</label>
          <input
            id="password"
            name="password"
            type="text"
            size="20"
            value="${loginUser.password}"
            required
          />
        </div>
        <div class="user_check">
          <label for="name">이름</label>
          <input
            id="name"
            name="name"
            type="text"
            size="20"
            value="${loginUser.name}"
            required
          />
        </div>
        <div class="user_check">
          <label for="address">이메일</label>
          <input
            id="email"
            name="email"
            type="email"
            size="20"
            value="${loginUser.email}"
            required
          />
        </div>
        <div class="user_check">
          <label for="tel">전화번호</label>
          <input
            id="tell"
            name="tell"
            type="tel"
            size="20"
            value="${loginUser.tell}"
            required
          />
        </div>
        <div id="blank_2"></div>
        <div class="user_btn">
          <button id="edit" type="submit">수정</button>
        </div>
        <div class="user_out">
          <button id="withdrawal" type="submit'">회원탈퇴</button>
        </div>
      </div>
    </form>
  </div>
</template>

<script>
export default {};
</script>

<style></style>
