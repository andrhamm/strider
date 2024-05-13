import { HeroicCultureBardings } from "./bardings";
import { HeroicCultureBeornings } from "./beornings";
import { HeroicCultureDwarvesOfDurinsFolk } from "./dwarvesOfDurinsFolk";
import { HeroicCultureElvesOfLindon } from "./elvesOfLindon";
import { HeroicCultureElvesOfMirkwood } from "./elvesOfMirkwood";
import { HeroicCultureHighElvesOfRivendell } from "./highElvesOfRivendell";
import { HeroicCultureHobbitsOfTheShire } from "./hobbitsOfTheShire";
import { HeroicCultureMenOfBree } from "./menOfBree";
import { HeroicCultureRangersOfTheNorth } from "./rangersOfTheNorth";
import { HeroicCultureWoodmenOfWilderland } from "./woodmenOfWilderland";
import { HeroicCulturesType } from "../heroicCultures";

export const HeroicCultures: HeroicCulturesType = {
    source: {
        pageReference: {
            textId: 'core-rulebook',
            pageNumber: 29,
        }
    },
    heroicCultures: {
        bardings: HeroicCultureBardings,
        dwarvesOfDurinsFolk: HeroicCultureDwarvesOfDurinsFolk,
        elvesOfLindon: HeroicCultureElvesOfLindon,
        hobbitsOfTheShire: HeroicCultureHobbitsOfTheShire,
        menOfBree: HeroicCultureMenOfBree,
        rangersOfTheNorth: HeroicCultureRangersOfTheNorth,
        beornings: HeroicCultureBeornings,
        elvesOfMirkwood: HeroicCultureElvesOfMirkwood,
        woodmenOfWilderland: HeroicCultureWoodmenOfWilderland,
        highElvesOfRivendell: HeroicCultureHighElvesOfRivendell,
    }
}