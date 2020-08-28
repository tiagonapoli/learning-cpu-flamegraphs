#!/bin/bash
rm -rf perf.data
perf record -F 99 -g -- node server.js &
SERVER_PID=$!
autocannon -d 10 localhost:3000
kill $SERVER_PID