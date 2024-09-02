import { useEffect, useState } from "react";


function DigitalClock(){

    const [time,setTime] = useState(new Date());

    useEffect(()=>{
        const intervalId = setInterval(()=>{
            setTime(new Date())
        },1000);

        return ()=>{
            clearInterval(intervalId);
        }
    },[]);

    function formatTime(){
        let hours = time.getHours();
        let minutes = time.getMinutes();
        let seconds = time.getSeconds();
        const meridiem = hours >=12? "PM":"AM";

        hours = hours % 12 || 12;
        return `${padZero(hours)}:${padZero(minutes)}:${padZero(seconds)} ${meridiem}`
    }

    function padZero(time){
       return String(time).padStart(2,'0');
    }

    return(
        <>
            <div className="backdrop-blur-sm  text-white text-8xl font-bold shadow-md w-screen text-center">
                <span>{formatTime()}</span>
            </div>
        </>
    )

}
export default DigitalClock;