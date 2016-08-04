
var slideshow = {
  photoList: ['pic of Charlotte', 'pic of Panthers Stadium', 'pic of Bobcats stadium'],
  currentPhotoIndex: 0,
  nextPhoto: function(){
    if (this.currentPhotoIndex < this.photoList.length - 1) {
      this.currentPhotoIndex++
    this.getCurrentPhoto();
    } else {
      console.log('End of slideshow');
      this.pauseSlideshow();
    }
  },
  prevPhoto: function(){
    if (this.currentPhotoIndex >= 1) {
      this.currentPhotoIndex--
      this.getCurrentPhoto();
    } else if(this.currentPhotoIndex ) {
      console.log('End of slideshow');
    }

  },
  getCurrentPhoto: function(){
    console.log(this.photoList[this.currentPhotoIndex]);
  },
  playSlideshow: function(){
    this.getCurrentPhoto();
    var self = this;
    self.playInterval = setInterval(function(){
        self.nextPhoto();
      }, 2000);
  },
  pauseSlideshow: function(){

    clearInterval(this.playInterval);
  }
}

slideshow.playSlideshow();

// slideshow.nextPhoto();
// slideshow.nextPhoto();
// slideshow.nextPhoto();
// slideshow.nextPhoto();
// console.log(slideshow.currentPhotoIndex);
// slideshow.prevPhoto();
// slideshow.prevPhoto();
// slideshow.prevPhoto();
// slideshow.prevPhoto();
// console.log(slideshow.currentPhotoIndex);
// slideshow.getCurrentPhoto();
