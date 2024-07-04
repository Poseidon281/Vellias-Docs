---
sidebar_position: 1
sidebar_label: Getting Started
---

# Getting Started

## Initial Configuration

Welcome to Vellias Hosting! Congratulations on purchasing your FiveM server. This guide will help you get started with the initial configuration of your server.

### 1. Accessing the Panel

1. Open your web browser and go to the [Panel](https://gamepanel.vellias.nl).
2. Reset your password. Your email is the same as your [Shop](https://shop.velliashosting.online) account
3. Once you have reset your password you can now access the panel and with it your server. We also recommend enabling Two-Step Verification in your [Profile](https://gamepanel.vellias.nl/account)

### 2. Navigating to Your Server

1. After logging in, you will see a list of servers you have access to. Select your newly purchased FiveM server from the list.

### 3. Changing startup

1. Navigate to **Startup**
2. Change the variables to your preferences. Make sure to change the txAdmin port to another port then your main port. In the **Network** tab you can view your ports

:::info

Don't know how to create a FXSERVER LICENSE KEY? Then you can follow [this guide](https://support.cfx.re/hc/en-us/articles/8014850328348-How-to-create-a-server-license-key)

:::

### 4. Creating a database

1. Navigate to **Databases**
2. Press the New Database button and fill in a name for your database
3. Add this string to your server.cfg

:::danger

Make sure you replace the the DATABASE values with the database data that you just created.
DATABASE_IP is the endpoint without the port.

:::

```txt
set mysql_connection_string "server=DATABASE_IP;uid=DATABASE_USERNAME;password=DATABASE_PASSWORD;database=DATABASE_NAME"
```

4. If you are using oxmysql your database should now connect to your server

## Support

If you encounter any issues or have further questions, please contact our support team via Discord or send us an email. We are here to help!

---

Thank you for choosing Vellias Hosting! We hope you enjoy your new FiveM server.
