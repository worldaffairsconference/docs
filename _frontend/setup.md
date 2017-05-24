---
layout: frontend
title: Development Setup
short: setup
---

*Note: This guide assumes you're using a unix system. If you aren't (e.g. Windows), this setup method is currently unsupported.*

Setting up the WAC website on a local machine is simple. All you need to do is copy-paste a few commands into your command line.

First thing you need is the repository. Clone and get into the directory with this command:

```bash
$ git clone --depth=1 https://github.com/malsf21/world.ac.git && cd world.ac
```

To setup your machine to run the server, you'll need the tools of the trade. The tools we use are:

* [Ruby](https://www.ruby-lang.org/en/), to build our site
* [Bundler](https://bundler.io/), to install our ruby dependencies
* [Git](https://git-scm.com/), to clone this repository
* A Browser, to view the website of course!

Bundler installs these Ruby Dependencies:
* [Jekyll](https://jekyllrb.com), to build and run the website
* [Sass](http://sass-lang.com/), to write CSS better
* [Rake](https://github.com/ruby/rake), to help us check our code
* [HTML Proofer](https://github.com/gjtorikian/html-proofer), to help us check our HTML

If you're using a mac, Ruby comes pre-installed. That makes installing our dependencies pretty easy! (If you don't have ruby installed, you can find instructions [on their website](https://www.ruby-lang.org/en/)).

To install our ruby dependencies, you need [Bundler](https://bundler.io/). You can install it with:

```bash
$ gem install bundler
```

Next step is to setup our dependencies. Just run `./setup.sh`. Boom. Done. `./setup.sh` runs `bundle`, which is why it's required for installation, as well as pulling a few libraries from the internet.

*Note: You might have troubles running `.sh` files if you don't make it an executable. An easy way to do that is to type in `chmod +x ./setup.sh`, and then run `./setup.sh`!*

To actually see the website, run `./start.sh`. Visit what follows the "Server address:" line (which is normally [http://127.0.0.1:4000/](http://127.0.0.1:4000/), but that might change soon)!

And voila! Everything should work for you. If something isn't, please let one of us know on our [issues tracker](https://github.com/malsf21/world.ac/issues).
