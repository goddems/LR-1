console.log("=== Завдання 4: async/await ===");

const delay = (ms) => new Promise(res => setTimeout(res, ms));

function simulateFetch(url) {
  return new Promise((resolve, reject) => {
    const time = 200 + Math.random() * 300;

    setTimeout(() => {
      if (!url.startsWith("https")) {
        reject(new Error(`Invalid URL: ${url}`));
        return;
      }

      Math.random() < 0.7
        ? resolve({ url, status: 200, data: "OK" })
        : reject(new Error("Server error: 500"));
    }, time);
  });
}

async function fetchWithRetry(url, attempts) {
  let lastError;
  for (let i = 1; i <= attempts; i++) {
    try {
      console.log(`Спроба ${i}`);
      return await simulateFetch(url);
    } catch (e) {
      lastError = e;
      await delay(500);
    }
  }
  throw lastError;
}

async function fetchMultiple(urls) {
  const results = await Promise.allSettled(urls.map(simulateFetch));
  return {
    successful: results.filter(r => r.status === "fulfilled").map(r => r.value),
    failed: results.filter(r => r.status === "rejected").map(r => r.reason.message),
  };
}

async function main() {
  console.time("delay");
  await delay(1000);
  console.timeEnd("delay");

  try {
    console.log(await fetchWithRetry("https://jsonplaceholder.typicode.com/posts", 5));
  } catch (e) {
    console.error(e.message);
  }

  console.log(await fetchMultiple([
    "https://jsonplaceholder.typicode.com/posts",
    "http://invalid-url",
    "https://jsonplaceholder.typicode.com/users",
  ]));
}

main();
