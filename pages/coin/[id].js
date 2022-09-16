import Layout from "../../components/Layout";

const coin = ({coin}) => {
    return (
        <Layout>
          <div className="   pt-12">
            <div className="container mx-auto flex ">
          <div className="w-1/4  p-2 center">
            <img src={coin.image.large} className="w-80 h-80  " alt='no image here'/>
           </div>
           <div className="w-3/5 text-left pt-8 shadow ml-6 p-8">
            <h1 className="font-medium text-2xl text-gray-200">Details About Analysis</h1>
           <h1 className="font-medium text-lg text-gray-200 mb-2 mt-3">Name: {coin.name}</h1>
           <p className="text-gray-200 mb-2">symbol: {coin.symbol}</p>
            <p className="text-gray-200 mb-2">sentiment_votes_up_percentage: {coin.sentiment_votes_up_percentage}</p>
            <p className="text-gray-200 mb-2">market_cap_rank: {coin.market_cap_rank}</p>
            <p className="text-gray-200 mb-2">coingecko_score: {coin.coingecko_score}</p>
            <p class="font-normal sm:text-xl text-base text-rose-600 ">liquidity_score: {coin.liquidity_score}</p>
          

        
           </div>
       </div>
       </div>
         
        </Layout>
    );
};

export default coin;

export async function getServerSideProps(context){
  const {id} = context.query

  const res = await fetch(` https://api.coingecko.com/api/v3/coins/${id}`)

const data = await res.json();

return{
  props: {
    coin:data
  }
}

}