import{_ as s,o as c,c as d,a as e,b as t,d as o,w as l,e as a,r}from"./app.9b6674cd.js";const u={},h=e("p",null,"The Fugu14 method of unc0ver supports A12 or newer devices on iOS 14.3 to 14.5.1",-1),p={class:"custom-container danger"},_=e("p",{class:"custom-container-title"},"DANGER",-1),f=e("p",null,"We will use the AltStore tool to allow us to set everything up to be able to jailbreak.",-1),m=e("h2",{id:"downloads",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#downloads","aria-hidden":"true"},"#"),t(" Downloads")],-1),g={href:"https://unc0ver.dev",target:"_blank",rel:"noopener noreferrer"},v={href:"http://altstore.io/",target:"_blank",rel:"noopener noreferrer"},b={href:"https://www.apple.com/itunes/download/win32",target:"_blank",rel:"noopener noreferrer"},w={href:"https://secure-appldnld.apple.com/windows/061-91601-20200323-974a39d0-41fc-4761-b571-318b7d9205ed/iCloudSetup.exe",target:"_blank",rel:"noopener noreferrer"},y=e("h2",{id:"installing-the-application",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#installing-the-application","aria-hidden":"true"},"#"),t(" Installing the Application")],-1),k=a("<li>Download AltStore for your respective operating system</li><li>Launch AltStore/AltServer <ul><li>On macOS, open the Mail app and open <code>Mail</code> -&gt; <code>Preferences</code> in the menu bar</li><li>Click on the <code>General</code> tab, the <code>Manage Plug-ins</code>, check <code>AltPlugin</code> and apply</li></ul></li><li>Connect your iOS Device to your Mac or PC via USB</li><li>Click AltStore/AltServer in the Menu Bar/System Tray</li><li>Click Install AltStore <ul><li>Follow all onscreen prompts</li></ul></li><li>Open Settings and navigate to <code>General</code> -&gt; <code>Device Management</code> and verify AltStore</li>",6),S={href:"https://unc0ver.dev",target:"_blank",rel:"noopener noreferrer"},T=e("code",null,".ipa",-1),A=e("ul",null,[e("li",null,"Make sure your iOS Device and Mac or PC are connected to the same WiFi network")],-1),O=e("code",null,".ipa",-1),I=e("code",null,"Install Untethered Jailbreak",-1),x=e("code",null,".ipa",-1),C=a("<li>AltStore will install a placeholder application, once this completes, tap <code>Open Placeholder</code></li><li>Tap <code>Setup Fugu14</code>, then once the process completes, tap <code>OK</code></li><li>Re-open AltStore</li><li>AltStore will then patch said placeholder application, once this completes, tap <code>Open Placeholder</code> once again</li><li>Tap <code>Install Untether</code></li><li>Once the untether is finished installing, tap <code>Reboot Now</code> and allow the device to reboot</li><li>Re-open AltStore</li><li>Tap <code>Install unc0ver</code> and allow unc0ver to be installed.</li><li>Tap <code>Open unc0ver</code></li>",9),D=a('<h2 id="running-unc0ver" tabindex="-1"><a class="header-anchor" href="#running-unc0ver" aria-hidden="true">#</a> Running unc0ver</h2><ol><li>Open the settings menu and disable the <code>Disable Auto Updates</code> toggle <ul><li>unc0ver disables Over-The-Air updates by default, however it&#39;s recommended to toggle this as it can cause issues when updating manually if not disabled</li></ul></li><li>Tap &quot;Done&quot;</li><li>Tap &quot;Jailbreak&quot;</li><li>Reboot your phone when prompted</li><li>Open the unc0ver application from your home screen immediately after rebooting</li><li>Tap &quot;Jailbreak&quot;</li></ol><div class="custom-container tip"><p class="custom-container-title">TIP</p><p>If the app or your device crashes/restarts unexpectedly and the jailbreak isn&#39;t installed, simply try rebooting and running the exploit again until it does work.</p></div>',3),q={class:"custom-container warning"},P=e("p",{class:"custom-container-title"},"WARNING",-1),j=e("code",null,"rootFS already mounted, delete the OTA update",-1),M={class:"custom-container tip"},N=e("p",{class:"custom-container-title"},"TIP",-1);function R(F,B){const n=r("router-link"),i=r("ExternalLinkIcon");return c(),d("div",null,[e("p",null,[t("unc0ver is a "),o(n,{to:"/types-of-jailbreak/#semi-untethered-jailbreaks"},{default:l(()=>[t("semi-untethered jailbreak")]),_:1}),t(", meaning it requires an app to re-apply the exploit after a reboot.")]),h,e("div",p,[_,e("p",null,[t("The Fugu14 method of unc0ver does not support beta versions of iOS. If you're on any of the iOS 14.3 betas, follow "),o(n,{to:"/installing-taurine-trollstore"},{default:l(()=>[t("Installing Taurine (TrollStore)")]),_:1}),t(". If you are on 14.4 betas or 14.5 betas, you cannot jailbreak at this time and therefore cannot proceed further.")])]),f,m,e("ul",null,[e("li",null,[t("The latest version of "),e("a",g,[t("unc0ver"),o(i)])]),e("li",null,[t("The latest version of "),e("a",v,[t("AltStore"),o(i)])]),e("li",null,[t("The latest version of "),e("a",b,[t("iTunes"),o(i)]),t(" if on Windows")]),e("li",null,[t("The latest version of "),e("a",w,[t("iCloud"),o(i)]),t(" if on Windows")])]),y,e("ol",null,[k,e("li",null,[t("Download "),e("a",S,[t("unc0ver"),o(i)]),t(" on your iOS Device and open the "),T,t(" in AltStore "),A]),e("li",null,[t("Once the "),O,t(" installs, you should see a prompt that the jailbreak requires untethering, tap "),I,e("ul",null,[e("li",null,[t("If you don't see this prompt after installing the "),x,t(", your device/version combination is incompatible, and you should return to "),o(n,{to:"/get-started"},{default:l(()=>[t("Get Started")]),_:1}),t(".")])])]),C]),D,e("div",q,[P,e("p",null,[t("If you receive the error "),j,t(", read the "),o(n,{to:"/troubleshooting/#rootfs-already-mounted"},{default:l(()=>[t("Troubleshooting")]),_:1}),t(" page")])]),e("p",null,[t("You should now be jailbroken with Cydia installed on your home screen. You can use Cydia to install "),o(n,{to:"/faq/#what-are-tweaks"},{default:l(()=>[t("tweaks")]),_:1}),t(", themes and more.")]),e("div",M,[N,e("p",null,[t("If you wish to use a more modern package manager, continue to "),o(n,{to:"/installing-sileo"},{default:l(()=>[t("Installing Sileo")]),_:1})])])])}var W=s(u,[["render",R],["__file","index.html.vue"]]);export{W as default};
