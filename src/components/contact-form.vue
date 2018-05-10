<template>
<div class="col-md-7 mb-5 mb-md-0 py-3">
  <form action="https://formspree.io/yzyusrina@ymail.com" method="POST" data-aos="flip-up" data-aos-delay="300">
    <div class="form-group">
      <input class="bg-transparent form-control" id="name" type="text" name="name" placeholder="Name" required>
    </div>

    <div class="form-group">
      <input class="bg-transparent form-control" id="email" type="email" name="_replyto" aria-describedby="emailHelp" placeholder="Email" required>
    </div>

      <div class="form-group">
      <textarea class="bg-transparent form-control" id="message" rows="3" name="message" placeholder="Message" required></textarea>
    </div>

    <input type="hidden" name="_subject" value="Tiara - Contact"/>
    <input type="hidden" name="_next" value="https://tiara.netlify.com/sent"/>

    <button type="submit" class="bg-transparent btn pl-0">
      SEND
      <i class="icon ion-arrow-right-c"></i>
    </button>
  </form>
</div>
</template>

<script>
export default {};
</script>

<style scoped>
</style>
