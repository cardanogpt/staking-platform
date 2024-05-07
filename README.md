This is a [Next.js](https://nextjs.org/) project bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app).

# Getting Started

## No State Manager

A state manager was not used for the project because there was no discussion on which manager the Cardano Developer is familiar with.\
There are various state managers like
React-Context, Redux, Mobx etc. So the developer can use any prefered manager and integrate it to the project.

## Dynamic Data

Data on the pages for tables are fetched from a data file which simulates a real time fetching from an API.\
This makes it easy to integrate with API and fetch data using Axios, Fetch or any other HTTP Client.

## Used Libraries

### Material UI

[Box](https://mui.com/material-ui/react-box/).\
[React Alert](https://mui.com/material-ui/react-snackbar/)\
[React Data Grid](https://mui.com/x/react-data-grid/)\
[React Card](https://mui.com/material-ui/react-card/)\
[React Dialog](https://mui.com/material-ui/react-dialog/)
[Material Icons](https://mui.com/material-ui/material-icons/)

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `pages/index.js`. The page auto-updates as you edit the file.

[API routes](https://nextjs.org/docs/api-routes/introduction) can be accessed on [http://localhost:3000/api/hello](http://localhost:3000/api/hello). This endpoint can be edited in `pages/api/hello.js`.

The `pages/api` directory is mapped to `/api/*`. Files in this directory are treated as [API routes](https://nextjs.org/docs/api-routes/introduction) instead of React pages.

This project uses [`next/font`](https://nextjs.org/docs/basic-features/font-optimization) to automatically optimize and load Inter, a custom Google Font.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js/) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/deployment) for more details.
