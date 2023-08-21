import axios from "axios";
import { createContext, useEffect, useState } from "react";

export const userContext = createContext({});

export function UserContextProvider({children}){
      const [ user,setUser ] = useState(null)
      const [ ready,setReady ] = useState(false)

      useEffect(()=>{
        async function fetchProfile(){
            try{
                if(!user){
               const res = await axios.get('/profile')
                    setUser(res.data)
                    setReady(true)
            }
            }
            catch(err){
                console.log(err)
            }
        }
        fetchProfile()
      },[user])

      useEffect(() => {
        const getUser = () => {
         axios.get('/auth/login/success')
            .then((response) => {
              if (response.status === 200) return response.json();
              throw new Error("authentication has been failed!");
            })
            .then((resObject) => {
              console.log(resObject.user)
              setUser(resObject.user);
              
            })
            .catch((err) => {
              console.log(err);
            });
        };
        getUser();
      }, []);
   return (
          <userContext.Provider value={{user,setUser,ready}}>
              {children}
          </userContext.Provider>
   );
}