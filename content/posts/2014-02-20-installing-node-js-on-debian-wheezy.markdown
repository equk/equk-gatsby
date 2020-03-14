---
date: 2014-02-20T13:55:47Z
tags:
- debian
- nodejs
title: Installing node.js on debian wheezy
slug: installing-node-js-on-debian-wheezy/
---

<img class="left" src="/media/images/2014/Feb/nodejs_logo_128.png">There are a few ways of installing nodejs on debian. 
You can build from source or you can use the backports repository.

I personally use the repository as then the system package manager can handle updating etc. 
I normally find packages on servers that are built from source often get left and never get updated. 
Also if you are using a vps or limited machine you don't have to strain the system with compiling.

**install nodejs**

    add-apt-repository 'deb http://ftp.us.debian.org/debian wheezy-backports main'
    apt-get update
    apt-get install nodejs-legacy

**install npm**

    cd /tmp
    wget https://www.npmjs.org/install.sh --no-check-certificate
    chmod +x install.sh
    ./install.sh