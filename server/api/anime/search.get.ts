export default defineCachedEventHandler(async (event) => {
    let anime;
    try {
      let { search } = getQuery(event);
      anime = await $fetch(
        `https://anilibria.top/api/v1/app/search/releases/?query=`+search,
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
    return anime;
  });
  