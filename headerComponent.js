class Header extends HTMLElement {
  constructor() {
    super();
  }

  connectedCallback() {
    this.innerHTML = `
      <nav
      class="w-full lg:flex lg:justify-between lg:shadow-sm lg:px-24 lg:py-4 lg:items-center"
      >
      <div>
        <h1 class="font-semibold text-lg">Hexiter</h1>
      </div>
      <ul class="flex gap-4 items-center font-semibold">
        <li><a href="#" class="lg:focus-bg-[#FF1D1D]">Home</a></li>
        <li><a href="#">Services</a></li>
        <li><a href="#">Blog</a></li>
        <li><a href="#">Rates</a></li>
      </ul>
      <div>
        <button
          class="py-2 px-8 border border-gray-400 rounded-lg bg-transparent font-semibold text-center"
        >
          Login
        </button>
        <button
          class="py-2 px-8 border-gray-400 rounded-lg bg-red font-semibold text-center text-white"
        >
          Sign up
        </button>
      </div>
      </nav>
      `;
  }
}

customElements.define("header-component", Header);
