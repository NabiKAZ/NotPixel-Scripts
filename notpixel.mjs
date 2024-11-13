/**
 * Taking a picture of the canvas of the NotPixel game
 * Programmer: @NabiKAZ (https://twitter.com/NabiKAZ)
 * Channel: https://t.me/BotSorati
 * Game link: https://t.me/notpixel/app?startapp=f101554083
 * Manual: https://github.com/NabiKAZ/NotPixel-Scripts
 **/

import { Centrifuge } from 'centrifuge/build/protobuf';
import WebSocket from 'ws';
import fs from 'fs';

// Authentication token for connecting to the NotPixel WebSocket server.
const token = 'ey...';
// Path where the WebP image file will be saved after receiving data.
const filePath = './output.webp';

// Initialize Centrifuge client for connecting to WebSocket server
const data = new TextEncoder().encode(JSON.stringify({ token: token }));
const centrifuge = new Centrifuge('wss://notpx.app/connection/websocket', {
    websocket: WebSocket,
    data: data,
});

// Event listener for successful WebSocket connection
centrifuge.on('connected', function (ctx) {
    console.log('WebSocket Connected.');

    const uint8ArrayData = ctx.data;
    if (!uint8ArrayData || !(uint8ArrayData instanceof Uint8Array)) {
        console.log('Error: Provided data is not a valid Uint8Array.');
    } else {
        // Save the received Uint8Array data as a image file
        fs.writeFile(filePath, Buffer.from(uint8ArrayData), (err) => {
            if (err) {
                console.log('Error saving image file:', err.message);
            } else {
                console.log('Image file saved successfully at', filePath);
            }
        });
    }
});

// Event listener for handling different message publications
centrifuge.on('publication', function (ctx) {
    // Check if the message is from the "event:message" channel
    if (ctx.channel === 'event:message') {
        const messages = JSON.parse(new TextDecoder().decode(ctx.data));
        messages.forEach(message => {
            console.log(ctx.channel, message);
        });
        return;
    }

    // TODO: Add handling for additional channels, like "pixel:message".
    // This is where other channels and their data can be processed as needed.

});

// Event listener for handling connection attempts
centrifuge.on('connecting', function (ctx) {
    console.log('Connecting:', ctx);
});

// Event listener for any errors that occur during the connection or data handling process
centrifuge.on('error', function (ctx) {
    console.log('Error:', ctx);
});

// Event listener for disconnection events
centrifuge.on('disconnected', function (ctx) {
    console.log('Disconnected:', ctx);
});

// Connect to the Centrifuge WebSocket server
centrifuge.connect();
