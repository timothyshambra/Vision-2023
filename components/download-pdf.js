// This is just the arrow icons
class DownloadPDF extends window.HTMLElement {
    connectedCallback () {
      const { classPrefix, classList } = this.dataset;
      this.innerHTML = `<div class="section-primary p-5">
      <div class="container">
          <div class="row justify-content-center">
              <div class="col">
                  <div class="text-center">
                      <a href="#" class="btn btn-outline-light btn-hover rounded-50" role="button"><span
                              class="ca-gov-icon-file-pdf"></span> Download Vision 2023 PDF document</a>
                  </div>
              </div>
          </div>
      </div>
  </div>`;
    }
  
  }
  window.customElements.define('download-pdf', DownloadPDF);