//Command can be everything. Don't have to change the length that has to be sub : it's automatically calculated by const commande.

actionHandlers['!prout'] = {
    security: (context, textContent) => {
        return context.mod || (context["badges-raw"] != null && context["badges-raw"].startsWith("broadcaster"))
    },
    handle: (context, textContent) => {
        const phrase = textContent.split(' ');
        const commande = phrase[0].length;
        const formattedText = popup.formatEmotes(textContent, context.emotes, true).substr(commande);
        popup.showText(formattedText);

        //Auto erase the message after 5min (30000)
        var x = setTimeout(myTimer, 300000);
        function myTimer() {
        $("#popupbox").animate({ width: 0}, 700);
        $("#popupbox").animate({ border: 0}, 700);
        $("#popuptext").animate({ "opacity": 0, "margin-left": "50px" }, 900);
        }
        clearTimeout(x);
    }
};