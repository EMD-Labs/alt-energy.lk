import React from 'react'
import * as styles from '../../styles/contact/textContent.module.scss'
import {BsTelephoneFill,BsGlobe2} from 'react-icons/bs'
import {FaMapMarkerAlt} from 'react-icons/fa'
import {MdEmail} from 'react-icons/md'
import ContactInfo from '../about/ContactInfo'


const TextContent = () => {

const contactDetails = [
    {
        title:"telephone",
        value:"+94 65222 3443",
        icon:<BsTelephoneFill/>
    },
    {
        title:"website",
        value:"https://emd-labs.com",
        icon:<BsGlobe2/>
    },
    {
        title:"email",
        value:"info@emd-labs.com",
        icon:<MdEmail/>
    },
    {
        title:"Address",
        value:"+94 65222 3443",
        icon:<FaMapMarkerAlt/>
    }
]

  return (
    <div className={styles.contact} id="contact">
        <div className={styles.container}>
            <div className={styles.toptext}>
                <h3>ARE YOU INTERESTED IN TACKLING</h3>
                <h3>ENERGY CRISIS WITH US?</h3>
            </div>
            <div className={styles.btn}>
                <button>contact us now!</button>
            </div>
            <div className={styles.middle}>
                <p>For Information, Please contact via:</p>
            </div>
            <div className={styles.contactinfo}>
                {
                    contactDetails.map(i=><ContactInfo key={i.title} title={i.title} icon={i.icon} value={i.value}/>)
                }
            </div>
        </div>
    </div>
  )
}

export default TextContent