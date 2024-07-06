import { v4 as uuidv4 } from 'uuid';
import { Post } from '../classes/post.js';
import fs from 'fs';

export function formatDateTime() {
    // Get the current date and time
    const now = new Date();
    
    // Extract the date components
    const day = String(now.getDate()).padStart(2, '0');
    const month = String(now.getMonth() + 1).padStart(2, '0'); // Months are zero-based
    const year = now.getFullYear();
    
    // Extract the time components
    const hours = String(now.getHours()).padStart(2, '0');
    const minutes = String(now.getMinutes()).padStart(2, '0');
    const seconds = String(now.getSeconds()).padStart(2, '0');
    
    // Format the date and time as dd/mm/yyyy hh:mm:ss
    const formattedDateTime = `${day}/${month}/${year} ${hours}:${minutes}:${seconds}`;
    
    return formattedDateTime;
  }

export function getItem(items, itemId) {
  for(let i = 0; i<items.length; i++){
    if (items[i].id === itemId){
      return items[i];
    }
    else {
      continue
    }
    return null
  }
}


export function deletePost(items, itemId) {
  for(let i = 0; i<items.length; i++){
    if (items[i].id === itemId){
      deleteImageFromFolder(`public/${items[i].image}`);
      items = items.filter(item => item.id !== itemId);
      console.log(`Deleted item: ${itemId}`);
      return items;
    }
    else {
      continue;
    }
    return items;
  }
}

export function deleteImageFromFolder(filePath){
  fs.unlink(filePath, (err) => {
    if (err) {
        console.error(`Error deleting image: ${err}`);
        return;
    }
    console.log(`Image ${filePath} deleted successfully`);
});
}


export function checkAndUpdateChanges(items, itemId, postTitleNew, postAuthorNew, postContentNew, postImageNew) {
  for(let i = 0; i<items.length; i++){
    if (items[i].id === itemId){

      let flag = false;
      
      if(postTitleNew !== items[i].title || postAuthorNew !== items[i].author || postContentNew !== items[i].content || (postImageNew !== null && postImageNew !== items[i].image)){
        flag = true;
      }

      if(postTitleNew !== items[i].title){
        items[i].newtitle = postTitleNew;
      }
      if(postAuthorNew !== items[i].author){
        items[i].newauthor = postAuthorNew;
      }
      if(postContentNew !== items[i].content){
        items[i].newcontent = postContentNew;
      }
      if(postImageNew !== null && postImageNew !== items[i].image){
        items[i].newimage = postImageNew;
      }
      if(flag){
        items[i].newupdated = formatDateTime();
      }
      else {
        console.log(`Nothing to update...`);
      }
      
      console.log(`Updated item: ${itemId}`);
      console.log(items);
      return items;

    }
    else {
      continue;
    }
    return items;
  }
}
