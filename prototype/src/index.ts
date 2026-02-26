const start = document.getElementById("start") as HTMLButtonElement;

const stack = [[4,3,2,1],[],[]];



    start.addEventListener("click", () => {
        const input = prompt("Enter two numbers separated by a space (e.g., '1 2') to move a disk:");
        if (input) {
            const parsedInput = input.split(" ").map(Number);
            const from = parsedInput[0];
            const to = parsedInput[1];
            
            if (typeof from === "number" && typeof to === "number") {
                const fromStack = stack[from - 1];
                const toStack = stack[to - 1];
                if(from !== to && fromStack?.length !== 0){
                if (fromStack && toStack) {
                    const disk = fromStack[fromStack.length - 1]; // Peek at the top disk
                    if (disk === null || disk === undefined) {
                        alert("Invalid move! The disk is null or undefined.");
                        return;
                    }
                    if (!toStack.length || (disk < (toStack[toStack.length - 1] ?? Infinity))) {
                        toStack.push(fromStack.pop()!); // Pop and push only if valid
                    } else {
                        alert("Invalid move! You cannot place a larger disk on a smaller one.");
                    }
                } else {
                    alert("Invalid move! One of the stacks does not exist.");
                }
            } else {
                alert("Invalid input or move!");
            }
        }
        console.log(stack);
    }
    });


console.log(stack);