<template>
  <div class="header">
    <div class="logo">
      <img src="~/assets/logo.png"/>
    </div>
    <ul class="menus">
      <li>캠퍼스 소식</li>
      <li>캠퍼스 안내</li>
      <li>입시 연구소</li>
      <li>교육 연구소</li>
      <li>학원 소개</li>
    </ul>
    <div class="header-padding"/>
    <div class="info-contact">
      <div class="top">
        <div class="red-label">
          수강신청·상담
        </div>
        <div class="call-number">
          1566-2005
        </div>
      </div>
      <div class="bottom">
        <div class="bottom-left">
          평일 10:00 ~ 18:30
        </div>
        <div class="bottom-right">
          주말 10:00 ~ 16:00
        </div>
      </div>
    </div>
    <div class="btn-sign">
      <button class="btn-sign-in">로그인</button>
      <button class="btn-sign-up">회원가입</button>
    </div>
  </div>
</template>
<style scoped>
.header {
  display: flex;
  margin: 0 50px;
  padding-bottom: 20px;
}

.logo {
  width: 15%;
}

.menus {
  width: 45%;
  display: flex;
  list-style: none;
}

.header-padding{
  width: 10%;
}

.info-contact {
  width: 20%;
}

.btn-sign {
  width: 10%;
}


.logo img {
  width: 100%;
}

.menus li {
  width: 25%;
  font-size: 14px;
  font-weight: 600;
}

.top {
  display: flex;
  justify-content: space-around;
  width: 100%;
}

.red-label {
  color: #d20000;
  margin-top: 13px;
  font-size: 12px;
  font-weight: 600;
}

.call-number {
  font-size: 28px;
  font-weight: bold;
}

.bottom {
  display: flex;
  justify-content: space-around;
  width: 100%;
}

.bottom-left {
  font-size: 11px;
  font-weight: 500;
  color: #828282;
}

.bottom-right {
  font-size: 11px;
  font-weight: 500;
  color: #828282;
}

.btn-sign {
  display: flex;
}
.btn-sign-in {
  font-weight: 600;
  background-color: #5e5e5e;
  border: none;
  color: white;
  font-size: 11px;
}
.btn-sign-up {
  font-weight: 600;
  background-color: #232323;
  border: none;
  color: white;
  font-size: 11px;
}
</style>
