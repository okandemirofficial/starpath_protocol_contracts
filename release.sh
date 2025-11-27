#!/usr/bin/env bash

set -e

pnpm build

rm -rf ~/pers/starpath_protocol_contracts_release/*
cp -r out/* ~/pers/starpath_protocol_contracts_release/

cd ~/pers/starpath_protocol_contracts_release

# Check if this is a git repository
if [ ! -d ".git" ]; then
  echo "Warning: starpath_protocol_contracts_release is not a git repository."
  echo "Run: git init && git remote add origin <your-repo-url>"
  exit 0
fi

# Check if remote is configured
if [ -z "$(git remote)" ]; then
  echo "Warning: No git remote configured."
  echo "Run: git remote add origin <your-repo-url>"
  exit 0
fi

if [ -n "$(git status --porcelain)" ]; then
  git add -A
  git commit -m "Deploy web $(date -u +'%Y-%m-%d %H:%M:%S UTC')"
  git push -u origin main
else
  echo "No changes to commit."
fi

