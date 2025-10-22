# Drabkirn Website

<div align="center">
  <img src="./public/images/drabkirn-logo-180x180.png"/>

  **[https://drabkirn.cdadityang.xyz](https://drabkirn.cdadityang.xyz)**
</div>

> The codebase for website of Drabkirn.

[![Astro 5.14.6](https://img.shields.io/badge/Astro-v5.14.6-blue.svg)](https://astro.build/)
[![Issues](https://img.shields.io/github/issues/drabkirn/website-v2.svg)](https://github.com/drabkirn/website-v2/issues)
[![Issues closed](https://img.shields.io/github/issues-closed/drabkirn/website-v2.svg)](https://github.com/drabkirn/website-v2/issues)
[![Pulls](https://img.shields.io/github/issues-pr/drabkirn/website-v2.svg)](https://github.com/drabkirn/website-v2/pulls)
[![Pulls](https://img.shields.io/github/issues-pr-closed/drabkirn/website-v2.svg)](https://github.com/drabkirn/website-v2/pulls)
[![License](https://img.shields.io/github/license/drabkirn/website-v2.svg)](https://choosealicense.com/licenses/agpl-3.0/)
[![CLA assistant](https://cla-assistant.io/readme/badge/drabkirn/website-v2)](https://cla-assistant.io/drabkirn/website-v2)

## Tech Stack
- HTML, CSS, JavaScript
- Bootstrap
- Astro
  - With PurgeCSS, PostCSS to optimize CSS builds

## Installation
1. Clone the repository
```bash
git clone https://github.com/drabkirn/website-v2
```

2. Navigate to the project directory
```bash
cd website-v2
```

3. Install Dependencies
```bash
npm i
```

4. Start the development server
```bash
npm run dev
```

## Build
1. Build the optimized production version
```bash
npm run build
```

2. Run the preview server:
```bash
npm run preview
```

Astro by default minifies HTML, CSS, JS and all assets. On top of Astro's building:
- **@astrojs/sitemap**: Generates sitemap for the website and puts them in `dist/` folder.
- **astro-purgecss**: Purges unused CSS from the codebase.

## Contributing
If you would like to contribute, please check [this contributing guide](https://github.com/drabkirn/website-v2/blob/master/CONTRIBUTING.md)

Please check [this Code of Conduct guide](https://github.com/drabkirn/website-v2/blob/master/CODE_OF_CONDUCT.md) before contributing or having any kind of discussion(issues, pull requests etc.)