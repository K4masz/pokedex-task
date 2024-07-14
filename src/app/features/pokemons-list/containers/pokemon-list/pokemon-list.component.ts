import { Component } from '@angular/core';
import { PokemonListPrestentationalComponent } from "../../presentational/pokemon-list-prestentational/pokemon-list-prestentational.component";

@Component({
  selector: 'app-pokemon-list',
  standalone: true,
  imports: [PokemonListPrestentationalComponent],
  templateUrl: './pokemon-list.component.html',
  styleUrl: './pokemon-list.component.scss'
})
export class PokemonListComponent {


  DUMMY_DATA = `{"data":[{"id":"hgss4-1","name":"Aggron","supertype":"Pokémon","subtypes":["Stage 2"],"hp":"140","types":["Metal"],"evolvesFrom":"Lairon","attacks":[{"name":"Second Strike","cost":["Metal","Metal","Colorless"],"convertedEnergyCost":3,"damage":"40","text":"If the Defending Pokémon already has any damage counters on it, this attack does 40 damage plus 40 more damage."},{"name":"Guard Claw","cost":["Metal","Metal","Colorless","Colorless"],"convertedEnergyCost":4,"damage":"60","text":"During your opponent's next turn, any damage done to Aggron by attacks is reduced by 20 (after applying Weakness and Resistance)."}],"weaknesses":[{"type":"Fire","value":"×2"}],"resistances":[{"type":"Psychic","value":"-20"}],"retreatCost":["Colorless","Colorless","Colorless","Colorless"],"convertedRetreatCost":4,"set":{"id":"hgss4","name":"HS—Triumphant","series":"HeartGold & SoulSilver","printedTotal":102,"total":103,"legalities":{"unlimited":"Legal"},"ptcgoCode":"TM","releaseDate":"2010/11/03","updatedAt":"2018/03/04 10:35:00","images":{"symbol":"https://images.pokemontcg.io/hgss4/symbol.png","logo":"https://images.pokemontcg.io/hgss4/logo.png"}},"number":"1","artist":"Kagemaru Himeno","rarity":"Rare Holo","flavorText":"You can tell its age by the length of its iron horns. It claims an entire mountain as its territory.","nationalPokedexNumbers":[306],"legalities":{"unlimited":"Legal"},"images":{"small":"https://images.pokemontcg.io/hgss4/1.png","large":"https://images.pokemontcg.io/hgss4/1_hires.png"},"tcgplayer":{"url":"https://prices.pokemontcg.io/tcgplayer/hgss4-1","updatedAt":"2024/07/14","prices":{"holofoil":{"low":1.69,"mid":3.28,"high":4.49,"market":3.0,"directLow":null},"reverseHolofoil":{"low":1.99,"mid":2.4,"high":4.8,"market":2.4,"directLow":null}}},"cardmarket":{"url":"https://prices.pokemontcg.io/cardmarket/hgss4-1","updatedAt":"2024/07/14","prices":{"averageSellPrice":1.6,"lowPrice":0.3,"trendPrice":1.63,"germanProLow":0.0,"suggestedPrice":0.0,"reverseHoloSell":3.83,"reverseHoloLow":0.8,"reverseHoloTrend":2.57,"lowPriceExPlus":1.19,"avg1":1.19,"avg7":1.87,"avg30":3.72,"reverseHoloAvg1":3.49,"reverseHoloAvg7":2.91,"reverseHoloAvg30":3.13}}},{"id":"xy5-1","name":"Weedle","supertype":"Pokémon","subtypes":["Basic"],"hp":"50","types":["Grass"],"evolvesTo":["Kakuna"],"attacks":[{"name":"Multiply","cost":["Grass"],"convertedEnergyCost":1,"damage":"","text":"Search your deck for Weedle and put it onto your Bench. Shuffle your deck afterward."}],"weaknesses":[{"type":"Fire","value":"×2"}],"retreatCost":["Colorless"],"convertedRetreatCost":1,"set":{"id":"xy5","name":"Primal Clash","series":"XY","printedTotal":160,"total":164,"legalities":{"unlimited":"Legal","expanded":"Legal"},"ptcgoCode":"PRC","releaseDate":"2015/02/04","updatedAt":"2020/05/01 16:06:00","images":{"symbol":"https://images.pokemontcg.io/xy5/symbol.png","logo":"https://images.pokemontcg.io/xy5/logo.png"}},"number":"1","artist":"Midori Harada","rarity":"Common","flavorText":"Its poison stinger is very powerful. Its bright-colored body is intended to warn off its enemies.","nationalPokedexNumbers":[13],"legalities":{"unlimited":"Legal","expanded":"Legal"},"images":{"small":"https://images.pokemontcg.io/xy5/1.png","large":"https://images.pokemontcg.io/xy5/1_hires.png"},"tcgplayer":{"url":"https://prices.pokemontcg.io/tcgplayer/xy5-1","updatedAt":"2024/07/14","prices":{"normal":{"low":0.01,"mid":0.15,"high":2.0,"market":0.12,"directLow":null},"reverseHolofoil":{"low":0.23,"mid":0.47,"high":19.22,"market":0.63,"directLow":1.0}}},"cardmarket":{"url":"https://prices.pokemontcg.io/cardmarket/xy5-1","updatedAt":"2024/07/14","prices":{"averageSellPrice":0.11,"lowPrice":0.02,"trendPrice":0.1,"germanProLow":0.0,"suggestedPrice":0.0,"reverseHoloSell":0.25,"reverseHoloLow":0.12,"reverseHoloTrend":0.48,"lowPriceExPlus":0.02,"avg1":0.1,"avg7":0.11,"avg30":0.07,"reverseHoloAvg1":0.25,"reverseHoloAvg7":0.47,"reverseHoloAvg30":0.51}}},{"id":"pl1-1","name":"Ampharos","supertype":"Pokémon","subtypes":["Stage 2"],"level":"57","hp":"130","types":["Lightning"],"evolvesFrom":"Flaaffy","abilities":[{"name":"Damage Bind","text":"Each Pokémon that has any damage counters on it (both yours and your opponent's) can't use any Poké-Powers.","type":"Poké-Body"}],"attacks":[{"name":"Gigavolt","cost":["Lightning","Colorless"],"convertedEnergyCost":2,"damage":"30+","text":"Flip a coin. If heads, this attack does 30 damage plus 30 more damage. If tails, the Defending Pokémon is now Paralyzed."},{"name":"Reflect Energy","cost":["Lightning","Colorless","Colorless"],"convertedEnergyCost":3,"damage":"70","text":"Move an Energy card attached to Ampharos to 1 of your Benched Pokémon."}],"weaknesses":[{"type":"Fighting","value":"+30"}],"resistances":[{"type":"Metal","value":"-20"}],"retreatCost":["Colorless","Colorless"],"convertedRetreatCost":2,"set":{"id":"pl1","name":"Platinum","series":"Platinum","printedTotal":127,"total":133,"legalities":{"unlimited":"Legal"},"ptcgoCode":"PL","releaseDate":"2009/02/11","updatedAt":"2020/08/14 09:35:00","images":{"symbol":"https://images.pokemontcg.io/pl1/symbol.png","logo":"https://images.pokemontcg.io/pl1/logo.png"}},"number":"1","artist":"Atsuko Nishida","rarity":"Rare Holo","nationalPokedexNumbers":[181],"legalities":{"unlimited":"Legal"},"images":{"small":"https://images.pokemontcg.io/pl1/1.png","large":"https://images.pokemontcg.io/pl1/1_hires.png"},"tcgplayer":{"url":"https://prices.pokemontcg.io/tcgplayer/pl1-1","updatedAt":"2024/07/14","prices":{"holofoil":{"low":4.0,"mid":5.53,"high":16.23,"market":12.98,"directLow":null},"reverseHolofoil":{"low":4.0,"mid":5.45,"high":8.39,"market":6.41,"directLow":null}}},"cardmarket":{"url":"https://prices.pokemontcg.io/cardmarket/pl1-1","updatedAt":"2024/07/14","prices":{"averageSellPrice":2.87,"lowPrice":0.6,"trendPrice":2.69,"germanProLow":0.0,"suggestedPrice":0.0,"reverseHoloSell":0.0,"reverseHoloLow":1.0,"reverseHoloTrend":2.13,"lowPriceExPlus":1.5,"avg1":1.5,"avg7":2.87,"avg30":3.28,"reverseHoloAvg1":1.0,"reverseHoloAvg7":1.74,"reverseHoloAvg30":3.09}}},{"id":"dp3-1","name":"Ampharos","supertype":"Pokémon","subtypes":["Stage 2"],"level":"52","hp":"130","types":["Lightning"],"evolvesFrom":"Flaaffy","abilities":[{"name":"Jamming","text":"After your opponent plays a Supporter card from his or her hand, put 1 damage counter on each of your opponent's Pokémon. You can't use more than 1 Jamming Poké-Body each turn.","type":"Poké-Body"}],"attacks":[{"name":"Cluster Bolt","cost":["Lightning","Colorless","Colorless"],"convertedEnergyCost":3,"damage":"70","text":"You may discard all Lightning Energy attached to Ampharos. If you do, this attack does 20 damage to each of your opponent's Benched Pokémon that has any Energy cards attached to it. (Don't apply Weakness and Resistance for Benched Pokémon.)"}],"weaknesses":[{"type":"Fighting","value":"+30"}],"resistances":[{"type":"Metal","value":"-20"}],"retreatCost":["Colorless","Colorless","Colorless"],"convertedRetreatCost":3,"set":{"id":"dp3","name":"Secret Wonders","series":"Diamond & Pearl","printedTotal":132,"total":132,"legalities":{"unlimited":"Legal"},"ptcgoCode":"SW","releaseDate":"2007/11/01","updatedAt":"2018/03/04 10:35:00","images":{"symbol":"https://images.pokemontcg.io/dp3/symbol.png","logo":"https://images.pokemontcg.io/dp3/logo.png"}},"number":"1","artist":"Kouki Saitou","rarity":"Rare Holo","flavorText":"The tip of its tail shines brightly. In the olden days, people sent signals using the tail's light.","nationalPokedexNumbers":[181],"legalities":{"unlimited":"Legal"},"images":{"small":"https://images.pokemontcg.io/dp3/1.png","large":"https://images.pokemontcg.io/dp3/1_hires.png"},"tcgplayer":{"url":"https://prices.pokemontcg.io/tcgplayer/dp3-1","updatedAt":"2024/07/14","prices":{"holofoil":{"low":4.87,"mid":14.61,"high":29.98,"market":15.38,"directLow":null},"reverseHolofoil":{"low":2.88,"mid":4.49,"high":15.5,"market":12.3,"directLow":null}}},"cardmarket":{"url":"https://prices.pokemontcg.io/cardmarket/dp3-1","updatedAt":"2024/07/14","prices":{"averageSellPrice":2.01,"lowPrice":0.1,"trendPrice":1.09,"germanProLow":0.0,"suggestedPrice":0.0,"reverseHoloSell":3.8,"reverseHoloLow":0.29,"reverseHoloTrend":2.57,"lowPriceExPlus":1.49,"avg1":0.49,"avg7":1.04,"avg30":1.38,"reverseHoloAvg1":6.0,"reverseHoloAvg7":3.23,"reverseHoloAvg30":2.99}}},{"id":"det1-1","name":"Bulbasaur","supertype":"Pokémon","subtypes":["Basic"],"hp":"60","types":["Grass"],"evolvesTo":["Ivysaur"],"attacks":[{"name":"Find a Friend","cost":["Grass"],"convertedEnergyCost":1,"damage":"","text":"Search your deck for a Grass Pokémon, reveal it, and put it into your hand. Then, shuffle your deck."}],"weaknesses":[{"type":"Fire","value":"×2"}],"retreatCost":["Colorless"],"convertedRetreatCost":1,"set":{"id":"det1","name":"Detective Pikachu","series":"Sun & Moon","printedTotal":18,"total":18,"legalities":{"unlimited":"Legal","expanded":"Legal"},"ptcgoCode":"DET","releaseDate":"2019/04/05","updatedAt":"2021/09/01 05:37:00","images":{"symbol":"https://images.pokemontcg.io/det1/symbol.png","logo":"https://images.pokemontcg.io/det1/logo.png"}},"number":"1","artist":"MPC Film","rarity":"Common","flavorText":"A strange seed was planted on its back at birth. The plant sprouts and grows with this Pokémon.","nationalPokedexNumbers":[1],"legalities":{"unlimited":"Legal","expanded":"Legal"},"images":{"small":"https://images.pokemontcg.io/det1/1.png","large":"https://images.pokemontcg.io/det1/1_hires.png"},"tcgplayer":{"url":"https://prices.pokemontcg.io/tcgplayer/det1-1","updatedAt":"2024/07/14","prices":{"holofoil":{"low":0.18,"mid":0.43,"high":5.03,"market":0.38,"directLow":0.4}}},"cardmarket":{"url":"https://prices.pokemontcg.io/cardmarket/det1-1","updatedAt":"2024/07/14","prices":{"averageSellPrice":0.29,"lowPrice":0.02,"trendPrice":0.22,"germanProLow":0.0,"suggestedPrice":0.0,"reverseHoloSell":0.48,"reverseHoloLow":0.02,"reverseHoloTrend":0.5,"lowPriceExPlus":0.02,"avg1":0.21,"avg7":0.25,"avg30":0.28,"reverseHoloAvg1":0.6,"reverseHoloAvg7":0.46,"reverseHoloAvg30":0.41}}}],"page":1,"pageSize":5,"count":5,"totalCount":17905}`;
  dataSource = JSON.parse(this.DUMMY_DATA);



}
