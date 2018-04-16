let user = "Никита";

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

                let author = item.getElementsByClassName('author');
                if(author[0].textContent === user ) {

                    let block = item.getElementsByClassName('ddd');
                    let edit = document.createElement('i');
                    edit.className = 'fas fa-edit';
                    block[0].appendChild(edit);

                    let deleteElement = document.createElement('i');
                    deleteElement.className = 'fas fa-trash-alt';
                    block[0].appendChild(deleteElement);
                }

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