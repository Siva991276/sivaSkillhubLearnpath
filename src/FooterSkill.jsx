import logo from "../src/All Images/Logo133.jpeg";

function Footer() {
  return (
    <div>
      <footer class="footer">
        <div class="container">
          <div className="row">
            <div className="col-12 col-md-3"></div>
            <div class="row pb-4">
              <div class="col-lg-3 col-md-6 text-white">
                <img src={logo} alt="img" class="img-fluid w-50 footer-img" />
                <p class="para1 my-2">
                  Powered by <span className="text-primary">Instacks</span>
                </p>
                <p class="" style={{ fontSize: "13px" }}>
                  Leading Assessment Provider in inde
                </p>

                <div class="col-lg-4 col-md-4 text-white d-flex flex-row">
                  <i class="fa-brands fa-linkedin socail p-2"></i>
                  <i class="fa-brands fa-instagram socail p-2 "></i>
                  <i class="fa-brands fa-facebook socail p-2 "></i>
                  <i class="fa-brands fa-twitter socail p-2 "></i>
                </div>
              </div>
              <div class="col-lg-3 col-md-6 text-white">
                <h3 class="mt-4 my-3">Company</h3>
                <div class="my-2">
                  <i class="fa-solid fa-angle-right"></i>
                  <span>About us</span>
                </div>
                <div class="my-2">
                  <i class="fa-solid fa-angle-right"></i>{" "}
                  <span>3 Services</span>
                </div>
                <div class="my-2">
                  <i class="fa-solid fa-angle-right"></i>{" "}
                  <span>Terms and Conditions</span>
                </div>
                <div class="my-2">
                  <i class="fa-solid fa-angle-right"></i> <span>Contact </span>
                </div>
              </div>
              <div class="col-lg-3 col-md-6 text-white">
                <h3 class="mt-4 my-3">Usefull Links</h3>
                <div class="my-2">
                  <i class="fa-solid fa-angle-right"></i>{" "}
                  <span>Assessments</span>
                </div>
                <div class="my-2">
                  <i class="fa-solid fa-angle-right"></i> <span>Courses</span>
                </div>
              </div>
              <div class="col-lg-3 col-md-6 text-white mt-5">
                <div class="my-2">
                  <span>2023 instacks</span>
                </div>
                <div class="my-2">
                  <span style={{ fontSize: "13px" }}>
                    A product of RVS Education PVT LTD
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
export default Footer;
