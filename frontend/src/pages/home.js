import '../styles/home.css';
import img from '../image/img.jpg';
const home = () => {
    return (
        <>
        <div className="nav">
            <div className="logo">
                <img src='https://img.icons8.com/?size=1x&id=41414&format=png' alt = " " />
                <h1>Reader's Den</h1>
            </div>
            <div className="navbar">
                <ul>
                    <li><a href='/'>Home</a></li>
                    <li><a href='/'>About</a></li>
                    <li><a href='/'>Book List</a></li>
                    <li><a href='/'>Contact Us</a></li>
                    <li><img src="https://cdn-icons-png.flaticon.com/128/1077/1077114.png" alt="" /></li>
                    
                </ul>
            </div>
        </div>
        <div className="hero">
            <img src={img} alt=" " />
        </div>
        <div className="process">
            <div className="item">

            </div>
        </div>
      
      </>
    );
  }
  
  export default home;