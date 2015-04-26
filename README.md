# bookmarklets
Miscellaneous Firefox bookmarklets. They might work in other browsers but no effort was made to make them portable.

## Install
- Drag a url to your Firefox bookmarks toolbar (it doesn't matter which, we just want to create a bookmark)
- Right-click the new bookmark and select **Properties**
- **Name** it something descriptive
- Put the javascript: code into the **location**
- Click **Save**

## Tools
- [bookmarkleter](https://chriszarate.github.io/bookmarkleter/): converts javascript to a bookmarket.
- [jsbeautifier.org](http://jsbeautifier.org/): makes website javascript legible.

## Bookmarklets

###playsimplevine
Takes a page in the format https://vine.co/v/_id_/embed/simple (such as you would get from **open frame in new tab** and plays the associated video in one click without having to enable javascript.
```
javascript:void%20function(){var%20e=JSON.parse(document.getElementById(%22configuration%22).text),t=new%20XMLHttpRequest;t.onreadystatechange=function(){if(4==t.readyState%26%26200==t.status){var%20e=document.createElement(%22div%22);e.innerHTML=t.responseText;for(var%20r=e.querySelector('meta[property=%22twitter:player:stream%22]').getAttribute(%22content%22),n=e.querySelector('meta[property=%22twitter:player:stream:content_type%22]').getAttribute(%22content%22);document.body.firstChild;)document.body.removeChild(document.body.firstChild);for(var%20o=0;o%3Cdocument.styleSheets.length;o++)document.styleSheets[o].disabled=!0;var%20d=document.createElement(%22video%22);d.setAttribute(%22type%22,n),d.setAttribute(%22src%22,r),document.body.appendChild(d),d.play()}},t.open(%22GET%22,e.post.shareUrl,!0),t.send()}();
```
