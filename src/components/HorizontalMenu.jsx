// HorizontalMenu.js
import '../App.css';
import carta from '../assets/images/icons/carta.webp';
import perfil from '../assets/images/icons/perfil.png';
import logo from '../assets/images/icons/logo.png';

export const HorizontalMenu = () => {
    return (
        <header className="w-full h-16 bg-gray-600 text-white flex items-center justify-between">
            <ul className=' flex items-center'>
                <li className='inline-block mx-2'>
                    <img src={logo} alt="Logo" width='60px' />
                </li>
            </ul>
            <div className='flex items-center'>
                <input type="text" placeholder="Buscar" className="mx-auto w-96" />
            </div>
            <ul className='flex items-center '>
                <li className='inline-block p-5 px-8 hover:bg-slate-500 '>
                    <button className="premium-btn">Premium</button>
                </li>
                <li className='inline-block p-5 px-8 hover:bg-slate-500'>
                    <img src={carta} alt="" width='40px' />                    
                </li>
                <li className='inline-block p-3 px-8 hover:bg-slate-500'>
                    <img src={perfil} alt="" width='40px' />
                </li>
            </ul>
        </header>
    );
};


