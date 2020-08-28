#!/bin/bash
rm -rf logs
mkdir logs
node --prof server.js &
SERVER_PID=$!
autocannon -d 10 localhost:3000
kill $SERVER_PID
mv isolate* logs/
0x --visualize-only logs