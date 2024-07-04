---
sidebar_position: 2
sidebar_label: ESX Legacy
---

# ESX

This guide explains how to install the current newest version of ESX Legacy with addons on your server

## Requirements

These resources need to be installed on your server first. 

- [oxmysql](https://github.com/overextended/oxmysql/releases/latest/download/oxmysql.zip) | *[Uses This String to connect to the database](/docs/FiveM/getting-started#4-creating-a-database)*
- [spawnmanager](https://github.com/citizenfx/cfx-server-data/tree/master/resources/%5Bmanagers%5D)


## Download Resources

- Download [core](https://github.com/esx-framework/esx-legacy/archive/refs/heads/main.zip)
- Download the addons you want to use from the [github](https://github.com/esx-framework)

## Install

- Extract the `[core]` folder
- Place it into the `resources` folder in your server.
- Extract the addons you have downloaded.
- Create a `[addons]` folder in your `resources` folder.
- Place the exacted addons into `[addons]`.
- Go into the `[SQL]` Folder from `ESX Legacy`:

  - Import `legacy.sql` in your database

- Make sure you are **NOT** using any of these resources:

  - `essentialmode`
  - `basic-gamemode`
  - `mapmanager`
  - `fivem-map-skater`
  - `fivem-map-hipster`
  - `mysql-async`
  - `QBCore`
  - `default_spawnpoint`

- Add this to your server.cfg

```diff title="server.cfg"
add_principal group.admin group.user
add_ace resource.es_extended command.add_ace allow
add_ace resource.es_extended command.add_principal allow
add_ace resource.es_extended command.remove_principal allow
add_ace resource.es_extended command.stop allow

ensure oxmysql
ensure spawnmanager
ensure es_extended

ensure esx_menu_default
ensure esx_menu_list
ensure esx_menu_dialog
```

