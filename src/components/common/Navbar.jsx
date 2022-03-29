import { Link } from 'gatsby'
import React,{useState} from 'react'
import * as styles from '../../styles/navbar.module.scss'
import { BiMenu } from 'react-icons/bi'
import { GrClose } from 'react-icons/gr'

const Navbar = () => {

     const [showMenu, setShowMenu] = useState(false)

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
            <ul className={showMenu ? styles.showmenu : styles.hidemenu}> 
             <div className={styles.closeBtn} onClick={() => setShowMenu(!showMenu)}>
                    <GrClose/>
                </div>
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
        <div className={styles.menuBtn} >
            <BiMenu onClick={() => setShowMenu(!showMenu)}/>
        </div>
    </div>
  )
}

export default Navbar