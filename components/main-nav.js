// This is just the arrow icons
class MainNav extends window.HTMLElement {
    connectedCallback () {
      const { classPrefix, classList } = this.dataset;
      this.innerHTML = `<nav id="navigation" class="main-navigation singlelevel auto-highlight no-icons">
      <ul id="nav_list" class="top-level-nav">
      <li class="nav-item">
      <a href="/" class="first-level-link">Home</a>
  </li>
      <li class="nav-item">
      <a href="/principles/" class="first-level-link">Our Principles</a>
  </li>
      <li class="nav-item">
          <a href="/goals/" class="first-level-link">Our Goals</a>
      </li>
      <li class="nav-item">
      <a href="https://ca-code-works.github.io/Vision-2023/challenge/" class="first-level-link">Explore Challenges</a>
  </li>
      <li class="nav-item">
          <a href="/next/" class="first-level-link">What's Next</a>
      </li>
      
  </ul></nav>`;
    }
  
  }
  window.customElements.define('main-nav', MainNav);