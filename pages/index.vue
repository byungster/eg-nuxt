<template>
    <div class="banner">
      <div class="banner-keywords">
        <span class="banner-sub-text"><strong>2022 개정 교육과정</strong>을</span>
        <span class="banner-main-text"><strong>대한민국</strong>에서</span>
        <br/>
        <span class="banner-main-text"><strong>제일 잘아는</strong> 학원</span>
        <span class="banner-sub-text-notice">합격의 대명사 이강학원에서 성공입시를 함께 하세요.</span>
      </div>
      <ul class="banner-menus">
        <li class="banner-menu" v-for="menu in menus" :key="menu.name">
          <i :class="menu.icon"/>
          <span class="menu-name" v-text="menu.name"/>
          <span class="menu-desc" v-text="menu.desc"/>
        </li>
      </ul>
    </div>
</template>
<script>
import db from "../plugins/firebase.js"
import {collection, getDocs} from "firebase/firestore";


export default {
  data() {
    return {
      menus: [
        {icon: 'xi-comment-o', name: '캠퍼스 소식', desc: '이강학원 캠퍼스 소식을 알려드립니다.'},
        {icon: 'xi-calendar-check', name: '시간표', desc: '각 캠퍼스의 시간표를 확인해보세요.'},
        {icon: 'xi-lightbulb-o', name: '입시 연구소', desc: '이강학원 입시 전문가들의 입시정보를 소개합니다.'},
        {icon: 'xi-book-o', name: '교육 연구소', desc: '학생들에게 페이스메이커와 코치의 역할을 하겠습니다.'},
        {icon: 'xi-users-o', name: '강사진 소개', desc: '이강학원 강사진을 소개합니다.'},
      ]
    }
  },
  mounted() {
    getDocs(collection(db, "teachers")).then(querySnapshot => {
      querySnapshot.forEach((doc) => {
        console.log(doc.data());
        console.log(`${doc.id} => ${doc.data()}`);
      })
    });
  }
};
</script>
<style scoped>
.banner {
  padding-top: 100px;
  width: 95%;
  background-image: url('~/assets/banner.png');
  background-size: cover;
  margin: 50px 0;
}
.banner-keywords {
  padding-left: 150px;
}
.banner-sub-text {
  display: block;
  letter-spacing: 0.2em;
  font-size: 1.25em;
  font-weight: 100;
}

.banner-sub-text strong{
  font-weight: bold;
}

.banner-main-text {
  font-size: 2.75em;
  font-weight: 100;
  box-shadow: inset 0 -25px 0 #FEDA48FF;
  line-height: 60px;
  width: 100%;
}

.banner-sub-text-notice {
  display: block;
  font-size: 1em;
  font-weight: bolder;
  color: #323a42;
}

.banner-menus {
  z-index: 111;
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  margin-bottom: 4%;
  list-style: none;
  padding-left: 150px;
}

.banner-menu {
  border: 0px solid #e5e5e5;
  flex: 0 15%;
  padding: 70px 20px 20px 20px;
  margin-bottom: 1%;
  margin-right: 1%;
  background-color: #FEDA48FF;
}

[class*="xi-"]:before {
  font-size: 3.75em;
}

.menu-name {
  display: block;
  font-size: 2.25em;
  margin: 5px 0 10px 0;
}

.menu-desc {
  font-size: 0.875em;
  color: #000;
}
</style>
