'use strict';

//<a>
// <b>
//  <c>foo</c>
//  <c></c>
// </b>
// <d>blah</d>
//</a>
//
class Tokenizer {
    constructor(xml) {
        //
    }

    /**
     * @returns {{ value: string, type: 'BEGIN' | 'END' | 'TEXT' }} Token
     */
    nextToken() {
        //
    }

}
export class XmlStructure {
    constructor() {
    }
}

export class XmlNode {
    tagName: string;
    value: string;
    children: Map<string, XmlNode>|undefined;

    constructor(tagName: string, value:string = '') {
        this.tagName = tagName;
        this.value = value;
        this.children = undefined;
    }

    addChild() {};
}

export class XmlParser {
    constructor() {
    }
}



/**
 * Pseudocode 
 *
 * stack = []
 * 
 * 1st iteration
 * current = BEGIN a
 * -Add to stack
 * stack.push(new XmlNode(current)) -[a]
 * 
 * 2nd iteration
 * current = BEGIN b
 * -Add to stack
 * stack.push(new XmlNode(current)) -[a,b]
 * 
 * 3rd iteration
 * current = BEGIN c
 * -Add to stack
 * stack.push(new XmlNode(current)) -[a,b,c]
 * 
 * 4th iteration
 * current = TEXT foo
 * -get top of stack
 * -and assign value
 * stack[stack.length-1].value = current.value
 * 
 * 5th iteration
 * current = END c
 * -Remove from stack
 * node = stack.pop(); -[a,b]
 * -get top of stack
 * -and add removed node as child
 * stack[stack.length-1].addChild(node);
 * 
 * 
 * 6th iteration
 * current = BEGIN c
 * -Add to stack
 * stack.push(new XmlNode(current)) -[a,b,c]
 * 
 * 7th iteration
 * current = END c
 * -Remove from stack
 * node = stack.pop(); -[a,b]
 * -get top of stack
 * -and add removed node as child
 * stack[stack.length-1].addChild(node);
 * 
 * 8th iteration
 * current = END b
 * -Remove from stack
 * node = stack.pop(); -[a]
 * -get top of stack
 * -and add node as child
 * stack[stack.length-1].addChild(node);
 * 
 * 9th iteration
 * current = BEGIN d
 * -Add to stack
 * stack.push(new XmlNode(current)) -[a,d]
 * 
 * 10th iteration
 * current = TEXT blah
 * -get top of stack
 * -and assign value
 * stack[stack.length-1].value = current.value
 * 
 * 11th iteration
 * current = END d
 * -Remove from stack
 * node = stack.pop(); -[a]
 * -get top of stack
 * -and add removed node as child
 * stack[stack.length-1].addChild(node);
 * 
 * 12th iteration
 * current = END a
 * -Remove from stack
 * node = stack.pop(); -[a]
 * -get top of stack
 * -and add removed node as child
 * stack[stack.length-1].addChild(node);
 */
class XmlStructure {

  structure: XmlNode;

  constructor(xml: string) {
    const tokenizer = new Tokenizer(xml);
    const stack = [];
    let node: XmlNode|undefined = undefined;

    let currentToken = tokenizer.nextToken();
    while (currentToken != undefined) {
      if (currentToken.type == 'BEGIN') {
        //Add to stack
        stack.push(new XmlNode(current));
      }
      else if (currentToken.type == 'TEXT') {
        stack[stack.length-1].value = current.value
      }
      else if (currentToken.type == 'END') {
        //Remove from stack
        node = stack.pop();
        //get top of stack
        //and add removed node as child
        if (stack.length > 0) {
          stack[stack.length-1].addChild(node);
        }

        //Top level node
        else {
          this.structure = node;
        }
      }
      currentToken = tokenizer.nextToken();
    }

    if (stack.length > 0) {
        throw new Error('Invalid XML received');
    }
  }
}


class XmlNode {
  const tagName: string;
  const value: string|undefined;
  const children: Array<XmlNode>|undefined;

  constructor(tagName) {
    this.tagName = tagName;
    this.value = undefined;
    this.children = undefined;
  }

  addChild(node: XmlNode) {
    this.children.push(node);
  }
}
