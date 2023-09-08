function solution(bridge_length, weight, truck_weights) {
  let time = 0;
  let onBridgeWeight = 0;
  let onBridge = Array(bridge_length).fill(0);

  while (truck_weights.length > 0 || onBridgeWeight > 0) {
    time++;
    onBridgeWeight -= onBridge.shift();

    if (onBridgeWeight + truck_weights[0] <= weight) {
      const truck = truck_weights.shift();
      onBridge.push(truck);
      onBridgeWeight += truck;
    } else {
      onBridge.push(0);
    }
  }

  return time;
}
