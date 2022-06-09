import React, {useContext, useEffect, useState} from 'react';
import {URLChatExpertSys} from '../../../envs/apiExpertSys';
import {over} from 'stompjs';
import './chat-styles.css';
import SockJS from 'sockjs-client';
import {Row} from "react-bootstrap";
import {AuthContext} from "../../../hooks/auth/authContext";

export const ChatUser = () => {
    const url = URLChatExpertSys;
    const {user} = useContext(AuthContext);
    const {email} = user;
    const Sock = new SockJS(`${url}/hello`);
    const [tab, setTab] = useState("");
    const [privateChats, setPrivateChats] = useState(new Map());
    const [userData, setUserData] = useState({
        username: email,
        receiverName: "",
        connected: false,
        message: ""
    });
    const stompClient = over(Sock);
    
    const sendMessage = ()=>{
        let chatMessage ={
            senderName: userData.username,
            sendTo: tab,
            content: userData.message,
            status: "MESSAGE"
        }
        
        if (userData.username !== tab){
            privateChats.get(tab).push(chatMessage);
            setPrivateChats(new Map(privateChats));
        }
        stompClient.send("/app/hello", {},JSON.stringify(chatMessage));
        setUserData({...userData, message: ""});
    }
    
    const handlePrivateMessage = (payload) => {
        console.log(payload.body)
        let payloadData = JSON.parse(payload.body);
        if(privateChats.get(payloadData.senderName)){
            privateChats.get(payloadData.senderName).push(payloadData);
            setPrivateChats(new Map(privateChats));
            console.log(privateChats.get(payloadData.senderName));
        }
        else {
            let list = [];
            list.push(payloadData);
            privateChats.set(payloadData.senderName, list);
            setPrivateChats(new Map(privateChats));
            console.log(privateChats.get(payloadData.senderName));
        }
    }
    
    const handleMessage = (e)=>{
        const {value} = e.target
        setUserData({...userData, message: value});
    }
    
    const handlePublicMessage = (payload) => {
        console.log(payload.body)
        let payloadData = JSON.parse(payload.body);
        if(payloadData.status==='JOIN'){
            if(!privateChats.get(payloadData.senderName)){
                let name = payloadData.senderName;
                privateChats.set(name, []);
                setPrivateChats(new Map(privateChats));
            }
        }
    }
    
    const joinChat = () => {
        let chatMessage = {
            senderName: email,
            status: 'JOIN'
        }
        stompClient.send('/app/chat', {}, JSON.stringify(chatMessage));
    }
    
    useEffect(() => {
            stompClient.connect({username: email}, () => {
                console.log('Web Socket is connected');
                stompClient.subscribe("/topic/messages", handlePublicMessage)
                stompClient.subscribe('/users/topic/messages', handlePrivateMessage);
                joinChat();
            });
        }, []
    );
    
    return (
        <>
            <div className="d-flex flex-wrap">
                <Row className="member-list px-3 col-3 pt-4 bg-light">
                    <h4>Users Online</h4>
                    {[...privateChats.keys()].map((name, k)=>{
                            console.log(name)
                            return(
                                <div key={k + "comp"} onClick={()=>setTab(name)} className={tab === name? "active w-100 chat-item mt-2":"inactive w-100 chat-item mt-2"}>
                                    <p className="mx-auto text-center p-0 m-0 mt-2">{name}</p>
                                </div>
                            );
                        }
                    )
                    }
                </Row>
                <div className="col-9 ">
                   <div className="overflow-scroll message-container w-75 mx-auto">
                       {   tab!==""&&
                           [...privateChats.get(tab)].map((chat, index)=>{
                               return(
                                   <div key={index}>
                                       {chat.senderName !== userData.username &&
                                           <div className="d-flex flex-wrap mt-2">
                                               
                                                <div  className="w-75 receive-message rounded px-3">
                                                    <h6 className="text-dark ">{chat.senderName}</h6>
                                                    {chat.content}
                                               </div>
                                           </div>
                                           
                                       }
                                       
                                       {chat.senderName === userData.username &&
                                           <div className="d-flex flex-wrap justify-content-end mt-2">
                                               
                                               <div  className="w-75 text-end  sender-message rounded px-3">
                                                   <h6>{userData.username}</h6>
                                                   {chat.content}
                                               </div>
                                           </div>
                                       }
                                   </div>
                               );
                           })
                       }
                   </div>
                   <div className="container-chat w-75 mx-auto p-2 mt-3">
                       <input type="text" className="d-block w-75 p-2" value={userData.message} onChange={handleMessage}/>
                       <button className="btn btn-primary" onClick={sendMessage}>Enviar mensaje</button>
                   </div>
                </div>
            </div>
        </>
    );
};