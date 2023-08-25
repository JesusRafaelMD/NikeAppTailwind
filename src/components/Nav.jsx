import { headerLogo } from '../assets/images';
import { navLinks } from '../constants/index';
import { hamburger } from '../assets/icons';

export const Nav = () => {
  return (
    <header className='padding-x py-8 absolute z-10 w-full'>
        <nav className='flex justify-between items-center max-container'>
            <a href="/">
                <img src={headerLogo}
                alt="logo"
                width={130}
                height={30}
                />
            </a>
            <ul className='flex-1 flex justify-center items-center gap-16 max-lg:hidden'>
                { navLinks.map((item) => (
                  <li key={item.label} alt={item.alt}>
                    <a href={item.href} className='font-monts errat leading-normal text-lg text-slate-gray '>{item.label}</a>
                  </li>
                )) }
            </ul>
            <div className="max-lg:block">
              <img src= {hamburger}
              alt = "Hamburguer"
              width = {25}
              height = {25}
              />
            </div>
        </nav>
    </header>
  )
}

export default Nav