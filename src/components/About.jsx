import React from 'react'
import styles from '../Style.module.css'

function About(){
    return (<div className={styles.about}>
            <h1 className={styles.heading}> About </h1>
            <p className={styles.content}>
                Hello there!    <br/>
                Welcome to my portfolio website.    <br/> <br/>
                I am Devanshu, a budding developer fascinated about technologies. My interest of computers brought me to the journey of wide variety of technologies. In this journey I came across many people colabrated with them, shared knowledge and exprerience. 
                Learning from each other and relying on each other's abilites boosted our team building. All these things made me a team player and enhanced my interpersonal skills.
                Apart from these I have put myself in existing and new technologies. My personal work includes hands on tools like PyCharm, Anaconda, Git, Google Colab, Android Studio, Eclipse, XAAMP and skills in python, C++, Java, HTML, CSS, Javascript, React, NodeJS, MongoDB, SQLite, Oracle and many others.
                <br/> <br/>
                Thanks for visiting
            </p>
    </div>)
}
export default About