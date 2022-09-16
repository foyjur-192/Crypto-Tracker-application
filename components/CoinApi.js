import Coin from "./Coin"

export default function CoinApi({ filteredCoins }) {
    return(
        <>
    {filteredCoins.map(coins => {
       
        return (
          <Coin
          key={coins.id}
          name={coins.name}
          id={coins.id}
          price={coins.current_price}
          symbol={coins.symbol}
          marketCap={coins.market_cap}
          volume={coins.total_volume}
          image={coins.image}
          priceChange={coins.price_change_percentage_24h}
          />
          );

            
    })}
       </> 
    
    
  
    )
}