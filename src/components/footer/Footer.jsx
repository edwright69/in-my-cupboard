import './footer.css';

const Footer = () => {
    return (
        <footer className="mt-3">
            <div>
                <a href="http://www.duckduckwebdesign.co.uk">DuckDuckWebDesign</a>
                <span>&nbsp;&copy; 2020.</span>
            </div>
            <div className="ml-auto">
                <span>Powered by&nbsp;</span>
                <a href="http://www.duckduckwebdesign.co.uk">Quacks</a>
            </div>
        </footer>
    );
};

export default Footer;
