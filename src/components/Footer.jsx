import React from "react";

function Footer() {
  return (
    <div>
      <div className="row">
        <div className="col-md-12">
          <div className="footer p-3 mt-4 text-center bg-dark text-light kltv-ftr pos-rel">
            Developed By : &nbsp;
            <span className="text-warning font-weight-normal">
              Pragati Attri
            </span>
            <div className="pos-abs btm-15px">
              <a
                href="http://www.omdbapi.com/"
                target="_blank"
                rel="noopener noreferrer"
              >
                Source: OMDB
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Footer;
