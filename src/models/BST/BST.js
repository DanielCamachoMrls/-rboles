import Node from "./Node.js";

class BST {
    #root;

    constructor() {
        this.#root = null;
    }

    add(value) {
        if (this.#root == null) {
            this.#root = new Node(value);
            return true;
        } else {
            return this.#insertNode(this.#root, value);
        }
    }

    #insertNode(node, value) {
        if (value.title < node.value.title) {
            if (node.left == null) {
                node.left = new Node(value);
                return true;
            } else {
                return this.#insertNode(node.left, value);
            }
        } else {
            if (node.right == null) {
                node.right = new Node(value);
                return true;
            } else {
                return this.#insertNode(node.right, value);
            }
        }
    }

    inOrder(callback) {
        this.#inOrderTraverse(this.#root, callback);
    }

    #inOrderTraverse(node, callback) {
        if (node !== null) {
            this.#inOrderTraverse(node.left, callback);
            if (node.value) {
                callback(node.value);
            }
            this.#inOrderTraverse(node.right, callback);
        }
    }

    search(title) {
        return this.#searchNode(this.#root, title);
    }

    #searchNode(node, title) {
        if (node === null) {
            return null;
        }
        if (title < node.value.title) {
            return this.#searchNode(node.left, title);
        } else if (title > node.value.title) {
            return this.#searchNode(node.right, title);
        } else {
            return node.value;
        }
    }

    getMin() {
        let current = this.#root;
        while (current.left !== null) {
            current = current.left;
        }
        return current.value;
    }

    getMax() {
        let current = this.#root;
        while (current.right !== null) {
            current = current.right;
        }
        return current.value;
    }
}

export default BST;