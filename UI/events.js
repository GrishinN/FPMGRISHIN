let events = (function () {

    let accounts = [{login: 'Никита' , password: '12345'},
        {login: 'admin' , password: 'admin'}];

    let eEdit = function (post) {
        post.addEventListener('click' , editPhotoPost)
    }
    let eExit = function (account) {
        exit();
    }

    let eAdd = function () {
        let dialog = document.getElementById('window-add');
        let enter = document.getElementById('publish_post');
        enter.addEventListener('click' ,add);
        let data = document.getElementsByClassName('data')[0];
        data.textContent = dataFormat();
        let hashtags = document.getElementById('hashtag');
        hashtags.value = "";
        let description = document.getElementById('description');
        description.value = "";
        let image = document.getElementById('image');
        image.value = '';
        dialog.showModal();
    }

    let eLogIn = function () {
        let dialog = document.getElementById('window-authorization');
        let enter = document.getElementById('enter');
        enter.addEventListener('click' ,logIn);
        dialog.showModal();

    }

    let eSearch = function () {
        search();
    }

    let eDeletePhotoPost = function (post) {
        post.addEventListener('click' , deletePhotoPost);
    };

    let eShowMorePhotoPosts = function (buttonn) {
        showMorePhotoPosts();
    };

    let eLikePhoto = function (post) {
        post.addEventListener('click' , likePhoto);

    };
    
    function search() {
        let searchUser = document.getElementsByClassName('filter_users')[0].value;
        let searchHashtags = document.getElementsByClassName('filter_hashtags')[0].value;
        let searchData = document.getElementsByClassName('filter_data')[0].value;
        updatePhotoPosts();
        domFunction.showPhotoPostsFiler('0','10',{author: searchUser, hashtags: searchHashtags , createdAt: searchData});
        domFunction.authUserFunctions();
    }

    function  editPhotoPost(event) {
        if (user !== null && event.target.className === 'fas fa-edit fa-lg') {
            let target = event.target.parentElement;
            while(target.id === ""){
                target = target.parentElement;
            }
            let edit = document.getElementById('editPhotoPost');
            let post = modul.getPhotoPost(target.id);
            let dialog = document.getElementById('window-edit');
            let hashtag = document.getElementById('editHashtag');
            let description = document.getElementById('editDescription');
            //let date = document.getElementById('editImage').files;
            //date = post.photoLink;
            hashtag.value = post.hashtags;
            description.value = post.description;
            edit.addEventListener('click' , function () {
                let arrayHashtags =  hashtag.value.split(',');
                if(!domFunction.editPhotoPost(post.id , {description: description.value , hashtags: arrayHashtags})){
                    alert('Проверьте правильность введенных данных!');
                }else {
                    dialog.close();
                }

            });

            dialog.showModal();
        }
    }

    function showMorePhotoPosts() {
        let countPosts = document.getElementsByClassName('column').length;
        let postsArray = modul.getPhotoPosts(countPosts, '10');
        domFunction.showPhotoPosts(postsArray);
    }

    function deletePhotoPost(event) {
        if (user !== null && event.target.className === 'fas fa-trash-alt fa-lg') {
            let target = event.target.parentElement;
            while(target.id === ""){
                target = target.parentElement;
            }
            let dialog = document.getElementById('window-delete');
            let buttonOK = document.getElementsByClassName('button_delete')[0];
            let buttonCancel = document.getElementsByClassName('button_no_delete')[0];
            buttonOK.addEventListener('click', function (e) {
                domFunction.deletePhotoPost(target.id);
                dialog.close();
                localStorage.setItem('mas', JSON.stringify(photoPosts));
            });
            buttonCancel.addEventListener('click', function (e) {
                dialog.close();
            });
            dialog.showModal();
        }
    }

    function likePhoto(event) {
        if (user !== null && event.target.className === 'far fa-thumbs-up fa-lg') {
            let target = event.target.parentElement;
            while(target.id === ""){
                target = target.parentElement;
            }
            if (modul.likePhoto(target.id)) {
                domFunction.likePhoto(target.id);
            }
            else {
                domFunction.unLikePhoto(target.id);
            }
            localStorage.setItem('mas', JSON.stringify(photoPosts));
        }
    }

    function dataFormat() {
        Data = new Date();
        Year = Data.getFullYear();
        Month = Data.getMonth();
        Day = Data.getDate();
        if(Month > 8 ){
            Month +=1;
        }else{
            Month +=1;
            Month = '0'+Month;
        }
        if(Day < 10){
            Day = '0' + Day;
        }
        let data = Day + "." + Month + "." + Year;
        return data;

    }
    function add() { // продумать
        Data = new Date();
        let enter = document.getElementById('publish_post');
        let dialog = document.getElementById('window-add');
        let hashtags = document.getElementById('hashtag');
        let arrayHashtags =  hashtags.value.split(',');
        let description = document.getElementById('description').value;
        let image = document.getElementById('image').value;
        let newId = +photoPosts[photoPosts.length - 1].id + +1;
        if(modul.addPhotoPost({id:newId.toString(),description:description,createdAt:Data,author:user,photoLink:image,hashtags:arrayHashtags , likes:[]}) === true){
            updatePhotoPosts();
            let postsArray = modul.getPhotoPosts('0', '10');
            domFunction.showPhotoPosts(postsArray);
            domFunction.authUserFunctions();
            localStorage.setItem('mas', JSON.stringify(photoPosts));
            dialog.close();
        }else{
            alert("Проверьте корректность введенных данных!");
            enter.removeEventListener('click' , add);
        }
        enter.removeEventListener('click' , add);

    }

    function  exit() {
        let header =  document.getElementsByClassName('container1')[0];
        let del = document.getElementsByClassName('nav_menu')[0];
        del.parentNode.removeChild(del);
        user = null;
        updatePhotoPosts();
        let postsArray = modul.getPhotoPosts('0', '10');
        domFunction.showPhotoPosts(postsArray);
        domFunction.authUser();
    }

    function updatePhotoPosts() {
        let postList = document.getElementsByClassName('column');
        let posts = Array.prototype.slice.call(postList);
        posts.forEach(function (post) {
            post.remove();
        });
    }

    function verification(login,password) {
        accounts.forEach(function (item) {
            if(item.login === login && item.password === password){
               user = login;
            }
        });
        if(user !== ''){
            return true;
        }else{
            return false;
        }

    }
    function logIn() {
        let dialog = document.getElementById('window-authorization');
        let enter = document.getElementById('enter');
            let login = document.getElementById('login').value;
            let password = document.getElementById('password').value;
            if(verification(login,password) === true){
                dialog.close();
                let header =  document.getElementsByClassName('container1')[0];
                let del = document.getElementsByClassName('nav_menu')[0];
                del.parentNode.removeChild(del);
                domFunction.authUser();
                as = false;
            }else{
                alert("Неверное имя или пароль!")
            }
        enter.removeEventListener('click' , logIn);
    }

    return {

        eLikePhoto,
        eShowMorePhotoPosts,
        eDeletePhotoPost,
        eExit,
        eLogIn,
        eAdd,
        eEdit,
        eSearch,
    }
})();