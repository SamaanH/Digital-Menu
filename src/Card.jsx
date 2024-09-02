

function Card(props){
    return(
        <div className="h-[116px] w-full bg-black rounded-2xl relative mb-3">
            <a href="">
            <img src={props.imgSrc} alt="" className="w-full object-cover h-[116px] rounded-2xl opacity-60"/>
            <div className="text-white absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 text-xl tracking-wider">
                <h1 className="[text-shadow:_0_2px_3px_rgb(0_0_0_/_46%)]">{props.title}</h1>
            </div>
            </a>
        </div>
    );
}

export default Card;