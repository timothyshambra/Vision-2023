// This is just the arrow icons
class FooterLinks extends window.HTMLElement {
    connectedCallback () {
      const { classPrefix, classList } = this.dataset;
      this.innerHTML = `<div class="row"><div class="col-sm">
      <ul class="list-none">
          <li class="m-y"><a href="/process/">Our Process</a></li>
          <li class="m-y"><a href="/strategy.html">Our strategy for getting to vision 2023</a></li>
          <li class="m-y"><a href="/acknowledgements.html">Acknowledgements</a></li>
      </ul>
  </div>
  <div class="col-sm">
      <ul class="list-none">
          <li class="m-y"><a href="/our-thanks.html">Our thanks to</a></li>
          <li class="m-y"><a href="/benefits-from.html">Vision 2023 benefits from the work of</a></li>
      </ul>
  </div></div>`;
    }
  
  }
  window.customElements.define('footer-links', FooterLinks);