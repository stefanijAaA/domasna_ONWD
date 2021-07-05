<template>
  <section class="resume-section p-3 p-lg-5 d-flex align-items-center" id="about">
    <div class="w-100">
      <h1 class="mb-0">
        Stefanija
        <span class="text-primary">Duracoska</span>
      </h1>
      <div class="subheading mb-5 mt-1">
        Naum Naumoski Borce 32 · Struga · Macedonia
        <a
          href="mailto:name@email.com"
        >sduracoska@gmail.com</a>
      </div>
      <p
        class="lead mb-5"
      >
      I am 20 years old and I'm studying Computer Science at the Faculy of Computer Science and Engeneering in Skopje.
      </p>
      <p class="lead mb-5">
       <a href="#" v-on:click.prevent="$scrollTo('#experience')">Scroll down to learn more about me.</a>
      </p>
      <div class="social-icons">
        
        <a href="https://github.com/stefanijAaA" target="_blank" rel="noopener noreferrer" aria-label="GitHub Profile">
          <font-awesome :icon="['fab', 'github']"/>
        </a>
        
        <a href="https://www.facebook.com/stefanija.duracoska" target="_blank" rel="noopener noreferrer" aria-label="Facebook Profile">
          <font-awesome :icon="['fab', 'facebook']"/>
        </a>
       
      </div>
    </div>
  </section>
</template>

<style lang="scss" scoped>
.social-icons a {
  cursor: pointer;
  display: inline-block;
  height: 3.5rem;
  width: 3.5rem;
  background-color: var(--secondary);
  color: #fff !important;
  border-radius: 100%;
  text-align: center;
  font-size: 1.5rem;
  line-height: 3.5rem;
  margin-right: 1rem;

  @media (max-width: 380px) {
    margin-right: 0.5rem;
  }

  @media (max-width: 350px) {
    margin-right: 0.2rem;
  }
}

.social-icons a:last-child {
  margin-right: 0;
}

.social-icons a:hover {
  background-color: var(--primary);
}
</style>
