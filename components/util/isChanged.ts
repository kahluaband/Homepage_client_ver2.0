export default function isChanged(dataA: any, dataB: any) {
  for (const key in dataA) {
    if (dataA[key] !== dataB[key]) {
      return true;
    }
  }
  return false;
}
