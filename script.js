function run(){
    const time = new Date();
    let hour = time.getHours();
    const meridiem = hour >= 12 ? `PM` : `AM`;
    hour = hour % 12;
    hour = hour.toString().padStart(2, `0`);
    const minuite = time.getMinutes().toString().padStart(2, `0`);
    const second = time.getSeconds().toString().padStart(2, `0`);
    const current_time = `${hour}:${minuite}:${second} ${meridiem}`

    document.getElementById("clock").textContent = current_time;
}

run();
setInterval(run, 1000);