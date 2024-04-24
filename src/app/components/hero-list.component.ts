import { NgFor, NgIf } from "@angular/common";
import { Component, OnInit } from "@angular/core";
import { HeroService } from "../services/hero.service";
import { Hero } from "../models/hero.model";
import { HeroDetailComponent } from "./hero-detail.component";
import { Logger } from "../services/logger.service";


@Component({
    standalone: true,
    selector: "app-hero-list",
    templateUrl: "./hero-list.component.html",
    imports: [NgFor, NgIf, HeroDetailComponent],
    providers: [HeroService, Logger]
})
export class HeroListComponent implements OnInit {
    heroes: Hero[] = [];
    selectedHero: Hero | undefined;

    constructor(
        private service: HeroService,
        private logger: Logger
    ) { }

    ngOnInit() {
        this.heroes = this.service.getHeroes();
    }

    selectHero(hero: Hero) {
        this.selectedHero = hero;
        this.logger.log(`HeroList: Selected hero ${JSON.stringify(this.selectedHero)}`);
    }
}