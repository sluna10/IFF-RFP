import navStyles from '../styles/Nav.module.css'
import Link from 'next/link'
import Image from 'next/image'

const Nav = () => {

    return (
        <nav className={navStyles.nav}>
            <div className='logo'>
                <Image src='/navLogo.png' width={90} height={90} />
            </div>
            <ul>
                <li>
                    <Link href='/'>Home</Link>
                </li>
                <li>
                    <Link href='/Directory'>Directory</Link>
                </li>
                <li>
                    <Link href='/Services'>Services</Link>
                </li>
                <li>
                    <Link href='/Jobs'>Jobs</Link>
                </li>

                <li>
                    <Link href='/Feedback'>Feedback</Link>
                </li>
            </ul>
        </nav>
    )
}

export default Nav;