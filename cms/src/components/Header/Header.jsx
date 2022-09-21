
import { useNavigate } from 'react-router-dom'
import { useContext } from "react";
import { JwtContext } from "../../contexts/jwtContext";
import "./Header.css"

const Header = () => {


    const { user, logout } = useContext(JwtContext);
    let navigate = useNavigate();

    return (

        <header>
            <div className="logo-header">
                <img src="https://images-ext-2.discordapp.net/external/t7vNo_dywzrk1VVlZT6oneCqqY483osykxS5e1Qjyi0/https/assets.simpleviewinc.com/simpleview/image/upload/crm/kelowna/Carpe-Diem-Tours---Logo_754E7345-5056-A36A-0BFA42F524E2CE02-754e71a35056a36_754e73b1-5056-a36a-0b8a12e32b9f1131.jpg?width=484&height=488" alt="logo" />
            </div>

            <div className='button-header'>
                {user ? (< button onClick={() => logout() & navigate("/")} className='logout'>Logout</button>) : (undefined)}
            </div>


        </header>


    );
};

export default Header;
