// Codes are based on the one here:
// https://github.com/mark-monteiro/drumpfinator

// add an interval so it also works on dynamically loaded content
var readyStateCheckInterval = setInterval(function() {
  if (document.readyState === "complete") {
    clearInterval(readyStateCheckInterval);
    
    main();
  }
}, 10);

function main() {
  document.title = replaceText(document.title);

  replaceNodeText(document.body);

  // Create a mutation observer to monitor the DOM for changes
  var observer = new MutationObserver(function(mutations) {
    mutations.forEach(function(mutation) {
      Array.prototype.slice.call(mutation.addedNodes).forEach(replaceNodeText);
    });
  });

  // Configure and start the observer
  observer.observe(document.body, {
    childList: true,
    subtree: true,
    attributes: false,
    characterData: false
  });
}

function replaceNodeText(node) {
  // Create a tree walker to traverse all text nodes
  var walker = document.createTreeWalker(
    node,
    NodeFilter.SHOW_TEXT,
    {
      acceptNode: function(node) {
        // Reject contentEditable and textarea nodes
        return (node.parentElement && (node.parentElement.isContentEditable || node.parentElement.nodeName == "TEXTAREA")) ?
          NodeFilter.FILTER_SKIP :
          NodeFilter.FILTER_ACCEPT;
      }
    },
    false
  );

  var textNode;
  while (textNode = walker.nextNode()) {
    textNode.nodeValue = replaceText(textNode.nodeValue);
  }
}

function replaceText(text) {
  text = text.replace(/\#kidsjamannow/gi, "#anakzamansekarang");
  text = text.replace(/\#kidszamannow/gi, "#anakzamansekarang");
  text = text.replace(/kidsjamannow/gi, "anakzamansekarang");
  text = text.replace(/kidszamannow/gi, "anakzamansekarang");
  text = text.replace(/Kids Jaman Now/g, "Anak-anak Zaman Sekarang");
  text = text.replace(/Kids jaman now/g, "Anak-anak zaman sekarang");
  text = text.replace(/kids jaman now/gi, "anak-anak zaman sekarang");
  text = text.replace(/Kids Jaman Old/g, "Anak-anak Zaman Dulu");
  text = text.replace(/Kids jaman old/g, "Anak-anak zaman dulu");
  text = text.replace(/kids jaman old/gi, "anak-anak zaman dulu");
  text = text.replace(/Kids Zaman Now/g, "Anak-anak Zaman Sekarang");
  text = text.replace(/Kids zaman now/g, "Anak-anak zaman sekarang");
  text = text.replace(/kids zaman now/gi, "anak-anak zaman sekarang");
  text = text.replace(/Kids Zaman Old/g, "Anak-anak Zaman Dulu");
  text = text.replace(/Kids zaman old/g, "Anak-anak zaman dulu");
  text = text.replace(/kids zaman old/gi, "anak-anak zaman dulu");
  text = text.replace(/jaman now/gi, "zaman sekarang");
  text = text.replace(/jaman old/gi, "zaman dulu");
  text = text.replace(/zaman now/gi, "zaman sekarang");
  text = text.replace(/zaman old/gi, "zaman dulu");
  
  return text;
}