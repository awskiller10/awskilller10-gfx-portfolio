// Script for logging current date and time

// Function to get current UTC Date and Time
function getCurrentUTCTime() {
    const now = new Date();
    return now.toISOString().replace('T', ' ').substring(0, 19);
}

console.log('Current Date and Time (UTC - YYYY-MM-DD HH:MM:SS formatted):', getCurrentUTCTime());