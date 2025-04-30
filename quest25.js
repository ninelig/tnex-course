const config = [
  { name: "NodeIterator", port: 8080 },
  { name: "nodeB", port: 80 },
  { name: "nodeC", port: 3001 },
];

 const configFilter = config.filter(el, () => el.port > 3000);

 console.log(configFilter);