# Next.js Starter Kit

This is a starter kit project based on the [with-typescript](https://github.com/vercel/next.js/tree/canary/examples/with-typescript) example project which shows the usage of Next.js with TypeScript. This starter kit also includes Bootstrap (including react-bootstrap), MongoDB client (with api middleware), Axios (promise-based http client), and a `sample.env.local` to configure environment variables.

[Learn Next.js](https://nextjs.org/learn).

## Environment

Copy `sample.env.local` to `.env.local` to make this configuration accessible to client and/or server-side code.

Learn more about [Environment Variables](https://nextjs.org/docs/basic-features/environment-variables#loading-environment-variables) in Next.js.

## Development

Start the server in development mode with hot-code reloading.

```bash
npm run dev
```

## Production 

Start the application in production mode. 

```bash
npm start
```
_The default Next.js `start` script has been updated to first build the application._

## Notes

In both development and production the application will start at http://localhost:3000 by default. The default port can be changed with `-p` in the `dev` and `start:prod` scripts in `package.json`, like:
```bash
...
"scripts": {
    "dev": "next -p 4000",
    ...
    "start:prod": "next start -p 4000",
    ...
  }
...
```
