
export default class Likes{

    constructor(){
        this.likes = [];
    }

    addLike(id, title, author, img){
        const like = {id, title, author, img};
        this.likes.push(like);

        //Persist data in localStorage
        this.persistData();

        return like;
    }

    deleteLike(id){
        const delIdx = this.likes.findIndex(el => el.id === id);

        if(delIdx >= 0)
            this.likes.splice(delIdx,1);

        // Persist data in localStorage
        this.persistData();
    }

    isLiked(id){
        return (this.likes.findIndex(el => el.id === id) != -1);
    }

    getNumLikes(){
        return this.likes.length;
    }

    persistData(){
        localStorage.setItem('likes', JSON.stringify(this.likes));
    }

    readStorage() {
        const storage = JSON.parse(localStorage.getItem('likes'));

        // Restoring likes from the localStorage.
        if (storage){            
            this.likes = storage;
        }
    }
}