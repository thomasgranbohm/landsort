#!/bin/bash

echo "Shutting down containers...";
docker-compose -f production.yaml down

echo "";
echo "Pulling latest commits.";
git pull

echo "";
echo "Install new dependencies";
docker-compose -f production.yaml run backend bash -c "npm i"
docker-compose -f production.yaml run frontend bash -c "npm i"

echo "";
echo "Starting new containers.";
docker-compose -f production.yaml up -d

echo "";
echo "Attaching logs...";
docker-compose -f production.yaml logs -f
