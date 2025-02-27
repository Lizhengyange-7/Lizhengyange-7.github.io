var posts=["2025/02/27/hello-world/","2025/02/27/摘抄/","2025/02/27/诗歌/"];function toRandomPost(){
    pjax.loadUrl('/'+posts[Math.floor(Math.random() * posts.length)]);
  };