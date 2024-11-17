import './App.css';
import gptLogo from './assets/chatgpt.svg';
import addBtn from './assets/add-30.png';
import msgIcon from './assets/message.svg';
import home from './assets/home.svg';
import saved from './assets/bookmark.svg';
import rocket from './assets/rocket.svg';
import sendBtn from './assets/send.svg';
import userIcon from './assets/user-icon.png';
import gptImgLogo from './assets/chatgptLogo.svg';
import {sendMsgToOpenAi} from './openai';
import {useState} from 'react';


function App() {

  const[input,setInput]=useState("");
  const [messages,setMessages]=useState([{
    text:"HIIII " ,
    isBot: true,
  }])
  const handleSend= async()=>{
    const res=await sendMsgToOpenAi(input);
    setMessages([
      ...messages,
      {text:input,isBot:false},
      {text:res,isBot:true}
    ])
    
  }

  
  return (
    <div className="App">
      <div class="sidebar">
        <div class="upperside">
          <div class="uppersideTop">
            <img src={gptLogo} alt="" class="logo"/><span class="brand">CloneGpt</span></div>
           <button class="midBtn"> <img src={addBtn} alt="" class="addBtn"/>New Chat</button>
           <div class="uppersideBottom">
            <button class="query"><img src={msgIcon} alt=""/>???</button>
            <button class="query"><img src={msgIcon} alt=""/>???</button>
           </div>        
          
        </div>
        <div class="lowerside">
          <div class="listItems"><img src={home} alt="" class="listItemsImg"/>Home</div>
          <div class="listItems"><img src={saved} alt="" class="listItemsImg"/>Save</div>
          <div class="listItems"><img src={rocket} alt="" class="listItemsImg"/>Upgrade</div>
      

        </div>
      </div>

      <div class="main">
        <div class="chats">
          <div class="chat">
            <img className="chatImg"src={userIcon} alt=""/><p class="text">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Dolorem velit distinctio blanditiis obcaecati odio, rerum beatae doloribus maxime deserunt! Eum.</p>
          </div>
          <div class="chat bot">
            <img className="chatImg" src={gptImgLogo} alt=""/><p class="text">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Blanditiis sequi ad exercitationem sapiente? Sapiente neque culpa impedit minus magni aspernatur officiis dolores ab, perferendis quas repellendus ea quo, nisi nostrum laborum dolorem accusantium vero soluta nobis provident exercitationem tempora laboriosam! Repellat odio ea blanditiis delectus rerum inventore placeat laborum sequi libero, aperiam nesciunt unde officiis cupiditate ullam non maxime suscipit molestiae magni accusamus? Fugiat sequi velit amet quidem minus deleniti blanditiis ad magni voluptates aliquam nisi, cupiditate illum? Eum ipsa porro accusamus eos aspernatur beatae dolor perspiciatis praesentium animi ea totam, sint placeat fugiat sed, nihil omnis pariatur deserunt eveniet.</p>
          </div>
          {messages.map((message,i)=>{
            <div className={message.isBot?"chat bot":"chat"}>
            <img className="chatImg" src={message.isBot?gptImgLogo:userIcon} alt=""/><p class="text">{message.text}</p>
          </div>
          })}
        </div>
        <div class="chatFooter">
          <div class="inp">
            <input type="text" placeholder="Enter text" value={input} onChange={(e)=>{setInput(e.target.value)}}/><button class="send" onClick={handleSend}><img src={sendBtn} alt=""/></button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
