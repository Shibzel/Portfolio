#!/usr/bin/env bash

echo "Pulling latest changes from Git..."
git pull

echo "Updating code..."
code_dir="/var/www/shibzel.com"
sudo rm -r "$code_dir"
sudo mkdir -p "$code_dir"
sudo cp -r ./src/* "$code_dir/"

echo "Updating NGINX config..."
nginx_conf="/etc/nginx/sites-available/shibzel.conf"
sudo cp ./nginx.conf "$nginx_conf"
sudo ln -sf "$nginx_conf" "/etc/nginx/sites-enabled/shibzel.conf"

echo "Restarting NGINX..."
sudo systemctl restart nginx

echo "Done."
