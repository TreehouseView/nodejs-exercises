"use strict";

export interface LinkedListNode {
    name: string;
    child: LinkedListNode|undefined;
}

export class ReverseLinkedList {
    static reverse(linkedObject: LinkedListNode): LinkedListNode|undefined {
        let parentNode: LinkedListNode|undefined = undefined;
        let currentNode: LinkedListNode|undefined = linkedObject;
        let childNode: LinkedListNode|undefined;
        while (currentNode != null) {
            childNode = currentNode.child;
            currentNode.child = parentNode;
            parentNode = currentNode;
            currentNode = childNode;
        }
        return parentNode;
    }
    static show(linkedObject: LinkedListNode) {
        console.log(linkedObject.name);
        if (linkedObject.child) {
            this.show(linkedObject.child);
        }
    }
}
