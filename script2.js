(async () => {
  // Works with 127.0.0.1
  const response = await (await fetch("http://localhost:8888/v1/blocks?height=final")).json();
  console.log("Response: ", response);
})();
