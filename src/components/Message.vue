<template>
  <v-textarea
    rows="3"
    label="メッセージ(Alt + Enter)"
    v-model="Message"
    v-on:keydown.enter.alt.exact="addMessage"
    class="ma-2"
  ></v-textarea>
</template>

<script>
import db from "@/firebase/init";
export default {
  name: "Message",
  props: ["name"],
  data() {
    return {
      Message: null
    };
  },
  methods: {
    addMessage() {
      if (this.Message) {
        db.collection("messages")
          .add({
            content: this.Message,
            name: this.name,
            timestamp: Date.now()
          })
          .catch(err => {
            console.log(err);
          });
        this.Message = null;
      }
    }
  }
};
</script>
