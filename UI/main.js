//var foto= document.getElementsByClassName('foto');
let user = "Никита";

let photoPosts = [
    {
        id: '1',
        descriprion: 'Женская сборная Беларуси выиграла эстафету',
        createdAt: new Date('2010-02-23T23:00:00'),
        author: 'БУтырчик Андрей',
        photoLink: '1.jpg',
        hashtags: ['#fpmi' , '#bsu' , '#js'],
        likes: ['Иванов Иван' , 'Бутырчик Андрей' , 'Гора']
    },
    {
        id: '2',
        descriprion: 'Женская сборная Беларуси выиграла эстафету',
        createdAt: new Date('2009-02-23T23:00:00'),
        author: 'Иванов Иван',
        photoLink: 'http://ont.by/webroot/delivery/files/news/2018/02/22/Dom.jpg',
        hashtags: ['#fpmi' , '#bsu' , '#js'],
        likes: ['Иванов Иван' , 'Бутырчик Андрей' , 'Гора']
    },
    {
        id: '3',
        descriprion: 'Женская сборная Беларуси выиграла эстафету',
        createdAt: new Date('2011-02-23T23:00:00'),
        author: 'Гора ',
        photoLink: 'http://ont.by/webroot/delivery/files/news/2018/02/22/Dom.jpg',
        hashtags: ['#fpmi' , '#bsu' , '#js'],
        likes: ['Иванов Иван' , 'Бутырчик Андрей' , 'Гора']
    },
    {
        id: '4',
        descriprion: 'Женская сборная Беларуси выиграла эстафету',
        createdAt: new Date('2018-02-23T23:00:00'),
        author: 'Alex',
        photoLink: 'http://ont.by/webroot/delivery/files/news/2018/02/22/Dom.jpg',
        hashtags: ['#fpmi1' , '#bsu' , '#js'],
        likes: ['Иванов Иван' , 'Бутырчик Андрей' , 'Гора']
    },
    {
        id: '5',
        descriprion: 'Женская сборная Беларуси выиграла эстафету',
        createdAt: new Date('2018-02-23T23:00:00'),
        author: 'NAgibator',
        photoLink: 'http://ont.by/webroot/delivery/files/news/2018/02/22/Dom.jpg',
        hashtags: ['#fpmi' , '#bsu' , '#js'],
        likes: ['Иванов Иван' , 'Бутырчик Андрей' , 'Гора']
    },
    {
        id: '6',
        descriprion: 'Женская сборная Беларуси выиграла эстафету',
        createdAt: new Date('1999-04-23T23:00:00'),
        author: 'Иванов Иван',
        photoLink: 'http://ont.by/webroot/delivery/files/news/2018/02/22/Dom.jpg',
        hashtags: ['#fpmi' , '#bsu' , '#js'],
        likes: ['Иванов Иван' , 'Бутырчик Андрей' , 'Гора']
    },
    {
        id: '7',
        descriprion: 'Женская сборная Беларуси выиграла эстафету',
        createdAt: new Date('2018-02-23T23:00:00'),
        author: 'Иванов Иван',
        photoLink: 'http://ont.by/webroot/delivery/files/news/2018/02/22/Dom.jpg',
        hashtags: ['#fpmi' , '#bsu' , '#js'],
        likes: ['Иванов Иван' , 'Бутырчик Андрей' , 'Гора']
    },
    {
        id: '8',
        descriprion: 'Женская сборная Беларуси выиграла эстафету',
        createdAt: new Date('2018-05-04T23:00:00'),
        author: 'Иванов Иван',
        photoLink: 'http://ont.by/webroot/delivery/files/news/2018/02/22/Dom.jpg',
        hashtags: ['#fpmi' , '#bsu' , '#js'],
        likes: ['Иванов Иван' , 'Бутырчик Андрей' , 'Гора']
    },
    {
        id: '9',
        descriprion: 'Женская сборная Беларуси выиграла эстафету',
        createdAt: new Date('2013-02-23T23:00:00'),
        author: 'Иванов Иван',
        photoLink: 'http://ont.by/webroot/delivery/files/news/2018/02/22/Dom.jpg',
        hashtags: ['#fpmi' , '#bsu' , '#js'],
        likes: ['Иванов Иван' , 'Бутырчик Андрей' , 'Гора']
    },
    {
        id: '10',
        descriprion: 'Женская сборная Беларуси выиграла эстафету',
        createdAt: new Date('2018-02-23T23:00:00'),
        author: 'lena lena',
        photoLink: 'http://ont.by/webroot/delivery/files/news/2018/02/22/Dom.jpg',
        hashtags: ['#fpmi' , '#bsu' , '#js'],
        likes: ['Иванов Иван' , 'Бутырчик Андрей' , 'Гора']
    },
    {
        id: '11',
        descriprion: 'Женская сборная Беларуси выиграла эстафету',
        createdAt: new Date('2018-02-23T23:00:00'),
        author: 'Иванов Иван',
        photoLink: 'http://ont.by/webroot/delivery/files/news/2018/02/22/Dom.jpg',
        hashtags: ['#fpmi' , '#bsu' , '#js'],
        likes: ['Иванов Иван' , 'Бутырчик Андрей' , 'Гора']
    },
    {
        id: '12',
        descriprion: 'Женская сборная Беларуси выиграла эстафету',
        createdAt: new Date('2018-02-25T23:00:00'),
        author: 'Иванов Иван',
        photoLink: 'http://ont.by/webroot/delivery/files/news/2018/02/22/Dom.jpg',
        hashtags: ['#fpmi' , '#bsu' , '#js'],
        likes: ['Иванов Иван' , 'Бутырчик Андрей' , 'Гора']
    },{
        id: '13',
        descriprion: 'Женская сборная Беларуси выиграла эстафету',
        createdAt: new Date('2015-02-23T23:00:00'),
        author: 'Иванов Иван',
        photoLink: 'http://ont.by/webroot/delivery/files/news/2018/02/22/Dom.jpg',
        hashtags: ['#fpmi1' , '#bsu' , '#js'],
        likes: ['Иванов Иван' , 'Бутырчик Андрей' , 'Гора']
    },
    {
        id: '14',
        descriprion: 'Женская сборная Беларуси выиграла эстафету',
        createdAt: new Date('2017-06-23T23:00:00'),
        author: 'Иванов Иван',
        photoLink: '1.jpg',
        hashtags: ['#fpmi' , '#bsu' , '#js'],
        likes: ['Иванов Иван' , 'Бутырчик Андрей' , 'Гора']
    },{
        id: '15',
        descriprion: 'Бла бла бла бла',
        createdAt: new Date('2018-02-23T23:00:00'),
        author: 'Никита',
        photoLink: '1.jpg',
        hashtags: ['#fpmi1' , '#bsu' , '#js'],
        likes: ['Иванов Иван' , 'Бутырчик Андрей' , 'Гора']
    },{
        id: '16',
        descriprion: 'Женская сборная Беларуси выиграла эстафету',
        createdAt: new Date('2013-03-13T23:00:00'),
        author: 'Иванов Иван',
        photoLink: '1.jpg',
        hashtags: ['#fpmi' , '#bsu' , '#js'],
        likes: ['Иванов Иван' , 'Бутырчик Андрей' , 'Гора']
    },
    {
        id: '17',
        descriprion: 'Женская сборная Беларуси выиграла эстафету',
        createdAt: new Date('2016-02-23T23:00:00'),
        author: 'Иванов Иван',
        photoLink: '1.jpg',
        hashtags: ['#fpmi1' , '#bsu' , '#js'],
        likes: ['Иванов Иван' , 'Бутырчик Андрей' , 'Гора']
    },
    {
        id: '18',
        descriprion: 'Женская сборная Беларуси выиграла эстафету',
        createdAt: new Date('2015-05-05T23:00:00'),
        author: 'Александр Петухов',
        photoLink: '1.jpg',
        hashtags: ['#fpmi1' , '#bsu' , '#js'],
        likes: ['Иванов Иван' , 'Бутырчик Андрей' , 'Гора']
    },
    {
        id: '19',
        descriprion: 'Женская сборная Беларуси',
        createdAt: new Date('2018-02-23T23:00:00'),
        author: 'Вася Пупкин',
        photoLink: '1.jpg',
        hashtags: ['#fpmi1' , '#bsu' , '#js'],
        likes: ['Иванов Иван' , 'Бутырчик Андрей' , 'Гора']
    },
    {
        id: '20',
        descriprion: 'Женская сборная Беларуси выиграла эстафету',
        createdAt: new Date('2018-02-23T23:00:00'),
        author: 'Никита ',
        photoLink: '1.jpg',
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
        if((typeof photoPosts.descriprion !== "string") || photoPosts.descriprion.length === 0 || photoPosts.descriprion.length > 200 || typeof (photoPosts.descriprion) === 'undefined') {
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


let domFunction = (function () {

    function formatDate(date) {

        let dd = date.getDate();
        if (dd < 10) dd = '0' + dd;

        let mm = date.getMonth() + 1;
        if (mm < 10) mm = '0' + mm;

        let yy = date.getFullYear() % 100;
        if (yy < 10) yy = '0' + yy;

        return dd + '.' + mm + '.' + yy;
    };

    let showPhotoPosts = function (arrayPhotoPosts) {
        arrayPhotoPosts.reverse();
        arrayPhotoPosts.forEach(function (value) {
            addPhotoPost(value);
        });
    };

    let addPhotoPost = function (photoPost) {
        const templatePhotoPost =
            `<div class="column" id="${photoPost.id}">`+
            `<div class="foto" ><img src="${photoPost.photoLink}"></div>` +
            `<div class="ddd">` +
            `<i class="far fa-thumbs-up"></i>`+
            `</div>` +
            `<div class="descriprion"><p1>${photoPost.descriprion}</p1></div>` +
            `<div class="hashtag"><p1>${photoPost.hashtags}</p1></div>` +
            `<div class="date_author"><p1>${photoPost.author}${formatDate(photoPost.createdAt)}</p1></div>` +
            `</div>`;

        let hed = document.getElementsByClassName('len1');
        let newPost = document.createElement('template');
        newPost.innerHTML = templatePhotoPost;
        hed[0].appendChild(newPost.content);
    };

    let deletePhotoPost = function (id) {
        let photoPost = document.getElementById(id);
        if(modul.removePhotoPost(id)){
            photoPost.remove();
        }
    }

    let editPhotoPost = function (id , photoPost) {
        let post = document.getElementById(id);
        if(modul.editPhotoPost(id,photoPost)){
            if('descriprion' in photoPost){
                let descrip_mas = post.getElementsByClassName('descriprion');
                let descrip = descrip_mas[0].firstChild;
                descrip.textContent = photoPost.descriprion;
            }
            if('photoLink' in photoPost){
                let photoLink_mas = post.getElementsByClassName('foto');
                let photoLink = photoLink_mas[0].firstChild;
                photoLink.src = photoPost.photoLink;
            }
        }

    }

    let authUser = function ( ) {
        if(user){
            let hed = document.getElementsByClassName('container1');
            let pageSettings = document.createElement('nav');
            let menu = document.createElement('ul');
            menu.className = 'menu';
            hed[0].appendChild(pageSettings);
            pageSettings.appendChild(menu);

            let liAuthor = document.createElement('li');
            let singInLink = document.createElement('a');
            singInLink.href='#';
            singInLink.textContent = user;
            liAuthor.appendChild(singInLink);
            menu.appendChild(liAuthor);

            let liAdd = document.createElement('li');
            let fotoAdd = document.createElement('i');
            fotoAdd.className = 'fas fa-plus-circle';
            liAdd.appendChild(fotoAdd);
            menu.appendChild(liAdd);

            let liOut = document.createElement('li');
            let formOut = document.createElement('form');
            let buttonLogout = document.createElement('button');
            buttonLogout.className = 'out';
            buttonLogout.textContent = 'Logout';
            liOut.appendChild(formOut);
            formOut.appendChild(buttonLogout);
            menu.appendChild(liOut);

            let posts = document.getElementsByClassName('column');
            let postsArray = Array.prototype.slice.call(posts);
            postsArray.forEach(function (item) {
                let block = item.getElementsByClassName('ddd');
                let edit = document.createElement('i');
                edit.className = 'fas fa-edit';
                block[0].appendChild(edit);

                let deleteElement = document.createElement('i');
                deleteElement.className = 'fas fa-trash-alt';
                block[0].appendChild(deleteElement);

            })

        }else{
            let hed = document.getElementsByClassName('container1');
            let pageSettings = document.createElement('nav');
            let menu = document.createElement('ul');
            menu.className = 'menu';
            hed[0].appendChild(pageSettings);
            pageSettings.appendChild(menu);

            let liIn = document.createElement('li');
            let formIn = document.createElement('form');
            let buttonIn = document.createElement('button');
            buttonIn.className = 'out';
            buttonIn.textContent = 'LOG IN';
            liIn.appendChild(formIn);
            formIn.appendChild(buttonIn);
            menu.appendChild(liIn);
        }
    }

    let filterUsers = function () {
        let dataUsers = document.getElementById('name');
        photoPosts.forEach(function (item) {
            let userName = document.createElement('option');
            userName.value = item.author;
            dataUsers.appendChild(userName);
        })
    };

    let likePhoto = function(id) {
        let post = document.getElementById(id);
        let like = post.getElementsByClassName('far fa-thumbs-up');
        like[0].style.color = '#ff0000';
    }

    let unLikePhoto = function (id) {
        let post = document.getElementById(id);
        let unLike = post.getElementsByClassName('far fa-thumbs-up');
        unLike[0].style.color = '#000000';
    }

    let filterHashtags = function () {
        let dataUsers = document.getElementById('hashtags');
        let setHashtags = new Set();
        photoPosts.forEach(function (item) {
            item.hashtags.forEach(function (hashtag) {
                setHashtags.add(hashtag);
            });
        });
        setHashtags.forEach(function (item) {
            let hashtag = document.createElement('option');
            hashtag.value = item;
            dataUsers.appendChild(hashtag);
        })
    };
    return {
        filterUsers,
        filterHashtags,
        unLikePhoto,
        likePhoto,
        authUser,
        editPhotoPost,
        deletePhotoPost,
        showPhotoPosts,
        addPhotoPost
    }
})();



function showPhotoPosts(skip, top, filterConfig) {
    let postsArray = modul.getPhotoPosts(skip, top, filterConfig);
    if (typeof postsArray === 'object') {
        domFunction.showPhotoPosts(postsArray);
        return true;
    }
    return false;
}

function editPhotoPost(id,photoPost) {
    domFunction.editPhotoPost(id,photoPost);
}

function deletePhotoPost(id) {
    domFunction.deletePhotoPost(id);
}

function authUser() {
    domFunction.authUser();
}

function like(id) {
    domFunction.likePhoto(id);
}

function addPhotoPosts() {
    if (modul.addPhotoPost(PhotoPost)) {
        domFunction.addPhotoPost(PhotoPost);
        return true;
    }
    return false;
}


showPhotoPosts(0,10);
deletePhotoPost('15');

editPhotoPost('17', {author: '1234567777'});

authUser();
like('19');
domFunction.filterHashtags();
domFunction.filterUsers();
console.log(photoPosts);















