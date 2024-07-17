import { CommonModule } from '@angular/common';
import { Component, forwardRef, inject } from '@angular/core';
import { takeUntilDestroyed } from '@angular/core/rxjs-interop';
import { MatDrawer } from '@angular/material/sidenav';
import { delay, Observable, of } from 'rxjs';
import { SubTypesFacade } from '../../../../core/state/subtypes/sub-types.facade';
import { SuperTypesFacade } from '../../../../core/state/supertypes/super-types.facade';
import { TypesFacade } from '../../../../core/state/types/types.facade';
import { PokemonDetailsPresentationalComponent } from '../../presentational/pokemon-details-presentational/pokemon-details-presentational.component';

@Component({
  selector: 'app-pokemon-preview',
  standalone: true,
  imports: [PokemonDetailsPresentationalComponent, CommonModule],
  templateUrl: './pokemon-details-preview.component.html',
  styleUrl: './pokemon-details-preview.component.scss'
})
export class PokemonPreviewComponent {
  types$: Observable<string[]> = inject(TypesFacade).types$;
  superTypes$: Observable<string[]> = inject(SuperTypesFacade).superTypes$;
  subTypes$: Observable<string[]> = inject(SubTypesFacade).subTypes$;

  similarCard$ = of(JSON.parse(`{"id":"pop6-1","name":"Bastiodon","supertype":"Pokémon","subtypes":["Stage 2"],"level":"51","hp":"130","types":["Metal"],"evolvesFrom":"Shieldon","abilities":[{"name":"Protective Wall","text":"Prevent all damage done to your Benched Pokémon by your opponent's attacks.","type":"Poké-Body"}],"attacks":[{"name":"Anger Revenge","cost":["Metal","Metal","Colorless"],"convertedEnergyCost":3,"damage":"60","text":"If Bastiodon was damaged by an attack during your opponent's last turn, this attack does 40 damage to 1 of your opponent's Benched Pokémon. (Don't apply Weakness and Resistance for Benched Pokémon.)"}],"weaknesses":[{"type":"Fire","value":"+40"}],"resistances":[{"type":"Psychic","value":"-20"}],"retreatCost":["Colorless","Colorless","Colorless"],"convertedRetreatCost":3,"set":{"id":"pop6","name":"POP Series 6","series":"POP","printedTotal":17,"total":17,"legalities":{"unlimited":"Legal"},"releaseDate":"2007/09/01","updatedAt":"2020/05/01 16:06:00","images":{"symbol":"https://images.pokemontcg.io/pop6/symbol.png","logo":"https://images.pokemontcg.io/pop6/logo.png"}},"number":"1","artist":"Kazuyuki Kano","rarity":"Rare","flavorText":"Any frontal attack is repulsed. It is a docile Pokémon that feeds on grass and berries.","nationalPokedexNumbers":[411],"legalities":{"unlimited":"Legal"},"images":{"small":"https://images.pokemontcg.io/pop6/1.png","large":"https://images.pokemontcg.io/pop6/1_hires.png"},"tcgplayer":{"url":"https://prices.pokemontcg.io/tcgplayer/pop6-1","updatedAt":"2024/07/17","prices":{"normal":{"low":1.0,"mid":1.44,"high":4.99,"market":1.44,"directLow":null}}},"cardmarket":{"url":"https://prices.pokemontcg.io/cardmarket/pop6-1","updatedAt":"2024/07/17","prices":{"averageSellPrice":1.25,"lowPrice":0.49,"trendPrice":1.36,"germanProLow":0.0,"suggestedPrice":0.0,"reverseHoloSell":0.0,"reverseHoloLow":0.0,"reverseHoloTrend":0.0,"lowPriceExPlus":0.84,"avg1":2.0,"avg7":1.21,"avg30":1.39,"reverseHoloAvg1":0.0,"reverseHoloAvg7":0.0,"reverseHoloAvg30":0.0}}}`)).pipe(delay(5000))

  drawer = inject(forwardRef(() => MatDrawer))
  drawerClosingSubscription = this.drawer.closedStart.pipe(takeUntilDestroyed()).subscribe(() => console.log('left drawer close'))

  onPokemonDetailsClose() {
    this.drawer.close();
  }
}
