
var slideshow = {
  photoList: ['pic of Charlotte', 'pic of Panthers Stadium', 'pic of Bobcats stadium'],
  currentPhotoIndex: 0,
  nextPhoto: function(){
    if (this.currentPhotoIndex < this.photoList.length - 1) {
      console.log(this.photoList[this.currentPhotoIndex]);
      this.currentPhotoIndex++
    } else {
      console.log('End of slideshow');
    }
  },
  prevPhoto: function(){
    if (this.currentPhotoIndex >= 1) {
      console.log(this.photoList[this.currentPhotoIndex]);
      this.currentPhotoIndex--
    } else if(this.currentPhotoIndex ) {
      console.log('End of slideshow');
    }

  },
  getCurrentPhoto: function(){
    console.log(this.photoList[this.currentPhotoIndex]);

  }
}

slideshow.nextPhoto();
slideshow.nextPhoto();
slideshow.nextPhoto();
slideshow.nextPhoto();
console.log(slideshow.currentPhotoIndex);
slideshow.prevPhoto();
slideshow.prevPhoto();
slideshow.prevPhoto();
slideshow.prevPhoto();
console.log(slideshow.currentPhotoIndex);
slideshow.getCurrentPhoto();






// nextPhoto: function(){
//   for (var i = 0; i < photoList.length; i+1) {
//     console.log(photoList[i]);
//     currentPhotoIndex++;
//   } else {
//     console.log('End of slideshow!');
//   }
