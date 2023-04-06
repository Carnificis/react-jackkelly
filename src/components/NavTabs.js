<nav class="navbar navbar-expand-lg bg-body-tertiary">
  <div class="container-fluid">
    <a class="navbar-brand" href="">
      Jack Kelly
    </a>
    <button
      class="navbar-toggler"
      type="button"
      data-bs-toggle="collapse"
      data-bs-target="#navbarSupportedContent"
      aria-controls="navbarSupportedContent"
      aria-expanded="false"
      aria-label="Toggle navigation"
    >
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="navbarSupportedContent">
      <ul class="navbar-nav me-auto mb-2 mb-lg-0">
        <li class="nav-item">
          <a
            class="nav-link active"
            aria-current="page"
            onClick={() => handlePageChange("Home")}
            href="/home"
          >
            Home
          </a>
        </li>
        <li class="nav-item">
          <a
            onClick={() => handlePageChange("About")}
            class="nav-link"
            href="/about"
          >
            About Me
          </a>
        </li>
        <li class="nav-item">
          <a
            onClick={() => handlePageChange("Portfolio")}
            class="nav-link"
            href="/portfolio"
          >
            Protfolio
          </a>
        </li>
        <li class="nav-item">
          <a
            onClick={() => handlePageChange("Resume")}
            class="nav-link"
            href="/resume"
          >
            Resume
          </a>
        </li>
        <li class="nav-item">
          <a
            onClick={() => handlePageChange("Contact")}
            class="nav-link"
            href="/contact"
          >
            Contact Me
          </a>
        </li>
        <li class="nav-item dropdown">
          <a
            class="nav-link dropdown-toggle"
            href="#"
            role="button"
            data-bs-toggle="dropdown"
            aria-expanded="false"
          >
            Dropdown
          </a>
          <ul class="dropdown-menu">
            <li>
              <a class="dropdown-item" href="#">
                Github
              </a>
            </li>
            <li>
              <a class="dropdown-item" href="#">
                Linked In
              </a>
            </li>
            <li>
              <hr class="dropdown-divider" />
            </li>
            <li>
              <a
                onClick={() => handlePageChange("Resume")}
                class="dropdown-item"
                href="#"
              >
                Something else here
              </a>
            </li>
          </ul>
        </li>
      </ul>
    </div>
  </div>
</nav>;
