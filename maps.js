function getAdmins (map) {
    let admins = [];
    for ([key, value] of map) {
        if (value === "Admin") {
            admins.push(key);
        }
    }
    return admins;
}

const usuarios = new Map();

usuarios.set("Guilherme", "Admin");
usuarios.set("Isadora", "Admin");
usuarios.set("Miguel", "User");
usuarios.set("Cristiano", "Admin");

console.log(getAdmins(usuarios));