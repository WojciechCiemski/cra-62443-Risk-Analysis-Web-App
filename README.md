# CRA / IEC 62443-3-2 Risk Analysis Web App

Static web application for preparing cybersecurity risk analyses for products, systems and networked components using the IEC 62443-3-2 workflow and a CRA-oriented product compliance evidence model.

## Live Site

After GitHub Pages is enabled, the application is available at:

https://wojciechciemski.github.io/cra-62443-Risk-Analysis-Web-App/

## Local Usage

Open `index.html` in a browser. The application does not require a server, build step or external dependencies.

## Features

- automatic project persistence in browser `localStorage`,
- Polish / English language switch in the top-right corner,
- JSON import and export for project data,
- IEC 62443-3-2 workflow sections for SUC, zones, conduits, risk scenarios, requirements and approval,
- 1-5 risk matrix with unmitigated and residual risk scoring,
- ZCR completeness checklist,
- CRA component classification for products, systems, services and networked elements,
- CRA Annex I requirements matrix mapped to components and evidence,
- SBOM register for software, firmware, open-source and third-party components,
- vulnerability and incident register with reporting status tracking,
- traceability register: risk -> requirement -> control -> test -> evidence,
- Word-compatible `.doc` report export.

## Scope Note

The application does not reproduce IEC standards or the Cyber Resilience Act text. It provides a working structure, paraphrased control areas and evidence fields to support risk analysis and compliance documentation.
