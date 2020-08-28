#!/bin/bash
perf script > /tmp/out.perf
burn convert --html /tmp/out.perf > flame.html