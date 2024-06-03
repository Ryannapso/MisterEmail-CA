import { storageService } from './async-storage.service.js'
import { utilService } from './util.service.js'

export const emailService = {
    query,
    save,
    remove,
    getById,
    getDefaultFilter,
}



const STORAGE_KEY = 'emails'

_createEmails()

async function query(filterBy) {
    try {
        let emails = await storageService.query(STORAGE_KEY)
        if (filterBy) {
            let { body, subject, isRead } = filterBy
            emails = emails.filter(email =>
                email.body.toLowerCase().includes(body.toLowerCase()) &&
                email.subject.toLowerCase().includes(subject.toLowerCase()))
                
                if(isRead === "All")
                    return emails
                else if (isRead === "Read")
                    emails = emails.filter(email => email.isRead)
                else if (isRead === "Unread")
                    emails = emails.filter(email => !email.isRead)
        }
        return emails
    } catch (error) {
        console.log('error:', error)
        throw error
    }
}

function getById(id) {
    return storageService.get(STORAGE_KEY, id)
}

function remove(id) {
    return storageService.remove(STORAGE_KEY, id)
}

function save(emailToSave) {
    if (emailToSave.id) {
        return storageService.put(STORAGE_KEY, emailToSave)
    } else {
        emailToSave.isOn = false
        return storageService.post(STORAGE_KEY, emailToSave)
    }
}

// function createEmail(model = '', type = '', batteryStatus = 100) {
//     return {
//         model,
//         batteryStatus,
//         type
//     }
// }

function getDefaultFilter() {
    return {
        subject: '',
        body: '',
        isRead:''
    }
}

function _createEmails() {
    let emails = utilService.loadFromStorage(STORAGE_KEY)
    if (!emails || !emails.length) {
        emails = [
            {
                id: 'e101',
                subject: 'Miss you!',
                body: 'Would love to catch up sometime',
                isRead: true,
                isStarred: true,
                sentAt: 1551133930594,
                removedAt: null,
                from: 'momo@momo.com',
                to: 'user@appsus.com'
            },
            {
                id: 'e102',
                subject: 'Meeting Reminder',
                body: 'Don\'t forget about the meeting tomorrow at 10 AM.',
                isRead: false,
                isStarred: true,
                sentAt: 1551143930594,
                removedAt: null,
                from: 'boss@work.com',
                to: 'user@appsus.com'
            },
            {
                id: 'e103',
                subject: 'Holiday Plans',
                body: 'Are we still on for the holiday trip next month?',
                isRead: true,
                isStarred: false,
                sentAt: 1551153930594,
                removedAt: null,
                from: 'friend@fun.com',
                to: 'user@appsus.com'
            },
            {
                id: 'e104',
                subject: 'Invoice #12345',
                body: 'Please find attached the invoice for your recent purchase.',
                isRead: false,
                isStarred: false,
                sentAt: 1551163930594,
                removedAt: null,
                from: 'billing@store.com',
                to: 'user@appsus.com'
            },
            {
                id: 'e105',
                subject: 'Welcome to Our Service!',
                body: 'Thank you for signing up. We hope you enjoy our service.',
                isRead: true,
                isStarred: true,
                sentAt: 1551173930594,
                removedAt: null,
                from: 'support@service.com',
                to: 'user@appsus.com'
            }
        ];

        utilService.saveToStorage(STORAGE_KEY, emails)
    }
}




