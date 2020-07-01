---
title: "Projects"
template: "page"
slug: "projects"
image: ../../static/media/images/2016/08/rasppis_banner.jpg
description: projects
---

<i class="fa fa-microchip"></i> Hardware
<br/><i class="fa fa-code"></i> Software
<br/><i class="fa fa-github"></i> Opensource

<br/><i class="fa fa-code"></i> <i class="fa fa-github"></i> install firefox on windows 10 using `powershell`
<br/><i class="fa fa-code"></i> <i class="fa fa-github"></i> postscreen whitelist/blacklist using `spf`
<br/><i class="fa fa-code"></i> <i class="fa fa-github"></i> extract mailserver list from `spf`
<br/><i class="fa fa-code"></i> torbrowser update checker ( golang `net/http` )
<br/><i class="fa fa-code"></i> <i class="fa fa-github"></i> automated linux dotfiles
<br/><i class="fa fa-code"></i> <i class="fa fa-github"></i> gatsby new post cli in `nodejs` (no deps)
<br/><i class="fa fa-code"></i> <i class="fa fa-github"></i> use medium-zoom in `vuejs` & `nuxtjs`
<br/><i class="fa fa-code"></i> <i class="fa fa-github"></i> unsplash json api search using `react.js`
<br/><i class="fa fa-code"></i> golang api server using `net/http` & `chi`
<br/><i class="fa fa-code"></i> rust async server using `tokio`
<br/><i class="fa fa-code"></i> `QEMU` ARMv7 emulation in linux
<br/><i class="fa fa-code"></i> <i class="fa fa-github"></i> `osint` tool for inspecting tls for subdomains
<br/><i class="fa fa-code"></i> <i class="fa fa-github"></i> firefox profiles for windows using `powershell`
<br/><i class="fa fa-code"></i> <i class="fa fa-github"></i> firefox profile tools
<br/><i class="fa fa-code"></i> <i class="fa fa-github"></i> torjail - sandboxed torbrowser
<br/><i class="fa fa-code"></i> <i class="fa fa-github"></i> inspect http request headers using go `net/http`
<br/><i class="fa fa-code"></i> <i class="fa fa-github"></i> unsplash json api search using `vanilla javascript`
<br/><i class="fa fa-code"></i> <i class="fa fa-github"></i> linux audio device switcher with `ladspa` multiband eq
<br/><i class="fa fa-code"></i> <i class="fa fa-github"></i> nodejs api server template using `express`
<br/><i class="fa fa-code"></i> Chromium OS & Cloudready on `QEMU`
<br/><i class="fa fa-microchip"></i> <i class="fa fa-code"></i> BT HomeHub 5a `OpenWrt`
<br/><i class="fa fa-microchip"></i> <i class="fa fa-code"></i> Acer Chromebook C7/C710 `Coreboot`
<br/><i class="fa fa-microchip"></i> <i class="fa fa-code"></i> Android Testing Tools (ROM Patching)
<br/><i class="fa fa-microchip"></i> <i class="fa fa-code"></i> ARM64 Bootloader Testing (`U-Boot`)
<br/><i class="fa fa-microchip"></i> <i class="fa fa-code"></i> <i class="fa fa-github"></i> BlackWidow Macro Keys In Linux
<br/><i class="fa fa-code"></i> <i class="fa fa-github"></i> Cloudflare Iptables
<br/><i class="fa fa-microchip"></i> <i class="fa fa-code"></i> Netgear wnr2200 `OpenWrt` USB Patches & `extroot`
<br/><i class="fa fa-code"></i> <i class="fa fa-linux"></i> Mail Console
<br/><i class="fa fa-code"></i> <i class="fa fa-linux"></i> Mail CLI Admin Tools (`python` & `mysql`)
<br/><i class="fa fa-code"></i> <i class="fa fa-linux"></i> Archlinux package migration scripts
<br/><i class="fa fa-code"></i> <i class="fa fa-github"></i> Google Chrome Ramdisk Cache
<br/><i class="fa fa-code"></i> <i class="fa fa-github"></i> Windows Firewall Blocklists (`powershell`)
<br/><i class="fa fa-code"></i> <i class="fa fa-github"></i> Windows 10 Tweak Tools (`powershell`)
<br/><i class="fa fa-code"></i> <i class="fa fa-github"></i> Linux Logout GUI Using `python` `tkinter` (tk-logout)
<br/><i class="fa fa-code"></i> <i class="fa fa-github"></i> Web App Using `lastfm` API In `php` (lastfm-feed)
<br/><i class="fa fa-code"></i> <i class="fa fa-github"></i> Wordpress Security Modules
<br/><i class="fa fa-code"></i> <i class="fa fa-github"></i> Samsung i5700 Android dalvik-relocate
<br/><i class="fa fa-code"></i> <i class="fa fa-github"></i> Mac OSX Backup Script with Growl Notification
<br/><i class="fa fa-code"></i> <i class="fa fa-github"></i> Linux Backup with Notification
<br/><i class="fa fa-code"></i> Wordpress Picasa Gallery
<br/><i class="fa fa-code"></i> Wordpress Modules

---

## Postfix Postscreen Whitelist

CLI app to automate whitelisting (or blacklisting) of known email servers by iterating over `spf` records.

Built to work with domains that have email servers spanning over multiple `spf` lists.
<br/>*(see `google.com` example below)*
```
    └── google.com
        └── v=spf1 include:_spf.google.com
            └── v=spf1 include:_netblocks.google.com include:_netblocks2.google.com include:_netblocks3.google.com
```
App whitelists `IPV4` & `IPV6` ranges using `CIDR` blocks.

## BT HomeHub 5a OpenWrt

<a href="/2016/10/04/unlocking-bt-homehub-5a/">

![hh5a_img](/media/images/2016/10/bt_hh5a_banner.jpg)

</a>

Hardware modifications to allow connection & booting over UART<br />
Custom firmware built from development/testing branch of OpenWrt

## Raspberry Pi Zero

<p class="text-center"><img class="border" src="/media/images/2016/06/rasp_zero_banner.jpg"></p>

I'm using the Raspberry Pi Zero as it has low power usage & has the GPIO required.
<br /><a href="http://blog.pimoroni.com/raspberry-pi-3/" target="_blank">The Raspberry Pi Zero draws 120mA under load which is a huge difference to the Raspberry Pi 3 which draws 750mA</a>

<div class="columns">
    <div class="column">
        <ul>
        <li>SPI</li>
        <li>I2C</li>
        <li>UART</li>
        </ul>
    </div>
    <div class="column">
        <ul>
        <li>JTAG</li>
        <li>3.3V Power</li>
        <li>5V Power</li>
        </ul>
    </div>
</div>

These little boards can be useful for flashing & debugging hardware.
<br />They also work well for testing RF security using an expansion board (RFID RC522).

## Acer Chromebook C7/C710 Coreboot

Coreboot opensource firmware image, allowing the chromebook to boot into linux using different payloads eg: seabios, grub2, tianocore (UEFI).

<p class="text-center"><img class="border" src="/media/images/2014/Aug/arch_ssd_chromebook_sm.jpg" alt="arch_ssd_chromebook"></p>

Building coreboot is pretty easy, the instructions on the wiki are quite clear.<br/>
Just make sure you know what you are doing as you could brick your chromebook.

For more info on building coreboot read my blog post [Building Coreboot in 2020](/2020/04/19/building-coreboot-2020)

I have a <a href="https://github.com/equk/c710" target="_blank">repo on <i class="fa fa-github-alt"></i> github for my linux configs specific to the c710.</a>

## Android Testing Tools

Tools to help with testing, debugging & reverse engineering of android devices.

**Main Components**

- bootloader dumping tool (boot.bin)
- device tree extraction script (dtb.img)
- Android ROM extraction script

The ROM extraction script allows the ability to dump a full ROM to external storage, the script segments the storage into sections making it easier to look at applications & system.
This tool makes the job of security testing easier & also helps in the creation of custom ROM patches. (eg: enable google widevine patch)

## ARM64 Bootloader Security Testing

<p class="text-center"><img class="border" src="/media/images/2016/05/aarm64_serial_001.jpg"></p>

Testing `U-Boot` related security on specific ARM64 implementations & debugging using serial interface.

It is possible read & write to `U-Boot` from within android without any need for root on many of these devices (not just development boards).
It is also possible to inject custom scripts & binaries directly to the bootloader.

<p class="text-center"><a href="https://twitter.com/equilibriumuk/status/717669326489313280" target="_blank"><img class="border" src="/media/images/2016/05/arm64_cpuinfo.jpg"></a></p>

Some simple examples of this are injecting scripts into `preboot` or `bootcmd`.
Both result in scripts being run before the target OS.

## BlackWidow Macro Keys In Linux

<a href="/2016/01/23/blackwidow-macro-keys-in-linux/"><img src="/media/images/2016/01/bwidow_header_white.jpg" alt="bwidow_header"></a>

This is a C program which sends the init code from Razer windows proprietary drivers to initialize the 'macro' keys on Razer BlackWidow keyboards on Linux.

Initialization code was obtained using <a href="https://wiki.wireshark.org/CaptureSetup/USB" target="_blank">Wireshark USB Capture</a>.

```bash
Razer BlackWidow Macro Keys v1
Razer BlackWidow Device Found
Sending data:
    00 00 00 00 00 02 00 04
    02 00 00 00 00 00 00 00
    00 00 00 00 00 00 00 00
    00 00 00 00 00 00 00 00
    00 00 00 00 00 00 00 00
    00 00 00 00 00 00 00 00
    00 00 00 00 00 00 00 00
    00 00 00 00 00 00 00 00
    00 00 00 00 00 00 00 00
    00 00 00 00 00 00 00 00
    00 00 00 00 00 00 00 00
    04 00
Transmitted: 90
```

Source code is available on <a href="https://github.com/equk/blackwidow_macro" target="_blank"><i class="fa fa-github-alt"></i> github</a> under MIT license.

<br />

## torjail - sandboxed torbrowser

Download, verify & run torbrowser in a sandbox utilizing seccomp policies and Xephyr.

**features**

- [x] downloads torbrowser from torproject.org
- [x] verifies package before extraction
- [x] sets up a working env
- [x] runs tor in a sandbox
- [x] runs in /tmp/ so any changes are not saved
- [x] runs in its own xephyr dwm session
- [x] has sha256 verification
- [x] works on 32bit & 64bit linux
- [x] stores everything in ~/.torjail
- [x] version checking & updating
- [x] gpg verification of downloads

<a href="/2016/01/13/torjail-sandboxed-torbrowser/"><img class="border" src="/media/images/2016/01/tor_screen_sm.jpg" alt="tor_screen"></a>

Source code available on <a href="https://github.com/equk/torjail" target="_blank"><i class="fa fa-github-alt"></i> github</a> under MIT license.

<br />

## Netgear wnr2200 OpenWrt

<a href="/2015/07/13/netgear-wnr2200-openwrt-usb-support/"><img src="/media/images/2015/07/wnr2200_head.jpg" alt="wnr2200_img"></a>

Custom Patch to allow usb storage<br />
Custom script to initialize usb at boot to allow overlay pivot<br />
Custom build of OpenWrt

## mail console

Extension of mail server cli tools, designed to be easier to use with the possibility of expanding it to include live mail server statistics.

<p class="text-center"><img src="/media/images/2015/07/mail_console_v01.gif"></p>

## Windows Powershell Tools

<p class="text-center"><img class="border" src="/media/images/2015/09/powershell_banner.jpg" alt="powershell banner"></p>

<a href="https://equk.co.uk/tag/powershell">Powershell</a> is great for automating things using group policies etc on large networks.
I have a few opensource projects on <a href="https://github.com/equk/windows" target="_blank"><i class="fa fa-github-alt"></i> github</a> to help Windows users & administrators.
Some examples:

- [x] Windows Firewall Blocklists - use IP blocklists
- [x] Windows 10 Update - ask before installing updates
- [x] Windows 10 Disable Telemetry
- [x] Windows Hosts Blocklists
- [x] Windows 10 Disable Services
- [x] Windows 10 Disable Scheduled Tasks

## mail server cli tools

Command Line Tools for administering my mailserver stack.
Written in python, allows a admin to create/delete mailboxes, domains, subdomains & aliases.
Also has the ability to do a password reset on users mailboxes using urandom. (passwords are saved with salted hash & users can change with web interface once logged in)

```bash
./query.py
*****************************************************************
        ./query.py - equk.co.uk
*****************************************************************
    Copyright (C) 2014  Bradley Walden
*****************************************************************
    This tool will query the postfix MySQL database
*****************************************************************

Email Addresses
===============
e: postmaster@debian.test
e: testing@debian.test
e: test@debian.test

Virtual Domains
===============
d: debian.test
d: local.test

Email Aliases
===============
a: admin@debian.test ==> postmaster@debian.test
```
