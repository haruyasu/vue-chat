<template>
  <div>
    <h1>メインコンテンツ</h1>
    <p>Hello {{ user.name }}</p>
  </div>
</template>

<script>
import db from "@/firebase/init";
import firebase from "firebase";
export default {
  name: "Home",
  data() {
    return {
      user: null
    };
  },
  created() {
    let ref = db.collection("users");
    // current user
    ref
      .where("user_id", "==", firebase.auth().currentUser.uid)
      .get()
      .then(snapshot => {
        snapshot.forEach(doc => {
          this.user = doc.data();
        });
      });
  }
};
</script>
