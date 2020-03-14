---
date: 2014-02-20T13:54:06Z
tags:
- debian
- mariadb
- mysql
title: Installing mariadb on debian wheezy
slug: installing-mariadb-on-debian-wheezy/
---

<img class="left" src="/media/images/2014/Feb/mariadb_logo_128.png">There are a few ways of installing mariadb.
You can build from source or you can use the mariadb repository.

I personally use the repository as then the system package manager can handle updating etc.
I normally find packages on servers that are built from source often get left and never get updated.
Also if you are using a vps or limited machine you don't have to strain the system with compiling.

**Add MariaDB  repo to your system**

    apt-get install python-software-properties
    apt-key adv --recv-keys --keyserver keyserver.ubuntu.com 0xcbcb082a1bb943db
    add-apt-repository 'deb http://mirror.i3d.net/pub/mariadb/repo/10.0/debian wheezy main'

**Install MariaDB with**

    apt-get update
    apt-get install mariadb-server

ref: https://downloads.mariadb.org/mariadb/repositories/

*Useful commands for migrating mysql to mariadb*

Backing up mysql databases before migration

    mysqldump -u root -p --all-databases > mysqlbackup.sql

Checking Databases

    mysql -u root -p -Be 'show databases'