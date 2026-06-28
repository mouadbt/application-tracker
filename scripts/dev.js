const { spawn } = require('child_process');

console.log('\x1b[36m%s\x1b[0m', '🚀 Starting development environment...');

// 1. Start PHP built-in server with 'public' as document root
const php = spawn('php', ['-S', '127.0.0.1:8000', '-t', 'public', 'router.php'], {
  stdio: 'inherit'
});

// 2. Start Tailwind CSS compiler in watch mode
const tailwind = spawn('npx', [
  'tailwindcss',
  '-i', 'public/assets/css/input.css',
  '-o', 'public/assets/css/output.css',
  '--watch'
], {
  stdio: 'inherit',
  shell: true
});

// 3. Start BrowserSync proxying the PHP server
const browserSync = spawn('npx', [
  'browser-sync',
  'start',
  '--proxy', '127.0.0.1:8000',
  '--files', 'public/**/*.php, public/**/*.html, public/**/*.css, app/**/*.php',
  '--no-notify'
], {
  stdio: 'inherit',
  shell: true
});

// Ensure all child processes are killed when the main process exits
const cleanup = () => {
  console.log('\n\x1b[31m%s\x1b[0m', '🛑 Shutting down development servers...');
  php.kill('SIGTERM');
  tailwind.kill('SIGTERM');
  browserSync.kill('SIGTERM');
  process.exit();
};

process.on('SIGINT', cleanup);
process.on('SIGTERM', cleanup);
