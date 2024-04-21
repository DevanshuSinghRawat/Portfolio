import React from 'react'
import styles from '../Style.module.css'
import pic from '../images/pic.png'

function Header(){
    let name="Devanshu Singh Rawat"
    return (<>
        <div className={styles.header}>
            <div className={styles.name}>
                <span> {name} </span>
            </div>
            <div className={styles.pic_container}>
                <img className={styles.pic} src={pic} />
            </div>
        </div>
    </>)
}
export default Header