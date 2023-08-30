class Footer extends HTMLElement {
  constructor() {
    super();
  }

  connectedCallback() {
    this.innerHTML = `
      <footer class="lg:flex lg:gap-20 bg-gray-100 lg:px-20 lg:py-12">
      <div>
        <h1 class="font-semibold text-lg">Hexiter</h1>
        <p class="my-4">
          We're the Best Gift card agency in <br />the country with good
          customer <br />
          assistance and good rate.
        </p>
        <div class="lg:flex lg:items-center lg:gap-8">
          <i class="fa-brands fa-instagram"></i>
          <i class="fa-brands fa-linkedin-in"></i>
          <i class="fa-brands fa-facebook-f"></i>
          <i class="fa-brands fa-twitter"></i>
        </div>
      </div>
      <div class="flex gap-12">
        <div>
          <h1 class="font-semibold mb-6">Contact Info</h1>
          <div class="lg:flex lg:gap-3 lg:mb-4">
            <i class="fa-solid fa-location-dot text-red mt-2"></i>
            <div>
              <p>Address:</p>
              <p>123 main Street, apt 48 San Diago, CA, 99311</p>
            </div>
          </div>
          <div class="lg:flex lg:gap-3 lg:mb-4">
            <i class="fa-solid fa-phone text-red mt-2"></i>
            <div>
              <p>Phone:</p>
              <p>+2347065847323</p>
            </div>
          </div>
          <div class="lg:flex lg:gap-3 lg:mb-4">
            <i class="fa-solid fa-envelope text-red mt-2"></i>
            <div>
              <p>Email:</p>
              <p>Admin@Hexiter.com</p>
            </div>
          </div>
        </div>
        <div>
          <h1 class="font-semibold mb-6">Quick Links</h1>
          <ul>
            <li class="lg:mb-4">Service</li>
            <li class="lg:mb-4">Rate</li>
            <li class="lg:mb-4">Blog</li>
            <li class="lg:mb-4">Privacy Policy</li>
            <li class="lg:mb-4 text-sm">Terms & Conditions</li>
          </ul>
        </div>
        <div>
          <h1 class="font-semibold mb-6">Newsletter</h1>
          <p>Get the latest trends updates right at your inbox</p>
          <div class="flex flex-col">
            <label for="">Email</label>
            <input
              type="email"
              name=""
              id=""
              placeholder="input your EmaIL Address"
              class="border h-8 rounded-md focus:outline-blue-500 mt-2 p-4"
            />
          </div>
          <div class="flex justify-end">
            <button
              class="py-2 px-8 mt-6 flex-end border-gray-400 rounded-lg bg-red font-semibold text-center text-white"
            >
              Subcribe
            </button>
          </div>
        </div>
      </div>
    </footer>
        `;
  }
}

customElements.define("footer-component", Footer);
