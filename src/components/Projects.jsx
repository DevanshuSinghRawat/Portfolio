import './styling/projects.css'

let projects = [
    {
        'name': 'Bus Reservation Web App',
        'desc': `BusRes is a web app built for haslefree booking of bus seats.
                Technologies used: Django stack, python, HTML, CSS, SQLite`,
        'vid': require('../videos/BusRes-recording.mp4'),
        'link': ''
    },
    {
        'name': 'Portfolio website',
        'desc': `A personal portfolio describing myself.
                Technology used: React JS, HTML, CSS` ,
        'vid': '',
        'link': ''
    },
    {
        'name': 'Image carousel',
        'desc': `User interactive image carousel with sliding windows. 
                Technologies used: React JS, HTML, CSS, JSON, API` ,
        'vid': require('../videos/image_carousel_vid.mp4'),
        'link': 'https://devanshusinghrawat.github.io/Slideshow-React'
    },
    {
        'name': 'Credit Risk analysis',
        'desc': `The work analyses and classifies credit risk based on dummy data of a bank.
                Technologies used: Machine Learning, logistic regression, python, data visualization`,
        'vid': '',
        'link': ''
    },
    {
        'name': 'GUI Text Editor',
        'desc': `A GUI desktop application for creating and editing simple text documents
                Provide functionalities like creating new file, editing document, font color, size, theme and saving
                Technologies used: python, tkinter` ,
        'vid': require('../videos/Texteditor_vid.mp4'),
        'link': ''
    },
    {
        'name': 'Image Text Extractor',
        'desc': `Image text extractor is an easy to use application for extracting text out an image. Extracted text will go tto he clipboard.
                Technology used: Python, pyTesseract`,
        'vid': require('../videos/ImageTextExtractor_vid.mp4'),
        'link': ''
    }
]

function Projects(){
    return (
        <div className="projectPanel">
            <div className="subPanel">
                {projects.map((project)=><div className="projectItem">
                    <h3> {project.name} </h3>
                    <div className="projDesc">
                        {project.desc} <br/>
                    </div>
                    <details>
                        <summary>View</summary>
                        <video controls >
                            <source src={project.vid} />
                        </video> <br/>
                    </details>
                    </div>)}
                </div>
        </div>
    )
}
export default Projects