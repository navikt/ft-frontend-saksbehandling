# ft-frontend-saksbehandling

Kildekode og publisering av npm-moduler til frontend-moduler brukt i FP og K9

[![Quality Gate Status](https://sonarcloud.io/api/project_badges/measure?project=navikt_ft-frontend-saksbehandling&metric=alert_status)](https://sonarcloud.io/summary/new_code?id=navikt_ft-frontend-saksbehandling)
[![Bugs](https://sonarcloud.io/api/project_badges/measure?project=navikt_ft-frontend-saksbehandling&metric=bugs)](https://sonarcloud.io/summary/new_code?id=navikt_ft-frontend-saksbehandling)
[![Lines of Code](https://sonarcloud.io/api/project_badges/measure?project=navikt_ft-frontend-saksbehandling&metric=ncloc)](https://sonarcloud.io/summary/new_code?id=navikt_ft-frontend-saksbehandling)

# Storybook

Storybook hostes på [github pages](https://navikt.github.io/ft-frontend-saksbehandling/) og releases automatisk ved hver
push til main.

# Komme i gang

Kjør `yarn install` på rot.
Bygg så alle pakkene ved å kjøre `yarn build`. (Kan også bygges enkeltvis ved å gå inn i pakkene og kjøre samme
kommando.)

Utviklingsmiljø i Storybook kan kjøres opp ved å kjøre `yarn storybook` i de pakkene som er satt opp med Storybook.

En skal alltid utvikle på branch og lage pull request på GitHub. Denne kan mergest til main når testene har gått grønt.

## Autentisering

Dette prosjektet bruker GitHub Package Registry for npm-pakker. For å installere dependencies og publisere pakker trenger du å autentisere mot GitHub Package Registry.

### Oppsett

Du kan autentisere på en av følgende måter:

#### Alternativ 1: Environment variabel (anbefalt)

Sett environment variabelen `NPM_AUTH_TOKEN` med en GitHub Personal Access Token (PAT):

```bash
export NPM_AUTH_TOKEN=<din-token>
```

#### Alternativ 2: .yarnrc.yml i hjemmemappen

Legg til følgende i `~/.yarnrc.yml`:

```yaml
npmScopes:
  navikt:
    npmAlwaysAuth: true
    npmRegistryServer: 'https://npm.pkg.github.com'
    npmAuthToken: "<din-token>"
```

### Opprett GitHub PAT

1. Gå til [GitHub Settings > Developer settings > Personal access tokens](https://github.com/settings/tokens)
2. Opprett en token med `read:packages`-tilgang (eller `write:packages` hvis du skal publisere)
3. Enable SSO for NAV-organisasjonen

**Viktig:** Tokens skal _ikke_ sjekkes inn i versjonskontroll.

Se [GitHubs dokumentasjon](https://docs.github.com/en/packages/working-with-a-github-packages-registry/working-with-the-npm-registry) for mer informasjon.

## Publisering av moduler

Publisering av npm-moduler skjer automatisk via GitHub Actions når nye tags pushes til `main`. 

### Hvorfor er det delt i to steg?

Prosessen er delt i tagging (lokalt) og publisering (gjennom GitHub Actions) for å:
- Tillate semantisk versjonering av pakke-endringer med `lerna version`
- Unngå at utviklere trenger et npm-token med `write` access

### Steg-for-steg publisering

1. **Hent siste endringer fra main**
   ```bash
   git checkout main
   git pull
   ```

2. **Installer dependencies**
   ```bash
   yarn
   ```

3. **Opprett og push tags**
   ```bash
   yarn tag
   ```
   Dette kjører interaktiv versjonering via Lerna som:
   - Lar deg velge versjonsnummer for endrede pakker
   - Oppretter signerte Git-tags
   - Pusher tags til GitHub

4. **Verifiser publisering**
   - Nye tags finner du [her](https://github.com/navikt/ft-frontend-saksbehandling/tags)
   - GitHub Actions workflow starter automatisk og publiserer pakkene: [Se publish workflow](https://github.com/navikt/ft-frontend-saksbehandling/actions/workflows/publish.yml)
   - Publiserte pakker finner du [her](https://github.com/orgs/navikt/packages?repo_name=ft-frontend-saksbehandling)

### Ta i bruk nye pakker

For å bruke de nye pakkene i [fp-frontend](https://github.com/navikt/fp-frontend) eller [k9-sak-web](https://github.com/navikt/k9-sak-web):

```bash
yarn upgrade-interactive
```

Dette gir deg en interaktiv meny for å velge hvilke pakker som skal oppgraderes.

---

## Utvikling mot lokal kode i ft-frontend-saksbehandling fra konsumerende repo

Dette gir deg mulighet til å teste lokale endringer i ft-frontend-saksbehandling før publisering.

### Oppsett

1. **Konverter workspace dependencies**
   ```bash
   yarn transform-to-semver
   ```
   Dette endrer "workspace:^" til semantisk versjon i package.json-filene

2. **Installer dependencies**
   ```bash
   yarn install
   ```

3. **Start lokal pakke-utvikling**
   - Gå til aktuell pakke
   - Kjør `yarn dev`
   - Dette bygger pakken automatisk ved endringer og legger resultatet i dist-folderen

4. **Koble pakken til konsument-repoet**
   - I konsument-repoet (f.eks. fp-frontend eller k9-sak-web), rediger `package.json`
   - Endre dependency til å bruke portal:
     ```json
     "@navikt/ft-prosess-beregningsgrunnlag": "portal:../../../ft-frontend-saksbehandling/packages/prosess-beregningsgrunnlag"
     ```
   - Kjør `yarn install` i konsument-repoet

5. **Start applikasjon**
   - Start opp applikasjonen som normalt
   - Endringer i ft-frontend-saksbehandling vil nå reflekteres automatisk

### Rydding

**Viktig:** Husk å reversere endringene før du committer:
```bash
yarn transform-to-workspace
```

# Henvendelser

Spørsmål knyttet til koden eller prosjektet kan stilles som issues her på GitHub

## For Nav-ansatte

Interne henvendelser kan sendes via Slack i kanalen #teamforeldrepenger.

## Kode generert av GitHub Copilot

Dette repoet bruker GitHub Copilot til å generere kode.
