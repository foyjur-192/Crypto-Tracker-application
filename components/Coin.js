import Link from "next/link";


const Coin = ({name, price,symbol,marketCap,volume,image,priceChange,id}) => {
    return (
   <Link href='/coin/[id]' as={`/coin/${id}`}>
    <a href="">
        <div className=" ">
        <section class="text-gray-600 body-font bg-gray-900 ">
        <div class="container   mx-auto shadow  ">
          <div class="grid grid-cols-6 py-5 text-center hover:bg-gray-700">
            <div class="  py-2 w-full text-center px-5 ">
            <div class="flex items-center space-x-3">
            <div class="avatar">
              <div class="mask mask-squircle w-8 h-8">
                <img src={image} alt="Avatar Tailwind CSS Component" />
              </div>
            </div>
            <div>
              <div ><p className="font-medium text-base  text-left text-center text-gray-300 inline-block">{name}</p></div>
            
            </div>
          </div>
            </div>
            <div class="flex items-center ">
              <p class=" font-normal sm:text-xl text-base text-gray-300  ">{symbol}</p>
            </div>
            <div class="flex items-center ">
              <p class=" font-normal sm:text-xl text-base text-gray-300  ">${price}</p>
            </div>
            <div class=" flex items-center ">
              <p class=" font-normal sm:text-xl text-base text-gray-300 ">${volume}</p>
            </div>
            <div class="flex items-center ">
             {
                priceChange < 0 ? (
                    <p class="font-normal sm:text-xl text-base text-rose-600 ">${priceChange.toFixed(2)}%</p>
                ):(
                    <p class="font-normal sm:text-xl text-base text-green-600 ">${priceChange.toFixed(2)}%</p>
                )
             }
            </div>
            <div class="flex items-center">
              <p class="font-normal text-gray-300 sm:text-xl text-base">${marketCap.toFixed(2)}%</p>
            </div>
           
          </div>
          {/* <div class="divider" ></div> */}
         
        </div>
      </section>
      </div>
      </a>
      </Link>
    );
};

export default Coin;