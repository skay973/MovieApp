var mdb = require('moviedb')('5192eb6331a3db50b6b388ae8941edc6');
var app = require('express')();

app.all('*', function(req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    next();
});

app.get('/:type/popular', function(req, res){
    var type = req.params.type;

    var page = (req.query["page"]) ? req.query["page"] : 1;
    page = (req.query["page"] > 1000) ? 1000 : req.query["page"];

    switch(type) {
      case 'movies':
        mdb.miscPopularMovies({page: page}, function(err, data){
            data.total_pages = 1000;
            res.send(data)
        });
        break;
      case 'tvs':
        mdb.miscPopularTvs({page: page}, function(err, data){
            data.total_pages = 1000;
            res.send(data)
        });
        break;
      default:
    }
});

app.get('/:type/search', function (req, res) {
    var type = req.params.type;

    var query = req.query["q"];

    var page = (req.query["page"]) ? req.query["page"] : 1;

    switch(type) {
      case 'movies':
        mdb.searchMovie({query: query, page: page}, function(err, data){
            res.send(data)
        });
        break;
      case 'tvs':
        mdb.searchTv({query: query, page: page}, function(err, data){
            res.send(data)
        });
        break;
      default:
    }
});

app.get('/:type/info/:id', function (req, res) {
    var id = req.params.id;
    var type = req.params.type;

    switch(type) {
      case 'movies':
        mdb.movieInfo({id: id}, function(err, data){
            res.send(data);
        });
        break;
      case 'tvs':
        mdb.tvInfo({id: id}, function(err, data){
            res.send(data);
        });
        break;
      default:
    }

});

app.get("/similar/:id", function(req, res){
   var id = req.params.id;
   var page = (req.query["page"]) ? req.query["page"] : 1;
    mdb.movieSimilar({id: id, page: page}, function(err, data){
        res.send(data);
    });
});

app.listen(3000, function () {
    console.log("Listening 3000")
});
