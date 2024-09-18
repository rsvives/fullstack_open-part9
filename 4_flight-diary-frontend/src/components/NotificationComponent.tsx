import { Notification } from "../types"

function NotificationComponent({message}:Notification){
    return(
      message!='' && <p style={{color:'red',background:'rgba(255,0,0,0.2)',padding:'4px 8px', position:'sticky', top:8,left:0,width:'100%',margin:12}}>{message}</p>
    )
  } 
  export default NotificationComponent