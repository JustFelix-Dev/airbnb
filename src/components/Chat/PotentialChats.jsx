import React, { useContext } from 'react'
import { ChatContext } from '../../ContextHook/chatContext';
import { userContext } from '../../ContextHook/userContext';

const PotentialChats = () => {
    const {user} = useContext(userContext);
    const {potentialChats,createChat,onlineUsers} = useContext(ChatContext);
  return (
       <>
           
         <div className="flex gap-1 mb-2 ml-2">
            {potentialChats.map((support,index)=>{
                return (
                  <>
                    <div className='support-services'><img src="/images/support-services.png" alt="icon" height={30} width={30} /></div>
                <div className=" potential-support cursor-pointer bg-primary text-white py-1 px-4 rounded-lg relative" key={index} onClick={()=>createChat(user._id,support._id)}>
                    {support.name}
                    <span className={ onlineUsers?.some((user)=> user?.userId === support._id) ? `inline-block h-[8px] w-[8px] rounded-full bg-green-400 absolute -top-[3px] 
                    -right-[3px] z-2` : ""}></span>
                 </div>
                 </>
                      )
            })}
         </div>
       </>
  )
}

export default PotentialChats;
