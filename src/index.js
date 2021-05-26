import './sass/main.scss';



class CountdownTimer {
  constructor({ selector, targetDate }) {   
    this.selector = selector;
    this.targetDate = targetDate;       
    this.start();
    
    this.elements=this.getElement(selector);
    
     }
  
  
start() {
    setInterval(() => {
      const currentTime = Date.now();
      const deltaTimes = this.targetDate - currentTime;
      const clock = this.getTimeComponents(deltaTimes);
      console.log(clock);
      this.updateClockface(clock);
      
    }, 1000);
  }
 
    
pad(value) {
    return String(value).padStart(2, '0');
  }
getTimeComponents(time) {
    const days = this.pad(Math.floor(time / (1000 * 60 * 60 * 24)));
    const hours = this.pad(Math.floor((time % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)));
    const mins = this.pad(Math.floor((time % (1000 * 60 * 60)) / (1000 * 60)));
    const secs = this.pad(Math.floor((time % (1000 * 60)) / 1000));
    return {days, hours, mins, secs};   

  } 
updateClockface(clock) {
  
    
    this.elements.daysEl.textContent = `${clock.days}`;
    this.elements.hoursEl.textContent = `${clock.hours}`;
    this.elements.minsEl.textContent = `${clock.mins}`;
    this.elements.secsEl.textContent = `${clock.secs}`;
    console.log(this.elements.daysEl.textContent);
    
    
  };
  getElement(selector){ 
    
    const refs={    
    daysEl: document.querySelector(`${this.selector} [data-value="days"]`),
    hoursEl: document.querySelector(`${this.selector} [data-value="hours"]`),
    minsEl: document.querySelector(`${this.selector} [data-value="mins"]`),
    secsEl: document.querySelector(`${this.selector} [data-value="secs"]`), 
      
    } 
    return refs;
  }
  
}
const timer1 = new CountdownTimer({
  selector: '#timer-1',
  targetDate: new Date('Jul 17, 2022'),
  
});

const timer2 = new CountdownTimer({
  selector: '#timer-2',
  targetDate: new Date('Jul 17, 2023'),
  
});



