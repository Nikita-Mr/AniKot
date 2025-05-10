export default defineCachedEventHandler(async (event)=>{
    let anime
    try{
      let {type, limit, page} = getQuery(event)
        anime = await $fetch(`https://anilibria.wtf/api/v1/anime/catalog/releases?page=${page}&limit=${limit}&f%5Btypes%5D=${type}&f%5Bseasons%5D=&f%5Byears%5D%5Bfrom_year%5D=2016&f%5Byears%5D%5Bto_year%5D=2020&f%5Bage_ratings%5D=&f%5Bpublish_statuses%5D=&f%5Bproduction_statuses%5D=`,  {
            headers: {
              accept: 'application/json',
              Authorization: 'Bearer 1732570707568',
              'X-CSRF-TOKEN': 'ml8x3wjEaTzNtG6Jg5aT4sXMciUGIA68ohFqD68S',
            },
          })
    }catch(err){
        console.log(err)
    }
    return anime
})