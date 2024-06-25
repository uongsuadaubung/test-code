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
  for (const val of arr) {
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
  for (const val of arr) {
    root = insertIntoList(root, val);
  }
  return root;
}

export const createListNodeFromArray = (arr: number[]): ListNode | null => {
  if (arr.length === 0) {
    return null;
  }
  const head = new ListNode(arr[0]);
  let current = head;
  for (let i = 1; i < arr.length; i++) {
    current.next = new ListNode(arr[i]);
    current = current.next;
  }
  return head;
};
export function generateSubsetsBacktrack(nums: number[]): number[][] {
  const subsets: number[][] = [];

  const backtrack = (start: number, path: number[]) =>{
    subsets.push([...path]);
    for (let i = start; i < nums.length; i++) {
      path.push(nums[i]);
      backtrack(i+1, path);
      path.pop();
    }

  }; 

  backtrack(0,[]);

  return subsets;
}

export function generateSubsetsBinary(nums: number[]): number[][] {
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
export function rotateMatrix(matrix: number[][]): void {
  const n = matrix.length;

  // Đảo ngược các hàng
  for (let row = 0; row < Math.floor(n / 2); row++) {
    const temp = matrix[row];
    matrix[row] = matrix[n - row - 1];
    matrix[n - row - 1] = temp;
  }

  // Chuyển vị ma trận
  for (let row = 0; row < n; row++) {
    for (let col = row + 1; col < n; col++) {
      const temp = matrix[row][col];
      matrix[row][col] = matrix[col][row];
      matrix[col][row] = temp;
    }
  }
}

export function arrayToTreeNode(arr: (number | null)[]): TreeNode | null {
  if (!arr.length) return null;
  
  const root = new TreeNode(arr[0]!);
  const queue: (TreeNode | null)[] = [root];
  let i = 1;
  
  while (queue.length && i < arr.length) {
    const current = queue.shift()!;
    
    if (current !== null) {
      if (arr[i] !== null) {
        current.left = new TreeNode(arr[i]!);
        queue.push(current.left);
      }
      i++;
      if (i < arr.length && arr[i] !== null) {
        current.right = new TreeNode(arr[i]!);
        queue.push(current.right);
      }
      i++;
    }
  }
  
  return root;
}