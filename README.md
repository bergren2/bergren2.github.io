# apps.heymrbass.com

It's a site for all of my projects.

## Environment Prereqs

You should have the following minimally setup:

- [Git](https://help.github.com/articles/set-up-git) (duh)
- [rbenv](https://github.com/sstephenson/rbenv)
& [ruby-build](https://github.com/sstephenson/ruby-build)

## Initial Project Setup

    $ git clone git@github.com:bergren2/bergren2.github.io.git
    $ cd bergren2.github.io
    $ rbenv install
    $ gem install bundler
    $ bundle install

## Development

Fire up

    $ bin/middleman server

and then check out the site at [localhost:4567](http://localhost:4567).

## Deployment

    $ bin/rake publish

This will publish the finished site to the branch `gh-pages`. At this point you
will need to manually copy the contents of `gh-pages` over to `master` for
publication.

Please see the relevant [issue](https://github.com/neo/middleman-gh-pages/issues/7)
and [pull request](https://github.com/neo/middleman-gh-pages/pull/10) for when
this process gets automated using the [Middleman GitHub Pages gem](https://github.com/neo/middleman-gh-pages).

### Caveats

If your directory is dirty, `git stash` before deploying.

If Rake complains about there already being an `origin` remote, remove the `build`
directory in its entirety.

## Configuration

After launching the development server, navigate to
[localhost:4567/__middleman/config](http://localhost:4567/__middleman/config)
for documentation on configuring Middleman. You should not have to relaunch the
server after making changes to `config.rb`.

## License

See LICENSE for details.
