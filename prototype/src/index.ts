const start = document.getElementById("start") as HTMLButtonElement;

let stack = [[4,3,2,1],[],[]];



    start.addEventListener("click", () => {
        const input = prompt("Enter two numbers separated by a space (e.g., '1 2') to move a disk:");
        if (input) {
            const [from, to] = input.split(" ").map(Number);

            if (from && to && from !== to && stack[from - 1]?.length !== 0) {
                const disk = stack[from - 1]!.pop();
                if (!stack[to - 1]!.length || (disk && disk < stack[to - 1]![stack[to - 1]!.length - 1]!)) {
                    stack[to - 1]!.push(disk!);
                }
            }
        }
        console.log(stack);
    });


console.log(stack);