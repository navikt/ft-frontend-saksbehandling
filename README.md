# ft-frontend-saksbehandling

Kildekode og publisering av npm-moduler til frontend-moduler brukt i FP og K9

[![Quality Gate Status](https://sonarcloud.io/api/project_badges/measure?project=navikt_ft-frontend-saksbehandling&metric=alert_status)](https://sonarcloud.io/summary/new_code?id=navikt_ft-frontend-saksbehandling)
[![Bugs](https://sonarcloud.io/api/project_badges/measure?project=navikt_ft-frontend-saksbehandling&metric=bugs)](https://sonarcloud.io/summary/new_code?id=navikt_ft-frontend-saksbehandling)
[![Lines of Code](https://sonarcloud.io/api/project_badges/measure?project=navikt_ft-frontend-saksbehandling&metric=ncloc)](https://sonarcloud.io/summary/new_code?id=navikt_ft-frontend-saksbehandling)

# Storybook

Storybook hostes på [github pages](https://navikt.github.io/ft-frontend-saksbehandling/) og releases automatisk ved hver push til main.

# Komme i gang

Kjør `yarn install` på rot.
Bygg så alle pakkene ved å kjøre `yarn build`. (Kan også bygges enkeltvis ved å gå inn i pakkene og kjøre samme kommando.)

Utviklingsmiljø i Storybook kan kjøres opp ved å kjøre `yarn storybook` i de pakkene som er satt opp med Storybook.

En skal alltid utvikle på branch og lage pull request på GitHub. Denne kan mergest til main når testene har gått grønt.

## Publisering av moduler

En Github Action kjører automatisk ved hver Pull request merge til main, som bygger og publiserer pakkene til GitHub Package Registry. Du må selv sette versjon og lage tag ved å kjøre `yarn publish` på rot i branchen din før merging til main. Denne kommandoen bygger pakkene, lar deg velge versjoner og pusher tag til GitHub. Når PR-en er merget vil Github Action publisere pakkene.

### Utvikling mot lokal kode i ft-frontend-saksbehandling fra annet repo

1. Kjør `yarn transform-to-semver` i ft-frontend-saksbehandling. Dette endrer "workspace:^" til semantisk versjon i packages.json-filene.
2. Kjør `yarn install`.
3. Gå så til aktuell pakke og kjør `yarn dev`. Dette vil bygge pakken på nytt ved endringer og legge resultatet i dist-folder. Portalen en setter opp i neste steg vil se i denne folderen.
4. Gå så til repoet du vil bruke pakken i. Endre dependency i package.json til å bruke portal, dvs endre til en direkte peker til aktuell pakke. For eksempel: "@navikt/ft-prosess-beregningsgrunnlag": "portal:../../../ft-frontend-saksbehandling/packages/prosess-beregningsgrunnlag".
5. Kjør `yarn install` i dette repoet.
6. Start opp applikasjon.

Da er det klart for utvikling.

NB! Husk å ikke sjekke inn endringene fra steg 1. Kjør `yarn transform-to-workspace` for å reversere desse endringene.

# Henvendelser

Spørsmål knyttet til koden eller prosjektet kan stilles som issues her på GitHub

## For Nav-ansatte

Interne henvendelser kan sendes via Slack i kanalen #teamforeldrepenger.

## Kode generert av GitHub Copilot

Dette repoet bruker GitHub Copilot til å generere kode.
