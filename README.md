# apps.heymrbass.com

It's a site for all of my projects.

## Prereqs

- [Node](https://nodejs.org/en/)
- [nodenv](https://github.com/nodenv/nodenv)
  - `$ nodenv install`

## Setup

    $ nodenv install
    $ npm install

## Development

    $ gulp server

Then head to [localhost:8080](http://localhost:8080). Magic!

## Build

This will create a production-ready static site in the `dist` directory.

    $ gulp build

## Deploy

Deploys will always try to `build` first.

    $ gulp deploy

## License

See LICENSE for details.
