// This is just the arrow icons
class UtilityLinks extends window.HTMLElement {
    connectedCallback () {
      const { classPrefix, classList } = this.dataset;
      this.innerHTML = `<a href="/pdf/Vision-2023-California-Technology-Strategic-Plan.pdf"><span class="ca-gov-icon-download" aria-hidden="true"></span> Download Vision 2023 PDF</a> <a href="/translations.html"><span class="ca-gov-icon-globe" aria-hidden="true"></span> Translate</a>
  <button class="btn btn-xs btn-primary" data-toggle="collapse" data-target="#siteSettings"
      aria-expanded="false" aria-controls="siteSettings"><span class="ca-gov-icon-gear"
          aria-hidden="true"></span> Settings</button>`;
    }
  
  }
  window.customElements.define('utility-links', UtilityLinks);