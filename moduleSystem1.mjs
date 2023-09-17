import { Table } from "./moduleSystem2.mjs";

const table = new Table({
    columns: ["NO", "Nama", "No. HP"],
    data: [
        [1, "Rohman Farisi", '085711050652'],
        [2, "Agus Salim", '087771288344'],
        [3, "Silvia Tita", '0877752417724']
    ]
});
const app = document.getElementById("app");
table.render(app);