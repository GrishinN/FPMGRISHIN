//var foto= document.getElementsByClassName('foto');


let photoPosts = [
    {
        id: '1',
        description: 'Женская сборная Беларуси выиграла эстафету в рамках соревнований по биатлону на Олимпийских играх в Пхёнчхане!!!',
        createdAt: new Date('2010-02-23T23:00:00'),
        author: 'БУтырчик Андрей',
        photoLink: 'http://ont.by/webroot/delivery/files/news/2018/02/22/Dom.jpg',
        hashtags: ['#fpmi' , '#bsu' , '#js'],
        likes: ['Иванов Иван' , 'Бутырчик Андрей' , 'Гора']
    },
    {
        id: '2',
        description: 'Женская сборная Беларуси выиграла эстафету в рамках соревнований по биатлону на Олимпийских играх в Пхёнчхане!!!',
        createdAt: new Date('2009-02-23T23:00:00'),
        author: 'Иванов Иван',
        photoLink: 'http://ont.by/webroot/delivery/files/news/2018/02/22/Dom.jpg',
        hashtags: ['#fpmi' , '#bsu' , '#js'],
        likes: ['Иванов Иван' , 'Бутырчик Андрей' , 'Гора']
    },
    {
        id: '3',
        description: 'Женская сборная Беларуси выиграла эстафету в рамках соревнований по биатлону на Олимпийских играх в Пхёнчхане!!!',
        createdAt: new Date('2011-02-23T23:00:00'),
        author: 'Гора ',
        photoLink: 'http://ont.by/webroot/delivery/files/news/2018/02/22/Dom.jpg',
        hashtags: ['#fpmi' , '#bsu' , '#js'],
        likes: ['Иванов Иван' , 'Бутырчик Андрей' , 'Гора']
    },
    {
        id: '4',
        description: 'Женская сборная Беларуси выиграла эстафету в рамках соревнований по биатлону на Олимпийских играх в Пхёнчхане!!!',
        createdAt: new Date('2018-02-23T23:00:00'),
        author: 'Alex',
        photoLink: 'http://ont.by/webroot/delivery/files/news/2018/02/22/Dom.jpg',
        hashtags: ['#fpmi' , '#bsu' , '#js'],
        likes: ['Иванов Иван' , 'Бутырчик Андрей' , 'Гора']
    },
    {
        id: '5',
        description: 'Женская сборная Беларуси выиграла эстафету в рамках соревнований по биатлону на Олимпийских играх в Пхёнчхане!!!',
        createdAt: new Date('2018-02-23T23:00:00'),
        author: 'NAgibator',
        photoLink: 'http://ont.by/webroot/delivery/files/news/2018/02/22/Dom.jpg',
        hashtags: ['#fpmi' , '#bsu' , '#js'],
        likes: ['Иванов Иван' , 'Бутырчик Андрей' , 'Гора']
    },
    {
        id: '6',
        description: 'Женская сборная Беларуси выиграла эстафету в рамках соревнований по биатлону на Олимпийских играх в Пхёнчхане!!!',
        createdAt: new Date('1999-04-23T23:00:00'),
        author: 'Иванов Иван',
        photoLink: 'http://ont.by/webroot/delivery/files/news/2018/02/22/Dom.jpg',
        hashtags: ['#fpmi' , '#bsu' , '#js'],
        likes: ['Иванов Иван' , 'Бутырчик Андрей' , 'Гора']
    },
    {
        id: '7',
        description: 'Женская сборная Беларуси выиграла эстафету в рамках соревнований по биатлону на Олимпийских играх в Пхёнчхане!!!',
        createdAt: new Date('2018-02-23T23:00:00'),
        author: 'Иванов Иван',
        photoLink: 'http://ont.by/webroot/delivery/files/news/2018/02/22/Dom.jpg',
        hashtags: ['#fpmi' , '#bsu' , '#js'],
        likes: ['Иванов Иван' , 'Бутырчик Андрей' , 'Гора']
    },
    {
        id: '8',
        description: 'Женская сборная Беларуси выиграла эстафету в рамках соревнований по биатлону на Олимпийских играх в Пхёнчхане!!!',
        createdAt: new Date('2018-05-04T23:00:00'),
        author: 'Иванов Иван',
        photoLink: 'http://ont.by/webroot/delivery/files/news/2018/02/22/Dom.jpg',
        hashtags: ['#fpmi' , '#bsu' , '#js'],
        likes: ['Иванов Иван' , 'Бутырчик Андрей' , 'Гора']
    },
    {
        id: '9',
        description: 'Женская сборная Беларуси выиграла эстафету в рамках соревнований по биатлону на Олимпийских играх в Пхёнчхане!!!',
        createdAt: new Date('2013-02-23T23:00:00'),
        author: 'Иванов Иван',
        photoLink: 'http://ont.by/webroot/delivery/files/news/2018/02/22/Dom.jpg',
        hashtags: ['#fpmi' , '#bsu' , '#js'],
        likes: ['Иванов Иван' , 'Бутырчик Андрей' , 'Гора']
    },
    {
        id: '10',
        description: 'Женская сборная Беларуси выиграла эстафету в рамках соревнований по биатлону на Олимпийских играх в Пхёнчхане!!!',
        createdAt: new Date('2018-02-23T23:00:00'),
        author: 'lena lena',
        photoLink: 'http://ont.by/webroot/delivery/files/news/2018/02/22/Dom.jpg',
        hashtags: ['#fpmi' , '#bsu' , '#js'],
        likes: ['Иванов Иван' , 'Бутырчик Андрей' , 'Гора']
    },
    {
        id: '11',
        description: 'Женская сборная Беларуси выиграла эстафету в рамках соревнований по биатлону на Олимпийских играх в Пхёнчхане!!!',
        createdAt: new Date('2018-02-23T23:00:00'),
        author: 'Иванов Иван',
        photoLink: 'http://ont.by/webroot/delivery/files/news/2018/02/22/Dom.jpg',
        hashtags: ['#fpmi' , '#bsu' , '#js'],
        likes: ['Иванов Иван' , 'Бутырчик Андрей' , 'Гора']
    },
    {
        id: '12',
        description: 'Женская сборная Беларуси выиграла эстафету в рамках соревнований по биатлону на Олимпийских играх в Пхёнчхане!!!',
        createdAt: new Date('2018-02-25T23:00:00'),
        author: 'Иванов Иван',
        photoLink: 'http://ont.by/webroot/delivery/files/news/2018/02/22/Dom.jpg',
        hashtags: ['#fpmi' , '#bsu' , '#js'],
        likes: ['Иванов Иван' , 'Бутырчик Андрей' , 'Гора']
    },{
        id: '13',
        description: 'Женская сборная Беларуси выиграла эстафету в рамках соревнований по биатлону на Олимпийских играх в Пхёнчхане!!!',
        createdAt: new Date('2015-02-23T23:00:00'),
        author: 'Иванов Иван',
        photoLink: 'http://ont.by/webroot/delivery/files/news/2018/02/22/Dom.jpg',
        hashtags: ['#fpmi' , '#bsu' , '#js'],
        likes: ['Иванов Иван' , 'Бутырчик Андрей' , 'Гора']
    },
    {
        id: '14',
        description: 'Женская сборная Беларуси выиграла эстафету в рамках соревнований по биатлону на Олимпийских играх в Пхёнчхане!!!',
        createdAt: new Date('2017-06-23T23:00:00'),
        author: 'Иванов Иван',
        photoLink: 'http://ont.by/webroot/delivery/files/news/2018/02/22/Dom.jpg',
        hashtags: ['#fpmi' , '#bsu' , '#js'],
        likes: ['Иванов Иван' , 'Бутырчик Андрей' , 'Гора']
    },{
        id: '15',
        description: 'Женская сборная Беларуси выиграла эстафету в рамках соревнований по биатлону на Олимпийских играх в Пхёнчхане!!!',
        createdAt: new Date('2018-02-23T23:00:00'),
        author: 'Никита',
        photoLink: 'http://ont.by/webroot/delivery/files/news/2018/02/22/Dom.jpg',
        hashtags: ['#fpmi1' , '#bsu' , '#js'],
        likes: ['Иванов Иван' , 'Бутырчик Андрей' , 'Гора']
    },{
        id: '16',
        description: 'Женская сборная Беларуси выиграла эстафету в рамках соревнований по биатлону на Олимпийских играх в Пхёнчхане!!!',
        createdAt: new Date('2013-03-13T23:00:00'),
        author: 'Иванов Иван',
        photoLink: 'http://ont.by/webroot/delivery/files/news/2018/02/22/Dom.jpg',
        hashtags: ['#fpmi' , '#bsu' , '#js'],
        likes: ['Иванов Иван' , 'Бутырчик Андрей' , 'Гора']
    },
    {
        id: '17',
        description: 'Женская сборная Беларуси выиграла эстафету в рамках соревнований по биатлону на Олимпийских играх в Пхёнчхане!!!',
        createdAt: new Date('2016-02-23T23:00:00'),
        author: 'Иванов Иван',
        photoLink: 'http://ont.by/webroot/delivery/files/news/2018/02/22/Dom.jpg',
        hashtags: ['#fpmi1' , '#bsu' , '#js'],
        likes: ['Иванов Иван' , 'Бутырчик Андрей' , 'Гора']
    },
    {
        id: '18',
        description: 'Женская сборная Беларуси выиграла эстафету в рамках соревнований по биатлону на Олимпийских играх в Пхёнчхане!!!',
        createdAt: new Date('2015-05-05T23:00:00'),
        author: 'Александр Петухов',
        photoLink: 'http://ont.by/webroot/delivery/files/news/2018/02/22/Dom.jpg',
        hashtags: ['#fpmi' , '#bsu' , '#js'],
        likes: ['Иванов Иван' , 'Бутырчик Андрей' , 'Гора']
    },
    {
        id: '19',
        description: 'Женская сборная Беларуси выиграла эстафету в рамках соревнований по биатлону на Олимпийских играх в Пхёнчхане!!!',
        createdAt: new Date('2018-02-23T23:00:00'),
        author: 'Вася Пупкин',
        photoLink: 'http://ont.by/webroot/delivery/files/news/2018/02/22/Dom.jpg',
        hashtags: ['#fpmi' , '#bsu' , '#js'],
        likes: ['Иванов Иван' , 'Бутырчик Андрей' , 'Гора']
    },
    {
        id: '20',
        description: 'Женская сборная Беларуси выиграла эстафету в рамках соревнований по биатлону на Олимпийских играх в Пхёнчхане!!!',
        createdAt: new Date('2018-02-23T23:00:00'),
        author: 'Никита ',
        photoLink: 'http://ont.by/webroot/delivery/files/news/2018/02/22/Dom.jpg',
        hashtags: ['#fpmi' , '#bsu' , '#js'],
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
            return photoPosts.hashtags.every(function (item) {
                return item.charAt(0) === "#";
            });
        }
        return true;
    }


    let addPhotoPost = function(photoPost) {
        if(validatePhotoPost(photoPost)){
            photoPosts.push(photoPost);
            return true;
        }
        return false;
    }

    let editPhotoPost = function(id , PhotoPosts ) {
        let index = photoPosts.findIndex(item => item.id === id);
        if(validatePhotoPost(photoPosts[index])){
            for(let key in PhotoPosts){
                if(key !== "author" && key !== "id" && key !== "createdAt" && key !== "likes" && key !== "hashtags") {
                    photoPosts[index][key] = PhotoPosts[key];
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
            return newMass_posts.slice(skip,skip+top);
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
        addPhotoPost,
        editPhotoPost,
        removePhotoPost
    }

})();

let correctPost = {
    id: '25',
    description: 'Женская сборная Беларуси выиграла эстафету в рамках соревнований по биатлону на Олимпийских играх в Пхёнчхане!!!',
    createdAt: new Date('2018-02-14T23:00:00'),
    author: 'Степанов степан',
    photoLink: 'http://ont.by/webroot/delivery/files/news/2018/02/22/Dom.jpg',
    hashtags: ['#fpmi' , '#bsu' , '#js'],
    likes: ['Иванов Иван' , 'Бутырчик Андрей' , 'Гора']
};
let wrongPost = {
    description: 'Женская сборная Беларуси выиграла эстафету в рамках соревнований по биатлону на Олимпийских играх в Пхёнчхане!!!',
    createdAt: new Date('2018-02-14T23:00:00'),
    author: 'Степанов степан',
    photoLink: 'http://ont.by/webroot/delivery/files/news/2018/02/22/Dom.jpg'
};
///////////////////////////////////////////////////////
console.log('array of photoposts:');
console.log(photoPosts);
console.log('\mehtod getPhotoPost');
console.log("The result of the method getPhotopost('5')");
console.log(modul.getPhotoPost('5'));
console.log('getPhotopost(21) no such id in the array');
console.log(modul.getPhotoPost('21'));
console.log("getPhotopost(['aaa', '8']) wrong type of arg");
console.log(modul.getPhotoPost(['aaa', '8']));
////////////////////////////////////////////////////////
console.log('\nmethod addPhotoPost');
console.log('add correct post');
console.log(modul.addPhotoPost(correctPost));
console.log('array of photoposts after:');
console.log(photoPosts);
console.log('add wrong post');
console.log(modul.addPhotoPost(wrongPost));
console.log('array of photoposts after:');
console.log(photoPosts);
console.log('no args');
console.log(modul.addPhotoPost());
console.log('array of photoposts after:');
console.log(photoPosts);
//////////////////////////////////////////////////////////
console.log('\n\nmethod remove photopost');
console.log('removePhotopost(5)');
console.log(modul.removePhotoPost('5'));
console.log('removePhotopost(10)');
console.log(modul.removePhotoPost('10'));
console.log('removePhotopost(4)');
console.log(modul.removePhotoPost('4'));
console.log('removePhotopost(50) no such ID in array');
console.log(modul.removePhotoPost(50));
console.log('removePhotopost([4, 1]) wrong type of arg');
console.log(modul.removePhotoPost([4, 1]));
console.log('removePhotopost() no args');
console.log(modul.removePhotoPost());
console.log('\n\narray of photoposts after:');
console.log(photoPosts);
/////////////////////////////////////////////////////////////
console.log('\n method editPhotoPost');
console.log('\n Correct change of post');
console.log(modul.editPhotoPost('1', {description: '123456' }));
console.log(modul.editPhotoPost('2', {description: '123456' , photoLink: 'yandex.ru' , hashtags: '#fpmi1'}));
console.log('\n\narray of photoposts after:');
console.log(photoPosts);
console.log('\n Wrong change of post');
console.log(modul.editPhotoPost('3', {author: '123456'}));
console.log('\n\narray of photoposts after:');
console.log(photoPosts);
/////////////////////////////////////////////////////////////
console.log('\n\nmethod getPhotoPosts');
console.log('getPhotoPosts(0, 10):');
console.log(modul.getPhotoPosts(0, 10));
console.log('getPhotoPosts(10, 10):');
console.log(modul.getPhotoPosts(5, 7));
console.log('getPhotoPosts(0, 10 , {author: \'Иванов Иван\'}):');
console.log(modul.getPhotoPosts(0, 10,{author: 'Иванов Иван'}));
console.log('getPhotoPosts(0, 10 , {author: \'Никита\' ,hashtags: \'#fpmi1\'}):');
console.log(modul.getPhotoPosts(0, 10,{author: 'Никита' ,hashtags: '#fpmi1'}));