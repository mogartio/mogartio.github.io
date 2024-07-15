import '.././styles/barraLinksStyle.css'
import githubLogo from './../img/githubFin.svg'
import linkedInLogo from './../img/linkedin.svg'
import cvLogo from './../img/cvLogo.svg'
import cvPDF from './../img/CV.pdf'



export default function BarraLinks() {
    return(
        <div className="barraContainer">
            <a className='github'  href="https://github.com/mogartio" target="_blank" rel="noopener noreferrer">
                <img className='github' src={githubLogo} alt="GITHUB" />
            </a>

            <a className='linkedin'  href="https://www.linkedin.com/in/mart%C3%ADn-osan-64bb1327b/" target="_blank" rel="noopener noreferrer">
                <img className='linkedin' src={linkedInLogo} alt="LINKEDIN" />
            </a>

            <a className='cv'  href={cvPDF} download="CV Martín Osan" target="_blank" rel="noopener noreferrer">
                <img className='cv' src={cvLogo} alt="CV" />
            </a>
        </div>
    );
}
