# Contributing Guide

Before submitting your contribution though, please make sure to take a moment and read through the following guidelines.

- [Issue Reporting Guidelines](#issue-reporting-guidelines)
- [Pull Request Guidelines](#pull-request-guidelines)
- [Development Setup](#development-setup)

## Issue Reporting Guidelines
- Before filing a new issue, try to make sure your problem doesn’t already exist.
- The best way to get your bug fixed is to provide a reduced test case.

## Pull Request Guidelines
Before submitting a pull request, please make sure the following is done:

1. Fork the repository and create your branch from `master`.
2. Run `yarn` in the repository root.
5. Format your code with prettier (`yarn prettier:write`).

## Development Setup

You will need [Node.js](http://nodejs.org) at `v8.0.0+` and [Yarn](https://yarnpkg.com/en/) at `v1.2.0+`

After cloning the repo, run:

```bash
$ yarn install
```

After installation, creation a `.env` file with the following content:

```bash
REACT_APP_BASE_URL=http://localhost:3000
REACT_APP_GOOGLE_ANALYTICS_TRACKER=<TrackerId> // only used when NODE_ENV=production
```

After saving the file, run:

```bash
$ yarn start
```