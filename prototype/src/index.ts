const start = document.getElementById("start") as HTMLButtonElement;

const stack = [[4,3,2,1],[],[]];



    start.addEventListener("click", () => {
        const input = prompt("Enter two numbers separated by a space (e.g., '1 2') to move a disk:");
        if (input) {
            const [from, to] = input.split(" ").map(Number);

            if (from && to && from !== to && stack[from - 1]?.length !== 0) {
                const disk = stack[from - 1]![stack[from - 1]!.length - 1]; // Peek at the top disk
                if (!stack[to - 1]!.length || (disk! < stack[to - 1]![stack[to - 1]!.length - 1]!)) {
                    stack[to - 1]!.push(stack[from - 1]!.pop()!); // Pop and push only if valid
                } else {
                    alert("Invalid move! You cannot place a larger disk on a smaller one.");
                }
            } else {
                alert("Invalid input or move!");
            }
        }
        console.log(stack);
    });


console.log(stack);