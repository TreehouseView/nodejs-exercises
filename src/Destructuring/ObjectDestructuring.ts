'use strict';

console.log('Start');

const user = {
    id: 42,
    is_verified: true
}
console.log(user.id, user.is_verified);

// Unpack without declaration
let id: number;
let is_verified: boolean;
({id, is_verified} = user);
console.log(id, is_verified);

// Assign to different name
let {id: id2, is_verified: is_verified2} = user;
console.log(id2, is_verified2);

// Default value if undefined.
// Does not work for some reason as it
// would produce error "Property 'opt_var1' does not exist"
/*
const tree = {
    tree_name: 'Acacia',
    tree_type: 'Tree',
    tree_id: 123
};
const {tree_name, tree_type, opt_var1 = "default"} = tree; 
*/
//console.log(tree_name, tree_type, opt_var1);

