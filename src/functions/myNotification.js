import soundNotification from '../assets/audio.mp3'
import iconNotification from '../assets/icon.png'

export function MyNotification(title, message) {
    if ('Notification' in window) {
        if (Notification.permission === 'granted') {
            IsNotify(title, message)
        } else if (
            Notification.permission === 'denied' ||
            Notification.permission === 'default'
        ) {
            Notification.requestPermission((response) => {
                if (response === 'granted') {
                    IsNotify(title, message)
                }
            })
        }
    }
}

function IsNotify(title, message) {
    new Notification('titulo')
    //new Audio(soundNotification).play()
}
