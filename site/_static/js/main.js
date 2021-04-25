(() => {
  const app = {
    initialize () {
      this.cacheElements();
      this.registerEventListeners();
    },
    cacheElements () {
      this.btnToTopElement = document.querySelector('.btn--to-top');
      this.navMobile = document.querySelector('#navbarSupportedContent');
      this.navToggle = document.querySelector('.nav__toggle');
    },
    registerEventListeners () {
      if (this.btnToTopElement !== null) {
        this.btnToTopElement.addEventListener('click', (ev) => {
          window.scrollTo({
            top: 0,
            left: 0,
            behavior: 'smooth',
          });
        });
      }
      console.log(this.navMobile.classList);
      this.navToggle.addEventListener('click', (e) => {
        this.navMobile.classList.toggle('hidden');
      });
    },
  };
  app.initialize();
})();
