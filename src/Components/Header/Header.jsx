import Profile from '../../assets/profile.png'
const Header = () => {
    return (
        <header className='flex justify-between items-center border-b-2'>
            <h1 className='mb-2'>Knowledge Cafe</h1>
            <img className='mb-2' src={Profile} alt="" />
        </header>
    );
};

export default Header;