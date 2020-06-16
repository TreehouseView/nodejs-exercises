'use strict';

import {ReverseLinkedList, LinkedListNode} from "./ReverseLinkedList";

describe('Linked List', () => {
    let linkedObject:LinkedListNode;
    const rootObject:LinkedListNode = {
        name: 'A',
        child: undefined
    };
    let parentObject:LinkedListNode = rootObject;
    ['B','C','D','E','F'].forEach((value) => {
        linkedObject = {
            name: value,
            child: undefined
        };
        if (parentObject) {
            parentObject.child = linkedObject;
        }
        parentObject = linkedObject;
    });
    it('Should show linked list', () => {
        ReverseLinkedList.show(rootObject);
    });
    it('Should reverse linked list', () => {
        const newRoot = ReverseLinkedList.reverse(rootObject);
        expect(newRoot !== undefined).toEqual(true);
        if (newRoot) {
            ReverseLinkedList.show(newRoot);
        }
    });
});
