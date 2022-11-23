import * as fcl from "@onflow/fcl";

(async () => {

  // Works with 127.0.0.1
  fcl.config().put('accessNode.api', 'http://localhost:8888')

  const response = await fcl.send(fcl.build([fcl.getBlock(false)])).then(fcl.decode)
  console.log('Response: ', response)

})();