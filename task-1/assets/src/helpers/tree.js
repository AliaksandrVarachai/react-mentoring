/**
 * Traverses through the tree looks for nodes named nodeName and calls cb(node)
 * @param tree      [Object]
 * @param nodeName  [String]  Could be an array or an object
 * @param cb        [Function]
 * @param options
 */
function treeTraverse(tree, nodeName, cb, options) {
    if (!tree) {
        throw Error('Object tree is undefined or null');
    }
    if (!tree[node]) {
        throw Error(`There is no node with name "${nodeName}"`);
    }
    _treeTraverse(tree, nodeName, 0, cb);
}

function _treeTraverse(tree, nodeName, depth, cb) {
    let node = tree[nodeName];
    let dom;
    if (node instanceof Array) {
        node.forEach((item) => {
            dom = cb(item);
            if (item[nodeName]) {
                _treeTraverse(item, nodeName, depth + 1, cb, options);
            }
        })
    } else if (node instanceof Object) {
        dom = cb(node);
        if (node[nodeName]) {
            _treeTraverse(item, nodeName, depth + 1, cb, options);
        }
    } else {
        console.log(`"${nodeName}" must be an array or an object`);
    }
}


export default {
    treeTraverse
};