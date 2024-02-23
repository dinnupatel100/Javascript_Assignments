// 7. Complete the above tasks with async/await.
const getData = async () => {
  const res = await fetch("https://reqres.in/api/users")
  const data = await res.json()
  await sleep(2000)
  return data;
}

const sleep = async (ms) =>{
  return new Promise((resolve)=>setTimeout(resolve, ms))
}

getData().then(data=>console.log(data))