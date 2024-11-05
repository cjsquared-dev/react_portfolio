import './Navbar.css';

export default function Nav({ links }) {
    return (
        <nav className="navbar navbar-expand-lg navbar-light">
          <div className="container-fluid">
            <div className="collaps navbar-collapse">
              <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                {links.map((link) => link)}
              </ul>
            </div>
          </div>
        </nav>
      );
    }