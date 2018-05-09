let photoPosts = [
    {
        id: '1',
        description: 'Женская сборная Беларуси выиграла эстафету',
        createdAt: new Date('2010-02-23T23:00:00'),
        author: 'БУтырчик Андрей',
        photoLink: '1.jpg',
        hashtags: ['#fpmi' , '#bsu' , '#js'],
        likes: ['Иванов Иван' , 'Бутырчик Андрей' , 'Гора']
    },
    {
        id: '2',
        description: 'Женская сборная Беларуси выиграла эстафету',
        createdAt: new Date('2009-02-23T23:00:00'),
        author: 'Иванов Иван',
        photoLink: 'http://ont.by/webroot/delivery/files/news/2018/02/22/Dom.jpg',
        hashtags: ['#fpmi' , '#bsu' , '#js'],
        likes: ['Иванов Иван' , 'Бутырчик Андрей' , 'Гора']
    },
    {
        id: '3',
        description: 'Женская сборная Беларуси выиграла эстафету',
        createdAt: new Date('2011-02-23T23:00:00'),
        author: 'Гора',
        photoLink: 'http://ont.by/webroot/delivery/files/news/2018/02/22/Dom.jpg',
        hashtags: ['#fpmi' , '#bsu' , '#js'],
        likes: ['Иванов Иван' , 'Бутырчик Андрей' , 'Гора']
    },
    {
        id: '4',
        description: 'Женская сборная Беларуси выиграла эстафету',
        createdAt: new Date('2018-02-23T23:00:00'),
        author: 'Alex',
        photoLink: 'http://ont.by/webroot/delivery/files/news/2018/02/22/Dom.jpg',
        hashtags: ['#fpmi1' , '#bsu' , '#js'],
        likes: ['Иванов Иван' , 'Бутырчик Андрей' , 'Гора']
    },
    {
        id: '5',
        description: 'Женская сборная Беларуси выиграла эстафету',
        createdAt: new Date('2018-02-23T23:00:00'),
        author: 'NAgibator',
        photoLink: 'http://ont.by/webroot/delivery/files/news/2018/02/22/Dom.jpg',
        hashtags: ['#fpmi' , '#bsu' , '#js'],
        likes: ['Иванов Иван' , 'Бутырчик Андрей' , 'Гора']
    },
    {
        id: '6',
        description: 'Женская сборная Беларуси выиграла эстафету',
        createdAt: new Date('1999-04-23T23:00:00'),
        author: 'Иванов Иван',
        photoLink: 'http://ont.by/webroot/delivery/files/news/2018/02/22/Dom.jpg',
        hashtags: ['#fpmi' , '#bsu' , '#js'],
        likes: ['Иванов Иван' , 'Бутырчик Андрей' , 'Гора']
    },
    {
        id: '7',
        description: 'Женская сборная Беларуси выиграла эстафету',
        createdAt: new Date('2018-02-23T23:00:00'),
        author: 'Иванов Иван',
        photoLink: 'http://ont.by/webroot/delivery/files/news/2018/02/22/Dom.jpg',
        hashtags: ['#fpmi' , '#bsu' , '#js'],
        likes: ['Иванов Иван' , 'Бутырчик Андрей' , 'Гора']
    },
    {
        id: '8',
        description: 'Женская сборная Беларуси выиграла эстафету',
        createdAt: new Date('2018-05-04T23:00:00'),
        author: 'Иванов Иван',
        photoLink: 'http://ont.by/webroot/delivery/files/news/2018/02/22/Dom.jpg',
        hashtags: ['#fpmi' , '#bsu' , '#js'],
        likes: ['Иванов Иван' , 'Бутырчик Андрей' , 'Гора']
    },
    {
        id: '9',
        description: 'Женская сборная Беларуси выиграла эстафету',
        createdAt: new Date('2013-02-23T23:00:00'),
        author: 'Иванов Иван',
        photoLink: 'http://ont.by/webroot/delivery/files/news/2018/02/22/Dom.jpg',
        hashtags: ['#fpmi' , '#bsu' , '#js'],
        likes: ['Иванов Иван' , 'Бутырчик Андрей' , 'Гора']
    },
    {
        id: '10',
        description: 'Женская сборная Беларуси выиграла эстафету',
        createdAt: new Date('2018-02-23T23:00:00'),
        author: 'lena lena',
        photoLink: 'http://ont.by/webroot/delivery/files/news/2018/02/22/Dom.jpg',
        hashtags: ['#fpmi' , '#bsu' , '#js'],
        likes: ['Иванов Иван' , 'Бутырчик Андрей' , 'Гора']
    },
    {
        id: '11',
        description: 'Женская сборная Беларуси выиграла эстафету',
        createdAt: new Date('2018-02-23T23:00:00'),
        author: 'Иванов Иван',
        photoLink: 'http://ont.by/webroot/delivery/files/news/2018/02/22/Dom.jpg',
        hashtags: ['#fpmi' , '#bsu' , '#js'],
        likes: ['Иванов Иван' , 'Бутырчик Андрей' , 'Гора']
    },
    {
        id: '12',
        description: 'Женская сборная Беларуси выиграла эстафету',
        createdAt: new Date('2018-02-25T23:00:00'),
        author: 'Иванов Иван',
        photoLink: 'http://ont.by/webroot/delivery/files/news/2018/02/22/Dom.jpg',
        hashtags: ['#fpmi' , '#bsu' , '#js'],
        likes: ['Иванов Иван' , 'Бутырчик Андрей' , 'Гора']
    },{
        id: '13',
        description: 'Женская сборная Беларуси выиграла эстафету',
        createdAt: new Date('2015-02-23T23:00:00'),
        author: 'Иванов Иван',
        photoLink: 'http://ont.by/webroot/delivery/files/news/2018/02/22/Dom.jpg',
        hashtags: ['#fpmi1' , '#bsu' , '#js'],
        likes: ['Иванов Иван' , 'Бутырчик Андрей' , 'Гора']
    },
    {
        id: '14',
        description: 'Женская сборная Беларуси выиграла эстафету',
        createdAt: new Date('2017-06-23T23:00:00'),
        author: 'Иванов Иван',
        photoLink: '1.jpg',
        hashtags: ['#fpmi' , '#bsu' , '#js'],
        likes: ['Иванов Иван' , 'Бутырчик Андрей' , 'Гора']
    },{
        id: '15',
        description: 'Бла бла бла бла',
        createdAt: new Date('2018-02-23T23:00:00'),
        author: 'Никита',
        photoLink: '1.jpg',
        hashtags: ['#fpmi1' , '#bsu' , '#js'],
        likes: ['Иванов Иван' , 'Бутырчик Андрей' , 'Гора']
    },{
        id: '16',
        description: 'Женская сборная Беларуси выиграла эстафету',
        createdAt: new Date('2013-03-13T23:00:00'),
        author: 'Иванов Иван',
        photoLink: '1.jpg',
        hashtags: ['#fpmi' , '#bsu' , '#js'],
        likes: ['Иванов Иван' , 'Бутырчик Андрей' , 'Гора']
    },
    {
        id: '17',
        description: 'Женская сборная Беларуси выиграла эстафету',
        createdAt: new Date('2016-02-23T23:00:00'),
        author: 'Иванов Иван',
        photoLink: '1.jpg',
        hashtags: ['#fpmi1' , '#bsu' , '#js'],
        likes: ['Иванов Иван' , 'Бутырчик Андрей' , 'Гора']
    },
    {
        id: '18',
        description: 'Женская сборная Беларуси выиграла эстафету',
        createdAt: new Date('2015-05-05T23:00:00'),
        author: 'Александр Петухов',
        photoLink: '1.jpg',
        hashtags: ['#fpmi1' , '#bsu' , '#js'],
        likes: ['Иванов Иван' , 'Бутырчик Андрей' , 'Гора']
    },
    {
        id: '19',
        description: 'В универе',
        createdAt: new Date('2018-02-23T23:00:00'),
        author: 'Галя',
        photoLink: '1.jpg',
        hashtags: ['#fpmi1' , '#bsu' , '#js'],
        likes: ['Иванов Иван' , 'Бутырчик Андрей' , 'Гора']
    },
    {
        id: '20',
        description: 'я на районе',
        createdAt: new Date('2018-02-23T23:00:00'),
        author: 'Витя47',
        photoLink: '1.jpg',
        hashtags: ['#fpmi' , '#bsu' , '#js'],
        likes: ['Иванов Иван' , 'Бутырчик Андрей' , 'Гора']
    },
    {
        id: '21',
        description: 'Женская сборная Беларуси выиграла эстафету эстафету эстафету эстафету',
        createdAt: new Date('2018-02-23T23:00:00'),
        author: 'Вася Пупкин',
        photoLink: '1.jpg',
        hashtags: ['#fpmi1' , '#bsu' , '#js'],
        likes: ['Иванов Иван' , 'Бутырчик Андрей' , 'Гора']
    },
    {
        id: '22',
        description: 'пресую студентов',
        createdAt: new Date('2018-02-23T23:00:00'),
        author: 'Галя',
        photoLink: '1.jpg',
        hashtags: ['#студенты'],
        likes: ['Иванов Иван' , 'Бутырчик Андрей' , 'Гора']
    }
];

let modul = (function() {
    let removePhotoPost = function(value) {
        for (let i = 0; i < photoPosts.length; i++) {
            if (photoPosts[i].id === value){
                photoPosts.splice(i,1);
                return true;
            }
        }
        return false;
    }
/*   function getPhotoPost(value) { // 1й выриант
        for (var i = 0; i < photoPosts.length; i++) {
            if (photoPosts[i].id === value){

                return photoPosts[i];
            }
        }

        return -1;
    }
*/
    let getPhotoPost = function(value) {
        let a = photoPosts.findIndex(item => item.id === value);
        if(a !== -1 ) {
            return photoPosts[a];
        }else{
            return a;
        }

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
        if(typeof photoPosts.createdAt !== "object" || photoPosts.createdAt.length === 0 || typeof (photoPosts.createdAt) === 'undefined')   {
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

    let likePhoto = function (id) {
        let post = getPhotoPost(id);
        if (post) {
            let idxUser = post.likes.indexOf(user);
            if (idxUser === -1) {
                post.likes.push(user);
                return true
            }
            post.likes.splice(idxUser, 1);
        }
        return false;

    };


    let addPhotoPost = function(photoPost) {
        if(validatePhotoPost(photoPost)){
            photoPosts.push(photoPost);
            return true;
        }
        return false;
    }

    let editPhotoPost = function(id , PhotoPosts ) {
        let post = modul.getPhotoPost(id);
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
            return true;
        }else {
            return false;
        }
    }

    let compareDate = function(photoPostsA,photoPostsB) {
        return photoPostsA.createdAt - photoPostsB.createdAt;
    }
    let getPhotoPosts = function(skip , top , filterConfig) { // in

        let newMass_posts = photoPosts.concat();
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
            return newMass_posts.slice(skip,skip+top);


        }

    }
    return {
        getPhotoPost,
        getPhotoPosts,
        likePhoto,
        addPhotoPost,
        editPhotoPost,
        removePhotoPost
    }

})();
