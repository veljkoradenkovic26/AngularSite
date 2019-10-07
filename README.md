# SAJT

## Application design

![slika1](http://prntscr.com/p7s9xh)
![slika2](http://prntscr.com/p7sadw)
![slika3](http://prntscr.com/p7sb6j)


## Opis funkcionalnosti

Na pocetnoj strani se izlistavaju svi postovi pomocu servisa koji se naziva Postovi. Selektovanjem opcije "nastavi" ispod svakog clanka, radi se rutiranje po identifikatoru i ispisuje se ceo clanak.

Rutiranje je izvrseno i pomocu linkova : Pocetna, Restorani, O autoru i Kontakt.

Na linku restorani , izlistavaju se svi restorani a selektovanjem opcije "nastavi" ispod svakog clanka, radi se rutiranje po identifikatoru i ispisuje se ceo clanak.

## Validatori

Na svakoj formi su dodati validatori koji se registruju po izlasku iz polja, to je dogadjaj "touched". Za post, iskoristio sam reactive formu.

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 6.0.8.

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory. Use the `--prod` flag for a production build.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via [Protractor](http://www.protractortest.org/).

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI README](https://github.com/angular/angular-cli/blob/master/README.md).
