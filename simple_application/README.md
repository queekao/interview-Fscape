# Interview-Fscape

This is a frontend of telephone booth. The reason why I did not separate from server is because I might use lambda to achieve server-side rendering through API gateway.
Therefore, I configure the whole system together

## Frontend Configuration

Below is the directory structure for the frontend part of the project:

```plaintext
client/
├── .eslintignore
├── .eslintrc.json
├── .gitignore
├── .lintstagedrc.js             # Lint-staged configuration (now moved to root level)
├── .prettierignore
├── .prettierrc
├── .stylelintrc.json
├── Dockerfile                   # Not in use currently
├── global.d.ts                  # Global type definitions
├── next-env.d.ts
├── next.config.js               # Next.js configuration with environment variables
├── package.json
├── public/                      # Static files like robots.txt, favicon, etc.
├── src/
│   ├── assets/                  # Static assets
│   │   ├── icons/               # SVG icons
│   │   └── images/              # Static images
│   ├── components/              # Reusable components
│   │   └── CustomMuiElement/    # Customized MUI elements
│   │       ├── ButtonSets/      # Collection of button components
│   ├── configs/                 # Configuration files and constants
│   ├── hooks/                   # Custom React hooks
│   ├── layouts/                 # Layout components
│   │   └── MainLayout/          # Main layout wrapper for the app
│   ├── pages/                   # Page components and API routes
│   │   ├── api/                 # Server-side API routes and database queries
│   │   └── example-component.tsx # Example component files
│   ├── providers/               # Context providers
│   ├── styles/                  # Global styles and SCSS modules
│   │   └── globals.module.scss  # SCSS overrides for MUI components
│   ├── themes/                  # Theme configuration for MUI
│   └── utils/                   # Utility functions and helpers
├── tsconfig.json
└── yarnrc.yml
```

### Install dependencies

```bash
yarn install
```

### Start development server

```bash
yarn dev:local
```

Open [http://localhost:3005](http://localhost:3005) with your browser to see the result.

### Build for production

```bash
yarn build
```

### Start preview server after build

```bash
yarn start
```

Open [http://localhost:3005](http://localhost:3005) with your browser to see the result.

### Run release

Follow the [Conventional Commits Specification](https://www.conventionalcommits.org/en/v1.0.0/) in your repository. And when you're ready to release, run below scripts.

```bash
yarn release
```

### Start and dev difference

next dev starts the Next.js application in development mode with hot-reloading, detailed error reporting, and more debugging capabilities. next start runs the application in production mode, optimized for performance and efficiency
