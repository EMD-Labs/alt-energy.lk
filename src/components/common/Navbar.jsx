import { Link } from 'gatsby'
import React from 'react'
import * as styles from '../../styles/navbar.module.scss'

const Navbar = () => {
     const links = [
         {name:"home",slug:'/'},
        {name:"about",slug:"/#about"},
        {name:"projects",slug:"/projects"},
        {name:"products",slug:"/products"},
        {name:"contact us", slug:"/#contact"},
    ]
  return (
    <div className={styles.navbar}>
        <div className={styles.logo}>
            <h2>Alt Energy.</h2>
        </div>
        <div  className={styles.navlinks}>
            <ul className={styles.navmenu}> 
                {
                    links.map(l=><li key={l.name}>
                        <Link to={l.slug}  activeStyle={{color:"#f27521",fontWeight:600}}>
                        {l.name}
                        </Link>
                    </li>)
                }
            </ul>
        </div>
        <div className={styles.btn}>
            <button>Join Us</button>
        </div>
    </div>
  )
}

export default Navbar