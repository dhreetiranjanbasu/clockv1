class DigitalClock {
    constructor(element) {
        this.element = element;
    }

    start() {
        this.update();
        setInterval(() => {
            this.update();
        }, 500);
    }

    update() {
        const parts = this.getTimeParts();
        const minuteFormatted = parts.minute.toString().padStart(2, "0");
        const h = parts.houre;
        const m = parts.minute;
        const amPm = parts.isAm ? "AM" : "PM";
        const timeFormatted = h + ":" + m;

        this.element.querySelector(".clock-time").textContent = timeFormatted;
        this.element.querySelector(".clock-ampm").textContent = amPm;
    }
    getTimeParts() {
        const now = new Date();
        return {
            houre: now.getHours() % 12 || 12,
            minute: now.getMinutes(),
            isAm: now.getHours() < 12

        };
    }

}

const clockElement = document.querySelector(".clock");
const clockObject = new DigitalClock(clockElement);

clockObject.start();
