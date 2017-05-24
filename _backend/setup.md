---
layout: backend
title: Development Setup
short: setup
---
## Setup

In order to run the Prefects Cup Website locally, you'll need a few things.

* A MySQL server, to store and access the information used in the web application
* A PHP/Apache server stack, to run the PHP code that's used in the WebApp
* [Git](https://git-scm.com/), to clone this repository
* A Browser, to view the website of course!

To download this repository, just type this in your command line:

```
git clone https://github.com/malsf21/world.ac-reg.git
```

### Server Installations

You can get a MySQL server + PHP/Apache Server, all bundled in one, using some packages. Which one you'll use depends on your Operating System.

* Windows: [WAMP](http://www.wampserver.com/en/)
* Mac: [MAMP](https://www.mamp.info/en/)
* Linux: While there isn't a dedicated bundle installer, you can follow [these steps](https://www.digitalocean.com/community/tutorials/how-to-install-linux-apache-mysql-php-lamp-stack-on-ubuntu) to get LAMP running.

After you're done that, we need to configure our MySQL Database. Luckily, I've done most of the work for you. You need to do **two things**.

### 1. Change the root password in common.php

In `common.php`, there's a section of code that looks like this:

```php

$username = "root";
$password = "";
$host = "localhost";
$dbname = "wac";

```

Ensure that your variables look like that. Then, we're going to change the `$password` string to "root".

It should now look like this:

```php

$username = "root";
$password = "root";
$host = "localhost";
$dbname = "wac";

```

### 2. Run the MySQL Setup Script

Now, you can run your WAMP/LAMP/MAMP configuration. Included in this repository is a file named `setup.sql`. Running this SQL script sets up all the Databases and Tables you'll need to run the PC website locally.

### Conclusion

Once you're done these two steps, simply visit wherever the world.ac-reg repository was placed (we recommend placing the repository in your webroot, which depends on the server installation you use). And ta-da, you have your own working version of the Prefects Cup Website!


## Credit
* [Bootstrap](http://getbootstrap.com), the framework I've used for responsive utilities, pretty web UI elements, and robust Javascript.
* [Charts.js](http://www.chartjs.org/), the superior charts library I've used to make those sexy graphs.
* [Font Awesome](https://fortawesome.github.io), the collection of nice icons that I use.
* [Nick Elder](http://elder.ca), the cool dude who maintained the website before me.
* [Jack Sarick](http://sarick.tech), the cool dude who built a lot of the login framework that I base this one off of (for WAC).
