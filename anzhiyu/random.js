var posts=["2025/02/27/hello-world/","2025/02/27/诗歌/","2025/02/27/摘抄/"];function toRandomPost(){
    pjax.loadUrl('/'+posts[Math.floor(Math.random() * posts.length)]);
  };