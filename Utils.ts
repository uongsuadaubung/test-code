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

export const createListNodeFromArray = (arr: number[]): ListNode | null => {
  if (arr.length === 0) {
    return null
  }
  const head = new ListNode(arr[0])
  let current = head
  for (let i = 1; i < arr.length; i++) {
    current.next = new ListNode(arr[i])
    current = current.next
  }
  return head
}
function generateSubsetsBacktrack(nums: number[]): number[][] {
  const n = nums.length;
  const subsets: number[][] = [];

  const backtrack = (start: number, path: number[]) =>{
    subsets.push([...path]);
    for (let i = start; i < nums.length; i++) {
      path.push(nums[i]);
      backtrack(i+1, path);
      path.pop();
    }

  }

  backtrack(0,[])

  return subsets;
}

function generateSubsetsBinary(nums: number[]): number[][] {
  const n = nums.length;
  const subsets: number[][] = [];

  for (let i = 0; i < (1 << n); i++) {
    const subset: number[] = [];
    for (let j = 0; j < n; j++) {
      if ((i & (1 << j)) !== 0) {
        subset.push(nums[j]);
      }
    }
    subsets.push(subset);
  }

  return subsets;
}