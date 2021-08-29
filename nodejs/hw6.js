const Koa = require('koa');
const app = new Koa();

// response
app.use(ctx => {
    let url =  ctx.url;

    if(url === '/'){
        ctx.body = '<h1>Anasayfaya hosgeldiniz!</h1>'
    }
    else if(url === '/index'){
        ctx.body = '<h1>Index sayfasina hosgeldiniz!</h1>'
    }
    else if(url === '/hakkimda'){
        ctx.body = '<h1>Hakkimda  sayfasina hosgeldiniz!</h1>'
    }
    else if(url === '/iletisim'){
        ctx.body = '<h1>Iletisim  sayfasina hosgeldiniz!</h1>'
    }else{
        ctx.status = 404
        ctx.body = '<h1>Sayfa bulunamadi!</h1>'
    }

});

const port = 3000
app.listen(port);
