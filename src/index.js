import './sass/main.scss';

const refs = {
  days: document.querySelector(`[data-value="days"]`),
  hours: document.querySelector(`[data-value="hours"]`),
  mins: document.querySelector(`[data-value="mins"]`),
  secs: document.querySelector(`[data-value="secs"]`),
};

class CountdownTimer {
  constructor({ onTick, selector, targetDate }) {
    this.onTick = onTick;
    this.selector = selector;
    this.targetDate = targetDate;
  }
  start() {
    setInterval(() => {
      const currentTime = Date.now();
      const deltaTimes = this.targetDate - currentTime;
      const { days, hours, mins, secs } = this.getTimeComponents(deltaTimes);
      console.log(`${days}:${hours}:${mins}:${secs}`);
      this.onTick({ days, hours, mins, secs });
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
    return { days, hours, mins, secs };
  }
}
const timer = new CountdownTimer({
  selector: '#timer-1',
  targetDate: new Date('Jul 17, 2022'),
  onTick: updateClockface,
});

function updateClockface({ days, hours, mins, secs }) {
  refs.days.textContent = `${days}`;
  refs.hours.textContent = `${hours}`;
  refs.mins.textContent = `${mins}`;
  refs.secs.textContent = `${secs}`;
}
timer.start();
