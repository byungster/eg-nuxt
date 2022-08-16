<template>
  Hello world tpdhkf
</template>
<script>

import db from "../plugins/firebase.js"
import { collection, getDocs } from "firebase/firestore";

const querySnapshot = await getDocs(collection(db, "teachers"));
querySnapshot.forEach((doc) => {
  console.log(doc.data());
  console.log(`${doc.id} => ${doc.data()}`);
});
</script>