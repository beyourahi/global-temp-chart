import { Container, Navbar } from "react-bootstrap";
import { FaGlobe } from "react-icons/fa";

const Navvy = () => (
    <Navbar bg="dark" variant="dark" className="navvy">
        <Container>
            <a
                href="/"
                className="brand d-flex justify-content-between align-items-center text-decoration-none"
            >
                <FaGlobe className="brand-icon" />

                <h3 className="brand-header ml-2 mb-0">
                    Global Average Temperature
                </h3>
            </a>
        </Container>
    </Navbar>
);

export default Navvy;
