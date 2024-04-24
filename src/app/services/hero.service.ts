import { Injectable } from "@angular/core";
import { Logger } from "./logger.service";
import { Hero } from "../models/hero.model";

@Injectable({ providedIn: 'root' })
export class HeroService {
    private heroes: Hero[] = [
        {
            id: 1,
            name: "Windstorm"
        },
        {
            id: 2,
            name: "Bombasto"
        },
        {
            id: 3,
            name: "Magneta"
        },
        {
            id: 4,
            name: "Tornado"
        }
    ];
    constructor(
        private logger: Logger
    ) { }

    getHeroes(): Hero[] {
        this.logger.log("HeroService: fetched heroes");
        return this.heroes;
    }
}