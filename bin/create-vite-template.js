#!/usr/bin/env node

const { execSync } = require('child_process');
const path = require('path');
const fs = require('fs');

const projectName = process.argv[2];

if (!projectName) {
  console.error('Please specify the project directory:');
  console.error(' npx create-my-vite-template <project-directory>');
  process.exit(1);
}

const projectPath = path.resolve(process.cwd(), projectName);

if (fs.existsSync(projectPath)) {
  console.error(`The directory ${projectName} already exists.`);
  process.exit(1);
}

console.log(`Creating a new project in ${projectPath}...`);
execSync(`git clone https://github.com/bluka1/template.git ${projectPath}`, {
  stdio: 'inherit',
});

console.log('Installing dependencies...');
execSync(`cd ${projectPath}`, { stdio: 'inherit' });

console.log('Run npm install && npm run dev');