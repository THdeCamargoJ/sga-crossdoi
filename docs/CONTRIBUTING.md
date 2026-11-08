# Contributing to the project

## Setup Guide

1. Download and install the [Node.js][nodejs] LTS version.
2. Install the project dependencies:

```shell
npm install
```

3. Enable Google Apps Script API in your [Google Account Settings][gasapi].
4. Authenticate `clasp` locally by running the command below (this will open a
   browser tab for login):

```shell
npx clasp login
```

5. Copy the `.clasp.json.sample` file from the [.configs/](.configs/) directory
   to the project root, and rename it to `.clasp.json`.
6. Open the **DTRI - BOLSISTAS** Google Drive and copy the Script ID located in
   the handoff document at `DOI/SGA-CrossDOI/docs`.
7. Paste the Script ID into the `.clasp.json` file in the designated `scriptID`
   field. 
8. Verify the configuration by pushing the local code to Google Apps Script:

```shell
npm run push
```


<!-- External links -->
[nodejs]: https://nodejs.org/en/download
[gasapi]: https://script.google.com/home/usersettings