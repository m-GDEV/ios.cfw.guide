import{_ as r}from"./checkra1n.ace0089d.js";import{_ as c,o as d,c as u,a as e,b as i,d as o,w as n,e as t,r as s}from"./app.9b6674cd.js";const p={},h=t('<div class="custom-container warning"><p class="custom-container-title">WARNING</p><p>Se utilizzi un computer con una CPU AMD Ryzen, probabilmente riscontrerai problemi. Se si verificano problemi, \xE8 necessario utilizzare un Mac o un computer con una CPU Intel per seguire questa guida.</p></div><div class="custom-container warning"><p class="custom-container-title">WARNING</p><p>Se si utilizza un cavo USB-C a Lightning per eseguire questo processo, \xE8 possibile riscontrare problemi ad entrare in modalit\xE0 DFU</p><p>In caso di problemi, usa un cavo USB-A a Lightning e, se necessario, usa anche un adattatore USB-C a USB-A.</p></div><div class="custom-container danger"><p class="custom-container-title">DANGER</p><p>Questa \xE8 una pagina guida altamente sperimentale, possono essere presenti cose non direttamente menzionate che devono essere eseguite per seguire questa guida. Di conseguenza, si consiglia vivamente di usare un altro tipo di computer se possibile.</p></div><div class="custom-container tip"><p class="custom-container-title">TIP</p><p>Devi aver abilitato la modalit\xE0 sviluppatore sul tuo dispositivo ChromeOS per seguire questa guida</p></div><h2 id="download-chromeos" tabindex="-1"><a class="header-anchor" href="#download-chromeos" aria-hidden="true">#</a> Download (ChromeOS)</h2>',5),m={href:"https://checkra.in",target:"_blank",rel:"noopener noreferrer"},_={href:"https://github.com/checkra1n/BugTracker/files/6429930/Pongo.zip",target:"_blank",rel:"noopener noreferrer"},v=t('<p><img src="'+r+'" alt="Uno screenshot dell\u2019applicazione di checkra1n"></p><h2 id="consentire-l-esecuzione-di-checkra1n" tabindex="-1"><a class="header-anchor" href="#consentire-l-esecuzione-di-checkra1n" aria-hidden="true">#</a> Consentire l&#39;esecuzione di checkra1n</h2><ol><li>Sposta il binary di checkra1n che viene scaricato su <code>/usr/local/bin</code><ul><li>Ci\xF2 pu\xF2 essere fatto facendo quanto segue: <ul><li>premi <code>Ctrl</code> + <code>Alt</code> + <code>T</code></li><li>esegui la <code>shell</code></li><li>esegui <code>mv ~/Downloads/checkra1n /usr/local/bin/</code></li></ul></li></ul></li><li>Esegui il seguente comando nel terminale: <code>sudo mount -o remount,exec /tmp</code><ul><li>Dovrai farlo ogni volta che riavvii il tuo dispositivo ChromeOS</li></ul></li><li>Ogni volta che hai bisogno di eseguire il jailbreak su ChromeOS, \xE8 necessario collegare il dispositivo e entrare in modalit\xE0 di recupero manualmente.</li></ol><h2 id="installare-checkra1n" tabindex="-1"><a class="header-anchor" href="#installare-checkra1n" aria-hidden="true">#</a> Installare checkra1n</h2>',4),g=t("<li>Apri il file <code>pongoOS.zip</code>, seleziona <code>PongoConsolidated.bin</code> ed estrailo. <ul><li>Prendi nota di dove lo estrai</li></ul></li><li>Esegui il file binary di <code>checkra1n</code> in modalit\xE0 CLI usando la versione modificata di pongoOS nel terminale utilizzando <code>TERM=linux sudo checkra1n -c -k [percorso di PongoConsolidated.bin]</code></li><li>Collega il tuo dispositivo iOS al computer</li>",3),f=e("code",null,"Start",-1),k=e("ul",null,[e("li",null,"Segui le istruzione finch\xE9 il tuo dispositivo non mostra uno schermo nero")],-1),b=e("li",null,"Dopo ci\xF2, checkra1n dovrebbe installarsi automaticamente",-1),z=e("p",null,"Il tuo dispositivo iOS dovrebbe adesso riavviarsi.",-1),S=e("p",null,"Dopo l'avvio del dispositivo, apri l'app checkra1n e installa Cydia.",-1),C={class:"custom-container tip"},I=e("p",{class:"custom-container-title"},"TIP",-1);function x(w,D){const l=s("ExternalLinkIcon"),a=s("router-link");return d(),u("div",null,[h,e("ul",null,[e("li",null,[i("L\u2019ultima release di "),e("a",m,[i("checkra1n"),o(l)])]),e("li",null,[i("La versione modificata di "),e("a",_,[i("pongoOS"),o(l)])])]),v,e("ol",null,[g,e("li",null,[i("Adesso ti verranno illustrate delle istruzioni per riavviare il tuo dispositivo in "),o(a,{to:"/it_IT/faq/#what-is-dfu-mode"},{default:n(()=>[i("modalit\xE0 DFU")]),_:1}),i(", clicca "),f,i(" per iniziare "),k]),b]),z,S,e("p",null,[i("Adesso dovresti essere jailbroken con Cydia installato nella home screen. Puoi utilizzare Cydia per installare "),o(a,{to:"/it_IT/faq/#what-are-tweaks"},{default:n(()=>[i("tweak")]),_:1}),i(", temi, pacchetti e altro ancora.")]),e("div",C,[I,e("p",null,[i("Se desideri utilizzare un gestore di pacchetti pi\xF9 moderno, continua con "),o(a,{to:"/it_IT/installing-sileo"},{default:n(()=>[i("Installare Sileo")]),_:1})])])])}var N=c(p,[["render",x],["__file","index.html.vue"]]);export{N as default};
