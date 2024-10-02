
class EmojiDisplay {
    constructor() {
      this.emojilist = ['🙂', '😉', '😜', '😠', '🤯', '😰' , '😵' , '💀'];
      this.displaydelay = 1000; 
      this.displayCount = 0;
    }
  
    displayRandomEmoji() {
        let randomemoji = Math.ceil(Math.random() * this.emojilist.length); 

        let emoji;
        switch (randomemoji) {
            case 1:
              emoji = '🙂';
              break;
            case 2:
              emoji = '😉';
              break;
            case 3:
              emoji = '😜';
              break;
            case 4:
              emoji = '😠';
              break;
            case 5:
              emoji = '🤯';
              break;
            case 6:
              emoji = '😰';
              break;
            case 7:
              emoji = '😵';
              break;
            case 8:
              emoji = '💀';
              break;
            default:
              emoji = '👀';
          }

          return emoji;      
    }

    start() {
           this.intervalId = setInterval(() => {
                 console.log (this.displayRandomEmoji);
                 console.clear();
             }, 1000);            
      }
      }
    

  const randomemoji = new EmojiDisplay();
  randomemoji.start();

////////////////////////////////

