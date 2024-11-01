Frontend of Kodemy, using Next.js, Typescript and Tailwind CSS.

## Installing packages

```bash
npm ci
```

## Running the project

Run the development server:

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.


## Requirements:

- Node.js


## Maintain Packages

To check for outdated packages, run:

```bash
npm outdated
```

Or, to check for unused dependencies, run:

```bash
npx depcheck
```

If `depcheck` is not installed, install it globally by running:

```bash
npm install -g depcheck
```

To safely update dependencies, run:

```bash
npm update
```

> **Note**: This command will update dependencies with **patch** changes (e.g., `18.3.3` to `18.3.12`) and **minor** updates (e.g., `1.7.4` to `1.8.1`). It will **not** update major versions (e.g., `8.57.0` to `9.14.0`), as major updates can introduce breaking changes.
