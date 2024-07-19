import Node from "./Node.mjs"
class LinkedList{
    #head
    count
    constructor(){
        this.#head = null
        this.count = 0
    }

    add(value){
        let node = new Node(value)
        if(this.#head==null){
            this.#head = node
            this.count = this.count + 1
        }
        else{
            let current = this.#head
            while(current.next){
                current = current.next
            }
            current.next = node
        }
        
    }

    bubbleSort() {
        if (!this.head || !this.head.next) {
          return; // Lista vacía o con un solo elemento, no necesita ordenarse
        }
    
        let swapped;
        let current;
        let end = null;
    
        do {
          swapped = false;
          current = this.head;
    
          while (current.next !== end) {
            if (current.data > current.next.data) {
              // Intercambiar los datos de los nodos
              [current.data, current.next.data] = [current.next.data, current.data];
              swapped = true;
            }
            current = current.next;
          }
          end = current;
        } while (swapped);
      }

      
      partition(start, end) {
        let pivot = start.data;
        let i = start;
        let j = start.next;
    
        while (j !== end) {
          if (j.data < pivot) {
            i = i.next;
            [i.data, j.data] = [j.data, i.data];
          }
          j = j.next;
        }
    
        [start.data, i.data] = [i.data, start.data];
        return i;
      }
    
      // Función recursiva de Quicksort
      quickSortHelper(start, end) {
        if (start === end || !start || !end) {
          return;
        }
    
        let partition = this.partition(start, end);
        this.quickSortHelper(start, partition);
        this.quickSortHelper(partition.next, end);
      }
    
      // Función principal de Quicksort
      quickSort() {
        this.quickSortHelper(this.head, null);
      }


      split(head) {
        if (!head || !head.next) {
          return [head, null];
        }
    
        let slow = head;
        let fast = head.next;
    
        while (fast && fast.next) {
          slow = slow.next;
          fast = fast.next.next;
        }
    
        let secondHalf = slow.next;
        slow.next = null;
        return [head, secondHalf];
      }
    
      // Función para fusionar dos listas
      merge(left, right) {
        let dummy = new Node(0);
        let current = dummy;
    
        while (left && right) {
          if (left.data < right.data) {
            current.next = left;
            left = left.next;
          } else {
            current.next = right;
            right = right.next;
          }
          current = current.next;
        }
    
        if (left) {
          current.next = left;
        }
    
        if (right) {
          current.next = right;
        }
    
        return dummy.next;
      }
    
      // Función recursiva de MergeSort
      mergeSort(head) {
        if (!head || !head.next) {
          return head;
        }
    
        let [left, right] = this.split(head);
        left = this.mergeSort(left);
        right = this.mergeSort(right);
        return this.merge(left, right);
      }
    
      // Función principal de MergeSort
      sort() {
        this.head = this.mergeSort(this.head);
      }
}

export default LinkedList