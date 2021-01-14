// This is just the arrow icons
class GetInvolved extends window.HTMLElement {
    connectedCallback () {
      const { classPrefix, classList } = this.dataset;
      this.innerHTML = `<div class="section-understated p-5" id="get-involved-sec">
      <div class="container">
          <div class="row justify-content-center">
              <div class="col">
                  <div class="text-center">
                      <h2 class="h2 p-4 m-b color-gray-dark">How to Get Involved</h2>
                      <p style="margin: 0 auto; width:90%;max-width:550px;">Click on the buttons below to
                          share
                          your thoughts about the <a
                              href="https://ca-code-works.github.io/Vision-2023/challenge/">challenges</a> we
                          plan to address
                          first, including what we might be missing and any additional insight that would help
                          inspire our work.</p>
                      <div class="group p-t-md p-b-sm">
                          <a href="#" class="btn btn-highlight btn-lg rounded-50 p-x-md m-r-sm" role="button">Get involved</a>
                          <a href="https://ca-code-works.github.io/Vision-2023/challenge/" class="btn btn-outline-primary btn-lg btn-hover p-x-md rounded-50 m-l-sm"
                              role="button">Explore challenges</a>
                      </div>
                  </div>
              </div>
          </div>
      </div>
  </div>`;
    }
  
  }
  window.customElements.define('get-involved', GetInvolved);