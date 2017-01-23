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

function _treeTraverse(tree, nodeName, newTree, cb) {
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

/* добавление элемента на JS */
var div_0 = document.createElement('div');
div_0.classList.add('depth-0');
div_0.innerHTML = 'Text level-0';
var div_1 = document.createElement('div');
div_1.classList.add('depth-1');
div_1.innerHTML = 'Text level-1';
div_0.appendChild(div_1);
document.body.appendChild(div_0);

/* то же на JSX */
document.body.appendChild(
    <div class="depth-0">
        Text level-0
        <div class="depth-1">
            Text level-1
            <ul>
                //option 1
                {['item-1', 'item-2', 'item-3'].map(function(item) {
                    return <li>{item}</li>
                })}
                //option 2
                <li>item-1</li>
                <li>item-2</li>
                <li>item-3</li>
                //option 3
                [
                    <li>item-1</li>,
                    <li>item-2</li>,
                    <li>item-3</li>
                ]
                //The next does not work, because fuction shout return something
                {['item-1', 'item-2', 'item-3'].forEach(function(item) {
                    return <li>{item}</li>
                })}
            </ul>
        </div>
    </div>
);