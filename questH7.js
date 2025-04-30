
const config = {
    mode: "active",
    maxLoad: 100,
    secure:true,
};

function auditConfig(cfg){
const entries=[];
for (let el in cfg){
    entries.push(cfg[el]);
}
return entries;
}

console.log(auditConfig(config));
const report = auditConfig();

//let entries = Object.entries(config);

//console.log(entries);