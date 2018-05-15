let user = "Никита";

let domFunction = (function () {

    function formatDate(date_string) {
        let date = new Date(date_string);
        let dd = date.getDate();
        if (dd < 10) dd = '0' + dd;

        let mm = date.getMonth() + 1;
        if (mm < 10) mm = '0' + mm;

        let yy = date.getFullYear() % 100;
        if (yy < 10) yy = '0' + yy;

        return dd + '.' + mm + '.' + yy;
    };

    let showPhotoPosts = function (arrayPhotoPosts) {
        arrayPhotoPosts.forEach(function (value) {
            addPhotoPost(value);
        });
        let hed = document.querySelector('.len1');
        events.eLikePhoto(hed);
        events.eDeletePhotoPost(hed);
        events.eEdit(hed);
        for(let i = 0; i <arrayPhotoPosts.length ; i++){
            let idxUser = arrayPhotoPosts[i].likes.indexOf(user);
            if(idxUser !== -1){
                likePhoto(arrayPhotoPosts[i].id);
            }
        }

    };

    let addPhotoPost = function (photoPost) {
        const templatePhotoPost =
            `<div class="column" id="${photoPost.id}">`+
            `<div class="foto" ><img src="${photoPost.photoLink}"></div>` +
            `<div class="ddd">` +
            `<i class="far fa-thumbs-up fa-lg" ></i>`+
            `</div>` +
            `<div class="description"><p1>${photoPost.description}</p1></div>` +
            `<div class="hashtag"><p1>${photoPost.hashtags}</p1></div>` +
            `<div class="author">${photoPost.author}</div>` +
            `<div class="date"><p1>${formatDate(photoPost.createdAt)}</p1></div>` +
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
    };

    let editPhotoPost = function (id , photoPost) {
        let post = document.getElementById(id);
        if(modul.editPhotoPost(id,photoPost)){
            if('description' in photoPost){
                let descrip_mas = post.getElementsByClassName('description');
                let descrip = descrip_mas[0].firstChild;
                descrip.textContent = photoPost.description;
            }
            if('photoLink' in photoPost){
                let photoLink_mas = post.getElementsByClassName('foto');
                let photoLink = photoLink_mas[0].firstChild;
                photoLink.src = photoPost.photoLink;
            }
            if('hashtags' in photoPost){
                let hashtags_mas = post.getElementsByClassName('hashtag');
                let photoLink = hashtags_mas[0].firstChild;
                photoLink.textContent = photoPost.hashtags;
            }
            return true;
        }
        return false;
    }

    let authUser_functions = function () {

        let posts = document.getElementsByClassName('column');
        let postsArray = Array.prototype.slice.call(posts);
        postsArray.forEach(function (item) {

            let author = item.getElementsByClassName('author');
            if(author[0].textContent === user ) {
                let block = item.getElementsByClassName('ddd');
                let edit = document.createElement('i');
                edit.className = 'fas fa-edit fa-lg';
                block[0].appendChild(edit);
                let deleteElement = document.createElement('i');
                deleteElement.className = 'fas fa-trash-alt fa-lg';
                block[0].appendChild(deleteElement);
            }

        })
    }

    let authUser = function ( ) {
        if(user){
            let hed = document.getElementsByClassName('container1');
            let pageSettings = document.createElement('nav');
            pageSettings.className = "nav_menu";
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
            fotoAdd.onclick = function () {
                events.eAdd();
            }
            liAdd.appendChild(fotoAdd);
            menu.appendChild(liAdd);

            let liOut = document.createElement('li');
            let formOut = document.createElement('form');
            let buttonLogout = document.createElement('button');
            buttonLogout.className = 'out';
            buttonLogout.id = 'out';
            buttonLogout.textContent = 'Logout';
            liOut.appendChild(formOut);
            formOut.appendChild(buttonLogout);
            menu.appendChild(liOut);
            let buttonOut = document.getElementById('out');
            buttonOut.onclick = function () {
                events.eExit();
            }
            authUser_functions();


        }else{
            let hed = document.getElementsByClassName('container1');
            let pageSettings = document.createElement('nav');
            pageSettings.className = 'nav_menu';
            let menu = document.createElement('ul');
            menu.className = 'menu';
            hed[0].appendChild(pageSettings);
            pageSettings.appendChild(menu);

            let liIn = document.createElement('li');
            let formIn = document.createElement('form');
            let buttonIn = document.createElement('button');
            buttonIn.type = 'button';
            buttonIn.className = 'logIn';
            buttonIn.id = 'logIn';
            buttonIn.textContent = 'LOG IN';
            liIn.appendChild(formIn);
            formIn.appendChild(buttonIn);
            menu.appendChild(liIn);
            let buttonLogIn = document.getElementById('logIn');
            buttonLogIn.onclick = function () {
                events.eLogIn();
            }
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
        let like = post.getElementsByClassName('far fa-thumbs-up fa-lg');
        like[0].style.color = '#ff0000';
    }

    let unLikePhoto = function (id) {
        let post = document.getElementById(id);
        let unLike = post.getElementsByClassName('far fa-thumbs-up fa-lg');
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
    let showPhotoPostsFiler = function(skip, top, filterConfig) {
        let postsArray = modul.getPhotoPosts(skip, top, filterConfig);
        if (typeof postsArray === 'object') {
            domFunction.showPhotoPosts(postsArray);
            return true;
        }
        return false;
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
        addPhotoPost,
        showPhotoPostsFiler,
        authUser_functions

    }
})();
readFromStorage();
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

domFunction.showPhotoPostsFiler(0,10);
authUser();
domFunction.filterHashtags();
domFunction.filterUsers();