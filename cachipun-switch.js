var paper = "paper";
var scissor = "scissor";
var rock = "rock";

function cachipun (opcion1, opcion2) {
    switch (opcion1) {
        case "paper":
            switch (opcion2) {
                case "paper":
                    console.log("Draw, please play again!!!");
                    break;
                case "scissor":
                    console.log("Won Scissor");
                    break;
                case "rock":
                    console.log("Won Paper");
                    break
            }
        break;
        case "scissor":
            switch (opcion2) {
                case "scissor":
                    console.log("Draw, please play again!!!");
                    break;
                case "paper":
                    console.log("Won Scissor");
                    break;
                case "rock":
                    console.log("Won Rock");
                    break;
            }
            break;
        case "rock":
            switch (opcion2) {
                case "rock":
                    console.log("Draw, please play again");
                    break;
                case "scissor":
                    console.log("Won Rock");
                    break;
                case "paper":
                    console.log("Won Paper");
                    break;
            }
            break;
        }
}