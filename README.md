# NotPixel
NotPixel is a Telegram airdrop clicker game. Previously, the game canvas could be downloaded from a direct URL. But with the new update, this has become difficult and requires authentication and is done by websocket. I reverse-engineered it and simplified its core in this project. Now you can download and save the picture of the game canvas.\
This is my referral link: [https://t.me/notpixel/app?startapp=f101554083](https://t.me/notpixel/app?startapp=f101554083)

# Sample output:
![sample output of NotPixel bot](https://github.com/user-attachments/assets/fad72319-edf4-4116-b05f-384b9e514e45)

# Run
- Install `nodejs`.
- Install required packages in the program path: `npm install`
- Fill the `token` and `filePath` variables at the beginning of the `notpixel.mjs` file as desired.
- You can find the `token` in the returned value from the URL `https://notpx.app/api/v1/users/me` with the `websocketToken` parameter.
- Run program: `node notpixel.mjs`
- Now the canvas image file is saved in `filePath`.

# Caution
You are responsible for the possible risks of using these scripts, such as getting banned.

# Donation
If this project was useful for you and you are willing, you can make me happy by giving a ⭐️Star at the top of this GitHub page. Also this is my wallet address for Donate:

USDT (TRC20): `TEHjxGqu5Y2ExKBWzArBJEmrtzz3mgV5Hb` \
TON: `UQAzK0qhttfz1kte3auTXGqVeRul0SyFaCZORFyV1WmYlZQj`
