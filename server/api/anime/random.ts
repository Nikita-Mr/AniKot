export default defineCachedEventHandler(async (event) => {
    let random
    try {
    random = await $fetch(
      `https://anilibria.wtf/api/v1/anime/releases/random?limit=4`,
      {
        headers: {
          accept: 'application/json',
          Authorization: 'Bearer 1732570707568',
          'X-CSRF-TOKEN': 'ml8x3wjEaTzNtG6Jg5aT4sXMciUGIA68ohFqD68S',
        },
      }
    );
  } catch (err) {
    console.log(err);
  }
  return random;
});
