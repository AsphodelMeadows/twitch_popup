# TwitchPopups

Allows Twitch mods to display popup text on the stream via chat commands

## COMMAND LIST

- !prout (or !<somethting>) : will display a pop-up message with random background/border then automatically erase it

## DOWNLOAD

The latest version of TwitchPopups can be found [as a zip archive here](https://github.com/MojaSonyeo/twitch_popup/archive/master.zip)

## INSTRUCTIONS

1. Extract the zip archive
2. Edit settings.js and change "Moja" to your Twitch channel name
3. Use OBS/Streamlabs OBS to add twitchpopups.htm as a browser source
4. Tick "Shutdown source when not visible" in browser source properties. That way, any tweaks you make are reloaded when you toggle the visibility button

## OPTIONS
You can change everything you want, especially colors :
1. Background-color, don't forget to put it in rgba version because of the opacity in the color
2. Borders : the size (now 3px) and the color, even if it's solid or not, your choice