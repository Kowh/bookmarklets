# bookmarklets
Miscellaneous Firefox bookmarklets

## Tools
- [bookmarkleter](https://chriszarate.github.io/bookmarkleter/): converts javascript to a bookmarket.
- [jsbeautifier.org](http://jsbeautifier.org/): makes website javascript legible.

## Bookmarklets

###playsimplevine
Takes a page in the format https://vine.co/v/_id_/embed/simple (such as you would get from **open frame in new tab** and plays the associated video in one click without having to enable javascript.
```
javascript:void%20function(){var%20t=JSON.parse(document.getElementById(%22configuration%22).text),e=new%20XMLHttpRequest;e.onreadystatechange=function(){if(4==e.readyState%26%26200==e.status){var%20t=document.createElement(%22div%22);t.innerHTML=e.responseText;for(var%20r=t.querySelector('meta[property=%22twitter:player:stream%22]').getAttribute(%22content%22),n=t.querySelector('meta[property=%22twitter:player:stream:content_type%22]').getAttribute(%22content%22);document.body.firstChild;)document.body.removeChild(document.body.firstChild);var%20o=document.createElement(%22video%22);o.setAttribute(%22type%22,n),o.setAttribute(%22src%22,r),document.body.appendChild(o),o.play()}},e.open(%22GET%22,t.post.shareUrl,!0),e.send()}();)"
```
