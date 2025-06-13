#!/bin/bash

set -e

command_exists() {
    command -v "$1" >/dev/null 2>&1
}

if command_exists "docker" && docker compose version >/dev/null 2>&1; then
    docker compose pull
    docker compose up -d --remove-orphans
elif command_exists "docker-compose"; then
    docker-compose pull
    docker-compose up -d --remove-orphans
else
    echo "Error: Neither 'docker compose' nor 'docker-compose' is available."
    echo "Please install Docker with Compose plugin or standalone docker-compose."
    exit 1
fi
