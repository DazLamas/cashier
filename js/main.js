function createDOMElement(element, text, container, id, addEvent) {
  var node = document.createElement(element);

  node.innerHTML = text
  if (id) {node.id = id};

  document.getElementById('buttons-container').appendChild(node);

  if (addEvent) {
    document.getElementById(id).addEventListener(addEvent[0], addEvent[1], false);
  };
}

function removeDOMElements(className){;
  var elementsToRemove = document.getElementById('buttons-container').getElementsByTagName(className);
  for (var i = 0; i < elementsToRemove.length; i++) {
    elementsToRemove[i].remove();
  };
}