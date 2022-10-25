import './components/UserInfo.css';
import IUser from '../../types/IUser';


function UserInfo({user}:{user: IUser}){
    const{
        name, username, email, phone, website
    } = user;
    return(
        <div className="userInfo">
            <div className="userInfo-name">
                <label>Name: {name}</label>
            </div>
            <div className="userInfo-username">
                <label>User Name: {username}</label>
            </div>
            <div className="userInfo-email">
                <label>Email: {email}</label>
            </div>
            <div className="userInfo-phone">
                <label>Phone: {phone}</label>
            </div>
            <div className="userInfo-website">
                <label>WebSite: {website}</label>
            </div>
        </div>
    )
}

export default UserInfo;