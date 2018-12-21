#!/usr/bin/env node
// 👆 Used to tell Node.js that this is a CLI tool

// Pull in our modules
const chalk = require('chalk');
const boxen = require('boxen');

// Because we like console, and captains.log sounds cool
const captains = console;

// Define options for Boxen
const options = {
  padding: 1,
  margin: 1,
  borderStyle: 'single',
};

// Text + chalk definitions
const data = {
  name: chalk.white('Alexander Cano /'),
  handle: chalk.cyan('Geektimus'),
  work: chalk.white('Software Engineer at Klarna'),
  twitter: chalk.cyan('https://twitter.com/geektimus'),
  github: chalk.cyan('https://github.com/geektimus'),
  linkedin: chalk.cyan('www.linkedin.com/in/geektimus'),
  web: chalk.cyan('https://geektimus.me'),
  npx: chalk.white('npx @geektimus/card'),
  labelWork: chalk.white.bold('      Work:'),
  labelTwitter: chalk.white.bold('   Twitter:'),
  labelGitHub: chalk.white.bold('    GitHub:'),
  labelLinkedIn: chalk.white.bold('  LinkedIn:'),
  labelWeb: chalk.white.bold('       Web:'),
  labelCard: chalk.white.bold('      Card:'),
};

// Actual strings we're going to output
const newline = '\n';
const heading = `${data.name} ${data.handle}`;
const working = `${data.labelWork}  ${data.work}`;
const twittering = `${data.labelTwitter}  ${data.twitter}`;
const githubing = `${data.labelGitHub}  ${data.github}`;
const linkedining = `${data.labelLinkedIn}  ${data.linkedin}`;
const webing = `${data.labelWeb}  ${data.web}`;
const carding = `${data.labelCard}  ${data.npx}`;

// Put all our output together into a single variable so we can use boxen effectively
const output = heading
  + newline
  + newline
  + working
  + newline
  + twittering
  + newline
  + githubing
  + newline
  + linkedining
  + newline
  + webing
  + newline
  + newline
  + carding;

const cardMessage = chalk.green(boxen(output, options));
captains.log(cardMessage);
