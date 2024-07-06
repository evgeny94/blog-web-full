import { formatDateTime } from "../functions/functions.js";
import { v4 as uuidv4 } from 'uuid';

export class Post {
    constructor(title, author, userID, content, image) {
        this.id = uuidv4();
        this.title = title;
        this.author = author;
        this.userID = userID;
        this.content = content;
        this.image = image;
        this.created = formatDateTime();
        this.updated = null;
    }

    get get_post_id(){
        return this.id;
    }

    /**
     * @param {any} newTitle
     */
    set newtitle(newTitle){
        this.title = newTitle;
    }

    /**
     * @param {any} newAuthor
     */
    set newauthor(newAuthor){
        this.author = newAuthor;
    }

    /**
     * @param {any} newContent
     */
    set newcontent(newContent){
        this.content = newContent;
    }

    /**
     * @param {any} newImage
     */
    set newimage(newImage){
        this.image = newImage;
    }

    /**
     * @param {any} none
     */
    set newupdated(none){
        this.updated = formatDateTime();
    }

}
