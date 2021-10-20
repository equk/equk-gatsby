#!/usr/bin/env node
/* eslint-disable no-console */
/*!
 * equk-gatsby-postbuild v1.0.0
 *
 * Copyright (c) 2020 B.Walden.  All rights reserved.
 *
 * Licensed under the MIT License
 *
 * (LICENSE file should be included with script)
 *
 */

const fs = require('fs')

const publicFolder = `${__dirname}/public/`
const outFile = `${__dirname}/public/admin/cms.css`

if (!fs.existsSync(publicFolder)) {
  console.log(`ERROR: posts folder not found: ${publicFolder}`)
  process.exit(1)
}

const css = fs.readdirSync(publicFolder).filter((fn) => fn.endsWith('.css'))

if (css.length === 1) {
  console.log(`INFO: copying ${publicFolder + css[0]} to ${outFile}`)
  fs.copyFile(publicFolder + css[0], outFile, (err) => {
    if (err) throw err
    console.log(`${publicFolder + css[0]} was copied to ${outFile}`)
  })
} else {
  console.log(`ERROR: ${css.length} files found expected 1`)
  process.exit(1)
}

process.exit(0)
