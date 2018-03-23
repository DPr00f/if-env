#!/usr/bin/env node

var conditions = process.argv.slice(2);

conditions.forEach((env) => {
  if (!process.env[env]) {
    process.exit(1);
  }
});

process.exit(0);
