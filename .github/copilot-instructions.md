# ft-frontend-saksbehandling

Shared frontend packages used by Foreldrepenger and K9.

## Shared context

- Source of truth for shared domain, architecture, and conventions: `navikt/fp-context`
- Copilot Space: `navikt/TeamForeldrepenger`

## Repo-specific context

| Topic | Details                                                                                                                        |
|---|--------------------------------------------------------------------------------------------------------------------------------|
| Role | Publishes reusable React and TypeScript packages for beregning panels, tilbakekreving panels, shared components, and utilities |
| Consumers  | `fp-frontend` and k9 case-processing frontends                                                                                 |
| Tech stack | Typescript, React, Node, yarn                                                                                                  |
| Versioning | Independent SemVer per package                                                                                                 |

## Skill

- Use `publiser-pakker` for the release workflow instead of restating the release runbook here.

## Verification

- Storybook is the main development surface.
