---
date: 2014-02-20T13:39:59Z
tags:
- debian
- nginx
title: Installing nginx on debian
slug: installing-nginx-on-debian/
---

<img src="/media/images/2014/Feb/nginx_200.png" alt="nginx">
I normally install nginx on /var/www and use /etc/nginx/sites-available/site.conf to configure each site

eg: /var/www/blog.equk.co.uk/

I don't build it from source as it's probable that it will then never get updated.

**install nginx**

    apt-get install nginx

**create a directory for website data with its own user and group**

    useradd www-data
    groupadd www-data
    usermod -g www-data www-data
    mkdir /var/www
    chmod 755 /var/www -R
    chown www-data:www-data /var/www
    
**create a config file**

/etc/nginx/sites-available/new

    server {
           listen 80;
           server_name new;

           root /var/www/new;
           index index.html index.htm;

           location / {
                   try_files $uri $uri/ index.html;
           }
    }

enable config and restart nginx

    ln -s /etc/nginx/sites-available/new /etc/nginx/sites-enabled/new
    service nginx restart