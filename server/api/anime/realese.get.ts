
export default defineCachedEventHandler(async (event) => {
  let search;
  try {
    let { id } = getQuery(event);
    search = await $fetch(
      `https://anilibria.top/api/v1/anime/releases/`+id,
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
  return search;
});
