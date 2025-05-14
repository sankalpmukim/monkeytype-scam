# MonkeyType-Scam

A proof-of-concept experiment that demonstrates how typing tests can be automated by reading words from MonkeyType and sending them to a local server that simulates keyboard typing events.

## Description

This project is an educational experiment that shows how browser-based typing tests like MonkeyType can be intercepted and automated. The script reads the words displayed on MonkeyType in real-time and forwards them to a locally running server that can then simulate keyboard typing events.

**IMPORTANT: This is for educational purposes only.** Using this in actual typing tests violates MonkeyType's terms of service and defeats the purpose of practicing typing skills.

## How It Works

1. The JavaScript code runs in the browser console while on MonkeyType
2. It identifies the current active word and upcoming words
3. It sends this text to a locally running server (on port 8080)
4. The server can then simulate keyboard events to "type" the words

## Setup Instructions

1. Start your local server at http://192.168.43.38 that accepts POST requests at the `/text` endpoint
2. Open MonkeyType in your browser
3. Open the browser console (F12 or Ctrl+Shift+I)
4. Copy and paste the entire script into the console
5. Use the functions provided to control the automation

## Usage

The script provides three main functions:

```javascript
// Start the automation
start();

// Stop the automation
stop();

// Check if text is being correctly read (for debugging)
acc();
```

## How the Script Works

- `acc()`: Collects text from the current active word and upcoming words on MonkeyType
- `send()`: Sends the collected text to your local server
- `sendAll()`: Continuously sends text when enabled
- `start()`: Begins the automation process
- `stop()`: Halts the automation process

## Server Implementation

You'll need to implement a server that:
1. Listens for POST requests at `/text`
2. Accepts JSON data with a `text` property
3. Uses the received text to simulate keyboard events

## Limitations

- The script may break if MonkeyType changes its DOM structure
- Race conditions might occur between reading words and MonkeyType updating them
- Performance depends on network latency between the browser and local server

## Legal Disclaimer

This project is provided for educational purposes only to demonstrate concepts in web scraping and automation. Using this script to manipulate typing test results violates the terms of service of typing test websites and is considered cheating. The author does not condone or encourage any use of this code in violation of terms of service or for dishonest purposes.