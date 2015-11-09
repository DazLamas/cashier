function createDOMElement(element, text, container) {
  var node = document.createElement(element);
  node.innerHTML = text
  document.getElementById('buttons').appendChild(node);
}