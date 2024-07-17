import { FilterValues } from '../../features/pokemons-list/presentational/filters/filters.component';

/**
 * This function parses filter values object {supertype, types, subtypes} to value acceptable by "q" queryParam of PokemonCTG API
 * @param filterValues object with values of filters
 * @returns string in format acceptable by "q" queryParam for i.e 'supertype:"energy" (types:"dragon" OR types:"fairy") (subtypes:"ancient" OR subtypes:"break")'
 */
export function parseFilterValues(filterValues: FilterValues): string {
  const collector: string[] = [];

  for (const filter in filterValues) {
    let value = filterValues[filter as keyof FilterValues]

    if (!value) {
      continue;
    }

    if (typeof value === 'string') {
      value = [value] as string[];
    }

    let mapped = value.map((value: string) => `${filter.toLowerCase()}:"${value.toLocaleLowerCase()}"`).join(' OR ')
    if (value.length > 1) {
      mapped = `(${mapped})`
    }

    collector.push(mapped)
  }

  return collector.join(' ')
}
