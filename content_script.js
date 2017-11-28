// add an interval so it also works on dynamically loaded content
var readyStateCheckInterval = setInterval(function() {
  if (document.readyState === "complete") {
    clearInterval(readyStateCheckInterval);

    setInterval(function() {
      walk(document.body);
    }, 1000);

  }
}, 10);


function walk(node) 
{
  // Stolen from the this repo:
  // https://github.com/panicsteve/cloud-to-butt
  // Which stole this function from here:
  // http://is.gd/mwZp7E
  
  var child, next;
  
  switch ( node.nodeType )  
  {
    case 1:  // Element
    case 9:  // Document
    case 11: // Document fragment
      child = node.firstChild;
      while ( child ) 
      {
        next = child.nextSibling;
        walk(child);
        child = next;
      }
      break;

    case 3: // Text node
      handleText(node);
      break;
  }
}

function handleText(textNode) 
{
  var v = textNode.nodeValue;

  v = v.replace(/\#kidsjamannow/gi, "#anakzamansekarang");
  v = v.replace(/\#kidszamannow/gi, "#anakzamansekarang");
  v = v.replace(/kidsjamannow/gi, "anakzamansekarang");
  v = v.replace(/kidszamannow/gi, "anakzamansekarang");
  v = v.replace(/Kids Jaman Now/g, "Anak-anak Zaman Sekarang");
  v = v.replace(/Kids jaman now/g, "Anak-anak zaman sekarang");
  v = v.replace(/kids jaman now/gi, "anak-anak zaman sekarang");
  v = v.replace(/Kids Jaman Old/g, "Anak-anak Zaman Dulu");
  v = v.replace(/Kids jaman old/g, "Anak-anak zaman dulu");
  v = v.replace(/kids jaman old/gi, "anak-anak zaman dulu");
  v = v.replace(/Kids Zaman Now/g, "Anak-anak Zaman Sekarang");
  v = v.replace(/Kids zaman now/g, "Anak-anak zaman sekarang");
  v = v.replace(/kids zaman now/gi, "anak-anak zaman sekarang");
  v = v.replace(/Kids Zaman Old/g, "Anak-anak Zaman Dulu");
  v = v.replace(/Kids zaman old/g, "Anak-anak zaman dulu");
  v = v.replace(/kids zaman old/gi, "anak-anak zaman dulu");
  v = v.replace(/jaman now/gi, "zaman sekarang");
  v = v.replace(/jaman old/gi, "zaman dulu");
  v = v.replace(/zaman now/gi, "zaman sekarang");
  v = v.replace(/zaman old/gi, "zaman dulu");
  
  textNode.nodeValue = v;
}