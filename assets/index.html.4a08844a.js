import{_ as r}from"./checkra1n.ace0089d.js";import{_ as c,o as d,c as u,a as e,b as o,d as i,w as n,e as a,r as s}from"./app.9b6674cd.js";const p={},h=e("h2",{id:"download-macos",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#download-macos","aria-hidden":"true"},"#"),o(" Download (macOS)")],-1),m={href:"https://checkra.in",target:"_blank",rel:"noopener noreferrer"},_={href:"https://github.com/checkra1n/BugTracker/files/6429930/Pongo.zip",target:"_blank",rel:"noopener noreferrer"},g=a('<p><img src="'+r+'" alt="Uno screenshot dell\u2019applicazione di checkra1n"></p><h2 id="installare-checkra1n" tabindex="-1"><a class="header-anchor" href="#installare-checkra1n" aria-hidden="true">#</a> Installare checkra1n</h2><div class="custom-container tip"><p class="custom-container-title">TIP</p><p>Se stai utilizzando un Mac M1 e un dispositivo A9X, ti verr\xE0 chiesto di scollegare e ricollegare il dispositivo durante il processo e sar\xE0 necessario farlo.</p></div><div class="custom-container warning"><p class="custom-container-title">WARNING</p><p>Se si utilizza un cavo USB-C a Lightning per eseguire questo processo, \xE8 possibile riscontrare problemi ad entrare in modalit\xE0 DFU</p><p>In caso di problemi, usa un cavo USB-A a Lightning e, se necessario, usa anche un adattatore USB-C a USB-A.</p></div>',4),b=e("li",null,[o("Apri il file "),e("code",null,"pongoOS.zip"),o(", seleziona "),e("code",null,"PongoConsolidated.bin"),o(" ed estrailo. "),e("ul",null,[e("li",null,"Prendi nota di dove lo estrai")])],-1),f=e("li",null,[o("Apri il terminale ed avvia checkra1n in modalit\xE0 CLI utilizzando il comando "),e("code",null,"/Applications/checkra1n.app/Contents/MacOS/checkra1n -c -k [percorso di PongoConsolidated.bin]")],-1),k=e("li",null,"Collega il tuo dispositivo iOS al computer",-1),v=e("code",null,"Start",-1),q=e("ul",null,[e("li",null,"Segui le istruzione finch\xE9 il tuo dispositivo non mostra uno schermo nero")],-1),y=e("li",null,"Dopo ci\xF2, checkra1n dovrebbe installarsi automaticamente",-1),S=a('<p>Il tuo dispositivo iOS dovrebbe adesso riavviarsi.</p><p>Per installare Odysseyra1n, <u>non</u> aprire l&#39;app di checkra1n e installare Cydia. Invece, segui queste istruzioni per installare Sileo.</p><h2 id="lo-script-di-odysseyra1n" tabindex="-1"><a class="header-anchor" href="#lo-script-di-odysseyra1n" aria-hidden="true">#</a> Lo script di Odysseyra1n</h2><ol><li>Apri l&#39;app terminale sul tuo computer</li><li>Assicurati che il tuo computer sia autorizzato dal tuo dispositivo</li><li>Installa &quot;homebrew&quot; incollando ed eseguendo il seguente comando: <code>/bin/bash -c &quot;$(curl -fsSL https://raw.githubusercontent.com/Homebrew/install/master/install.sh)&quot;</code></li><li>Installa &quot;iproxy&quot; incollando ed eseguendo il seguente comando: <code>brew install libusbmuxd</code></li><li>Installa lo script di Odysseyra1n incollando ed eseguendo il seguente comando: <code>/bin/bash -c &quot;$(curl -fsSL https://raw.githubusercontent.com/coolstar/Odyssey-bootstrap/master/procursus-deploy-linux-macos.sh)&quot;</code></li></ol>',4),w=a('<p>Before you can start installing anything else, you first need to install a few necessary programs.</p><h2 id="installing-packages" tabindex="-1"><a class="header-anchor" href="#installing-packages" aria-hidden="true">#</a> Installing packages</h2><ol><li>Open the newly installed Sileo application</li><li>Go to the &quot;Packages&quot; tab</li><li>Tap &quot;Upgrade All&quot; if there are any updates <ul><li>Do not install yet</li></ul></li><li>Go to the &quot;Search&quot; tab</li><li>Search for the &quot;libhooker&quot; package</li><li>Tap the &quot;Get&quot; button</li><li>Tap on the &quot;Queued&quot; bar at the bottom of your screen</li><li>Tap &quot;Confirm&quot;</li><li>Once finished, tap &#39;Restart SpringBoard&#39;</li></ol>',3);function x(z,I){const t=s("ExternalLinkIcon"),l=s("router-link");return d(),u("div",null,[h,e("ul",null,[e("li",null,[o("The latest release of "),e("a",m,[o("checkra1n"),i(t)])]),e("li",null,[o("La versione modificata di "),e("a",_,[o("pongoOS"),i(t)])])]),g,e("ol",null,[b,f,k,e("li",null,[o("Adesso ti verranno illustrate delle istruzioni per riavviare il tuo dispositivo in "),i(l,{to:"/it_IT/faq/#what-is-dfu-mode"},{default:n(()=>[o("modalit\xE0 DFU")]),_:1}),o(", clicca "),v,o(" per iniziare "),q]),y]),S,e("p",null,[o("You should now be jailbroken with Sileo installed on your home screen. You can use Sileo to install "),i(l,{to:"/faq/#what-are-tweaks"},{default:n(()=>[o("tweaks")]),_:1}),o(", themes, packages and more.")]),w])}var C=c(p,[["render",x],["__file","index.html.vue"]]);export{C as default};
