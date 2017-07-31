---
layout: frontend
title: Deploying
short: deploy
---

Deploying is quite similar to building, but this is done on our webserver instead of a local development machine. Though, you're deploying to production, and you've got to be careful! Here's a step-by-step on how to deploy to our production environment.

## Local Testing

Before you deploy to live, you want to make sure that your code has no errors! While it's tough to specifically spot errors in your own code, we have a light system that does some for you (though it's quite limited for now). To do this, run this following command on your local development instance.

```
$ bundle exec rake test
```

This essentially runs `rake` using `bundle`, which is our ruby-based testing suite. Currently, what `rake test` does is quite limited: it ensures that `bundle exec jekyll build` runs without any compiling errors, and it runs [html-proofer](https://github.com/gjtorikian/html-proofer), which checks your HTML to ensure that there aren't any unclosed tags or dead-end links. In the future, we're considering running CSSlint and JShint (or some equivalent), but that'll come in time.

## Development Branch

At this point, you should've run `bundle exec rake test` and had no errors. If you haven't, we (and Travis) are going to be quite angry. Now, you need to push your code to a new testing branch. There are a few ways to interface with git to do this: we recommend [GitHub Desktop](https://desktop.github.com), which is a Desktop GUI that can help newcomers use Git quickly. You can also use the command line.

```
$ git checkout your-branch-name
Make your changes
$ git add path/to/edited/files
$ git commit
Fill out a relatively descriptive commit message
$ git push origin your-branch-name
```

Do not use `git merge` on our master branch: you'll get in trouble! Instead...

## Pull Requests

If you noticed, we aren't directly pushing to master; rather, we're going to push to an individual branch and then send what we call a pull request. Basically, this is a check process where someone else (read: your lead developer/DG/chair) checks over your code, as well as an automated system called [Travis](https://travis-ci.org). Let's go through a pull request!

<img class="img-fluid" src="{{site.baseurl}}/img/github-flow-cheatsheet.png" alt="GitHub flow cheatsheet, courtesy of GitHub Education" />

Your first step is to make sure your branch shows up on our git repository. Head to whatever repo you're editing (e.g. `https://github.com/worldaffairsconference/docs/`) and check the branches to make sure it's there.

Then, we're going to send a pull request. Click the Pull Request button on our repository:

<div class="alert alert-warning">
  The repository and content depicted in these screenshots isn't the WAC repository, but the idea is the same.
</div>

<img class="img-fluid" src="{{site.baseurl}}/img/branch-pr.png" alt="What the Pull Request tab looks like on the GitHub website." />

You should get a screen that looks like this:

<img class="img-fluid" src="{{site.baseurl}}/img/compare-pr.png" alt="What the Compare Pull Request screen looks like on the GitHub website." />

Make sure the "base fork/branch" is the master branch, and the "head fork/branch" is your branch.

Press that "Create pull request" button. Now, you should be a screen like this:

<img class="img-fluid" src="{{site.baseurl}}/img/create-pr.png" alt="What the Create Pull Request screen looks like on the GitHub website." />

Fill out the paragraph description (it'll make things easier on us), and click "Create pull request"! And you're done! Wait until your pull request gets responded to: we'll either merge it, and put it on the website, or deny it, and let you know what you need to fix so it becomes mergeable.

<img class="img-fluid" src="{{site.baseurl}}/img/success-pr.png" alt="A merged pull request on the GitHub website." />

If your PR gets accepted, head on to the next step; if it doesn't, fix what's wrong with your branch and send another one.

## Production Deploy

Now, assuming your PR got accepted, you're ready for our next step! Log into our production server using SSH (if you don't know what those words meant, talk to your lead dev or Director General).

```
$ ssh account@our.ip.address
```

Then, `cd` to the repository you want to update.

```
$ cd path/to/repository
```

Now, all you need to do is run our build setup! Easy as cake, since you should've already done this.

```
$ git pull
$ bundle exec jekyll build
$ bundle exec rake test
```

If you have no errors, your production deploy was successful! Head to `world.ac` (or whatever project you're working on) and double-check that your changes were there. If they are, congratulations! You successful deployed your changes to our production server!
