# ft-frontend-saksbehandling

Kildekode og publisering av npm-moduler til frontend-moduler brukt i FP og K9

# Komme i gang

Kjør `yarn install` på rot.
Bygg så alle pakkene ved å kjøre `yarn build`. (Kan også bygges enkeltvis ved å gå inn i pakkene og kjøre samme kommando.)

Utviklingsmiljø i Storybook kan kjøres opp ved å kjøre `yarn storybook` i de pakkene som er satt opp med Storybook.

En kan også kjøre opp alle Storybook'ene samtidig ved å kjøre `yarn storybook-all` på rot, etterfulgt av `yarn storybook`. Utviklingsmiljøet er satt opp med [Storybook Composition](https://storybook.js.org/docs/react/workflows/storybook-composition).

En kan også velge å starte enkelte pakker som micro-frontends for å teste direkte i hovedapp. Dette gjøres ved å gå inn i aktuell pakke og så kjøre `yarn dev`

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

# Henvendelser

Spørsmål knyttet til koden eller prosjektet kan stilles som issues her på GitHub

## For NAV-ansatte

Interne henvendelser kan sendes via Slack i kanalen #teamforeldrepenger.
