// Initialize button with user's preferred color
let displayScript = document.getElementById("displayScript");

/* chrome.storage.sync.get("color", ({ color }) => {
    displayScript.style.backgroundColor = color;
}); */
let saveSettings = document.getElementById("saveSettings");
chrome.storage.sync.get("values", function (result) {
  if (result == undefined || result.values == undefined) return;
  if (result.values.avax_eth != undefined)
    document.getElementById("AVAX/ETH").value = result.values.avax_eth;
  if (result.values.avax_usdt != undefined)
    document.getElementById("AVAX/USDT").value = result.values.avax_usdt;
  if (result.values.avax_wbtc != undefined)
    document.getElementById("AVAX/WBTC").value = result.values.avax_wbtc;
  if (result.values.avax_png != undefined)
    document.getElementById("AVAX/PNG").value = result.values.avax_png;
  if (result.values.avax_link != undefined)
    document.getElementById("AVAX/LINK").value = result.values.avax_link;
  if (result.values.avax_dai != undefined)
    document.getElementById("AVAX/DAI").value = result.values.avax_dai;
  if (result.values.avax_uni != undefined)
    document.getElementById("AVAX/UNI").value = result.values.avax_uni;
  if (result.values.avax_sushi != undefined)
    document.getElementById("AVAX/SUSHI").value = result.values.avax_sushi;
  if (result.values.avax_aave != undefined)
    document.getElementById("AVAX/AAVE").value = result.values.avax_aave;
  if (result.values.avax_yfi != undefined)
    document.getElementById("AVAX/YFI").value = result.values.avax_yfi;
  if (result.values.png_eth != undefined)
    document.getElementById("PNG/ETH").value = result.values.png_eth;
  if (result.values.png_usdt != undefined)
    document.getElementById("PNG/USDT").value = result.values.png_usdt;
  if (result.values.png_wbtc != undefined)
    document.getElementById("PNG/WBTC").value = result.values.png_wbtc;
  if (result.values.png_link != undefined)
    document.getElementById("PNG/LINK").value = result.values.png_link;
  if (result.values.png_dai != undefined)
    document.getElementById("PNG/DAI").value = result.values.png_dai;
  if (result.values.png_uni != undefined)
    document.getElementById("PNG/UNI").value = result.values.png_uni;
  if (result.values.png_sushi != undefined)
    document.getElementById("PNG/SUSHI").value = result.values.png_sushi;
  if (result.values.png_aave != undefined)
    document.getElementById("PNG/AAVE").value = result.values.png_aave;
  if (result.values.png_yfi != undefined)
    document.getElementById("PNG/YFI").value = result.values.png_yfi;
});

saveSettings.addEventListener("click", async () => {
  chrome.storage.sync.set(
    {
      values: {
        avax_eth:
          document.getElementById("AVAX/ETH").value == ""
            ? undefined
            : document.getElementById("AVAX/ETH").value.replace(/,/g, '.'),
        avax_usdt:
          document.getElementById("AVAX/USDT").value == ""
            ? undefined
            : document.getElementById("AVAX/USDT").value.replace(/,/g, '.'),
        avax_wbtc:
          document.getElementById("AVAX/WBTC").value == ""
            ? undefined
            : document.getElementById("AVAX/WBTC").value.replace(/,/g, '.'),
        avax_png:
          document.getElementById("AVAX/PNG").value == ""
            ? undefined
            : document.getElementById("AVAX/PNG").value.replace(/,/g, '.'),
        avax_link:
          document.getElementById("AVAX/LINK").value == ""
            ? undefined
            : document.getElementById("AVAX/LINK").value.replace(/,/g, '.'),
        avax_dai:
          document.getElementById("AVAX/DAI").value == ""
            ? undefined
            : document.getElementById("AVAX/DAI").value.replace(/,/g, '.'),
        avax_uni:
          document.getElementById("AVAX/UNI").value == ""
            ? undefined
            : document.getElementById("AVAX/UNI").value.replace(/,/g, '.'),
        avax_sushi:
          document.getElementById("AVAX/SUSHI").value == ""
            ? undefined
            : document.getElementById("AVAX/SUSHI").value.replace(/,/g, '.'),
        avax_aave:
          document.getElementById("AVAX/AAVE").value == ""
            ? undefined
            : document.getElementById("AVAX/AAVE").value.replace(/,/g, '.'),
        avax_yfi:
          document.getElementById("AVAX/YFI").value == ""
            ? undefined
            : document.getElementById("AVAX/YFI").value.replace(/,/g, '.'),
        png_eth:
          document.getElementById("PNG/ETH").value == ""
            ? undefined
            : document.getElementById("PNG/ETH").value.replace(/,/g, '.'),
        png_usdt:
          document.getElementById("PNG/USDT").value == ""
            ? undefined
            : document.getElementById("PNG/USDT").value.replace(/,/g, '.'),
        png_wbtc:
          document.getElementById("PNG/WBTC").value == ""
            ? undefined
            : document.getElementById("PNG/WBTC").value.replace(/,/g, '.'),
        png_link:
          document.getElementById("PNG/LINK").value == ""
            ? undefined
            : document.getElementById("PNG/LINK").value.replace(/,/g, '.'),
        png_dai:
          document.getElementById("PNG/DAI").value == ""
            ? undefined
            : document.getElementById("PNG/DAI").value.replace(/,/g, '.'),
        png_uni:
          document.getElementById("PNG/UNI").value == ""
            ? undefined
            : document.getElementById("PNG/UNI").value.replace(/,/g, '.'),
        png_sushi:
          document.getElementById("PNG/SUSHI").value == ""
            ? undefined
            : document.getElementById("PNG/SUSHI").value.replace(/,/g, '.'),
        png_aave:
          document.getElementById("PNG/AAVE").value == ""
            ? undefined
            : document.getElementById("PNG/AAVE").value.replace(/,/g, '.'),
        png_yfi:
          document.getElementById("PNG/YFI").value == ""
            ? undefined
            : document.getElementById("PNG/YFI").value.replace(/,/g, '.'),
      },
    },
    function () {
    }
  );
});

// When the button is clicked, inject setValues into current page
displayScript.addEventListener("click", async () => {
  let [tab] = await chrome.tabs.query({ active: true, currentWindow: true });

  chrome.scripting.executeScript({
    target: { tabId: tab.id },
    function: setValues,
  });
});

// The body of this function will be executed as a content script inside the
// current page
function setValues() {
  var poolLPinvest = [];
  //Renseignez ici le total d'AVAX investi dans chaque pool
  //Pour retrouver les transactions allez sur https://avascan.info/ Tapez votre adresse et recherchez les transactions � l'adresse 0xe54ca86531e17ef3616d22ca28b0d458b6c89106 avec une "value" > 0, en principe elles fonctionnent par paire si vous swappez un token avant ex:
  //ERC20 TRANSFER FROMERC20 TRANSFER SENT	0x50d5c9...45d2cc22 FROM 0x9DExxxxxxxxxxxxxxxxxx TO 0xE54Ca86531e17Ef3616d22Ca28b0D458b6C89106 50.00 AVAX
  //ERC20 TRANSFERSENT	                    0x6c8774...565ef22c FROM 0x9DECxxxxxxxxxxxxxxx TO 0xE54Ca86531e17Ef3616d22Ca28b0D458b6C89106 49.87 AVAX
  //La plus ancienne correspond au SWAP de Token AVAX -> WBTC par exemple (vous pouvez voir le d�tail en cliquant sur la transaction)
  //La suivante correspond � l'ajout de liquidit� le montant est un peu plus faible � cause des frais de swap, sur celle ci vous devez voir une ligne d'op�ration interne GETPAIR que l'on a pas sur la pr�c�dente
  //La valeur en AVAX � indiquer est donc celle ci multipli�e par 2 (� arrondir si vous voulez prendre en compte les frais de swap)
  //Les transactions � l'adresse 0xe54ca86531e17ef3616d22ca28b0d458b6c89106 avec une "value" � 0 correspondent au retrait de liquidit� ou un claim de PNG dans en cliquant dessus vous verrez dans le d�tail des transactions en PGL ou en PNG
  //N'oubliez pas de soustraire les liquidit�s retir�es ;-)

  chrome.storage.sync.get("values", function (result) {
    poolLPinvest[0] =
      result.values.avax_eth == undefined ? 0 : result.values.avax_eth; //AVAXETH
    poolLPinvest[1] =
      result.values.avax_usdt == undefined ? 0 : result.values.avax_usdt; //AVAXUSDT
    poolLPinvest[2] =
      result.values.avax_wbtc == undefined ? 0 : result.values.avax_wbtc; //AVAXWBTC
    poolLPinvest[3] =
      result.values.avax_png == undefined ? 0 : result.values.avax_png; //AVAXPNG
    poolLPinvest[4] =
      result.values.avax_link == undefined ? 0 : result.values.avax_link; //AVAXLINK
    poolLPinvest[5] =
      result.values.avax_dai == undefined ? 0 : result.values.avax_dai; //AVAXDAI
    poolLPinvest[6] =
      result.values.avax_uni == undefined ? 0 : result.values.avax_uni; //AVAXUNI
    poolLPinvest[7] =
      result.values.avax_sushi == undefined ? 0 : result.values.avax_sushi; //AVAXSUSHI
    poolLPinvest[8] =
      result.values.avax_aave == undefined ? 0 : result.values.avax_aave; //AVAXAAVE
    poolLPinvest[9] =
      result.values.avax_yfi == undefined ? 0 : result.values.avax_yfi; //AVAXYFI
    poolLPinvest[10] =
      result.values.png_eth == undefined ? 0 : result.values.png_eth; //PNGETH
    poolLPinvest[11] =
      result.values.png_usdt == undefined ? 0 : result.values.png_usdt; //PNGUSDT
    poolLPinvest[12] =
      result.values.png_wbtc == undefined ? 0 : result.values.png_wbtc; //PNGWBTC
    poolLPinvest[13] =
      result.values.png_link == undefined ? 0 : result.values.png_link; //PNGLINK
    poolLPinvest[14] =
      result.values.png_dai == undefined ? 0 : result.values.png_dai; //PNGDAI
    poolLPinvest[15] =
      result.values.png_uni == undefined ? 0 : result.values.png_uni; //PNGUNI
    poolLPinvest[16] =
      result.values.png_sushi == undefined ? 0 : result.values.png_sushi; //PNGSUSHI
    poolLPinvest[17] =
      result.values.png_aave == undefined ? 0 : result.values.png_aave; //PNGAAVE
    poolLPinvest[18] =
      result.values.png_yfi == undefined ? 0 : result.values.png_yfi; //PNGYFI
    var totalLPinvest =
      Math.round(100 * poolLPinvest.reduce((a, b) => a + b, 0)) / 100;

    if (
      document
        .getElementsByTagName("body")[0]
        .innerHTML.indexOf("PNG / week") != -1
    ) {
      var rate = [];
      var valueLP = [];
      var div = document.getElementsByTagName("div");
      var k = -1;
      for (var i = 0; i < div.length; i++) {
        if (
          div[i].innerHTML.indexOf("PNG / week") != -1 &&
          div[i].innerHTML.length < 30
        ) {
          var classNamebloc4 = div[i].className;
          k += 1;
        }
        if (
          div[i].innerHTML.indexOf("Your rate") != -1 &&
          div[i].innerHTML.length < 30
        ) {
          rate[k] = Number(
            div[i + 1].innerHTML
              .split("</span>")[1]
              .split(" ")[0]
              .replace(/,/g, "")
          );
        }

        if (
          div[i].innerHTML.indexOf("Participating pools") != -1 &&
          div[i].innerHTML.indexOf("Rewards") != -1 &&
          div[i].innerHTML.length < 200
        ) {
          var participatingpool = div[i].className;
        }
      }

      var classNamepool = document.getElementsByClassName(classNamebloc4)[20]
        .parentNode.parentNode.parentNode.parentNode.className;

      var blocpool = document.getElementsByClassName(classNamepool)[0]
        .innerHTML;

      var parserfv = new DOMParser();
      var blocpooldom = parserfv.parseFromString(blocpool, "text/html");
      var tabbloc4 = blocpooldom.getElementsByClassName(classNamebloc4);

      if (
        blocpooldom
          .getElementsByClassName(classNamebloc4)[1]
          .innerHTML.indexOf("-") == -1
      ) {
        var classNamebloc2 = blocpooldom.getElementsByClassName(
          classNamebloc4
        )[1].parentNode.className;
        var classNamebloc1 = blocpooldom.getElementsByClassName(
          classNamebloc4
        )[1].parentNode.parentNode.className;

        var tabbloc1 = blocpooldom.getElementsByClassName(classNamebloc1);

        for (var j = 0; j < tabbloc1.length; j++) {
          var bloconepool = blocpooldom.getElementsByClassName(classNamebloc1)[
            j
          ].innerHTML;
          var bloconepooldom = parserfv.parseFromString(
            bloconepool,
            "text/html"
          );
          var tabblocone4 = bloconepooldom.getElementsByClassName(
            classNamebloc4
          );
          var nbavax = tabblocone4[1].innerHTML.split(" ")[0].replace(/,/g, "");
          var nbpng = tabblocone4[3].innerHTML.split(" ")[0].replace(/,/g, "");
          var nbpngpavax = Math.round((1000 * nbpng) / nbavax) / 1000;

          var newbloc = document.createElement("div");
          newbloc.innerHTML =
            '<div class="sc-kGXeez sc-hSdWYo sc-eHgmQL cyKdsJ"><div class="sc-kgoBCf nmCQH css-8626y4">Farming rate </div><div class="sc-kgoBCf nmCQH css-8626y4">' +
            nbpngpavax +
            " PNG / week / AVAX</div></div>";
          var blocrate = document.createElement("div");
          blocrate.innerHTML =
            '<div class="sc-kGXeez sc-hSdWYo sc-eHgmQL cyKdsJ"><div class="sc-kgoBCf nmCQH css-8626y4">Total rate </div><div class="sc-kgoBCf nmCQH css-8626y4">' +
            Math.round(100 * rate.reduce((a, b) => a + b, 0)) / 100 +
            " PNG / week</div></div>";
          document
            .getElementsByClassName(classNamebloc1)
            [j].appendChild(newbloc);
          document
            .getElementsByClassName(classNamebloc1)
            [j].appendChild(blocrate);
          if (rate[j] != undefined) {
            var currentavaxvalue =
              Math.round(100 * ((rate[j] / nbpng) * nbavax)) / 100;
            //alert(currentavaxvalue);
            var blocvalue = document.createElement("div");
            var br = document.createElement("br");
            if (poolLPinvest[j] != 0) {
              blocvalue.innerHTML =
                '<div class="sc-kGXeez sc-hSdWYo sc-eHgmQL cyKdsJ"><div class="sc-kgoBCf nmCQH css-8626y4">Value LP </div><div class="sc-kgoBCf nmCQH css-8626y4">' +
                currentavaxvalue +
                " AVAX - PNL: " +
                Math.round(100 * (currentavaxvalue - poolLPinvest[j])) / 100 +
                " AVAX</div></div>";
            } else {
              blocvalue.innerHTML =
                '<div class="sc-kGXeez sc-hSdWYo sc-eHgmQL cyKdsJ"><div class="sc-kgoBCf nmCQH css-8626y4">Value LP </div><div class="sc-kgoBCf nmCQH css-8626y4">' +
                currentavaxvalue +
                " AVAX</div></div>";
            }

            document.getElementsByClassName(classNamebloc1)[j].appendChild(br);
            document
              .getElementsByClassName(classNamebloc1)
              [j].appendChild(blocvalue);
            valueLP.push(currentavaxvalue);
          } else {
            valueLP.push(0);
          }
        }
        for (var l = 0; l < tabbloc1.length; l++) {
          if (rate[l] != undefined) {
            currentavaxvalue =
              Math.round(100 * ((rate[l] / nbpng) * nbavax)) / 100;
            var bloctotalvalue = document.createElement("div");
            if (totalLPinvest != 0) {
              bloctotalvalue.innerHTML =
                '<div class="sc-kGXeez sc-hSdWYo sc-eHgmQL cyKdsJ"><div class="sc-kgoBCf nmCQH css-8626y4">Total value </div><div class="sc-kgoBCf nmCQH css-8626y4">' +
                Math.round(100 * valueLP.reduce((a, b) => a + b, 0)) / 100 +
                " AVAX - PNL: " +
                Math.round(
                  100 *
                    Number(
                      Number(valueLP.reduce((a, b) => a + b, 0)) -
                        Number(totalLPinvest)
                    )
                ) /
                  100 +
                " AVAX</div></div>";
            } else {
              bloctotalvalue.innerHTML =
                '<div class="sc-kGXeez sc-hSdWYo sc-eHgmQL cyKdsJ"><div class="sc-kgoBCf nmCQH css-8626y4">Total value </div><div class="sc-kgoBCf nmCQH css-8626y4">' +
                Math.round(100 * valueLP.reduce((a, b) => a + b, 0)) / 100 +
                " AVAX</div></div>";
            }
            document
              .getElementsByClassName(classNamebloc1)
              [l].appendChild(bloctotalvalue);
          }
        }
      } else {
        setTimeout(waitForElement, 250);
      }
    } else {
      setTimeout(waitForElement, 250);
    }
  });
}
