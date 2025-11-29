function Footer() {
  return (
    <footer className="bg-dark text-white py-4 w-100 " style={{position:"absolute", bottom:"5px"}}>
      <div className="container">
        <div className="row align-items-center">

          <div className="col-md-6 text-center text-md-start mb-2 mb-md-0">
            <p className="mb-0">
              &copy; {new Date().getFullYear()} Ankita Batwal. All Rights Reserved.
            </p>
          </div>

          <div className="col-md-6 text-center text-md-end text-light">
            <a
              href="https://www.linkedin.com/in/ankita-batwal"
              target="_blank"
              rel="noreferrer"
              className="text-white me-3"
            >
              <i className="bi bi-linkedin" style={{ fontSize: "1.2rem" }}></i>
            </a>
            <a
              href="https://github.com/ankitabatwal"
              target="_blank"
              rel="noreferrer"
              className="text-white me-3"
            >
              <i className="bi bi-github" style={{ fontSize: "1.2rem" }}></i>
            </a>
            <a
              href="mailto:batwalankita9975@gmail.com"
              className="text-white"
            >
              <i className="bi bi-envelope" style={{ fontSize: "1.2rem" }}></i>
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
