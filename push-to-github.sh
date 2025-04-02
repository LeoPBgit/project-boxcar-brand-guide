#!/bin/bash
# Bash script to push Project Boxcar Brand Guide to GitHub
# Run this script after creating your GitHub repository

# Get the GitHub username from the user
echo "Enter your GitHub username:"
read githubUsername

# Set the repository name
repoName="project-boxcar-brand-guide"

# Rename the branch from master to main (GitHub's default)
echo "Renaming branch from 'master' to 'main'..."
git branch -M main

# Add the GitHub repository as a remote
echo "Adding GitHub repository as remote..."
git remote add origin "https://github.com/$githubUsername/$repoName.git"

# Push the code to GitHub
echo "Pushing code to GitHub..."
git push -u origin main

echo "Done! Your code has been pushed to GitHub."
echo "Now go to https://github.com/$githubUsername/$repoName/settings to enable GitHub Pages."
echo "Once enabled, your brand guide will be available at: https://$githubUsername.github.io/$repoName/"
