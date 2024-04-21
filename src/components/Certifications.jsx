import "./styling/certifications.css"

let certificates =  [
    {
        'name': 'EY Fullstack Web Development Internship ',
        'cert_img': require("../images/edunet_intern.png")
    }, 
    {
        'name': 'Introduction to AI',
        'cert_img': require("../images/Intro_AI.png")
    }, 
    {
        'name': 'Exploring Machine Learning',
        'cert_img': require("../images/exploratory_ML.png")
    }, 
    {
        'name': 'Cyber Security',
        'cert_img': require("../images/cybersecurity_essentials.png")
    }, 
    {
        'name': 'HTML and CSS',
        'cert_img': require("../images/HTML_CSS.jpg")
    }, 
    {
        'name': 'JavaScript Certificate',
        'cert_img': require("../images/JS_certificate.jpg")
    }, 
    {
        'name': 'Computer Vision',
        'cert_img': require("../images/computer_vision.png")
    }, 
    {
        'name': 'Data Visualization',
        'cert_img': require("../images/data_visualization.png")
    }, 
    {
        'name': 'Techwizard participation',
        'cert_img': require("../images/Techwizard2.jpeg")
    }, 
    {
        'name': 'TCS Youth Employment Program',
        'cert_img': require("../images/TCS_YEP.png")
    }
]

export default function Certifications(){
    return (    
        <div className="certPanel">
            <div className="subCertPanel">
                {certificates.map((cert)=><div className="certItem">
                    <details>
                        <summary> {cert.name} </summary>
                        <center>
                            <img src={cert.cert_img} alt={cert.name} />
                        </center>
                    </details>
                    </div>)}
                </div>
        </div>
    )
}