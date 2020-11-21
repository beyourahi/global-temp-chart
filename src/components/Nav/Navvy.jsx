import { Container, Navbar } from "react-bootstrap";
import { FaGlobe } from "react-icons/fa";
import { brandStyle, brandIcon, brandHeader } from "../../styles/navvyStyles";

//* Navbar component
const Navvy = () => (
    <Navbar bg="dark" variant="dark" className="navvy">
        <Container>
            <a href="/" className={brandStyle}>
                {/*//? nav icon */}
                <FaGlobe className={brandIcon} />

                {/*//? nav header */}
                <h3 className={brandHeader}>Global Average Temperature</h3>
            </a>
        </Container>
    </Navbar>
);

export default Navvy;
