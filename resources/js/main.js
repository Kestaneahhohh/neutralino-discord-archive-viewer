window.myApp = {
    setTray: () => {
        if(NL_MODE != "window") {
            console.log("INFO: Tray menu is only available in the window mode.");
            return;
        }
        let tray = {
            icon: "/resources/icons/trayIcon.png",
            menuItems: [
                {id: "VERSION", text: "Get version"},
                {id: "SEP", text: "-"},
                {id: "QUIT", text: "Quit"}
            ]
        };
        Neutralino.os.setTray(tray);
    },
    onTrayMenuItemClicked: (event) => {
        switch(event.detail.id) {
            case "VERSION":
                Neutralino.os.showMessageBox({
                    type: "INFO",
                    title: "Version information",
                    content: `Neutralinojs server: v${NL_VERSION} | Neutralinojs client: v${NL_CVERSION}` 
                });
                break;
            case "QUIT":
                Neutralino.app.exit();
                break;
        }
    },
    onWindowClose: () => {
        Neutralino.app.exit();
    },
};

window.addEventListener('DOMContentLoaded', () => {
    Neutralino.init();
    Neutralino.events.on("windowClose", myApp.onWindowClose);
    Neutralino.events.on("trayMenuItemClicked", myApp.onTrayMenuItemClicked);
    window.myApp.setTray();
});


