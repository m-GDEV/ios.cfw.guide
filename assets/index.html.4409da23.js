import{_ as r,o as s,c,a as e,b as o,d as n,w as l,e as d,r as a}from"./app.9b6674cd.js";const u={},h={class:"custom-container warning"},p=e("p",{class:"custom-container-title"},"WARNING",-1),f=e("p",null,"While unc0ver is compatible with jailbreaking several devices on iOS/iPadOS versions from 11.0 to 14.8 (excluding iOS 12.5.6), this method of obtaining unc0ver requires an A12 or newer device running iOS versions 14.0 to 14.3 or 14.6 to 14.8.",-1),v={class:"custom-container warning"},_=e("p",{class:"custom-container-title"},"WARNING",-1),g=e("div",{class:"custom-container warning"},[e("p",{class:"custom-container-title"},"WARNING"),e("p",null,"unc0ver on firmware versions 14.6 to 14.8 only supports A12 and A13 iPhones.")],-1),m=e("h2",{id:"downloads",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#downloads","aria-hidden":"true"},"#"),o(" Downloads")],-1),w={href:"https://unc0ver.dev/",target:"_blank",rel:"noopener noreferrer"},b={href:"https://github.com/opa334/u0Launcher/releases",target:"_blank",rel:"noopener noreferrer"},y={href:"https://unc0ver.dev/downloads/6.1.1/decf7c36cc08118dc83ba455f8ca42e0e3cf354c/unc0ver_Release_6.1.1.ipa",target:"_blank",rel:"noopener noreferrer"},T=e("li",null,[o("Make sure to download the aforementioned files "),e("strong",null,"onto your iOS device")],-1),I=e("h2",{id:"installing-trollhelper",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#installing-trollhelper","aria-hidden":"true"},"#"),o(" Installing TrollHelper")],-1),k=e("li",null,"Open Safari",-1),S={href:"https://api.jailbreaks.app/troll64e",target:"_blank",rel:"noopener noreferrer"},O=e("li",null,[o("Tap "),e("code",null,"Install")],-1),x=d('<p>An app named <code>GTA Car Tracker</code> will now install to your iOS device, this app is TrollHelper, however.</p><h2 id="installing-trollstore" tabindex="-1"><a class="header-anchor" href="#installing-trollstore" aria-hidden="true">#</a> Installing TrollStore</h2><ol><li>Open the <code>GTA Car Tracker</code> app</li><li>Tap <code>Install TrollStore</code></li></ol><p>The TrollStore application will now install to your iOS device.</p><h2 id="preparing-trollstore" tabindex="-1"><a class="header-anchor" href="#preparing-trollstore" aria-hidden="true">#</a> Preparing TrollStore</h2><p>In order to be able to sideload unc0ver (and u0Launcher, if needed), a couple more steps need to be done.</p><h3 id="installing-persistence-helper" tabindex="-1"><a class="header-anchor" href="#installing-persistence-helper" aria-hidden="true">#</a> Installing Persistence Helper</h3><ol><li>Reopen the <code>GTA Car Tracker</code> app</li><li>Press <code>Register Persistence Helper</code></li></ol><p>The <code>GTA Car Tracker</code> app can now be used as the Persistence Helper</p><div class="custom-container tip"><p class="custom-container-title">TIP</p><p>The reason the persistence helper is highly important is that, whenever iOS rebuilds its icon cache, all apps installed by TrollStore (as well as TrollStore itself) will either disappear or no longer open.</p><p>To workaround this, the Persistence Helper (which will still open even after this happens) can refresh app registrations so that the apps will reappear and open again.</p></div><h3 id="installing-ldid" tabindex="-1"><a class="header-anchor" href="#installing-ldid" aria-hidden="true">#</a> Installing ldid</h3><ol><li>Open the <code>TrollStore</code> app</li><li>Tap <code>Install ldid</code></li></ol><h2 id="installing-unc0ver" tabindex="-1"><a class="header-anchor" href="#installing-unc0ver" aria-hidden="true">#</a> Installing unc0ver</h2><ol><li>Open the <code>Files</code> app</li><li>Go to where you saved the unc0ver <code>.ipa</code> file</li><li>Tap on the unc0ver <code>.ipa</code> file</li><li>Press on the <code>Share</code> icon at the top right of the screen</li><li>Press <code>TrollStore</code></li></ol><p>The unc0ver app will now be installed onto your device.</p><div class="custom-container warning"><p class="custom-container-title">WARNING</p><p>If you&#39;re on iOS 14.6 to 14.8, you&#39;ll need to repeat these steps for the u0Launcher <code>.ipa</code> file as well.</p></div><h2 id="running-unc0ver" tabindex="-1"><a class="header-anchor" href="#running-unc0ver" aria-hidden="true">#</a> Running unc0ver</h2><ol><li>Reboot your phone <ul><li>This is not necessary but recommended</li></ul></li><li>Open the unc0ver application from your home screen immediately afterwards <ul><li>If you&#39;re on iOS 14.6 to 14.8, open the u0Launcher application instead</li></ul></li><li>Open the settings menu and disable the <code>Disable Auto Updates</code> toggle <ul><li>unc0ver disables Over-The-Air updates by default, however it&#39;s recommended to toggle this as it can cause issues when updating manually if not disabled</li></ul></li><li>Tap &quot;Done&quot;</li><li>Tap &quot;Jailbreak&quot;</li><li>Reboot your phone when prompted</li><li>Open the unc0ver application from your home screen immediately after rebooting <ul><li>If you&#39;re on iOS 14.6 to 14.8, open the u0Launcher application instead</li></ul></li><li>Tap &quot;Jailbreak&quot;</li></ol><div class="custom-container tip"><p class="custom-container-title">TIP</p><p>If the app or your device crashes/restarts unexpectedly and the jailbreak isn&#39;t installed, simply try rebooting and running the exploit again until it does work.</p></div>',19),A={class:"custom-container warning"},N=e("p",{class:"custom-container-title"},"WARNING",-1),P=e("code",null,"rootFS already mounted, delete the OTA update",-1),G={class:"custom-container tip"},R=e("p",{class:"custom-container-title"},"TIP",-1);function j(q,C){const t=a("router-link"),i=a("ExternalLinkIcon");return s(),c("div",null,[e("p",null,[o("unc0ver is a "),n(t,{to:"/types-of-jailbreak/#semi-untethered-jailbreaks"},{default:l(()=>[o("semi-untethered jailbreak")]),_:1}),o(", meaning it requires an app to re-apply the exploit after a reboot.")]),e("div",h,[p,e("p",null,[o("In order to follow this method, you'll need an A12 or newer device running iOS versions 14.0 to 14.3 or 14.6 to 14.8. If you have either an A11 or earlier device or are running iOS 13.7 or earlier, follow "),n(t,{to:"/installing-unc0ver"},{default:l(()=>[o("Installing unc0ver")]),_:1}),o(" instead.")]),e("p",null,[o("If you have an A12 or newer device on iOS versions 14.4 to 14.5.1, continue to "),n(t,{to:"/installing-unc0ver-fugu14"},{default:l(()=>[o("Installing unc0ver (Fugu14)")]),_:1}),o(" instead.")])]),f,e("div",v,[_,e("p",null,[o("If you are already jailbroken with Taurine, make sure to properly "),n(t,{to:"/removing-taurine"},{default:l(()=>[o("remove Taurine")]),_:1}),o(" before proceeding.")])]),g,m,e("ul",null,[e("li",null,[o("unc0ver "),e("ul",null,[e("li",null,[o("If you are on iOS 14.6 to 14.8, download the latest version of "),e("a",w,[o("unc0ver"),n(i)]),e("ul",null,[e("li",null,[o("If you are on iOS 14.6 to 14.8, also download the latest version of "),e("a",b,[o("u0Launcher"),n(i)])])])]),e("li",null,[o("If you are on iOS 14.0 to 14.3, download the 6.1.1 version of "),e("a",y,[o("unc0ver"),n(i)])]),T])])]),I,e("ol",null,[k,e("li",null,[o("Go to "),e("a",S,[o("https://api.jailbreaks.app/troll64e"),n(i)])]),O]),x,e("div",A,[N,e("p",null,[o("If you receive the error "),P,o(", read the "),n(t,{to:"/troubleshooting/#rootfs-already-mounted"},{default:l(()=>[o("Troubleshooting")]),_:1}),o(" page")])]),e("p",null,[o("You should now be jailbroken with Cydia installed on your home screen. You can use Cydia to install "),n(t,{to:"/faq/#what-are-tweaks"},{default:l(()=>[o("tweaks")]),_:1}),o(", themes and more.")]),e("div",G,[R,e("p",null,[o("If you wish to use a more modern package manager, continue to "),n(t,{to:"/installing-sileo"},{default:l(()=>[o("Installing Sileo")]),_:1})])])])}var H=r(u,[["render",j],["__file","index.html.vue"]]);export{H as default};
