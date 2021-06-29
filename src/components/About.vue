<template>
  <section class="resume-section p-3 p-lg-5 d-flex align-items-center" id="about">
    <div class="w-100">
      <h1 class="mb-0">
        Стефанија
        <span class="text-primary">Дурацоска</span>
      </h1>
      <div class="subheading mb-5 mt-1">
        Наум Наумоски Борче 32 · Струга · Македонија
        <a
          href="mailto:name@email.com"
        >sduracoska@gmail.com</a>
      </div>
      <p
        class="lead mb-5"
      >I am experienced in Vue.js and React.js in which I produce high quality code for my clients that are both well performing and well tested. I focus on solving problems, not only technical problems but creating an awesome experience for the users of my software both visual and accessible. Mixing powerful tools and knowledge about the users brings visual UI's to life and leads to webpages being accessible and useful.</p>
      <p class="lead mb-5">
        Get your own resume started using this template with Gridsome here:
        <a
          href="https://github.com/LokeCarlsson/gridsome-starter-resume"
          target="_blank"
          rel="noopener noreferrer"
        >Github repo</a>.
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
