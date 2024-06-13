import { ListNode, TreeNode } from "./DataStruct";

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
export function arrayToBST(arr: Array<number | null>): TreeNode | null {
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

const insertIntoList = (root: ListNode | null, val: number): ListNode => {
  if (root === null) {
    return new ListNode(val);
  }
  root.next = insertIntoList(root.next, val);
  return root;
};
export function arrayToList(arr: Array<number>): ListNode | null {
  if (arr.length === 0) {
    return null;
  }
  let root: ListNode | null = null;
  for (let val of arr) {
    root = insertIntoList(root, val);
  }
  return root;
}
