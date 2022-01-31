#!/bin/bash
set -o errexit

pushd /opt/$1
mkdir -p /data/pigeon-beacon/store
npm install
rm -rf store
ln -s ../../data/pigeon-beacon/store store
npm prune --production
dnf autoremove -y tar gcc make git npm
dnf clean all
popd

