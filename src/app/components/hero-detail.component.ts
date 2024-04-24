import { Component, Input } from "@angular/core";
import { Hero } from "../models/hero.model";
import { NgIf } from "@angular/common";

@Component({
    standalone: true,
    selector: "app-hero-detail",
    templateUrl: "./hero-detail.component.html",
    imports: [NgIf]
})
export class HeroDetailComponent {
    @Input() hero: Hero | undefined;
}