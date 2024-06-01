import {TreeNode} from "./DataStruct";

function insertIntoBST(root: TreeNode | null, val: number): TreeNode {
  if (root === null) {
    return new TreeNode(val);
  }
  if (val < root.val) {
    root.left = insertIntoBST(root.left, val);
  } else {
    root.right = insertIntoBST(root.right, val);
  }
  return root;
}
export function arrayToBST(arr: Array<number|null>): TreeNode | null {
  if (arr.length === 0) {
    return null;
  }

  let root: TreeNode | null = null;
  for (let val of arr) {
    if (val !== null) {
      root = insertIntoBST(root, val);
    }
  }
  return root;
}
