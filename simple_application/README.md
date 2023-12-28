# Su-Telephone-Booth-Frontend

This is a frontend of telephone booth. The reason why I did not separate from server is because I might use lambda to achieve server-side rendering through API gateway.
Therefore, I configure the whole system together

## Frontend configuration

```
.
client
├── .lintstagedrc.js (Just an example now I move lintStage at root level)
├── public (For the file you do not wanna bundle inside of the code)
├── src
│ ├── assets
│     └── icons (Store SVG icon)
│     └── images (Store static image)
│ ├── components
│     └── ButtonSets (Store all the button)
│     └── CustomElement (Store Mui custom element or Form)
│ ├── configs (Any configuration purpose)
│ └── hooks (Custom Hooks, For the context you need to use inside this folder)
│ ├── layouts (A wrapper)
│     └── MainLayout (For the purpose of wrapping entire app)
│ ├── pages (For route to any page purpose)
│     └── api (For the database query)
│     └── exmaple-component.tsx (For storing the components example)
│     └── globals.css (Reset)
├── providers (For Providing context)
├── styles (Any .scss out of Mui)
│     └── globals.module.scss (For reset some Mui element)
├── themes (Contain all the Mui set up)
├── utils (Any utilities function)
│── .eslintignore
│── .eslintrc.json
│── .gitgnore
│── .prettierignore
│── .prettierrc
│── .stylelintrc.json
│── yarnrc.yml
│── Dockerfile (Not using right now)
│── next-env.d.ts
│── next.config.js (Directly declare env here)
│── package.json
│── global.d.ts (Define the global type)
└── tsconfig.json
```

### Install dependencies

```bash
yarn install
```

### Start development server

```bash
yarn dev:local
```

Open [http://localhost:3009](http://localhost:3009) with your browser to see the result.

### Build for production

```bash
yarn build
```

### Start preview server after build

```bash
yarn start
```

Open [http://localhost:3009](http://localhost:3009) with your browser to see the result.

### Run release

Follow the [Conventional Commits Specification](https://www.conventionalcommits.org/en/v1.0.0/) in your repository. And when you're ready to release, run below scripts.

```bash
yarn release
```

### Start and dev difference

next dev starts the Next.js application in development mode with hot-reloading, detailed error reporting, and more debugging capabilities. next start runs the application in production mode, optimized for performance and efficiency

### Component

AppBar or Paper: For the top bar with "Lorem ipsum dolor sit amet" and the "Active" badge.
Typography: For all text content.
Button: For the "Support" and "Reject" actions, as well as the back navigation.
LinearProgress: For the voting progress bars under "Support" and "Reject".
Card: For the "Voting Power" and "Voting results" sections.
Tooltip: For information icons that might require additional context on hover.
Tabs: For the "Support" and "Reject" toggle if they represent different views.
Table: For the detailed list of votes if "View all votes" expands to a table view.
Icons: For the checkmarks indicating "Reached" status and other iconography.
Box and Grid: For layout and spacing.
