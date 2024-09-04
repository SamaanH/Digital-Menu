import HeroBg from "./assets/Restaurant.jpg";
import Card from "./Card";
import Breakfast from "./assets/Breakfast.jpg"
import hotMeal from "./assets/HotMeal.jpg"
import Salad from "./assets/Salad.jpg"
import Dessert from "./assets/desert.jpg"

function DigitalMenu() {
  return (
    <>
      <div className="flex justify-center items-center">
        <div className="w-full  lg:w-3/4">
          <div className="relative h-28">
            <img src={HeroBg} alt="" className="h-28 w-full object-cover" />
            
             <span id="LangSelector" className="absolute top-16 right-3 text-[11px] ">
                <select name="" id="" className="rounded-[4px] pr-6 py-[1px] text-gray-800 outline-none">
                    <option value="kurdish">Kurdish</option>
                    <option value="english">English</option>
                    <option value="arabic">Arabic</option>
                </select>
            </span>
    { /* ----------MAIN-------- */ }
            <div id="Main" className="rounded-2xl bg-white w-full py-6 px-[10px] absolute top-[87px] flex flex-col ">
              <h1 className="sm:text-2xl text-3xl mb-3">OddMenu</h1>

            <div id="Location&Phone" className="sm:text-[9px] text-[13px] text-gray-600 font-[500] flex items-center">
                <div id="Location" className="flex items-center justify-center">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke-width="1.5"
                    stroke="currentColor"
                    class="size-4"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      d="M15 10.5a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z"
                    />
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1 1 15 0Z"
                    />
                  </svg>
                  <a href="">Tanahi, Duhok, Kurdistan</a>
                </div>

                <div id="PhoneNum" className="flex ml-4 items-center justify-center">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke-width="1.5"
                    stroke="currentColor"
                    class="size-4 "
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 0 0 2.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 0 1-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 0 0-1.091-.852H4.5A2.25 2.25 0 0 0 2.25 4.5v2.25Z"
                    />
                  </svg>
                  <a href="">750-xxxxxxx</a>
                </div>

              </div>

              <article id="Paragraph">
                <p className="sm:text-[9px] text-[12px] text-gray-600 font-[400] my-2">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Cumque corporis repellat suscipit pariatur ut, animi dolor sed tenetur saepe vel quaerat quidem beatae temporibus accusantium veniam doloribus iste repellendus ea!</p>
              </article>

              <div id="Buttons">
                <button className="bg-[#bc9854] text-white sm:text-[11px] text-[15px] font-semibold rounded-2xl px-2 py-[3px]">Main menu</button>
                <button className="border-2 border-[#bc9854] text-[#bc9854] sm:text-[11px] text-[15px] font-bold rounded-2xl px-2 py-[3px] ml-2">Bar</button>
              </div>

              <div id="SearchBox" className="bg-gray-200 rounded-full flex items-center sm:h-auto h-8 my-5 py-[5px] sm:py-[3px]">
                <input type="text" className="bg-transparent sm:text-[9px] text-[12px] pl-3 w-full py-1 outline-none" placeholder="Search"/>
                <button className="bg-white h-full px-1 rounded-full mr-1">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-4">
                    <path stroke-linecap="round" stroke-linejoin="round" d="m21 21-5.197-5.197m0 0A7.5 7.5 0 1 0 5.196 5.196a7.5 7.5 0 0 0 10.607 10.607Z" />
                    </svg>
                </button>
              </div>

             <Card title="BREAKFASTS" imgSrc={Breakfast}/>
             <Card title="HOT MEALS" imgSrc={hotMeal}/>
             <Card title="SALADS" imgSrc={Salad}/>
             <Card title="DESSERTS" imgSrc={Dessert}/>
          

            </div>
            
          </div>
        </div>
      </div>
    </>
  );
}

export default DigitalMenu;
