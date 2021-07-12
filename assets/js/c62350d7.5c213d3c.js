(self.webpackChunkplutosa_blog=self.webpackChunkplutosa_blog||[]).push([[649],{6008:function(e,t,a){"use strict";a.r(t),a.d(t,{frontMatter:function(){return s},metadata:function(){return l},toc:function(){return u},default:function(){return d}});var o=a(2122),n=a(9756),i=(a(7294),a(3905)),r=["components"],s={slug:"2021-07-05-Pi-Hole",title:"Shut your Pi-Hole",author:"Bryan Thomson",author_title:"Engineer",author_url:"https://github.com/plutosa",author_image_url:"https://avatars.githubusercontent.com/u/20494850?v=4",tags:["blog","guide","raspberry-pi","adware","home-tech"]},l={permalink:"/blog/2021-07-05-Pi-Hole",editUrl:"https://github.com/facebook/docusaurus/edit/master/website/blog/blog/2021-07-05-shut-your-pihole.md",source:"@site/blog/2021-07-05-shut-your-pihole.md",title:"Shut your Pi-Hole",description:"title image showing the name of the post and the PiHole header",date:"2021-07-05T00:00:00.000Z",formattedDate:"July 5, 2021",tags:[{label:"blog",permalink:"/blog/tags/blog"},{label:"guide",permalink:"/blog/tags/guide"},{label:"raspberry-pi",permalink:"/blog/tags/raspberry-pi"},{label:"adware",permalink:"/blog/tags/adware"},{label:"home-tech",permalink:"/blog/tags/home-tech"}],readingTime:7.48,truncated:!1,nextItem:{title:"Introduction",permalink:"/blog/2021-06-16-Introduction"}},u=[{value:"The evils of adware.",id:"the-evils-of-adware",children:[]},{value:"You Shall Not Track",id:"you-shall-not-track",children:[]},{value:"Along came Pi-Hole",id:"along-came-pi-hole",children:[]},{value:"Pi OS",id:"pi-os",children:[]},{value:"Static IP",id:"static-ip",children:[]},{value:"Router DNS",id:"router-dns",children:[]},{value:"Up and running",id:"up-and-running",children:[]},{value:"Upkeep",id:"upkeep",children:[]}],h={toc:u};function d(e){var t=e.components,s=(0,n.Z)(e,r);return(0,i.kt)("wrapper",(0,o.Z)({},h,s,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("p",null,(0,i.kt)("img",{alt:"title image showing the name of the post and the PiHole header",src:a(6798).Z})),(0,i.kt)("h3",{id:"the-evils-of-adware"},"The evils of adware."),(0,i.kt)("p",null,"I'm not sure about the rest of you, but a big part of my current down-time / filler time when making breakfast / coffee (and the follow-on events that would infer) / lunches / etc includes watching youtube videos of varying relevance to anything I do in my life on the day to day / things I just find interesting. My biggest frustration I experience with doing this? The slew of unskippable, repeating, brainless ads at the beginning, middle(s) and end of any of these videos. "),(0,i.kt)("p",null,'If I have to watch one more, louder than the actual video, trying to squeeze as much emotionally charged as possible in 5 seconds, explosion in the background advert for a "team tracking tool based on the worst day of the week.com" / "current mega budget mobile game we think we can get you to micro-transact on" / "making food is difficult, drink this food mix instead" (delete as appropriate), I think I might actually break something. '),(0,i.kt)("p",null,"It's not that I have any particular issue with the services in question, their relentlessly repetitive nature is just maddening. Want to see how best to cut an onion? Bam! Buy these undies, they're breathable and made from Bamboo. Not sure how best to clean the filter in your dishwasher? Raid! Shadow legends! Learning about Attila the Hun and his rise to power? Manage your team on Monday.com! ARGH!"),(0,i.kt)("h3",{id:"you-shall-not-track"},"You Shall Not Track"),(0,i.kt)("p",null,(0,i.kt)("img",{alt:"banner image showing do not track",src:a(6621).Z}),"\nNow, as I'm sure most of us are aware, it's no accident that these adverts are so repetitively placed before each of us. My above-listed hell carousel is the targeted, tailored experience most likely to tempt me based on some (hopefully) wonderfully complex algorithms based on data that's been aggregated on me from a number of different areas. A cookie here, a video there, a trend of watched videos (thank you youtube analytics) and you're on the road to being type-cast for the rest of your browsing life-time. "),(0,i.kt)("p",null,"Not sure what I'm talking about? You sure? You've never had a conversation in your house-hold over a new appliance, remarked it might be time for some new underwear (we all have a pair that can only be described as... tired) or some such innocuous comment, only for the exact topic to be the subject of an ad hours later in a seemingly unrelated area. Creepy, right? Well, while there are a number of ways to try minimise the innate tracking on your web-connected journey through this digital world (potentially another topic to expand on separately) I wanted to try and stop them altogether in my island of connectivity at home, and so:  "),(0,i.kt)("h3",{id:"along-came-pi-hole"},"Along came Pi-Hole"),(0,i.kt)("p",null,"Now that the scene has been set, let's find ourselves a solution. And what better solution is there than one that someone else builds for you, for you to implement? Enter our protagonist, ",(0,i.kt)("a",{parentName:"p",href:"https://pi-hole.net/,",title:"Pi-Hole"},"Pi-Hole"),". What is Pi-Hole, you may ask? Well, according to their website: "),(0,i.kt)("blockquote",null,(0,i.kt)("p",{parentName:"blockquote"},"Network-wide ad blocking via your own Linux hardware"),(0,i.kt)("p",{parentName:"blockquote"},"The Pi-hole\xae is a DNS sinkhole that protects your devices from unwanted content, without installing any client-side software.")),(0,i.kt)("p",null,"Fantastic! A one-stop shop for all our tracking and ad-blocking needs for the home network. This is just what the imperial 'we' have been looking for. The next thing we'll need is something to run it on and, as the 'Pi' in 'Pi-Hole' might suggest, we're going to need a Raspberry Pi. Assuming that you have a USB mouse and keyboard, you'll need the following:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://thepihut.com/collections/raspberry-pi/products/raspberry-pi-4-model-b"},"Raspberry pi 4")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://thepihut.com/collections/raspberry-pi-cases/products/flirc-raspberry-pi-4-case"},"Raspberry pi 4 case")," - I like the metallic grey so went for one a little pricier (I know, the vanity), but there is a cheaper option available ",(0,i.kt)("a",{parentName:"li",href:"https://thepihut.com/collections/raspberry-pi-cases/products/raspberry-pi-4-case"},"here"),". "),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://thepihut.com/collections/raspberry-pi-cables/products/hdmi-to-micro-hdmi-cable-2m-gold-plated"},"Micro HDMI to HDMI cable")," -\nDon't be like me and assume it has a regular sized HDMI port. It doesn't."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://thepihut.com/collections/raspberry-pi-psus/products/raspberry-pi-psu-uk?variant=20064070303806"},"A charger for the thing")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://thepihut.com/products/noobs-preinstalled-sd-card"},"SD card the pi install"))),(0,i.kt)("p",null,"Now that we have our new toys assembled and ready to go, let's set this baby up. "),(0,i.kt)("h3",{id:"pi-os"},"Pi OS"),(0,i.kt)("p",null,"All of these steps are fairly straight-forward, and I'll share the links directly so we don't lose the benefit of a maintained guide by the providers versus a point in time blogpost. "),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://thepi.io/how-to-install-noobs-on-the-raspberry-pi/"},"Setting up your pi")," - if you purchased the SD card from the link above, skip to step 4. This guide will take you through setting up the Raspberry Pi OS on an card you might have lying around. "),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://docs.pi-hole.net/main/basic-install/"},"Setting up your Pi-Hole"))),(0,i.kt)("h3",{id:"static-ip"},"Static IP"),(0,i.kt)("p",null,"You'll want to configure a static IP for your instance of the Pi so you can "),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Reliably monitor your instance of Pi-Hole on the network without having to access the PI physically (more on this a little later)"),(0,i.kt)("li",{parentName:"ul"},"Point your router to the instance of Pi-Hole as a DNS server. This is where the magic happens, as this is how Pi-Hole can then filter out unwanted traffic according to filter list(s) (both to prevent annoying ads from being presented, or from tracking you in order to do more ad-serving). ")),(0,i.kt)("p",null,"In order to set a static IP address, you cann run the following commands on the terminal of your instead of Raspberry Pi: "),(0,i.kt)("p",null,"Firstly, check whether the device has DHCPCD activated already: "),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},"sudo service dhcpcd status\n")),(0,i.kt)("p",null,"In the case that it is not currently activated, run: "),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},"sudo service dhcpcd start\nsudo systemctl enable dchpcd\n")),(0,i.kt)("p",null,"Now we're going to need to update our dhcpcd.conf file in order to set the static IP address for our network. To do this, we can run: "),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},"sudo nano /etc/dhcpcd.conf\n")),(0,i.kt)("p",null,"Right at the bottom of the file, add the following entry (or, if an uncommented entry already exists, you can decide on whether to update to a required IP address or use the one outlined in the entry). "),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},"interface eth0\nstatic ip_address=192.168.1.250/24\nstatic routers=192.168.1.254\nstatic domain_name_servers=192.168.1.254\n")),(0,i.kt)("p",null,"The values outlined above do the following:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"interface eth0"),": This outlines what connection type this entry is for. ",(0,i.kt)("inlineCode",{parentName:"li"},"eth0")," outlines an ethernet connection, ",(0,i.kt)("inlineCode",{parentName:"li"},"wlan0")," is for a wireless connection. I suggest connecting your pie directly to the router via an ethernet cable, they're more reliable and this way you won't be affected by wireless contention which some routers can battle with. "),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"ip_address=192.168.1.250/24"),": This is the IP address you set your Pi to. This should be on the IP Range of your home network and should be an unallocated IP Address. "),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"static routers=192.168.1.254"),": This should be the IP address of your router. By default it tends to be one of 192.168.0.1 / 192.168.1.254 / 10.0.0.1. "),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"static domain_name_servers=192.168.0.1"),": Unless you have quite a complex network setup at home, this should be the same as your router IP address. ")),(0,i.kt)("h3",{id:"router-dns"},"Router DNS"),(0,i.kt)("p",null,"Now this area is a little less-straight forward as, while principally the steps are very similar, there's a number of different ROMs that approach those steps very differently (all routers are not created equal, etc, etc). Basically, what you're going to want to do is: "),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Log onto your Router (By default it tends to be available at one of 192.168.0.1 / 192.168.1.254 / 10.0.0.1 as mentioned above). You can reach it by navigating to these IP addresses directly from your browser. "),(0,i.kt)("li",{parentName:"ul"},"Find the Admin section where your network configuration settings can be found"),(0,i.kt)("li",{parentName:"ul"},'Update the "DNS" (Domain Name Server) section to the static IP address you\'ve configured above for your Raspberry Pi (in our example above, 192.168.1.250). ')),(0,i.kt)("h3",{id:"up-and-running"},"Up and running"),(0,i.kt)("p",null,"Once you've done all the above, you should see traffic reflected on your dashboard at the following URL: https://pi-ip-address-goes-here/admin . Here's a screenshot of mine after ~ 4 days of use"),(0,i.kt)("p",null,(0,i.kt)("img",{alt:"image of dashboard",src:a(9502).Z})),(0,i.kt)("p",null,"Now, I'll be honest. There isn't a guaranteed blocking of ads on youtube (unfortunately) as some of the ads served on the platform are served from the same URL that the actual videos on the platform are served from (manifest.googlevideo.com), making blocking them quite difficult.\nThat being said, there are a few guides on work-arounds out there that I'll have a look into and will bring back here. The general browsing experience, however, has been drastically changed. Content comes through much clearer, far less cluttered, and just feels more sanitized. We've even noticed that the annoying ads on your gmail account in your inbox have disappeared.  "),(0,i.kt)("h3",{id:"upkeep"},"Upkeep"),(0,i.kt)("p",null,"Don't forget to update your instance intermittently, just to ensure that you're not missing out on any improvements / updates / security patches by logging into your Raspberry Pi and running the following commands. I'll be aiming to run this once every few months, though it'll probably one of those \"busy\" tasks I pick up to avoid more important ones I don't feel like doing. "),(0,i.kt)("p",null,"To update your Raspberry Pi installation: "),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},"sudo apt update\nsudo apt full-upgrade\n")),(0,i.kt)("p",null,"To update your Pi-Hole: "),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},"pihole -up\n")))}d.isMDXComponent=!0},6621:function(e,t,a){"use strict";t.Z=a.p+"assets/images/DoNotTrackBanner-fb2583b3a3a7b8c226797996fd349714.png"},9502:function(e,t,a){"use strict";t.Z=a.p+"assets/images/PiHoleDashboard-af6aa2d8fb0feda403f96bf996d99f3d.png"},6798:function(e,t,a){"use strict";t.Z=a.p+"assets/images/Pihole-97a1f76f7872649134965424fa67b3a8.png"}}]);