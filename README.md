# Automated Management System (Sistema de Gestão Automatizada – SGA) - CrossDOI

[![License: CC BY-NC 4.0][cc-by-nc-shield]][cc-by-nc]

SGA-CrossDOI automates the creation and updating of DOIs for theses and dissertations required by personnel at the Information Processing Division (Divisão de Tratamento da Informação – DTRI) at Unicamp. This project is not intended to run standalone; it is designed to run within Google Workspace and is bound to a Google Sheet. Although JavaScript is listed as the primary language and all source files use `.js`, the code was implemented using the Google Apps Script (GAS) environment (`.gs`).

## Tech Stack

- **JavaScript**/[**JSDoc**][jsdoc] -- Primary language and type-checking standard.
- **Google Apps Script** -- Execution runtime integrated within Google Workspace (Sheets, Drive, Gmail).
- [**Node.js**][nodejs] & **npm** -- Local runtime environment and package manager.
- [**CLASP**][clasp] -- Command Line Apps Script Projects CLI for local source control and synchronization.
- [**ESLint**][eslint] -- Static code analysis and linting.
- [**Prettier**][prettier] -- Opinionated code formatting.

## Looking for?

- [**Documentation**](doc/README.md)
- [**How to contribute**](.github/CONTRIBUTING.md)

[![CC BY-NC 4.0][cc-by-nc-image]][cc-by-nc]

This work is licensed under a [Creative Commons Attribution-NonCommercial 4.0 International License][cc-by-nc].


<!-- Link References -->

[jsdoc]: https://jsdoc.app/
[clasp]: https://github.com/google/clasp
[nodejs]: https://nodejs.org/en
[eslint]: https://eslint.org/
[prettier]: https://prettier.io/
[cc-by-nc]: https://creativecommons.org/licenses/by-nc/4.0/
[cc-by-nc-image]: https://mirrors.creativecommons.org/presskit/buttons/88x31/svg/by-nc.svg
[cc-by-nc-shield]: https://img.shields.io/badge/License-CC%20BY--NC%204.0-lightgrey.svg
