import { useEffect,useState } from "react"

const TimerComponent = ()=>{
    const [count,setCounter] = useState(0)
 useEffect(()=>{
const timerId = setInterval(()=>{
setCounter((prevCount)=>prevCount+1)
},1000)
return()=>{
    clearInterval(timerId)
}
 },[])
 return(
    <>
    <div>

    </div>
    <div>Timer Count:{count}</div>
    </>
 )
}
export default TimerComponent