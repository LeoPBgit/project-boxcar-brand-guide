# Setting Up GitHub Pages for Project Boxcar Brand Guide

Follow these steps to create a GitHub repository and deploy your brand guide using GitHub Pages:

## Step 1: Create a GitHub Repository

1. Go to [GitHub](https://github.com) and sign in to your account
2. Click the "+" icon in the top-right corner and select "New repository"
3. Enter a repository name: `project-boxcar-brand-guide`
4. Add a description: "A comprehensive guide to the Project Boxcar brand identity and design system"
5. Choose "Public" visibility
6. Do NOT initialize with a README (we already have one)
7. Click "Create repository"

## Step 2: Push Your Code to GitHub

After creating the repository, GitHub will show instructions for pushing an existing repository. Follow these commands in your terminal:

```bash
git remote add origin https://github.com/YOUR-USERNAME/project-boxcar-brand-guide.git
git branch -M main
git push -u origin main
```

Replace `YOUR-USERNAME` with your actual GitHub username.

## Step 3: Enable GitHub Pages

1. Go to your repository on GitHub
2. Click on "Settings" (tab with gear icon)
3. Scroll down to the "GitHub Pages" section
4. Under "Source", select "main" branch
5. Click "Save"
6. Wait a few minutes for GitHub Pages to deploy your site

## Step 4: Access Your Published Brand Guide

After GitHub Pages has finished deploying your site, you'll see a message with the URL where your site is published. It will look like:

```
https://YOUR-USERNAME.github.io/project-boxcar-brand-guide/
```

This URL is now publicly accessible and can be shared with anyone who needs to view the brand guide.

## Updating the Brand Guide

Whenever you make changes to the brand guide:

1. Commit your changes to the local repository
2. Push the changes to GitHub:
   ```bash
   git push origin main
   ```
3. GitHub Pages will automatically update the published site with your changes

## Troubleshooting

- If your site doesn't appear after a few minutes, check the "Actions" tab in your repository to see if there are any deployment errors
- Make sure your repository is public if you're using the free GitHub Pages service
- Verify that the index.html file is in the root of your repository
