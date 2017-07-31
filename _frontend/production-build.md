---
layout: frontend
title: Building
short: build
---

We have an interesting build process that makes our life much easier. Our build process consists of a few steps:

1. Resource Setup
2. Resource Compiling
3. Jekyll Build

While there isn't a set-in-stone distinction between each step, understanding what each step does can help you understand our build process.

## Setup

Resource Setup is a one-time dependency setup: what it does is pull external dependencies from online libraries, so we can get specific versions of dependencies without committing them to our repository. You should use the setup script every time you create a new development or production instance.

Currently, we pull Bootstrap, jQuery, tether, and Font Awesome. In addition, we run `bundle` to install our RubyGems dependencies.

Setup occurs when you run `setup.sh`. You can check that file to learn more about how it works.

## Compiling

Similar to "traditional" programming, compiling takes all of our precompiled files and turns them into usable production files. Currently, the thing that happens in the compiling step is compiling our SASS scss files into usable CSS. This happens in `start.sh`, which compiles our local version of Bootstrap and starts Jekyll, which in itself compiles `style.scss`.

The compile step is the least distinct out of the three: most of it is executed in `jekyll build`, but it's good to know the distinction. In addition, we might add more compiling steps for our Javascript if it becomes needed.

## Building

The final step in the build process is `jekyll build`. Basically, this'll just compile all the Jekyll template files into viewable, usable HTML & CSS. You can learn more about the Jekyll build process in the section on Jekyll.

One thing to note is that you should technically use `bundle exec jekyll build`: this'll execute jekyll using bundle, which can resolve some dependency and permission issues.

You can run this either with `bundle exec jekyll build` or using `./start.sh`.

### Serving

During development, it might not be practical to use `bundle exec jekyll build`. You can use `bundle exec jekyll serve` to have a live auto-update build, which updates your Jekyll site as you make changes.

## Cleanup

If you want to clean up everything created in `setup.sh`, you can use `unsetup.sh` to remove everything. This is usefull when you're troubleshooting some problems that you might encounter during development.
