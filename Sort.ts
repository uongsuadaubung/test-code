export const selectionSort = <T>(arr: T[]): T[] => {
  for (let i = 0; i < arr.length; i++) {
    let minIndex = i;
    for (let j = i + 1; j < arr.length; j++) {
      if (arr[j] < arr[minIndex]) {
        minIndex = j;
      }
    }
    if (minIndex !== i) {
      [arr[i], arr[minIndex]] = [arr[minIndex], arr[i]];
    }
  }
  return arr;
};

export const bubbleSort = <T>(arr: T[]): T[] => {
  let swapped = true;
  while (swapped) {
    swapped = false;
    for (let i = 0; i < arr.length - 1; i++) {
      if (arr[i] > arr[i + 1]) {
        [arr[i], arr[i + 1]] = [arr[i + 1], arr[i]];
        swapped = true;
      }
    }
  }
  return arr;
};

export const insertionSort = <T>(arr: T[]): T[] => {
  for (let i = 1; i < arr.length; i++) {
    let j = i;
    while (j > 0 && arr[j] < arr[j - 1]) {
      [arr[j], arr[j - 1]] = [arr[j - 1], arr[j]];
      j--;
    }
  }
  return arr;
};

export const heapSort = <T>(arr: T[]): T[] => {
  const maxHeapify = (i: number, heapSize: number) => {
    let largest = i;
    const left = 2 * i + 1;
    const right = 2 * i + 2;
    if (left < heapSize && arr[left] > arr[largest]) {
      largest = left;
    }
    if (right < heapSize && arr[right] > arr[largest]) {
      largest = right;
    }
    if (largest !== i) {
      [arr[i], arr[largest]] = [arr[largest], arr[i]];
      maxHeapify(largest, heapSize);
    }
  };
  for (let i = arr.length >> 1 -1; i >= 0; i--) {
    maxHeapify(i, arr.length);
  }

  for (let i = arr.length - 1; i > 0; i--) {
    [arr[0], arr[i]] = [arr[i], arr[0]];
    maxHeapify(0, i);
  }
  
  return arr;
};