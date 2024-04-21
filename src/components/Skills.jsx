import './styling/skill.css'

function Skills(){
    let skills = ['C', 'C++', 'Java', 'Python', 'SQL', 'Oracle', 'MongoDB', 'HTML', 'CSS', 'Javascrit', 'jQuery', 'React', 'NodeJS', 'Django', 'Data Analysis', 'AI', 'ML']
    return <div className="skill-cont">
        {skills.map(( skill)=>
            <div className="skillbox"> {skill} </div>
        )}
    </div>
}
export default Skills