import "./Footer.css";

const Footer = () => {
    return (
        <div className="footer-div">
            <div className="footer-column">
            {/* Märken */}
                <h3>MÄRKEN</h3>
                <a href="">Länktext</a>
                <a href="">Länktext</a>
                <a href="">Länktext</a>
                <a href="">Länktext</a>
            </div>

            {/* Kategorier */}
            <div className="footer-column">
                <h3>KATEGORIER</h3>
                <a href="">Länktext</a>
                <a href="">Länktext</a>
                <a href="">Länktext</a>
                <a href="">Länktext</a>
            </div>

            {/* Information */}
            <div className="footer-column">
                <h3>INFORMATION</h3>
                <a href="">Kontakta oss</a>
                <a href="">Om oss</a>
                <a href="">Användarvillkor</a>
                <a href="">Köpevillkor</a>
            </div>
            {/* Nyhetsbrev */}
            <div className="footer-column newsletter">
                <h3>NYHETSBREV</h3>
                <p>Prenumera på vårt nyhetsbrev för att få information om kommande kampanjer och erbjudanden först av alla!</p>
                <div>
                    <input placeholder="Skriv din e-postadress"></input>
                    <button>Prenumerera</button>
                </div>
            </div>
        </div>
    ) }

    export default Footer;
