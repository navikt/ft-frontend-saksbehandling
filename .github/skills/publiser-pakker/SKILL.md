---
name: publiser-pakker
description: >-
  Publiserer en ny versjon av ft-frontend-saksbehandling. Henter siste main,
  installerer avhengigheter, bygger alle pakker, og kjører interaktiv lerna-versjonering
  slik at brukeren kan velge versjonsbump per pakke. Venter på at publish-workflowen
  i GitHub Actions fullfører.
  Bruk dette når du blir bedt om å release, tagge eller publisere pakker fra
  ft-frontend-saksbehandling.
allowed-tools: shell
---

Publiserer alle endrede pakker i dette monorepoet som nye git-tagger, og venter på at
GitHub Actions publiserer dem til GitHub Packages.

## Steg

### 1. Hent siste main

```sh
if [ -n "$(git status --porcelain)" ]; then
  echo "Arbeidskopien har lokale endringer eller ucommittede filer. Commit eller stash dem før du fortsetter."
  exit 1
fi
git checkout main && git pull --ff-only
```

### 2. Rens alle pakker

```sh
yarn clean
```

### 3. Installer avhengigheter

```sh
yarn install --immutable
```

### 4. Bygg alle pakker

```sh
yarn build
```

### 5. Interaktiv versjonering

> ⚠️ **Interaktivt steg.** Lerna vil spørre om versjonsbump for hver endrede pakke.
> Vis utdataene til brukeren og vent på bekreftelse før du fortsetter.

```sh
yarn tag
```

Release-skriptet krever en ren arbeidskopi på siste `origin/main` og at npm ikke deaktiverer lifecycle-skript.
Etter at brukeren bekrefter versjonsvalgene, oppdaterer `version`-hooken peer-kravene. Den stopper hvis en
pakke med endrede avhengighetskrav ikke selv får ny versjon.

Lerna lager en signert versjonscommit og signerte tags med `--no-push`. Release-skriptet kontrollerer
de committede manifestene, taggene, signaturene og lockfilen før atomisk push til `main`.
Ikke erstatt `yarn tag` med direkte `lerna version`, og ikke omgå sperrene med manuell push.

Hvis Lerna melder **"No changed packages found"** er det ingenting å publisere. Stopp og
informer brukeren.

Bruk følgende hvis brukeren ønsker å bumpe alle pakker uavhengig av endringer:

```sh
yarn tag:force
```

Hvis kjøringen stopper, vis feilen og undersøk `git status`, `git diff` og `git log -1`.
Ikke slett endringer eller tags, og ikke start en ny versjonsbump automatisk.
Hvis versjonscommit og tags er ferdige, kan brukeren velge `yarn tag:resume` for ny kontroll og atomisk push
uten ny bump. Ved uferdig commit/tagging eller nyere commits på `origin/main` må releasen håndteres manuelt.
Ikke endre `ignore-scripts` eller omgå signering uten at brukeren har avklart oppsettet.

### 6. Vent på publish-workflowen

```sh
# Gi GitHub et øyeblikk til å registrere kjøringen
sleep 15

RUN_ID=$(gh run list --workflow=publish.yml --limit=1 --json databaseId --jq '.[0].databaseId')
echo "Følger publish-workflow-kjøring $RUN_ID..."
gh run watch "$RUN_ID" --exit-status
```

Hvis workflowen **feiler**, vis loggene for de mislykkede jobbene og stopp:

```sh
gh run view "$RUN_ID" --log-failed
```

Når workflowen er vellykket, gi brukeren beskjed om at pakkene er tilgjengelige på
GitHub Packages, og at de kan kjøre `oppdater-ft-pakker`-skillen i `fp-frontend`
for å ta i bruk de nye versjonene.
