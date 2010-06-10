/* NOTE: NicoMonkey is not compatible with GM! */

var comment_naka_uri = 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABUAAAAVCAYAAACpF6WWAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAAgY0hSTQAAeiYAAICEAAD6AAAAgOgAAHUwAADqYAAAOpgAABdwnLpRPAAAAAlwSFlzAAAOwwAADsMBx2+oZAAAABh0RVh0U29mdHdhcmUAUGFpbnQuTkVUIHYzLjM2qefiJQAAAIlJREFUOE+9lF0OwCAIg9nNPBo3d0PDpviTEbqZEHn6UtLCQUT5KvgTKLrgwDL5UmVKKTNzKekdE62hAtMnfRgaAM7HDwJHKADYQ0HAByrutqao629/k47qfqvypjsak44K/USpVevMpc1wH36QWeNGAcDzNQ2Cf9x9TQT8Sjmu0t79AKgF4y//CV9HbAYNfLwgAAAAAElFTkSuQmCC';
var comment_ue_uri = 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABUAAAAVCAYAAACpF6WWAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAAgY0hSTQAAeiYAAICEAAD6AAAAgOgAAHUwAADqYAAAOpgAABdwnLpRPAAAAAlwSFlzAAAOwwAADsMBx2+oZAAAABh0RVh0U29mdHdhcmUAUGFpbnQuTkVUIHYzLjM2qefiJQAAAERJREFUOE9jZGBg+A/EVAf/Gf4rUg9DHUk9A0GOG4KGQpxMTUxVw5DClLquBCdRanp71KWQbD8aplQPAqobOBpRNEinAC1++Owoo4AmAAAAAElFTkSuQmCC';
var comment_shita_uri = 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABUAAAAVCAYAAACpF6WWAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAAgY0hSTQAAeiYAAICEAAD6AAAAgOgAAHUwAADqYAAAOpgAABdwnLpRPAAAAAlwSFlzAAAOwwAADsMBx2+oZAAAABh0RVh0U29mdHdhcmUAUGFpbnQuTkVUIHYzLjM2qefiJQAAAEBJREFUOE9jZGBg+A/EVAcgQ6mNqW4g2OfUduWooaNhSoNkNZpOqZ+saBWm/xX/M1ALQ8tn6hkIctgQNJTKsQ8AQAj47EvrtdgAAAAASUVORK5CYII=';
var transparent_uri = 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABUAAAAVCAYAAACpF6WWAAAABGdBTUEAALGPC/xhBQAAAAlwSFlzAAAOwgAADsIBFShKgAAAABh0RVh0U29mdHdhcmUAUGFpbnQuTkVUIHYzLjM2qefiJQAAABtJREFUOE9jYBgFoyEwGgKjITAaAqMhMIJCAAAG+QABfCL3XAAAAABJRU5ErkJggg==';

var comment_big_uri = 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABUAAAAVCAYAAACpF6WWAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAAgY0hSTQAAeiYAAICEAAD6AAAAgOgAAHUwAADqYAAAOpgAABdwnLpRPAAAAAlwSFlzAAAOwwAADsMBx2+oZAAAABh0RVh0U29mdHdhcmUAUGFpbnQuTkVUIHYzLjM2qefiJQAAAQhJREFUOE/dlGENg0AMhW8yMIABDKAABTjAARawgAZM4AIzt3136dLdKL1k/FqTZkvWe33vtd0jhBBfeXsAepnbtsV932PXdW6tkHQLAST+GLTv+yTvLEX+OI5mTWFNHtJxHMm3X0IBZ1AmPM/zaUrDZVnMmnVdY9u2MvTrddIqkO+tX9VKNU3ztgY2t4DCjsAC8hZQvCamaUqg+F4BbHsq0oUhDfiuBmI1sEE1S9hJE/bWYXsOKl6WAMgnHOBvUD2cM6lsgQAbVnyCygMeDcNgypTTxWOGWNiRQZEll8Mn/wXelDUBmqg3IU1TAClkIB6g/C6rhjJ1HJkpwDXsrGbFCfu3X8ta6p68hKWr5mJCJAAAAABJRU5ErkJggg==';
var comment_medium_uri = 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABUAAAAVCAYAAACpF6WWAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAAgY0hSTQAAeiYAAICEAAD6AAAAgOgAAHUwAADqYAAAOpgAABdwnLpRPAAAAAlwSFlzAAAOwwAADsMBx2+oZAAAABh0RVh0U29mdHdhcmUAUGFpbnQuTkVUIHYzLjM2qefiJQAAAK5JREFUOE/VlN0NgCAMhPGdbViAQdiADViBXViCLVimciYY/CEWg1FJ7gFSP9qrZRJCUNbwBehoDQculbOyVEqRlJIVy4amlMg59zGotZZijBshU6g+DyG0Mj96ijIBgI9FgHnv170xZolp9KQNrT8AtPYUl30DSnnV/p15eitTlFsEABpT9vC3C3r2k+89vRga3kT9B/rImKJBWuuxs899zcqjz729J47X/dcznQEV5Sf2x+oA8AAAAABJRU5ErkJggg==';
var comment_small_uri = 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABUAAAAVCAYAAACpF6WWAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAAgY0hSTQAAeiYAAICEAAD6AAAAgOgAAHUwAADqYAAAOpgAABdwnLpRPAAAAAlwSFlzAAAOwwAADsMBx2+oZAAAABh0RVh0U29mdHdhcmUAUGFpbnQuTkVUIHYzLjM2qefiJQAAALZJREFUOE/lk9ENwyAMROkyzMEgbMAGrMAKzMASbMEytIfkCBKoXYkqH4nED8SPu7N5KaXqZ23/AN29tgOb890qb4Z672tKSepKZh/QnPP/oMYYDv5daSmlAUip1rpijwGvoc65I8fePvaZKNZQFFprB6U0gjjDRYuRnENDCIOac6Ngn6KZgK9QqEMB8qOCWffJhQiKn3pg3yjhC+TnFFaRYYyRGyU656GAIWOhypvf/g8qn670DZtl7reHU6OQAAAAAElFTkSuQmCC';

var tag_add_uri = 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAAB9klEQVQ4T4WSSY8SURSF60/0VuO/IKn4e3pjWmN0q3Y0Rk20nXbOccdQJdXMFm0RIEwpAhTIEEJIAQIh0ShapBlyfPclVWmExsXZ3HfPd8997wm1Wg3VahWVSgXlchmlUgnFYhG6rqNQKOwBEHZJMAwDq9VqQ/1+n0Oy2exOiECTyWCaJp/c7XYdCNVYCqRSqXMhAkWmZppGhXw+r0+nUywWC14nYCaTgaZpWyECTbUbmfmURTZnsxnGP3pIGDI/63Q6SCaTiMfjGxCBJtuRl8slyDz5+Q1Pj6/hobQPzZD4WbvdphSIRqNrEIHtaE0mE940n88x+t7D0fFVvPp8C+9O7uIZA9mQVqtFKRAMBh2IkMvlLrMdrfF4zJu+mnk8kvfxRr2Dj9oDvD+5twZpNpuUAn6/n0M4JZ1Oi2xHazQa8aZGr4gn/gO8VQ8dyJFygHjZzc/r9TqlgCRJe84uiURCZDtaw+FwA/Lhy328DN3AC+UmFss5TxEOh+H1ei+u3SjbT1RV1RoMBg7k8acreB64jtexQ/z+8+us+ZKzwlnFYjExEolY9BN5XFNn5tuYnVqO2ePxcPNWACkUComBQMCin2g/MZlZfc18LoCkKIqL3bRFH6zRaGw17wSQZFl2+Xw+i8xut3vD/F8AiU11MfOFf+u2/gL5GCirQDsa6AAAAABJRU5ErkJggg==';


var jp_uri = 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAALCAIAAAD5gJpuAAABAklEQVQoz3WRMW4CMRBFx6utttgG0VBwDEoOQENBS4GUXAwlHeICFDSba1AgiESzSEhskbE1L4W9ZlPky7JnPH/0/9iu6zoZwMziPgwyglkpIlVViQgQeyBm/THA7XYrexKv4Hik+cIrsxmLRWY75ywq/GHv92y3hIB6mobvK2/vsSE6LLJ7QNqW3Q7vUU3r45PLJYuEEIo4XPbI45GoXlHl+eR8ppcws9LM+hwZjykKvKIeVbxHhMkkzQDJUuYzGrFc8qOJrcpqxXSaX0xEymwpdW42VBWHA6rM56zXeWIRCSG4tm3rus63KYg+nYNXRUROp1NpZvf7vf/IYMH+QxT5BSaTbJ+etTAQAAAAAElFTkSuQmCC';

var tw_uri = 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAALCAIAAAD5gJpuAAABEUlEQVQoz22RsU0DURBE585nOUUCCRw4JiGiBWqwKAMKgIwuoApTAhRgUYB1BIYEgUC2bP7Mzif4YHyC1WiSnbcaaSsc3mIzMmQkY63Ht9MDwH/UALi6PAJwvDvo1fX9fBFGROxMz3ta1mSW8o8vJpOmnN5b+mS83+9X7fXi7mUlWbPW/MiJmSmnlMlqNDLQwLDNFEAmvVqJYcnfUaacWACQBhpIEZiueXEzk/30/qkwbW/d3gAAGiTZDsXzqyQzckRIHnDxmy6AZKCJ+RgPZ7ltMxOoTG7X2PaqVDJQkTklSJ1QNw0pSypATyoVtwt0MBEKRKAANYXhMJNQQARZkZBQXEJEkYFq2X0k/vvuZgXgC0lTZuDhPtkPAAAAAElFTkSuQmCC';

var de_uri = 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAALCAIAAAD5gJpuAAABNUlEQVQoz3WQMaoUARBEa2ZnwUgUEwN/aqjgNzJUzD5o6D1+4C28iLCXMNHUowgy3V3dVQazaOQLiqbgVdDL3d07zA4Jp61axbYICP9hI/f7+88AJEma6Zkj+wrZ090kebl83dZ1BfD9x88mj7qqKisr/xIRGfHh41sA2w3wSLohu7urmmQmM6uKEZWRmdwjK582AWyfmLczt6SrfGSmMxWpDGcqwnuq4szegM0sz6DKRWe4SlchnKlM7fvhm2VgM4Dpf8NVjlDEVdt3V06kqzwcYOMb4Ll9kkeixDkOt0W5MbQbov16iW/Y/AJ+Jj8eaaSxRtOWpD7erLElCX6y6D02FNzE+dWKWjRWLWqY1li02h677Ub1+hvL5cvLBwMVfELuEOCHWAMa1AlT0OC8QgGc8KvwBzggh2G9tgbIAAAAAElFTkSuQmCC';

var es_uri = 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAALCAIAAAD5gJpuAAABH0lEQVQoz32RrU5cURSFv3PntghCJQkCBUgQ9RieAVmN6CtMJsFjeBZsVVUtg2dUK5owyYTOlLln/yzEvRM6CenOypcl9l5i7SLeJrf9uyoCxmNAmWQSIQ/C5Y67zPQPl3d3LQDSz19EECGznoOqyapqlVk5PExoCVQEAfF3kS8L7e3X0Y5LJlWpDiaNYvlMkwABvlx53MJNu3q6WHd1s70RVRjQABCSje6/+G8vXycfHo+6edmKH248kwaQXPL27OTPSXI9GZ1+bvVR6qS6YZUqskyaTPqYH48Pu+d1fdl9n35bf1ptsgeCS+5O6WB0dZWzGUMtQycDe+OGRzk+nk+nbUJjzsGBzPDADbNihjs93fvGiUgoq+1H/ufH/bwCdrRKrziyqwAAAAAASUVORK5CYII=';

var hatena_uri = 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAAAS0lEQVQ4y2NgoAZQZKj/Tw5GMcDekzSM1QBjhmP/PRj+48UgNQQNwAbIMgDEB2FkQ0g2AKYJWWykGUBRIJIdjWQnJIqSMkWZiRIAAHPXwSikhnilAAAAAElFTkSuQmCC';

var music_uri = 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAQAAAC1+jfqAAAABGdBTUEAAK/INwWK6QAAABl0RVh0U29mdHdhcmUAQWRvYmUgSW1hZ2VSZWFkeXHJZTwAAAETSURBVBgZfcExS0JRGIDh996OFIQEgSRhTS1Bg0trw937B9UPCAT3hnJ1kYbGhrv0BxoaXSsMhBCsyUEcoiTKUM/3HU8Fce4Q+DyRZz5DcOkdiqIIiiAo7xiCMXs4HI4ZisPhOMcQOJQbOoxxKHm22UUxBBbHM1cRfw58GUtMIAieTIwgxAQWRclMEZSYwCIIGYsixASCYsl4pgiGwDFF+HWUaDopbfCGHRp+nCWSTktFXvFDOKyuNNYp4LhFriPPaXW5UWAV5Y6HNH+/dbHJIjN6NHlJzMnxWqNIDqFHh8/U7hiEJbp0+ar0m2a4MGFEjie6jCrtJs1y57FuI21R6w8g8uwnH/VJJK1ZrT3gn8gz3zcVUYEwGmDcvQAAAABJRU5ErkJggg==';

var chart_uri = 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAABr0lEQVQ4y6WTu2pWURBG14knaiSQymCTQpDwV2Ktdqax8AXs0gqWonZ2PoK2gmDtA6S0U0HEdxBS5fKfveducYJESCSQKQdmzfoGZqgqLlPjWc1Xn/YrMlGHiEQ9EU8+PNsaLgQQTR4ubuCZZIFH8fnr4cUNmiUayf6BY1FsrF3huOXFAcvmqCfdEo9CxhWOmp8NqNcv5itmUuaUOdPtl4gW3Qrz5PpqcNjjPwaPdiCTIYIhgqMfiXjRJLCAtdXi8LwIZc7gDt+/gRvcvcdxU7olk84R+tUBb3YOQHQGSAdzMOdACrGkSWJRrF9Lcpk839stU0fVsG6IGGN2YcUduoAZqHK8TLoWTRON+RbZksdbT/EIIhxL4+OXd4zZTjaLgCq4481mg7+ApJpjbvz8/Qs1YfvmHdqyM+bU58HWZgMzcpl0/ReQLTBXmk6ICWJCX3bGmhqcjuBOtqSdMlArSkBcaNIQE9SVNgljTieb7z+ACHCnmqNe3NpYxRPEihJFXVlsbuNhmCvShOHNzttKc0qcsqAseL/+hApAkwqnHCqKzcUebkl4EJ5kJMNl3/kPtIqkPQKeuE8AAAAASUVORK5CYII=';

var comments_uri = 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAAABGdBTUEAAK/INwWK6QAAABl0RVh0U29mdHdhcmUAQWRvYmUgSW1hZ2VSZWFkeXHJZTwAAAG/SURBVDjLjZK9T8JQFMVZTUyc3IyJg4mDi87+GyYu6qB/gcZdFxkkJM66qJMGSNRBxDzigJMRQ1jQ4EcQ+SgVKB+FtuL13EdJxNDq8Ev7Xu85797T51nwhqeAH5w6cAxWwDgReX7jwYfdaCIraroptB7NLlVQrOoiGEsL1G06GZyxuILicsMUH3VTlOqGKNUMUdTacj+j1Nng0NGAT2WxYosK1bbIVVoiW27J9V8G57WWKVSczMV5iK+Tudv1vVh5yXdlLQN+os4AFZss2Ob82CCgQmhYHSnmkzf2b6rIhTAaaT2aXZALIRdCLgRtkA1WfYG4iKcVYX52JIs7EYvFmJ8wGiEXQi6EXAhdyn2MxQaPcg68zIETTvzyLsPzWnwqixVbhFwI3RFykes+A9vkIBKX4jCoIxdCLrI4/0OcUXXK4/1dbbDBS088xGGCCzAJCsiF2lanT8xdKNhHXvRarLFBqmcwCrbAhL32+kP3lHguETKRsNlbqUFPeY2OoikW62DNM+jf2ibzQNN0g5ALC75AGiT59oIReQ+cDGyTB+TC4jaYGXiRXMTD3AFogVmnOjeDMRAC025duo7wH74BwZ8JlHrTPLcAAAAASUVORK5CYII=';
/* To let it be a light script, we won't use something like jQuery */
function $$(xpath,root) { 
  var got=document.evaluate(xpath,root||document,null,null,null), result=[];
  while(next=got.iterateNext()) result.push(next);
  return result;
}

function start()
{
  /* Check if we've logged in */
        var logged_in = false;
  if (unsafeWindow.User) {
    if (unsafeWindow.User.id) {
      if (typeof unsafeWindow.User.id == 'number') { logged_in = true; }
    }
  }
  if (document.getElementById('flvplayer_container') && document.getElementById('deleted_message_default') && GM_getValue('player_killer')) /* Video is deleted for copyright issue */
  {
    killPlayer();
  }

  /* Inject CSS */
    GM_addStyle('#regenerate_player { background: #BBBBBB; border: 1px solid #CCCCCC; color: white; display: block; width: 100%; height: 540px; text-align: center; line-height: 540px; font-size: 200%; text-decoration: none; } #regenerate_player:hover {background: #999999;}'
    );
    GM_addStyle('.fox-tag-link { text-decoration: none !important; display: inline-block; width: 16px; background: url(' + tag_add_uri + ') center center no-repeat;}');
    GM_addStyle('#video_utilities ul {list-style-type: none; margin:0; padding: 0; margin-left: 3px;} #video_utilities ul li {display: inline; font-size: 12px; font-weight: bold;}');    
    GM_addStyle('#video_utilities img {vertical-align: middle;}');

  if (logged_in) {
//    window.setTimeout(pushLinks, 10);
    if (document.getElementById('category_recent'))
    {
//      window.setTimeout(listenMainPage, 10);
    }
  }
  var link_alternate = $$('.//link [@rel="alternate"]');

  /* Player-related hack, need the 'watch' address and the flv player */
  if(window.location.href.match(/^http:\/\/(www|tw|de|es)\.nicovideo\.jp\/watch\//) /* URL is right */
    && document.getElementById('flvplayer_container') /* Logged in */
    )
  {
    /* Add comment helper, if the player is old player */
    if(GM_getValue('comment_helper'))
    {
      if (document.getElementById('flvplayer')
      //&& (document.getElementById('flvplayer').src.indexOf('new') == -1)
      ) {
        var playerVerMatch = document.getElementById('flvplayer').src.match(/([0-9]+)$/);
        if (playerVerMatch && parseInt(playerVerMatch[0], 10) < 1262084704) {
          window.setTimeout(addCommentHelper, 10);
        }
      }
    }

    /* Bookmark helper, aka "Superlist" */
    if (document.getElementById('mylist_add_submit') && GM_getValue('superlist'))
    { document.getElementById('mylist_add_submit').addEventListener('click', function(e){NM_bookmark();}, true); }

    /* Tag helper, aka "Supertag" */
    if (GM_getValue('supertag'))
    {
      var tags = $$('.//a [@rel="tag"]', document.getElementById('video_tags'))
      for (var i = 0; i < tags.length; i++) {
        var tag = tags[i];

        var tag_helper = document.createElement('a');
        tag_helper.className = 'fox-tag-link';
        tag_helper.title = NM_getString('addTag');
        tag_helper.id = "tag_helper_"+i;
        tag_helper.innerHTML = "&nbsp;"
        tag_helper.href = "#";

        tag_helper.addEventListener('click', function(e) {
          if (!e.target) {return;}
          NM_addTag(document.location.href, document.title, e.target.parentNode.getElementsByTagName('a')[0].textContent);
          e.stopPropagation();
          e.preventDefault();
        }
        , true);
        if (tag.parentNode.tagName.match(/nobr/i)) {
          /* Japan version, use <nobr> */
            tag.parentNode.appendChild(tag_helper);
        } else { 
          /* Non-japan version, append <nobr> */ 
          var nobr = document.createElement('nobr');
          var tag_list = tag.parentNode;
          tag_list.insertBefore(nobr, tag.nextSibling);
          tag_list.removeChild(tag);
          nobr.appendChild(tag);
          nobr.appendChild(tag_helper);
        }
      }  
    }

    if (logged_in) {
      var download_link = document.createElement('a');
      download_link.className = 'fox-dl-link';
      download_link.id = 'fox-dl-this1';
      download_link.title = NM_getString('download');
      download_link.href = '#';
      download_link.innerHTML = '&nbsp;';

      var h1 = null;
      /* Fetching Nico Nico's video title */
      if(window.location.href.match(/^http:\/\/tw\.nicovideo\.jp\/watch\//)) {
        /* Taiwan (new) has another <h1> */
        h1 = document.getElementsByTagName('h1')[1];
      } else {
        h1 = document.getElementsByTagName('h1')[0];
      }
      /* inject the video download link */
      if (h1 && h1.hasChildNodes())
      {
        h1.appendChild(download_link);
      }

      /* Use img to reduce the DOM use */
      var download_link = document.createElement('a');
      download_link.className = 'fox-dl-link';
      download_link.id = 'fox-dl-this2';
      download_link.title = NM_getString('download');
      download_link.href = '#';
      download_link.innerHTML = '&nbsp;';

      /* Find for non-expanded mode */
      var des1 = document.getElementById('des_1');
      if (des1 && des1.hasChildNodes())
      {
        var headera = des1.getElementsByTagName('a')[1];
        if (headera)
        {
          headera.parentNode.insertBefore(download_link, headera.nextSibling);
        }
      }
    }
    if(GM_getValue('toolbar'))
    {
      window.setTimeout(start_inject, 10);
    }
  }
}

function start_inject()
{
  var Video = {};
  /* Try to make unsafeWindow safer */
  if ((typeof unsafeWindow.Video) != 'object') { return; }
  for (var key in unsafeWindow.Video) {
    var value = unsafeWindow.Video[key];
    /* Video has null value */
    if (value === null) {
      Video[key] = null;
    }
    /* If it is an array ... */
    if (Object.prototype.toString.call(unsafeWindow.Video) === '[object Array]') {
      /* Check its contents */
      Video[key] = [];
      if (!value.length && (typeof value.length) != 'number') { continue; }
      for (var i = 0; i < value.length; i++) {
        if ((typeof value[i]) != 'string') { continue; }
          Video[key].push(value[i]);
      }
    }
    else if ((typeof value) != 'string' && (typeof value) != 'number' && (typeof value) != 'boolean') {
      continue;
    } else {
        Video[key] = unsafeWindow.Video[key];
    }
  }
  
  /* XXX it should not be here, but it is used to reduce the render times */
  /* Fetch the community name by the link node (fixed in 0.3.6) */
  var community_nodes = $$('.//a[starts-with(@href, "http://ch.nicovideo.jp/community") or starts-with(@href, "http://ch.nicovideo.jp/channel") ]');

  if (community_nodes.length > 0) {
    var community_test = community_nodes[0].href.match(/^http\:\/\/ch\.nicovideo\.jp\/(community|channel)\/([a-z]{0,2}[0-9]+)$/i);  
    Video.comment_type = community_test[2];
  }
  else if (Video.isMymemory)
  {
    Video.comment_type = 'mymemory' + Video.v;
  }
  else if (window.location.href.match(/http:\/\/(www|tw|es|de)\.nicovideo\.jp\/watch\/[0-9]+/))
  {
    Video.comment_type = 'comment' + Video.v;
  }
  else
  {
    Video.comment_type = window.location.href.match(/http:\/\/(www|tw|es|de)\.nicovideo\.jp\/watch\/[a-z]{2}[0-9]+/)[1] ;
  }

  var niconicofarm = "\r\n";
  /* check if Video.v is a pure integer... (mymemory / community / other countries ver.), (for hatena::diary and niconicofarm) */

  if (Video.v.match(/[A-Za-z]/))
  {
    niconicofarm = '<li><a href="http://nico.xii.jp/comment/?url='+Video.id+'" class="nicofox_external" target="_blank" title="'+NM_getString('toolsNicoNicoFarm')+'"<img src="'+comments_uri+'">'+"\r\n"; // Use Nico Nico Farm (supported pages only)
  }

  document.getElementById('fox-dl-this1').addEventListener('click', function(e)
  {
    NM_goDownload(Video, window.location.href);
    e.stopPropagation();
    e.preventDefault();

  }
  , true);
  if (document.getElementById('fox-dl-this2')) 
   document.getElementById('fox-dl-this2').addEventListener('click', function(e)
  {
    NM_goDownload(Video, window.location.href);
    e.stopPropagation();
    e.preventDefault();

  }
  , true);
  /* Add sound website */
  var sound_website = GM_getValue('sound_converter');
  sound_website = sound_website.replace('%1', Video.id);

  /* Inject Video Utilities */
  var video_utilities = document.createElement('div');
  video_utilities.id = 'video_utilities';
  var html =  '<ul id="video_utilities_list">'+"\r\n"+
    '<li>'+NM_getString('toolbarTitle')+'</li>'+"\r\n"+
                '<li><a href="http://d.hatena.ne.jp/video/niconico/'+Video.v+'" target="_blank" title="'+NM_getString('relatedHatena')+'"><img src='+hatena_uri+' /></a></li>'+"\r\n"+
                '<li><a href="http://www.nicovideo.jp/watch/'+Video.id+'" target="_blank" title="'+NM_getString('relatedNicoWww')+'"><img src="'+jp_uri+'" /></a></li>'+"\r\n"+
                '<li><a href="http://tw.nicovideo.jp/watch/'+Video.id+'" target="_blank" title="'+NM_getString('relatedNicoTw')+'"><img src="'+tw_uri+'" /></a></li>'+"\r\n"+
                '<li><a href="http://es.nicovideo.jp/watch/'+Video.id+'" target="_blank" title="'+NM_getString('relatedNicoEs')+'"><img src="'+es_uri+'" /></a></li>'+"\r\n"+
                '<li><a href="http://de.nicovideo.jp/watch/'+Video.id+'" target="_blank" title="'+NM_getString('relatedNicoDe')+'"><img src="'+de_uri+'" /></a></li>'+"\r\n"+
    '<li>'+NM_getString('tools')+'</li>'+"\r\n"+
                '<li><a href="'+sound_website+'" class="nicofox_external" target="_blank" title="'+NM_getString('toolsSoundConverter')+'"><img src="'+music_uri+'" /></a></li>'+"\r\n"+
               '<li><a href="http://www.nicochart.jp/watch/'+Video.id+'" class="nicofox_external" target="_blank" title="'+NM_getString('toolsNicoChart')+'"><img src="'+chart_uri+'" /></a></li>'+"\r\n";

        html = html + niconicofarm; /* Niconico farm is general comment only */
        html = html + '</ul></li>'+"\r\n"+
                '</ul>';

        video_utilities.innerHTML = html;
        var WATCHHEADER = document.getElementById('WATCHHEADER');
        WATCHHEADER.appendChild(video_utilities);

  /* 3rd party notice */
   var external_links = document.getElementsByClassName('nicofox_external');
  for (var i = 0; i < external_links.length; i++)
  {
      external_links[i].addEventListener('click', function(e)
    {
      /* We may click on <a> links or <img> */
      var href = e.target.href;
      if (!href) {
        href = e.target.parentNode.href;
      }
      GM_openThirdPartyInTab(href);
      e.stopPropagation();
      e.preventDefault();
    }
  
    , true);
  }
}

function videoUtilitiesTab(e)
{
  var tab_num = (e.target.id.match(/sw([0-9])$/)[1]);
  if (!tab_num || isNaN(tab_num)) { return; }
  for (var i = 1; i <= 3; i++)
  {
    document.getElementById('video_utilities_tab'+i).style.display = 'none';
    document.getElementById('video_utilities_sw'+i).className = 'fox-sw-link';
  }
  document.getElementById('video_utilities_tab'+tab_num).style.display = 'block';
  document.getElementById('video_utilities_sw'+tab_num).className = 'fox-sw-link-selected';
  return false;
}

function addCommentHelper()
{
  /* Add CSS */
  GM_addStyle('#comment_helper p {line-height: 30px; } #comment_helper img {border: 1px solid #999999; margin: 1px; vertical-align: middle;} #comment_helper_premium { margin-left: 5px; } #comment_helper textarea {font-family: sans-serif; font-size: 9pt; width: 245px; overflow: hidden; height: 25px; margin:0; padding: 0; vertical-align: middle;} #comment_helper .fox-ch-selected {border: 3px solid #33FF99;}');

  /* The comment helper */
  var comment_helper = document.createElement('div');
  comment_helper.id = 'comment_helper';

  comment_helper.innerHTML = 
  '<a href="#" class="ch_link" id="comment_helper_naka"><img src="'+comment_naka_uri+'" class="fox-ch-selected" /></a>'+
  '<a href="#" class="ch_link" id="comment_helper_ue"><img src="'+comment_ue_uri+'" /></a>'+
  '<a href="#" class="ch_link" id="comment_helper_shita"><img src="'+comment_shita_uri+'" /></a>'+
  '<a href="#" class="ch_link" id="comment_helper_big"><img src="'+comment_big_uri+'" /></a>'+
  '<a href="#" class="ch_link" id="comment_helper_medium"><img src="'+comment_medium_uri+'"  class="fox-ch-selected"/></a>'+
  '<a href="#" class="ch_link" id="comment_helper_small"><img src="'+comment_small_uri+'" /></a>'+
  '<a href="#" class="ch_link" id="comment_helper_white"><img src="'+transparent_uri+'"  class="fox-ch-selected" style="background: #FFFFFF;"></a>'+
  '<a href="#" class="ch_link" id="comment_helper_red"><img src="'+transparent_uri+'" style="background: #FF0000;"></a>'+
  '<a href="#" class="ch_link" id="comment_helper_pink"><img src="'+transparent_uri+'" style="background: #FF8080;"></a>'+
  '<a href="#" class="ch_link" id="comment_helper_orange"><img src="'+transparent_uri+'" style="background: #FFCC00;"></a>'+
  '<a href="#" class="ch_link" id="comment_helper_yellow"><img src="'+transparent_uri+'" style="background: #FFFF00;"></a>'+
  '<a href="#" class="ch_link" id="comment_helper_green"><img src="'+transparent_uri+'" style="background: #00FF00;"></a>'+
  '<a href="#" class="ch_link" id="comment_helper_cyan"><img src="'+transparent_uri+'" style="background: #00FFFF;"></a>'+
  '<a href="#" class="ch_link" id="comment_helper_blue"><img src="'+transparent_uri+'" style="background: #0000FF;"></a>'+
  '<a href="#" class="ch_link" id="comment_helper_purple"><img src="'+transparent_uri+'" style="background: #C000FF;"></a>'+
  '<span id="comment_helper_premium" style="display: none;">'+
  '<a href="#" class="ch_link" id="comment_helper_white2"><img src="'+transparent_uri+'" style="background: #CCCC99;"></a>'+
  '<a href="#" class="ch_link" id="comment_helper_red2"><img src="'+transparent_uri+'" style="background: #CC0033;"></a>'+
  '<a href="#" class="ch_link" id="comment_helper_orange2"><img src="'+transparent_uri+'" style="background: #FF6600;"></a>'+
  '<a href="#" class="ch_link" id="comment_helper_yellow2"><img src="'+transparent_uri+'" style="background: #999900;"></a>'+
  '<a href="#" class="ch_link" id="comment_helper_green2"><img src="'+transparent_uri+'" style="background: #00CC66;"></a>'+
  '<a href="#" class="ch_link" id="comment_helper_blue2"><img src="'+transparent_uri+'" style="background: #33FFFC;"></a>'+
  '<a href="#" class="ch_link" id="comment_helper_purple2"><img src="'+transparent_uri+'" style="background: #6633CC;"></a>'+
  '<a href="#" class="ch_link" id="comment_helper_black"><img src="'+transparent_uri+'" style="background: #000000;"></a>'+
  '</span>'+
  '<textarea rows="1" value="" onchange="$(\'flvplayer\').SetVariable(\'inputArea.ChatInput1.text\', this.value);" onkeyup="this.onchange();"></textarea>';

  /* Inserted in WATCHFOOTER is the right way, but broken in Taiwan (new); So I do a bad workaround. */
  var flvplayer_container = document.getElementById('flvplayer_container')
  flvplayer_container.parentNode.insertBefore(comment_helper ,flvplayer_container.nextSibling);

  var helper_links = comment_helper.getElementsByTagName('a')
  for (var i = 0; i < helper_links.length; i++)  
  {
    helper_links[i].addEventListener('click', commentHelperSelect, false);
  }

  var js = 'if (User.isPremium) {$(\'comment_helper_premium\').show() }'; 
  location.href='javascript: void(eval(\''+js.replace(/\'/g,'\\\'')+'\'));';
}

var ch_position = 'naka';
var ch_positions = ['naka', 'shita', 'ue']
var ch_size = 'medium';
var ch_sizes = ['medium', 'big', 'small']
var ch_color = 'white';
var ch_colors = ['white', 'red', 'pink', 'orange', 'yellow', 'green', 'cyan', 'blue', 'purple',
                 'white2', 'red2', 'orange2', 'yellow2', 'green2', 'blue2', 'purple2', 'black'];

function commentHelperSelect(e)
{
  var id = e.target.id;
  /* When click on img, the id will be empty */
  if (!id) { id = e.target.parentNode.id; }
  if (!id) { return; }
  
  var sel = id.match(/comment\_helper\_(.*)$/);
  if(!sel) { return; }
  sel = sel[1];
  if (ch_positions.indexOf(sel) != -1)
  {  
    document.getElementById('comment_helper_'+ch_position).getElementsByTagName('img')[0].className = '';
    document.getElementById('comment_helper_'+sel).getElementsByTagName('img')[0].className = 'fox-ch-selected';
    
    ch_position = sel;
  }
  if (ch_sizes.indexOf(sel) != -1)
  {
    document.getElementById('comment_helper_'+ch_size).getElementsByTagName('img')[0].className = '';
    document.getElementById('comment_helper_'+sel).getElementsByTagName('img')[0].className = 'fox-ch-selected';

    ch_size = sel;
  }
  if (ch_colors.indexOf(sel) != -1)
  {
    document.getElementById('comment_helper_'+ch_color).getElementsByTagName('img')[0].className = '';
    document.getElementById('comment_helper_'+sel).getElementsByTagName('img')[0].className = 'fox-ch-selected';

    ch_color = sel;
  }

  var mail_inputs = [];
  if (ch_positions.indexOf(ch_position) != 0) mail_inputs.push(ch_position);
  if (ch_sizes.indexOf(ch_size) != 0) mail_inputs.push(ch_size);
  if (ch_colors.indexOf(ch_color) != 0) mail_inputs.push(ch_color);

  var mail_input = mail_inputs.join(' ');
  var js = '$(\'flvplayer\').SetVariable(\'inputArea.MailInput.text\',\''+mail_input+'\');'; 
  location.href='javascript: void(eval(\''+js.replace(/\'/g,'\\\'')+'\'));';
  e.stopPropagation();
  e.preventDefault();
}

function killPlayer()
{
    var flvplayer = document.getElementById('flvplayer');
    flvplayer.parentNode.removeChild(flvplayer);
    var flvplayer_container = document.getElementById('flvplayer_container')

    var player_deleted = document.createElement('div');
    player_deleted.innerHTML = '<a href="'+window.location.href+'" id="regenerate_player">'+NM_getString('playerKillerMsg')+'</a>';
    flvplayer_container.appendChild(player_deleted);

    document.getElementById('regenerate_player').addEventListener('click', function(e)
    {
      document.getElementById('flvplayer_container').removeChild(player_deleted);
      document.getElementById('flvplayer_container').appendChild(flvplayer);
      e.stopPropagation();
      e.preventDefault();
      return false;
    }
    , true
    );
}

if (GM_getValue('enable'))
{ start(); }
