function append(appendElement, element){
	var isInstance = appendElement instanceof jQuery;
	if(isInstance)
		$(appendElement).append(element);
	else if(typeof appendElement == 'string')
		$(appendElement).append(element);
	else
		appendElement.appendChild(element);
};
function prepend(prependElement, element){
	var isInstance = prependElement instanceof jQuery;
	if(isInstance)
		$(prependElement).prepend(element);
	else if(typeof prependElement == 'string')
		$(prependElement).prepend(element);
	else
		prependElement.parentNode.insertBefore(element, prependElement.childNodes[0]);
};
function before(beforeElement, element){
	if(beforeElement instanceof jQuery)
		$(beforeElement).before(element);
	else if(typeof beforeElement == 'string')
		$(beforeElement).before(element);
	else
		beforeElement.parentNode.insertBefore(element, beforeElement);
};
function after(afterElement, element){
	var isInstance = afterElement instanceof jQuery;
	if(isInstance)
		$(afterElement).after(element);
	else if(typeof afterElement == 'string')
		$(afterElement).after(element);
	else
		afterElement.parentNode.insertBefore(element, afterElement.nextSibling);
}
/*
 * iframe
 */
function iframeAppend(selector, appendElement){
	var element = document.createElement('iframe');
	setAttributes(selector, element);
	append(appendElement, element);
	
	return element;
};
function iframePrepend(selector, prependElement){
	
	var element = document.createElement('iframe');
	setAttributes(selector, element);
	prepend(prependElement, element);
	
	return element;
};
function iframeBefore(selector, beforeElement){
	var element = document.createElement('iframe');
	setAttributes(selector, element);
	before(beforeElement, element);
	
	return element;
};
function iframeAfter(selector, afterElement){
	var element = document.createElement('iframe');
	setAttributes(selector, element);
	after(afterElement, element);
	
	return element;
};
/*
 * div
 */
function divAppend(selector, appendElement){
	var element = document.createElement('div');
	setAttributes(selector, element);
	append(appendElement, element);
	
	return element;
};
function divPrepend(selector, prependElement){
	var element = document.createElement('div');
	setAttributes(selector, element);
	prepend(prependElement, element);
	
	return element;
};
function divBefore(selector, beforeElement){
	var element = document.createElement('div');
	setAttributes(selector, element);
	before(beforeElement, element);
	
	return element;
};
function divAfter(selector, afterElement){
	var element = document.createElement('div');
	setAttributes(selector, element);
	after(afterElement, element);
	
	return element;
};
/*
 * a
 */
function aAppend(selector, appendElement){
	var element = document.createElement('a');
	setAttributes(selector, element);
	append(appendElement, element);
	
	return element;
};
function aPrepend(selector, prependElement){
	var element = document.createElement('a');
	setAttributes(selector, element);
	prepend(prependElement, element);
	
	return element;
};
function aBefore(selector, beforeElement){
	var element = document.createElement('a');
	setAttributes(selector, element);
	before(beforeElement, element);
	
	return element;
};
function aAfter(selector, afterElement){
	var element = document.createElement('a');
	setAttributes(selector, element);
	after(afterElement, element);
	
	return element;
};
/*
 * h1
 */
function h1Append(selector, appendElement){
	
	var element = document.createElement('h1');
	setAttributes(selector, element);
	append(appendElement, element);
	
	return element;
};
function h1Prepend(selector, prependElement){
	var element = document.createElement('h1');
	setAttributes(selector, element);
	prepend(prependElement, element);
	
	return element;
};
function h1Before(selector, beforeElement){
	var element = document.createElement('h1');
	setAttributes(selector, element);
	before(beforeElement, element);
	
	return element;
};
function h1After(selector, afterElement){
	var element = document.createElement('h1');
	setAttributes(selector, element);
	after(afterElement, element);
	
	return element;
};
/*
 * h2
 */
function h2Append(selector, appendElement){
	
	var element = document.createElement('h2');
	setAttributes(selector, element);
	append(appendElement, element);
	
	return element;
};
function h2Prepend(selector, prependElement){
	var element = document.createElement('h2');
	setAttributes(selector, element);
	prepend(prependElement, element);
	
	return element;
};
function h2Before(selector, beforeElement){
	var element = document.createElement('h2');
	setAttributes(selector, element);
	before(beforeElement, element);
	
	return element;
};
function h2After(selector, afterElement){
	var element = document.createElement('h2');
	setAttributes(selector, element);
	after(afterElement, element);
	
	return element;
};
/*
 * h3
 */
function h3Append(selector, appendElement){
	
	var element = document.createElement('h3');
	setAttributes(selector, element);
	append(appendElement, element);
	
	return element;
};
function h3Prepend(selector, prependElement){
	var element = document.createElement('h3');
	setAttributes(selector, element);
	prepend(prependElement, element);
	
	return element;
};
function h3Before(selector, beforeElement){
	var element = document.createElement('h3');
	setAttributes(selector, element);
	before(beforeElement, element);
	
	return element;
};
function h3After(selector, afterElement){
	var element = document.createElement('h3');
	setAttributes(selector, element);
	after(afterElement, element);
	
	return element;
};
/*
 * h4
 */
function h4Append(selector, appendElement){
	
	var element = document.createElement('h4');
	setAttributes(selector, element);
	append(appendElement, element);
	
	return element;
};
function h4Prepend(selector, prependElement){
	var element = document.createElement('h4');
	setAttributes(selector, element);
	prepend(prependElement, element);
	
	return element;
};
function h4Before(selector, beforeElement){
	var element = document.createElement('h4');
	setAttributes(selector, element);
	before(beforeElement, element);
	
	return element;
};
function h4After(selector, afterElement){
	var element = document.createElement('h4');
	setAttributes(selector, element);
	after(afterElement, element);
	
	return element;
};
/*
 * h5
 */
function h5Append(selector, appendElement){
	
	var element = document.createElement('h5');
	setAttributes(selector, element);
	append(appendElement, element);
	
	return element;
};
function h5Prepend(selector, prependElement){
	var element = document.createElement('h5');
	setAttributes(selector, element);
	prepend(prependElement, element);
	
	return element;
};
function h5Before(selector, beforeElement){
	var element = document.createElement('h5');
	setAttributes(selector, element);
	before(beforeElement, element);
	
	return element;
};
function h5After(selector, afterElement){
	var element = document.createElement('h5');
	setAttributes(selector, element);
	after(afterElement, element);
	
	return element;
};
/*
 * h6
 */
function h6Append(selector, appendElement){
	
	var element = document.createElement('h6');
	setAttributes(selector, element);
	append(appendElement, element);
	
	return element;
};
function h6Prepend(selector, prependElement){
	var element = document.createElement('h6');
	setAttributes(selector, element);
	prepend(prependElement, element);
	
	return element;
};
function h6Before(selector, beforeElement){
	var element = document.createElement('h6');
	setAttributes(selector, element);
	before(beforeElement, element);
	
	return element;
};
function h6After(selector, afterElement){
	var element = document.createElement('h6');
	setAttributes(selector, element);
	after(afterElement, element);
	
	return element;
};
/*
 * p
 */
function pAppend(selector, appendElement){
	
	var element = document.createElement('p');
	setAttributes(selector, element);
	append(appendElement, element);
	
	return element;
};
function pPrepend(selector, prependElement){
	var element = document.createElement('p');
	setAttributes(selector, element);
	prepend(prependElement, element);
	
	return element;
};
function pBefore(selector, beforeElement){
	var element = document.createElement('p');
	setAttributes(selector, element);
	before(beforeElement, element);
	
	return element;
};
function pAfter(selector, afterElement){
	var element = document.createElement('p');
	setAttributes(selector, element);
	after(afterElement, element);
	
	return element;
};
/*
 * span
 */
function spanAppend(selector, appendElement){
	var element = document.createElement('span');
	setAttributes(selector, element);
	append(appendElement, element);
	
	return element;
};
function spanPrepend(selector, prependElement){
	
	var element = document.createElement('span');
	setAttributes(selector, element);
	prepend(prependElement, element);
	
	return element;
};
function spanBefore(selector, beforeElement){
	var element = document.createElement('span');
	setAttributes(selector, element);
	before(beforeElement, element);
	
	return element;
};
function spanAfter(selector, afterElement){
	var element = document.createElement('span');
	setAttributes(selector, element);
	after(afterElement, element);
	
	return element;
};
/*
 * input
 */
function inputAppend(selector, appendElement){
	var element = document.createElement('input');
	setAttributes(selector, element);
	append(appendElement, element);
	
	return element;
};
function inputPrepend(selector, prependElement){
	
	var element = document.createElement('input');
	setAttributes(selector, element);
	prepend(prependElement, element);
	
	return element;
};
function inputBefore(selector, beforeElement){
	var element = document.createElement('input');
	setAttributes(selector, element);
	before(beforeElement, element);
	
	return element;
};
function inputAfter(selector, afterElement){
	var element = document.createElement('input');
	setAttributes(selector, element);
	after(afterElement, element);
	
	return element;
};
/*
 * textarea
 */
function textareaAppend(selector, appendElement){
	var element = document.createElement('textarea');
	setAttributes(selector, element);
	append(appendElement, element);
	
	return element;
};
function textareaPrepend(selector, prependElement){
	
	var element = document.createElement('textarea');
	setAttributes(selector, element);
	prepend(prependElement, element);
	
	return element;
};
function textareaBefore(selector, beforeElement){
	var element = document.createElement('textarea');
	setAttributes(selector, element);
	before(beforeElement, element);
	
	return element;
};
function textareaAfter(selector, afterElement){
	var element = document.createElement('textarea');
	setAttributes(selector, element);
	after(afterElement, element);
	
	return element;
};
/*
 * form
 */
function formAppend(selector, appendElement){
	var element = document.createElement('form');
	setAttributes(selector, element);
	append(appendElement, element);
	
	return element;
};
function formPrepend(selector, prependElement){
	
	var element = document.createElement('form');
	setAttributes(selector, element);
	prepend(prependElement, element);
	
	return element;
};
function formBefore(selector, beforeElement){
	var element = document.createElement('form');
	setAttributes(selector, element);
	before(beforeElement, element);
	
	return element;
};
function formAfter(selector, afterElement){
	var element = document.createElement('form');
	setAttributes(selector, element);
	after(afterElement, element);
	
	return element;
};
/*
 * select
 */
function selectAppend(selector, appendElement){
	var element = document.createElement('select');
	setAttributes(selector, element);
	append(appendElement, element);
	
	return element;
};
function selectPrepend(selector, prependElement){
	
	var element = document.createElement('select');
	setAttributes(selector, element);
	prepend(prependElement, element);
	
	return element;
};
function selectBefore(selector, beforeElement){
	var element = document.createElement('select');
	setAttributes(selector, element);
	before(beforeElement, element);
	
	return element;
};
function selectAfter(selector, afterElement){
	var element = document.createElement('select');
	setAttributes(selector, element);
	after(afterElement, element);
	
	return element;
};
/*
 * option
 */
function optionAppend(selector, appendElement){
	var element = document.createElement('option');
	setAttributes(selector, element);
	append(appendElement, element);
	
	return element;
};
function optionPrepend(selector, prependElement){
	
	var element = document.createElement('option');
	setAttributes(selector, element);
	prepend(prependElement, element);
	
	return element;
};
function optionBefore(selector, beforeElement){
	var element = document.createElement('option');
	setAttributes(selector, element);
	before(beforeElement, element);
	
	return element;
};
function optionAfter(selector, afterElement){
	var element = document.createElement('option');
	setAttributes(selector, element);
	after(afterElement, element);
	
	return element;
};
/*
 * button
 */
function buttonAppend(selector, appendElement){
	var element = document.createElement('button');
	setAttributes(selector, element);
	append(appendElement, element);
	
	return element;
};
function buttonPrepend(selector, prependElement){
	
	var element = document.createElement('button');
	setAttributes(selector, element);
	prepend(prependElement, element);
	
	return element;
};
function buttonBefore(selector, beforeElement){
	var element = document.createElement('button');
	setAttributes(selector, element);
	before(beforeElement, element);
	
	return element;
};
function buttonAfter(selector, afterElement){
	var element = document.createElement('button');
	setAttributes(selector, element);
	after(afterElement, element);
	
	return element;
};
/*
 * img
 */
function imgAppend(selector, appendElement){
	var element = document.createElement('img');
	setAttributes(selector, element);
	append(appendElement, element);
	
	return element;
};
function imgPrepend(selector, prependElement){
	
	var element = document.createElement('img');
	setAttributes(selector, element);
	prepend(prependElement, element);
	
	return element;
};
function imgBefore(selector, beforeElement){
	var element = document.createElement('img');
	setAttributes(selector, element);
	before(beforeElement, element);
	
	return element;
};
function imgAfter(selector, afterElement){
	var element = document.createElement('img');
	setAttributes(selector, element);
	after(afterElement, element);
	
	return element;
};
/*
 * table
 */
function tableAppend(selector, appendElement){
	var element = document.createElement('table');
	setAttributes(selector, element);
	append(appendElement, element);
	
	return element;
};
function tablePrepend(selector, prependElement){
	
	var element = document.createElement('table');
	setAttributes(selector, element);
	prepend(prependElement, element);
	
	return element;
};
function tableBefore(selector, beforeElement){
	var element = document.createElement('table');
	setAttributes(selector, element);
	before(beforeElement, element);
	
	return element;
};
function tableAfter(selector, afterElement){
	var element = document.createElement('table');
	setAttributes(selector, element);
	after(afterElement, element);
	
	return element;
};
/*
 * thead
 */
function theadAppend(selector, appendElement){
	var element = document.createElement('thead');
	setAttributes(selector, element);
	append(appendElement, element);
	
	return element;
};
function theadPrepend(selector, prependElement){
	
	var element = document.createElement('thead');
	setAttributes(selector, element);
	prepend(prependElement, element);
	
	return element;
};
function theadBefore(selector, beforeElement){
	var element = document.createElement('thead');
	setAttributes(selector, element);
	before(beforeElement, element);
	
	return element;
};
function theadAfter(selector, afterElement){
	var element = document.createElement('thead');
	setAttributes(selector, element);
	after(afterElement, element);
	
	return element;
};
/*
 * tbody
 */
function tbodyAppend(selector, appendElement){
	var element = document.createElement('tbody');
	setAttributes(selector, element);
	append(appendElement, element);
	
	return element;
};
function tbodyPrepend(selector, prependElement){
	
	var element = document.createElement('tbody');
	setAttributes(selector, element);
	prepend(prependElement, element);
	
	return element;
};
function tbodyBefore(selector, beforeElement){
	var element = document.createElement('tbody');
	setAttributes(selector, element);
	before(beforeElement, element);
	
	return element;
};
function tbodyAfter(selector, afterElement){
	var element = document.createElement('tbody');
	setAttributes(selector, element);
	after(afterElement, element);
	
	return element;
};
/*
 * col
 */
function colAppend(selector, appendElement){
	var element = document.createElement('col');
	setAttributes(selector, element);
	append(appendElement, element);
	
	return element;
};
function colPrepend(selector, prependElement){
	
	var element = document.createElement('col');
	setAttributes(selector, element);
	prepend(prependElement, element);
	
	return element;
};
function colBefore(selector, beforeElement){
	var element = document.createElement('col');
	setAttributes(selector, element);
	before(beforeElement, element);
	
	return element;
};
function colAfter(selector, afterElement){
	var element = document.createElement('col');
	setAttributes(selector, element);
	after(afterElement, element);
	
	return element;
};
/*
 * tr
 */
function trAppend(selector, appendElement){
	var element = document.createElement('tr');
	setAttributes(selector, element);
	append(appendElement, element);
	
	return element;
};
function trPrepend(selector, prependElement){
	
	var element = document.createElement('tr');
	setAttributes(selector, element);
	prepend(prependElement, element);
	
	return element;
};
function trBefore(selector, beforeElement){
	var element = document.createElement('tr');
	setAttributes(selector, element);
	before(beforeElement, element);
	
	return element;
};
function trAfter(selector, afterElement){
	var element = document.createElement('tr');
	setAttributes(selector, element);
	after(afterElement, element);
	
	return element;
};
/*
 * td
 */
function tdAppend(selector, appendElement){
	var element = document.createElement('td');
	setAttributes(selector, element);
	append(appendElement, element);
	
	return element;
};
function tdPrepend(selector, prependElement){
	
	var element = document.createElement('td');
	setAttributes(selector, element);
	prepend(prependElement, element);
	
	return element;
};
function tdBefore(selector, beforeElement){
	var element = document.createElement('td');
	setAttributes(selector, element);
	before(beforeElement, element);
	
	return element;
};
function tdAfter(selector, afterElement){
	var element = document.createElement('td');
	setAttributes(selector, element);
	after(afterElement, element);
	
	return element;
};
/*
 * th
 */
function thAppend(selector, appendElement){
	var element = document.createElement('th');
	setAttributes(selector, element);
	append(appendElement, element);
	
	return element;
};
function thPrepend(selector, prependElement){
	
	var element = document.createElement('th');
	setAttributes(selector, element);
	prepend(prependElement, element);
	
	return element;
};
function thBefore(selector, beforeElement){
	var element = document.createElement('th');
	setAttributes(selector, element);
	before(beforeElement, element);
	
	return element;
};
function thAfter(selector, afterElement){
	var element = document.createElement('th');
	setAttributes(selector, element);
	after(afterElement, element);
	
	return element;
};
/*
 * label
 */
function labelAppend(selector, appendElement){
	var element = document.createElement('label');
	setAttributes(selector, element);
	append(appendElement, element);
	
	return element;
};
function labelPrepend(selector, prependElement){
	
	var element = document.createElement('label');
	setAttributes(selector, element);
	prepend(prependElement, element);
	
	return element;
};
function labelBefore(selector, beforeElement){
	var element = document.createElement('label');
	setAttributes(selector, element);
	before(beforeElement, element);
	
	return element;
};
function labelAfter(selector, afterElement){
	var element = document.createElement('label');
	setAttributes(selector, element);
	after(afterElement, element);
	
	return element;
};
/*
 * ul
 */
function ulAppend(selector, appendElement){
	var element = document.createElement('ul');
	setAttributes(selector, element);
	append(appendElement, element);
	
	return element;
};
function ulPrepend(selector, appendElement){
	var element = document.createElement('ul');
	setAttributes(selector, element);
	append(appendElement, element);
	
	return element;
};
function ulBefore(selector, appendElement){
	var element = document.createElement('ul');
	setAttributes(selector, element);
	append(appendElement, element);
	
	return element;
};
function ulAfter(selector, appendElement){
	var element = document.createElement('ul');
	setAttributes(selector, element);
	append(appendElement, element);
	
	return element;
};
/*
 * ol
 */
function olAppend(selector, appendElement){
	var element = document.createElement('ol');
	setAttributes(selector, element);
	append(appendElement, element);
	
	return element;
};
function olPrepend(selector, appendElement){
	var element = document.createElement('ol');
	setAttributes(selector, element);
	append(appendElement, element);
	
	return element;
};
function olBefore(selector, appendElement){
	var element = document.createElement('ol');
	setAttributes(selector, element);
	append(appendElement, element);
	
	return element;
};
function olAfter(selector, appendElement){
	var element = document.createElement('ol');
	setAttributes(selector, element);
	append(appendElement, element);
	
	return element;
};
/*
 * li
 */
function liAppend(selector, appendElement){
	var element = document.createElement('li');
	setAttributes(selector, element);
	append(appendElement, element);
	
	return element;
};
function liPrepend(selector, appendElement){
	var element = document.createElement('li');
	setAttributes(selector, element);
	append(appendElement, element);
	
	return element;
};
function liBefore(selector, appendElement){
	var element = document.createElement('li');
	setAttributes(selector, element);
	append(appendElement, element);
	
	return element;
};
function liAfter(selector, appendElement){
	var element = document.createElement('li');
	setAttributes(selector, element);
	append(appendElement, element);
	
	return element;
};
/*
 * dl
 */
function dlAppend(selector, appendElement){
	var element = document.createElement('dl');
	setAttributes(selector, element);
	append(appendElement, element);
	
	return element;
};
function dlPrepend(selector, appendElement){
	var element = document.createElement('dl');
	setAttributes(selector, element);
	append(appendElement, element);
	
	return element;
};
function dlBefore(selector, appendElement){
	var element = document.createElement('dl');
	setAttributes(selector, element);
	append(appendElement, element);
	
	return element;
};
function dlAfter(selector, appendElement){
	var element = document.createElement('dl');
	setAttributes(selector, element);
	append(appendElement, element);
	
	return element;
};

/**
 * Set Attributes
 */
function setAttributes(selector, element){
	/*
	 * Search for Id
	 */
	if(selector.search('#') != -1){
		var stringAfterId = selector.slice(selector.lastIndexOf('#') + 1);
		if(selector.indexOf('.') != -1){
			var firstDotAfterId = stringAfterId.indexOf('.');
			element.id = stringAfterId.slice(0, firstDotAfterId);
		}else if(selector.indexOf('[') != -1){
			var firstBracketAfterId = stringAfterId.indexOf('[');
			element.id = stringAfterId.slice(0, firstBracketAfterId);
		}else{
			element.id = stringAfterId;
		}
	}
	/*
	 * Search for classes
	 */
	var slicedSelector = selector;
	var classNames = new Array();
	while(slicedSelector.indexOf('.') != -1){
		
		var index = slicedSelector.indexOf('.');
		slicedSelector = slicedSelector.slice(index + 1);
		if(slicedSelector.indexOf('[') == -1 && slicedSelector.indexOf('.') == -1 && slicedSelector.indexOf('#') == -1){
			classNames.push(slicedSelector);
			break;
		}else if(slicedSelector.indexOf('[') != -1 && slicedSelector.indexOf('.') == -1 && slicedSelector.indexOf('#') == -1){
			classNames.push(slicedSelector.slice(0, slicedSelector.indexOf('[')));
			break;
		}else if(slicedSelector.indexOf('[') == -1 && slicedSelector.indexOf('.') != -1 && slicedSelector.indexOf('#') == -1){
			classNames.push(slicedSelector.slice(0, slicedSelector.indexOf('.')));
			slicedSelector = slicedSelector.slice(slicedSelector.indexOf('.'));
		}else if(slicedSelector.indexOf('[') == -1 && slicedSelector.indexOf('.') == -1 && slicedSelector.indexOf('#') != -1){
			classNames.push(slicedSelector.slice(0, slicedSelector.indexOf('#')));
			break;
		}else if(slicedSelector.indexOf('[') != -1 && slicedSelector.indexOf('.') != -1 && slicedSelector.indexOf('#') == -1){
			if(slicedSelector.indexOf('[') < slicedSelector.indexOf('.')){
				classNames.push(slicedSelector.slice(0, slicedSelector.indexOf('[')));
				slicedSelector = slicedSelector.slice(slicedSelector.indexOf('[') + 1);
			}else{
				classNames.push(slicedSelector.slice(0, slicedSelector.indexOf('.')));
				slicedSelector = slicedSelector.slice(slicedSelector.indexOf('.'));
			}
		}else if(slicedSelector.indexOf('[') == -1 && slicedSelector.indexOf('.') != -1 && slicedSelector.indexOf('#') != -1){
			if(slicedSelector.indexOf('#') < slicedSelector.indexOf('.')){
				classNames.push(slicedSelector.slice(0, slicedSelector.indexOf('#')));
				slicedSelector = slicedSelector.slice(slicedSelector.indexOf('#') + 1);
			}else{
				classNames.push(slicedSelector.slice(0, slicedSelector.indexOf('.')));
				slicedSelector = slicedSelector.slice(slicedSelector.indexOf('.'));
			}
		}else if(slicedSelector.indexOf('[') != -1 && slicedSelector.indexOf('.') == -1 && slicedSelector.indexOf('#') != -1){
			break;
		}else if(slicedSelector.indexOf('[') != -1 && slicedSelector.indexOf('.') != -1 && slicedSelector.indexOf('#') != -1){
			if(slicedSelector.indexOf('[') < slicedSelector.indexOf('.') && slicedSelector.indexOf('[') < slicedSelector.indexOf('#')){
				classNames.push(slicedSelector.slice(0, slicedSelector.indexOf('[')));
				slicedSelector = slicedSelector.slice(slicedSelector.indexOf('[') + 1);
			}else if(slicedSelector.indexOf('#') < slicedSelector.indexOf('.') && slicedSelector.indexOf('#') < slicedSelector.indexOf('.')){
				classNames.push(slicedSelector.slice(0, slicedSelector.indexOf('#')));
				slicedSelector = slicedSelector.slice(slicedSelector.indexOf('#') + 1);
			}else if(slicedSelector.indexOf('.') < slicedSelector.indexOf('[') && slicedSelector.indexOf('.') < slicedSelector.indexOf('#')){
				classNames.push(slicedSelector.slice(0, slicedSelector.indexOf('.')));
				slicedSelector = slicedSelector.slice(slicedSelector.indexOf('.'));
			}
		}
	}
	for(className in classNames){
		element.className += classNames[className] + ' ';
		if(className == classNames.length - 1)
			element.className = element.className.slice(0, -1);
	}
	/*
	 * Search for attributes
	 */
	var slicedSelector = selector;
	var attributePiece;
	while(slicedSelector.indexOf('[') != -1 && slicedSelector.indexOf(']') != -1){
		var index1 = slicedSelector.indexOf('[');
		var index2 = slicedSelector.indexOf(']');
		
		attributePiece = slicedSelector.slice(index1 + 1 , index2);
		if(attributePiece.indexOf('=') != -1){
			var name = attributePiece.slice(0, attributePiece.indexOf('='));
			var value = attributePiece.slice(attributePiece.indexOf('=') + 1);
			name = name.replace(/\s+/g, '');
			value = value.replace(/\s+/g, '').replace(/"/g, '');
			element.setAttribute(name, value);
			
		}else{
			var name = attributePiece.replace(/\s+/g, '');
			element.setAttribute(name, '');
		}
		slicedSelector = slicedSelector.slice(index2 + 1);
	}
	
};