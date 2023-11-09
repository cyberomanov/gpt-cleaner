const DELAY = 1_000;

function delay(time) {
    return new Promise(resolve => setTimeout(resolve, time));
}

async function deleteConversations() {
    let conversations = document.getElementsByClassName('flex p-3 items-center gap-3');

    while (conversations.length > 0) {
        conversations[0].click();
        await delay(DELAY);

        const deleteIcons = document.getElementsByClassName('p-1 hover:text-token-text-primary');
        if (deleteIcons[1]) {
            deleteIcons[1].click();
            await delay(DELAY);

            const deleteButtons = document.getElementsByClassName('btn relative btn-danger');
            if (deleteButtons[0]) {
                deleteButtons[0].click();
                await delay(DELAY);
            }
        }
        conversations = document.getElementsByClassName('flex p-3 items-center gap-3');
    }
}

deleteConversations();
