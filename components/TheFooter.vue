<template>
  <div>
    <!-- 캠퍼스 안내 -->
    <div class="campus-list">
      <div class="campus-list-top">
        <span class="campus-list-top-title">이강학원 캠퍼스 안내</span>
        <span class="campus-list-top-subtitle">CAMPUS</span>
      </div>
      <ul class="campus-list-bottom">
        <li class="campus-box" v-for="campus in campusList" :key="campus.name">
          <span class="campus-box-name" v-text="`${campus.name} 캠퍼스`"/>
          <div class="campus-box-sns-list">
            <img v-for="index in campus.blogCnt" :key="index" src="~/assets/icon_band.png"/>
          </div>
          <span class="campus-box-linker" v-text="'+ 자세히 보기'"/>
        </li>
      </ul>
    </div>
    <!-- 오너 안내 -->
    <div class="owner-detail">
      <img class="owner-detail-logo" src="~/assets/ft_logo.png"/>
      <div class="owner-detail-contents">
        <ul class="owner-detail-contents-menu">
          <li>환불규정</li>
          <li>이용약관</li>
          <li>개인정보처리방침</li>
          <li>전산관리플랫폼</li>
          <li>고객불편사항접수</li>
        </ul>
        <span class="owner-detail-text">
          이강학원 | 주소 : 서울특별시 강남구 대치동 1021-1 우전빌딩 2층 | 대표이사 : 양재연
        </span>
        <span class="owner-detail-text">
          대표번호: 1566-2005 | 사업자등록번호 : 120-87-81138 | 개인정보관리책임자 : 최수민
        </span>
        <br/>
        <span class="owner-detail-text">
          Copyright ⓒ 이강에류(주). All rights Reserved.
        </span>
      </div>
      <div class="owner-detail-sns-list">
        <i class="xi-instagram"></i>
        <i class="xi-facebook-official"></i>
        <i class="xi-naver-square" style="font-size: 36px"></i>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      campusList: [
        {name: '대치', blogCnt: 3},
        {name: '안국', blogCnt: 1},
        {name: '경복궁', blogCnt: 1},
        {name: '일산', blogCnt: 1},
        {name: '수지', blogCnt: 1},
        {name: '영통', blogCnt: 1},
        {name: '대전', blogCnt: 1},
        {name: '마포', blogCnt: 1},
        {name: '신촌 / 홍대', blogCnt: 0},
        {name: '송파', blogCnt: 0},
      ]
    }
  }

}
</script>
<style scoped>
[class*="xi-"]:before {
  color: #808080;
  font-size: 30px;
}

.campus-list {
  margin: 0 100px;
}

.campus-list-top-title {
  font-size: 2.250em;
}

.campus-list-top-subtitle {
  letter-spacing: 0.5em;
  font-size: 1.250em;
  color: #c3c3c3;
}

.campus-list-bottom {
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  margin-bottom: 8%;
  list-style: none;
}

.campus-box {
  flex: 0 12%;
  padding: 20px;
  margin-bottom: 1%;
  margin-right: 1%;
  background: #323a42;
}

.campus-box-name {
  color: #fff;
  font-size: 1.5em;
  letter-spacing: -0.05em;
}

.campus-box-sns-list {
  display: block;
  min-height: 67px;
}

.campus-box-sns-list img {
  margin: 10px 5px;
}

.campus-box-linker {
  display: block;
  margin: 0 10px;
  color: #adafb1;
  font-size: 0.875em;
}

.owner-detail {
  display: flex;
  border-top: 1px solid #b1b1b1;
  margin: 0 50px;
  padding: 30px 0;
  justify-content: space-between;
}

.owner-detail-logo {
  width: 210px;
  height: 60px;
}

.owner-detail-sns-list {
  float: right;
}

.owner-detail-contents {
  position: relative;
  right: 250px;
}

.owner-detail-contents-menu {
  display: flex;
  list-style: none;
}

.owner-detail-contents-menu li {
  font-weight: 600;
  margin: 5px 10px;
}

.owner-detail-text {
  margin: 0 50px;
  display: block;
  color: #333;
  line-height: 130%;
  font-size: 13px;
}
</style>
