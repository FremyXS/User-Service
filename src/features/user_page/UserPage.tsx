import IUser from '../../types/IUser';
import UserService from '../../services/UserService'
import { useQuery} from "react-query";
import { useState, useEffect } from 'react';
import UserInfo from '../user_info/UserInfo';
import { useParams } from 'react-router-dom';
import './components/UserPage.css';
import '../user_info/components/UserInfo.css';

function UserPage(): JSX.Element{
    const [getResult, setGetResult] = useState<IUser[] | null >(null);
    const [id, setId] = useState(useParams().id);
    
    const { isLoading: isLoadingUsers, refetch: getAllUser } = useQuery<IUser[], Error>(
        "USERS-CACHE",
        async () => {
          return await UserService.findAll();
        },
        {
          enabled: false,
          onSuccess: (res) => {
            setGetResult(res);
          },
          onError: (err: any) => {
            // setGetResult(fortmatResponse(err.response?.data || err));
          },
        }
      );
      const { isLoading: isLoadingUser, refetch: getUserById } = useQuery<IUser, Error>(
        "USER-CACHE",
        async () => {
          return await UserService.findById(id);
        },
        {
          enabled: false,
          retry: 1,
          onSuccess: (res) => {
            setGetResult([res]);
          },
          onError: (err: any) => {
            // setGetResult(fortmatResponse(err.response?.data || err));
          },
        }
      );

      useEffect(()=>{
        try {
          if(id){
            getUserById();
          }
          else{
            getAllUser();
          }
        } catch (err) {
        //   setGetResult(fortmatResponse(err));
        }        
      })
      return(        
        <div className='main'>
            <div className='userPage'>
              {getResult &&(
              getResult.map(el => (
                <UserInfo key={el.id}
                user={el}
              />
              ))
            )}          
          </div>
        </div>
      )
}

export default UserPage;

