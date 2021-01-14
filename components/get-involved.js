// This is just the arrow icons
class GetInvolved extends window.HTMLElement {
    connectedCallback () {
      const { classPrefix, classList } = this.dataset;
      this.innerHTML = `<div class="section-understated p-5" id="get-involved-sec">
      <div class="container">
          <div class="row justify-content-center">
              <div class="col-md-8 mx-auto">
                 
                      <h2 class="text-center h2 p-4 m-b">How to Get Involved</h2>
                      <p class="lead">We are actively looking for people to contribute. Here’s how you can help:</p>
                      <ol stayle="font-weight:300">
                      <li>Review the current <a href="https://ca-code-works.github.io/Vision-2023/challenge/">challenges</a> we are looking to tackle.</li>
                      <li>Provide your input on challenges and your interest in being part of a challenge team.</li>
                      <li>Our team will follow up in the coming weeks to better understand how you can help</li>
                      </ol>
                      <div class="text-center">
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