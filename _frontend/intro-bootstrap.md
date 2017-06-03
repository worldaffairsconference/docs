---
layout: frontend
title: Intro to Bootstrap
short: bootstrap
---

[Bootstrap](http://getbootstrap.com/) is a front-end HTML, CSS, and JS framework that's often used to help skeleton structure website front-ends. On the WAC website, we use [Bootstrap 4 (currently alpha)](https://v4-alpha.getbootstrap.com/) to help us write code that is simple to use, mobile responsive, and highly tested.

<div class="card card-block card-outline-success mb-2">
  <span class="text-success"><span class="fa fa-smile-o"></span> Fun Fact</span>
  <p>
    This documentation website also uses Bootstrap, albeit a pre-compiled version to save us the hassle.
  </p>
</div>

Normally, we compile Bootstrap [from source](https://github.com/malsf21/world.ac/blob/master/setup.sh) using [SASS](http://sass-lang.com/): this is mostly so we can have a self-sufficient build process, and have the possibility (in the future) to add custom SCSS overrides. You can find out more about our build process in our build and deploy article.


## Resources

This article won't go too in-depth on Bootstrap, but there are some great online resources to help you out! Bootstrap themselves have quite [verbose documentation](https://v4-alpha.getbootstrap.com/getting-started/introduction/) on each element it provides. If you need a bit of catching-up on HTML and CSS, [Marksheet](http://marksheet.io/) is a great online book that looks super cool and goes over the basics of HTML and CSS. As well, you're always able to ask any of our other colleagues if you need any help.

In this article, we'll go over some common uses of Bootstrap elements on the WAC website.

## Example: Cards

<div class="card card-block card-outline-primary mb-3">
  <h3 class="card-title text-primary"><span class="fa fa-book"></span> Example</h3>
  <h4 class="card-subtitle text-muted">Bootstrap Cards</h4>
  <p class="card-text">
    Cards are a cool way to introduce content blocks, grabbing just enough of the user's attention but not being overbearing.
  </p>
</div>


```html
<div class="card card-block card-outline-primary">
  <h3 class="card-title text-primary"><span class="fa fa-book"></span> Example</h3>
  <h4 class="card-subtitle text-muted">Bootstrap Cards</h4>
  <p class="card-text">
    Cards are a cool way to introduce content blocks, grabbing just enough of the user's attention but not being overbearing.
  </p>
</div>
```

<div class="showcase-black">
  <div class="card card-block">
    Cards are especially useful when they contrast colour with backgrounds, separating the foreground as useful information the reader needs to look at.
  </div>
</div>

```html
<div class="showcase-black">
  <div class="card card-block">
    Cards are especially useful when they contrast colour with backgrounds, separating the foreground as useful information the reader needs to look at.
  </div>
</div>
```
As you can see from the above examples, cards are normally used to introduce content blocks on the website, especially with a white-on-black style. Use cards for general descriptions, showcasing special speakers, and any other general-purpose content.

Every card starts with a ```div``` with ```class="card card-block"```; then, you can add outlines, pictures, or other cool shenanigans using modifier classes. You can find more information about Bootstrap cards from the [documentation page](https://v4-alpha.getbootstrap.com/components/card/).

## Example: Navbar

<nav class="navbar navbar-toggleable-md navbar-light bg-faded mb-2">
  <button class="navbar-toggler navbar-toggler-right" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
    <span class="navbar-toggler-icon"></span>
  </button>
  <a class="navbar-brand" href="https://2017.world.ac/index-old.html"><img class="nav-image" src="{{site.baseurl}}/img/wac_logo_full.png" alt="WAC Logo"/></a>

  <div class="collapse navbar-collapse" id="navbarSupportedContent">
    <ul class="nav navbar-nav mr-auto">
      <li class="nav-item">
        <a class="nav-link" href="https://2017.world.ac/keynote/">Keynote</a>
      </li>
      <li class="nav-item">
        <a class="nav-link" href="https://2017.world.ac/addresses/">Addresses</a>
      </li>
      <li class="nav-item">
        <a class="nav-link" href="https://2017.world.ac/plenaries/">Plenaries</a>
      </li>
      <li class="nav-item">
        <a class="nav-link" href="https://2017.world.ac/faq/">FAQ</a>
      </li>
      <li class="nav-item">
        <a class="nav-link" href="https://2017.world.ac/staff/">Staff</a>
      </li>
      <li class="nav-item">
        <a class="nav-link" href="https://2017.world.ac/contact/">Contact</a>
      </li>
    </ul>
    <ul class="navbar-nav float-lg-right">
      <li class="nav-item">
        <a class="btn btn-outline-primary" href="https://2017.world.ac/reg/" data-proofer-ignore>Register</a>
      </li>
    </ul>
  </div>
</nav>

```html
<nav class="navbar navbar-toggleable-md navbar-light bg-faded">
  <button class="navbar-toggler navbar-toggler-right" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
    <span class="navbar-toggler-icon"></span>
  </button>
  <a class="navbar-brand" href="https://2017.world.ac/index-old.html"><img class="nav-image" src="{{site.baseurl}}/img/wac_logo_full.png" alt="WAC Logo"/></a>

  <div class="collapse navbar-collapse" id="navbarSupportedContent">
    <ul class="nav navbar-nav mr-auto">
      <li class="nav-item">
        <a class="nav-link" href="https://2017.world.ac/keynote/">Keynote</a>
      </li>
      <li class="nav-item">
        <a class="nav-link" href="https://2017.world.ac/addresses/">Addresses</a>
      </li>
      <li class="nav-item">
        <a class="nav-link" href="https://2017.world.ac/plenaries/">Plenaries</a>
      </li>
      <li class="nav-item">
        <a class="nav-link" href="https://2017.world.ac/faq/">FAQ</a>
      </li>
      <li class="nav-item">
        <a class="nav-link" href="https://2017.world.ac/staff/">Staff</a>
      </li>
      <li class="nav-item">
        <a class="nav-link" href="https://2017.world.ac/contact/">Contact</a>
      </li>
    </ul>
    <ul class="navbar-nav float-lg-right">
      <li class="nav-item">
        <a class="btn btn-outline-primary" href="https://2017.world.ac/reg/" data-proofer-ignore>Register</a>
      </li>
    </ul>
  </div>
</nav>
```

Navbars are quite complicated, and Bootstrap helps us out by templating one out for us. While the structure of the entire nav is quite complicated (there is a [documentation page](https://v4-alpha.getbootstrap.com/components/navbar/)), there are a few things that you need to keep in mind:

* The structure of a navbar goes ```nav``` > ```div``` > ```ul``` > ```li``` > content.
* Keep mobile responsiveness as a top priority
* Use the correct ```nav-*``` classes for each element of your nav. You can find more info on the documentation site.
* Use float utilities such as `float-lg-right` to position nav elements.

In terms of our own style:
* We keep our navbar in ```_includes/navbar.html``` and use ```{{ "{% include navbar.html " }}%}``` to keep styling consistent across the board
* We always use ```navbar-fixed-top``` as a stylistic element
