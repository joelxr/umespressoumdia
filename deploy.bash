#!/usr/bin/env bash
set -e

SOURCE_BRANCH="master"
TARGET_BRANCH="gh-pages"
REPO=`git config remote.origin.url`
SSH_REPO=${REPO/https:\/\/github.com\//git@github.com:}
SHA=`git rev-parse --verify HEAD`

git clone $REPO out
cd out
git checkout $TARGET_BRANCH || git checkout --orphan $TARGET_BRANCH
cd ..

rm -rf out/**/* || exit 0

#grunt build

cd out
git config user.name "Travis CI"
git config user.email "$COMMIT_AUTHOR_EMAIL"

if [ -z `git diff --exit-code` ]; then
    echo "No changes to the output on this push; exiting."
    exit 0
fi

git add .
git commit -m "Deploy to GitHub Pages: ${SHA}"
openssl aes-256-cbc -K $encrypted_5bae8f0a9a70_key -iv $encrypted_5bae8f0a9a70_iv -in private_key.enc -out private_key -d
chmod 600 private_key
eval `ssh-agent -s`
ssh-add private_key

git push $SSH_REPO $TARGET_BRANCH