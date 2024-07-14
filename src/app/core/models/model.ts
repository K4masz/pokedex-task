export interface Card {
  /**
   * Unique identifier for the object.
   */
  id: string;
  /**
   * The name of the card.
   */
  name: string;
  /**
   * The supertype of the card, such as Pokémon, Energy, or Trainer.
   */
  supertype: string;
  /**
   * A list of subtypes, such as Basic, EX, Mega, Rapid Strike, etc.
   */
  subtypes: string[];
  /**
   * The level of the card. This only pertains to cards from older sets and those of supertype Pokémon.
   */
  level: string;
  /**
   * The hit points of the card.
   */
  hp?: string;
  /**
   * The energy types for a card, such as Fire, Water, Grass, etc.
   */
  types?: string[];
  /**
   * Which Pokémon this card evolves from.
   */
  evolesFrom?: string;
  /**
   * Which Pokémon this card evolves to. Can be multiple, for example, Eevee.
   */
  evolvesTo?: string[];
  /**
   * Any rules associated with the card. For example, VMAX rules, Mega rules, or various trainer rules.
   */
  rules?: string[];
  /**
   * The ancient trait for a given card.
   */
  ancientTrait?: AncientTrait;
  /**
   * One or more abilities for a given card
   */
  abilities?: Ability[];
  /**
   * One or more attacks for a given card
   */
  attacks?: Attack[];
  /**
   * One or more weaknesses for a given card.
   */
  weaknesses?: Weakness[];
  /**
   * One or more resistances for a given card
   */
  resistances?: Resistance[];
  /**
   * A list of costs it takes to retreat and return the card to your bench. Each cost is an energy type, such as Water or Fire.
   */
  retreatCost?: string[];
  /**
   * The converted retreat cost for a card is the count of energy types found within the retreatCost field. For example, ["Fire", "Water"] has a converted retreat cost of 2.
   */
  convertedRetreatCost?: number;
  /**
   * The set details embedded into the card. See the set object for more details.
   */
  set: CardSet;
  /**
   * The number of the card.
   */
  number: string;
  /**
   * The artist of the card.
   */
  artist?: string;
  /**
   * The rarity of the card, such as "Common" or "Rare Rainbow".
   */
  rarity: string;
  /**
   * The flavor text of the card. This is the text that can be found on some Pokémon cards that is usually italicized near the bottom of the card.
   */
  flavorText?: string;
  /**
   * The national pokedex numbers associated with any Pokémon featured on a given card.
   */
  nationalPokedexNumbers?: number[];
  /**
   * The legalities for a given card. A legality will not be present in the hash if it is not legal. If it is legal or banned, it will be present.
   */
  legalities: Legalities;
  /**
   * A letter symbol found on each card that identifies whether it is legal to use in tournament play. Regulation marks were introduced on cards in the Sword & Shield Series.
   */
  regulationMark: string;
  /**
   * The images for a card.
   */
  images: CardImage;
  /**
   * The TCGPlayer information for a given card. ALL PRICES ARE IN US DOLLARS.
   */
  tcgplayer?: TCGPlayer;
  /**
   * The cardmarket information for a given card. ALL PRICES ARE IN EUROS.
   */
  cardmarket?: CardMarket;
}

export interface Weakness {
  type: string;
  value: string;
}

export interface Resistance {
  type: string;
  value: string;
}

 export interface CardMarket {
  url: string;
  updatedAt: string;
  prices: {
    averageSellPrice: number | null
    lowPrice: number | null
    trendPrice: number | null
    germanProLow: number | null
    suggestedPrice: number | null
    reverseHoloSell: number | null
    reverseHoloLow: number | null
    reverseHoloTrend: number | null
    lowPriceExPlus: number | null
    avg1: number | null
    avg7: number | null
    avg30: number | null
    reverseHoloAvg1: number | null
    reverseHoloAvg7: number | null
    reverseHoloAvg30: number | null
  }
 }

export interface TCGPlayer {
  url: string;
  updatedAt: string;
  prices: {
    normal: Price | undefined;
    holofoil: Price | undefined;
    reverseHolofoil: Price | undefined;
    '1stEditionNormal': Price | undefined;
    '1stEditionHolofoil': Price | undefined;
  }
}
export interface Price {
  low: number | null
  mid: number | null
  high: number | null
  market: number | null
  directLow: number | null
}

export interface Ability {
  name: string;
  text: string;
  type: string;
}

export interface Attack {
  cost: string[];
  name: string;
  text: string;
  damage: string;
  convertedEnergyCost: string;
}

export interface AncientTrait {
  name: string;
  text: string;
}

export interface SetImage {
  symbol: string;
  logo: string;
}

export interface CardImage {
  small: string;
  large: string;
}

export interface CardSet {
  /**
   * Unique identifier for the object.
   */
  id: string;
  /**
   * Any images associated with the set, such as symbol and logo
   */
  images: SetImage;
  /**
   * The legalities of the set. If a given format is not legal, it will not appear in the hash
   */
  legalities: Legalities;
  /**
   * The name of the set
   */
  name: string;
  /**
   * The number printed on the card that represents the total. This total does not include secret rares
   */
  printedTotal: number;
  /**
   * The code the Pokémon Trading Card Game Online uses to identify a set
   */
  ptcgoCode: string;
  /**
   * The date the set was released (in the USA). Format is YYYY/MM/DD
   */
  releaseDate: string;
  /**
   * The series the set belongs to, like Sword and Shield or Base
   */
  series: string;
  /**
   * The total number of cards in the set, including secret rares, alternate art, etc.
   */
  total: number;
  /**
   * The date and time the set was updated. Format is YYYY/MM/DD HH:MM:SS
   */
  updatedAt: string;
}

export enum Legality {
  LEGAL = 'Legal',
  BANNED = 'Banned',
}

export interface Legalities {
  expanded: Legality | undefined
  standard: Legality | undefined
  unlimited: Legality | undefined
}
