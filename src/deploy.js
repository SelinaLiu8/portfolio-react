const { execSync } = require('child_process');
const path = require('path');

// Define the build directory path
const buildPath = path.join(__dirname, 'build');

// Initialize Git LFS
try {
  console.log('Initializing Git LFS...');
  execSync('git lfs install', { stdio: 'inherit' });
} catch (error) {
  console.error('Error initializing Git LFS:', error);
  process.exit(1);
}

// Track large files (e.g., .mp4 files)
try {
  console.log('Tracking large files...');
  execSync('git lfs track "*.mp4"', { stdio: 'inherit' });
  execSync('git add .gitattributes', { stdio: 'inherit' });
  execSync('git commit -m "Track large files with Git LFS"', { stdio: 'inherit' });
} catch (error) {
  console.error('Error tracking large files:', error);
  process.exit(1);
}

// Run the existing build command
try {
  console.log('Building the project...');
  execSync('npm run build', { stdio: 'inherit' });
} catch (error) {
  console.error('Error building the project:', error);
  process.exit(1);
}

// Change to the build directory
try {
  console.log('Changing to build directory...');
  process.chdir(buildPath);
} catch (error) {
  console.error('Error changing to build directory:', error);
  process.exit(1);
}

// Deploy the build directory to GitHub Pages
try {
  console.log('Deploying the project...');
  execSync('gh-pages -d .', { stdio: 'inherit' });
} catch (error) {
  console.error('Error deploying the project:', error);
  process.exit(1);
}

console.log('Deployment complete.');

