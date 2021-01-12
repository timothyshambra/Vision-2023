// This is just the arrow icons
class FooterNav extends window.HTMLElement {
    connectedCallback () {
      const { classPrefix, classList } = this.dataset;
      this.innerHTML = `<ul class="footer-links">
      <li>
          <a href="#skip-to-content">Back to Top</a>
      </li>
      <li>
          <a href="/use/">Conditions of Use</a>
      </li>
      <li>
          <a href="/privacy-policy/">Privacy Policy</a>
      </li>
      <li>
          <a href="/accessibility/">Accessibility</a>
      </li>
  </ul>`;
    }
  
  }
  window.customElements.define('footer-nav', FooterNav);