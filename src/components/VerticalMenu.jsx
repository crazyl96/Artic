// VerticalMenu.js
import '../App.css';
import  ham  from '../assets/images/icons/ham.png';
import hash from '../assets/images/icons/hash.png';
import home from '../assets/images/icons/home.png';
import eye from '../assets/images/icons/ojo.png';
import fire from '../assets/images/icons/fuego.png';

export const VerticalMenu = () => {
    return (
        <div className=" h-full bg-gray-800 text-white ">
          <ul className='p-0 m-0 list-none'>
                <li className='p-3 hover:bg-slate-500'>
                    <a href="#">
                        <img src={ham} alt="uwu" width='40px' />
                    </a>
                </li>
                <li className='p-3 hover:bg-slate-500'>
                    <a href="#">
                        <img src={home} alt="Home" width='40px' />
                    </a>
                </li>
                <li className='p-3 hover:bg-slate-500'>
                    <a href="#">
                        <img src={hash} alt="#" width='40px' />
                    </a>
                </li>
                <li className='p-3 hover:bg-slate-500'>
                    <a href="#">
                        <img src={eye} alt="Eye" width='40px' />
                    </a>
                </li>
                <li className='p-3 hover:bg-slate-500'>
                    <a href="#">
                        <img src={fire} alt="Fire" width='40px' />
                    </a>
                </li>
          </ul>
        </div>
      );
};
