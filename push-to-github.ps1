# PowerShell script to push Project Boxcar Brand Guide to GitHub
# Run this script after creating your GitHub repository

# Get the GitHub username from the user
$githubUsername = Read-Host -Prompt "Enter your GitHub username"

# Set the repository name
$repoName = "project-boxcar-brand-guide"

# Rename the branch from master to main (GitHub's default)
Write-Host "Renaming branch from 'master' to 'main'..."
git branch -M main

# Add the GitHub repository as a remote
Write-Host "Adding GitHub repository as remote..."
git remote add origin "https://github.com/$githubUsername/$repoName.git"

# Push the code to GitHub
Write-Host "Pushing code to GitHub..."
git push -u origin main

Write-Host "Done! Your code has been pushed to GitHub."
Write-Host "Now go to https://github.com/$githubUsername/$repoName/settings to enable GitHub Pages."
Write-Host "Once enabled, your brand guide will be available at: https://$githubUsername.github.io/$repoName/"
