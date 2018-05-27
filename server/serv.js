const express = require('express');
const fs = require("fs");
const bodyParser = require('body-parser');

const app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));
app.use(express.static('../public'));

let getPhotoPost = function(value) {
    let jsonPosts = fs.readFileSync('./data/posts.json');
    let posts = JSON.parse(jsonPosts, function (key, value) {
        if (key === 'createdAt') {
            return new Date(value);
        }
        return value;
    });
    let a = posts.findIndex(item => item.id === value);
    return JSON.stringify(posts[a]);
}

let addPhotoPost = function(photoPost) {
    let posts = JSON.parse(fs.readFileSync('./data/posts.json'));
    if(validatePhotoPost(photoPost)){
        posts.push(photoPost);
        fs.writeFileSync('./data/posts.json', JSON.stringify(posts));
        return true;
    }
    return false;
}

let editPhotoPost = function(id , PhotoPosts ) {
    let posts = JSON.parse(fs.readFileSync('./data/posts.json'));
    let post = getPhotoPost(id);
    post = JSON.parse(post);
    let clonePost = {};
    for (let key in post) {
        clonePost[key] = post[key];
    }
    if(PhotoPosts.description){
        clonePost.description = PhotoPosts.description;
    }
    if(PhotoPosts.hashtags){
        clonePost.hashtags = PhotoPosts.hashtags;
    }
    if(PhotoPosts.photoLink){
        clonePost.photoLink = PhotoPosts.photoLink;
    }
    if(validatePhotoPost(clonePost)){
        for(let key in PhotoPosts){
            if(key !== "author" && key !== "id" && key !== "createdAt" && key !== "likes") {
                post[key] = PhotoPosts[key];
            }else {
                return false;
            }
        }
        fs.writeFileSync('./data/posts.json', JSON.stringify(post));
        return true;
    }else {
        return false;
    }
}

let getPhotoPosts = function(skip , top , filterConfig) { // in
    let posts = JSON.parse(fs.readFileSync('./data/posts.json'));
    let newMass_posts = posts.concat();
    if(filterConfig === undefined){
        newMass_posts.reverse(newMass_posts.sort(compareDate));
        return newMass_posts.slice(skip,+skip + +top);
    }else{
        if(filterConfig.author){
            newMass_posts = newMass_posts.filter(function (item) {
                return item.author === filterConfig.author;
            });

        }
        if(filterConfig.createdAt){
            newMass_posts = newMass_posts.filter((function (item) {
                return Date.parse(item.createdAt) > Date.parse(filterConfig.createdAt);
            }));
        }
        if(filterConfig.hashtags){
            newMass_posts = newMass_posts.filter(function (item) {
                return item.hashtags.some(function (itemm) {
                    return itemm === filterConfig.hashtags;
                });

            })
        }
        newMass_posts = newMass_posts.reverse(newMass_posts.sort(compareDate));
        return newMass_posts.slice(skip,skip+top);
    }
}

let compareDate = function(photoPostsA,photoPostsB) {
    return new Date(photoPostsA.createdAt) - new Date(photoPostsB.createdAt);

}

let removePhotoPost = function(value) {
    let posts = JSON.parse(fs.readFileSync('./data/posts.json'));
    let index = posts.findIndex(item => item.id === value);
    if (index !== -1) {
        posts.splice(index, 1);
        fs.writeFileSync('./data/posts.json', JSON.stringify(posts));
        return true;
    }
    return false;
}

let validatePhotoPost = function(photoPosts) {
    if (!photoPosts) {
        return false;
    }
    if((typeof photoPosts.id !== "string") || photoPosts.id.length === 0 || (typeof (photoPosts.id) === 'undefined')) {
        return false;
    }
    if((typeof photoPosts.description !== "string") || photoPosts.description.length === 0 || photoPosts.description.length > 200 || typeof (photoPosts.description) === 'undefined') {
        return false;
    }
    if(typeof (photoPosts.createdAt) === 'undefined')   {
        return false;
    }

    if((typeof photoPosts.author !== "string") || photoPosts.author.length === 0 || typeof (photoPosts.author) === 'undefined') {
        return false;
    }
    if((typeof photoPosts.photoLink !== "string") || photoPosts.photoLink.length === 0 || typeof (photoPosts.photoLink) === 'undefined') {
        return false;
    }
    if(typeof  photoPosts.hashtags !== "object" || typeof (photoPosts.createdAt) === 'undefined' || !checkHashtags(photoPosts) ){
        return false;
    }
    function checkHashtags(photoPosts) {
        for(let tag of photoPosts.hashtags){
            if(tag.charAt(0) !== "#"){
                return false;
            }
        }
        return true;
    }
    return true;
}

app.get('/getPhotoPost/:id', function (req, res) {
    let post = getPhotoPost(req.params.id);
    if (post !== undefined) {
        res.send(200, post);
    }
    else {
        res.send(404, `Photopost with id = ${req.params.id} not found!`);
    }
});

app.post('/getPhotoPosts', function (req, res) {
    let skip = parseInt(req.query.skip);
    let top = parseInt(req.query.top);
    let filterConfig = req.body;

    let answer = getPhotoPosts(skip, top, filterConfig);
    if (answer !== undefined) {
        res.send(200, answer);
    }
    else {
        res.send(404, 'Error!!!');
    }
})


app.post('/addPhotoPost', function (req, res) {
    if (addPhotoPost(req.body)) {
        res.send(200, `PhotoPost successfully added`);
    }
    else {
        res.send(404, `Error!!!`);
    }
})

app.put('/editPhotoPost/:id', function (req, res) {
    if (editPhotoPost(req.params.id, req.body)) {
        res.send(200, `Photopost with id = ${req.params.id} was successfully edited`);
    }
    else {
        res.send(404, 'Error!!!');
    }
})

app.delete('/removePhotoPost/:id', function (req, res) {
    if (removePhotoPost(req.params.id)) {
        res.send(200, `Post with id = ${req.params.id} deleted`);
    }
    else {
        res.send(404, `Post with id = ${req.params.id} was not found => not deleted`);
    }
})

app.listen(3000, function () {
    console.log('Server is running...');
});