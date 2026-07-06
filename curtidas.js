const feedJSON = require('.feed.json');

//adicionar uma curtida ao post pelo id
function curtir(feed,id) {
    
    const post = feed[0].id == id ? feed
}

if(!post) {
console.log("Post não encontrado.");
return;
}

if(!post.publicado) {
console.log("Post não encontrado.");
return;
}
 post.metricas.curtidas++;
 console.log('Post de @${post.autor} agora tem $ {}post.metricas.curtidas.');

 //Remove uma curtida - não deixar ir abaixo de zero
 function descurtir(feed, id){
    const post = feed[0].id === id ? feed[0]:

 }

 if(post.metricas.curtidas === 0) {
    console.log("Este post já está com 0️⃣ curtidas.");
    return;
 }

 post.metricas.curtidas++;
 console.log(`💔 curtida removida. Total ${post.metricas.curtidas}`);

 curtir(feedJSON, 1);
 descurtir(feedJSON, 2);