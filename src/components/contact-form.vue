<template>
  <div class="col-md-7 mb-5 mb-md-0 py-3">
    <form
      action="https://formspree.io/yzyusrina@ymail.com"
      method="POST"
      data-aos="flip-up"
      data-aos-delay="300"
    >
      <div class="form-group">
        <input
          id="name"
          class="bg-transparent form-control"
          type="text"
          name="name"
          placeholder="Name"
          required
        >
      </div>

      <div class="form-group">
        <input
          id="email"
          class="bg-transparent form-control"
          type="email"
          name="_replyto"
          aria-describedby="emailHelp"
          placeholder="Email"
          required
        >
      </div>

      <div class="form-group">
        <textarea
          id="message"
          class="bg-transparent form-control"
          rows="3"
          name="message"
          placeholder="Message"
          required
        />
      </div>

      <input type="hidden" name="_subject" value="Tiara - Contact">
      <input type="hidden" name="_next" value="https://tiara.netlify.com/sent">
      
      <button type="submit" class="bg-transparent btn d-flex align-items-center pl-0">SEND
        <ion-icon name="arrow-forward" />
      </button>
    </form>
  </div>
</template>
