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

Det er ikke satt opp noen automatisk publisering av npm-moduler gjennom CI eller lignende. Dette må derfor gjøres manuelt.

Hver npm-pakke har sitt eget build-script i en package.json, som kan kjøres for å lage et nytt bygg under `/dist`-mappa på rot av den aktuelle pakken.

En publiser pakker på denne måten:

1. Gjør endringer i aktuelle pakker
2. Gå til rot
3. `yarn build`
4. Commit endringer
5. `yarn lerna-publish`

### Autentisering

Pakkene publiseres på GitHub Package Registry, og krever derfor at man har satt opp lokal `npm` med en PAT (Personal Access Token) med `write:packages`-tilgang, med en bruker som har tilgang til å publisere pakker på repoet. GitHub har dokumentert oppsett [her](https://docs.github.com/en/packages/working-with-a-github-packages-registry/working-with-the-npm-registry#publishing-a-package).

TLDR er å opprette en GitHub PAT med kun `write:packages`-tilgang, enable SSO, og putte det i en egen ~/.yarnrc.yml-fil slik:

```
npmRegistries:
  https://npm.pkg.github.com:
    npmAlwaysAuth: true
    npmAuthToken: <token>
```

Merk at dette _ikke_ skal sjekkes inn i versjonskontroll.

---

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
