$(document).one('click', function(event){
	  const ap = new APlayer({
      container: document.getElementsByClassName('aplay')[0],
	  listFolded: true,
	  listMaxHeight: 176,
	  autoplay: true,
      audio: [{
	  name: '花一匆',
          artist: 'Unknown',
          url: '/assets/music/花一匆.mp3',
          cover: '/assets/music/21世紀を手に入れろ.jpg'
	  },
	  {
          name: '21世紀を手に入れろ',
          artist: 'クレヨンしんちゃん 嵐を呼ぶ モーレツ! サウンドトラック',
          url: '/assets/music/21世紀を手に入れろ.mp3',
          cover: '/assets/music/21世紀を手に入れろ.jpg'
          },
	  {
		  name: 'saving me',
          artist: 'Unknown',
          url: '/assets/music/saving me.aac',
          cover: '/assets/music/21世紀を手に入れろ.jpg'
	  }
	  ]
    });
});
