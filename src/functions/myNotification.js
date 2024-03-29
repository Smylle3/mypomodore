import soundNotification from '../assets/audio.mp3'
import iconNotification from '../assets/icon.png'

export function MyNotification(title, message) {
    if ('Notification' in window) {
        if (Notification.permission === 'granted') {
            IsNotify(title, message)
        }
    }
}

function IsNotify(title, message) {
    let notification =  new Notification(title, { body: message, icon: iconNotification })
    new Audio(soundNotification).play()
    
    notification.onclick = () => {
        window.focus()
    }
}
