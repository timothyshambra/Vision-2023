// This is just the arrow icons
class UtilityLinks extends window.HTMLElement {
    connectedCallback () {
      const { classPrefix, classList } = this.dataset;
      this.innerHTML = `<a href="/contact/"><span class="ca-gov-icon-contact-us" aria-hidden="true"></span> Contact
      Us</a>
  <button class="btn btn-xs btn-primary" data-toggle="collapse" data-target="#siteSettings"
      aria-expanded="false" aria-controls="siteSettings"><span class="ca-gov-icon-gear"
          aria-hidden="true"></span> Settings</button>`;
    }
  
  }
  window.customElements.define('utility-links', UtilityLinks);